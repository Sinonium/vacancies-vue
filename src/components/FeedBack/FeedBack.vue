<template>
  <section class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleTextAddText">
        <div>
          <img :src="AvatarUserIcon" alt="" />
          <input type="text" placeholder="Your review" v-model="textInp" />
        </div>
        <button>Add review</button>
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
    const course = ref()
    const currentDate = ref()
    const reviews = ref([])
    const reviewUser = ref({})
    const textInp = ref('')
    const errorNullTextInp = ref('')
    const getDoc = async () => {
      const response = await fetch('http://localhost:3000/course')
      const json = await response.json()
      course.value = json
      reviews.value = course.value.reviews
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
          courses: 22,
          reviews: 12,
          grade: 0,
          text: textInp.value,
          date: testDate.value,
        }
        const oldReviews = ref(...reviews.value)
        await fetch('http://localhost:3000/course', {
          method: 'PATCH',
          body: JSON.stringify({
            reviews: [oldReviews.value, reviewUser.value],
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
      }
    }

    onMounted(() => {
      getDoc()
    })
    return {
      errorNullTextInp,
      reviewUser,
      currentDate,
      course,
      AvatarReviewIcon: require('../../assets/img/DetailsAboutTeach/imageReview1.png'),
      AvatarUserIcon: require('@/assets/img/sidebar/avatarIcon.png'),
      cross: require('@/assets/icons/FeedBack/cross.svg'),
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
  margin-left: vw(155);
  &__create-rev {
    margin-top: vw(30);
    height: vw(160);
    width: vw(700);
    padding: vw(35) vw(40) vw(74) vw(37);
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    display: flex;
    flex-direction: column;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        border-radius: 1.875vw;
        width: 20vw;
        height: 2.3vw;
        padding: vw(10);
        border: 2px solid $blue;
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
        span {
          clip-path: polygon(
            0 13%,
            11% 0,
            44% 42%,
            72% 2%,
            85% 9%,
            57% 50%,
            90% 84%,
            79% 94%,
            44% 60%,
            10% 93%,
            0 82%,
            33% 50%
          );
          background: $greyBlue70;
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
