<template>
  <section class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleTextAddText">
        <div>
          <img :src="AvatarUserIcon" alt="" />
          <input type="text" placeholder="Your review" v-model="textInp" />
        </div>
        <div>
          <select v-model="gradeUser">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>
            <span v-if="gradeUser === '5'">
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
            </span>
            <span v-if="gradeUser === '4'">
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
            </span>
            <span v-if="gradeUser === '3'">
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
            </span>
            <span v-if="gradeUser === '2'">
              <img :src="starActiveIcon" alt="" />
              <img :src="starActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
            </span>
            <span v-if="gradeUser === '1'">
              <img :src="starActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
              <img :src="starNotActiveIcon" alt="" />
            </span>
          </span>
        </div>
        <button>Add review and</button>
      </form>
      <span>{{ errorNullTextInp }}</span>
    </div>
    <div class="feedback__content">
      <h2>Reviews course</h2>
      <div v-for="review in reviews" :key="review">
        <CartRev :review="review" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import CartRev from '../DetailsAboutTeach/BlockReviews/CartReview/CartReview.vue'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { CartRev },
  setup() {
    const gradeUser = ref(1)
    const course = ref()
    const currentDate = ref()
    const reviews = ref([])
    const grades = ref([])
    const reviewUser = ref({})
    const textInp = ref('')
    const errorNullTextInp = ref('')
    const getDoc = async () => {
      const response = await fetch('http://localhost:3000/course')
      const json = await response.json()
      course.value = json
      reviews.value = course.value.reviews
      grades.value = course.value.rating
      console.log(course.value)
    }

    const handleTextAddText = async () => {
      if (textInp.value.length) {
        currentDate.value = new Date()
        const testDate = ref([])
        testDate.value = [
          currentDate.value.getDay(),
          currentDate.value.getMonth(),
          currentDate.value.getFullYear(),
        ]
        reviewUser.value = {
          imageUrl: '',
          studentName: 'Person',
          grade: Number(gradeUser.value),
          text: textInp.value,
          date: testDate.value,
        }
        await fetch('http://localhost:3000/course', {
          method: 'PATCH',
          body: JSON.stringify({
            reviews: [...reviews.value, reviewUser.value],
          }),
          headers: { 'Content-type': 'application/json' },
        })
        await fetch('http://localhost:3000/course', {
          method: 'PATCH',
          body: JSON.stringify({
            rating: [...grades.value, Number(gradeUser.value)],
          }),
          headers: { 'Content-type': 'application/json' },
        })
        textInp.value = ''
        currentDate.value = new Date()
        reviewUser.value = {}
        errorNullTextInp.value = ''
        await getDoc()
      } else {
        errorNullTextInp.value = 'Feedback is empty'
        await fetch('http://localhost:3000/course', {
          method: 'PATCH',
          body: JSON.stringify({
            rating: [...grades.value, Number(gradeUser.value)],
          }),
          headers: { 'Content-type': 'application/json' },
        })
      }
    }

    onMounted(() => {
      getDoc()
    })
    return {
      gradeUser,
      errorNullTextInp,
      reviewUser,
      currentDate,
      course,
      AvatarReviewIcon: require('../../assets/img/DetailsAboutTeach/imageReview1.png'),
      AvatarUserIcon: require('@/assets/img/sidebar/avatarIcon.png'),
      cross: require('@/assets/icons/FeedBack/cross.svg'),
      starActiveIcon: require('@/assets/icons/DetailsAboutTeach/starActive.svg'),
      starNotActiveIcon: require('@/assets/icons/DetailsAboutTeach/starNotActive.svg'),
      handleTextAddText,
      textInp,
      reviews,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.feedback {
  margin-left: vw(60);
  &__create-rev {
    margin-top: vw(30);
    width: vw(700);
    padding: 1.1875vw 0.5vw 0.625vw 5.3125vw;
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    display: flex;
    flex-direction: column;
    form {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      div {
        display: flex;
        align-items: center;
        border-radius: 1.875vw;
        width: 15vw;
        height: 5vw;
        padding: vw(10);
        border: 2px solid $blue;
        margin-left: vw(10);
        img {
          border-radius: 50%;
          margin-left: vw(5);
        }
        input {
          color: black !important;
          outline: none;
          border: none;
          @include font(vw(12), bold, 20px, $white);
          @include flex();
          margin-left: vw(20);
        }
      }
      button {
        color: $white;
        background: $blue;
        border-radius: 1.875vw;
        width: 7.8125vw;
        height: 3.125vw;
        cursor: pointer;
        padding: vw(10);
        border: none;
        outline: none;
        @include font(vw(12), bold, 20px, $white);
        @include flex();
        transition: 0.5s;
        margin-left: vw(210);
        &:hover {
          color: $blue;
          background: $white;
          border: 3px dashed $blue;
        }
      }
    }
    span {
      margin-top: vw(10);
      @include font(vw(14), bold, 20px, red);
    }
  }
  &__content {
    h2 {
      @include font(vw(20), bold, 20px, $blue);
    }
  }
}
</style>
