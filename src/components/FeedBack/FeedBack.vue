<template>
  <section class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleAddReviewOrGrade">
        <div>
          <img :src="AvatarUserIcon" alt="" />
          <input
            type="text"
            placeholder="Your review"
            v-model="textInp"
            @keypress="handleLengthInpText"
          />
          <span class="numLengthTextInp">{{ textInp.length }}/50</span>
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
        <div class="feedback__create-rev_error">
          <span v-if="textInp.length > 49">
            {{ errTextInpMore }}
          </span>
        </div>
        <button>{{ textBtnAddedReview }}</button>
      </form>
    </div>
    <div class="feedback__content">
      <h2>Reviews course</h2>
      <div v-for="review in moreInfo.adilhan.reviews" :key="review">
        <CartRev :review="review" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
import CartRev from '../DetailsAboutTeach/BlockReviews/CartReview/CartReview.vue'
import { onMounted } from '@vue/runtime-core'
import { user } from '../../composables/getUser'
import update from '@/composables/update'
export default {
  props: ['moreInfo'],
  components: { CartRev },
  setup(props) {
    const { updateReviews } = update()
    const userName = user.value.displayName
    const gradeUser = ref(1)
    const currentDate = ref()
    const reviews = ref([])
    const grades = ref([])
    const reviewUser = ref({})
    const textInp = ref('')
    const errTextInpMore = ref('The review cannot exceed 50 characters.')
    const textBtnAddedReview = ref('Add review and grade')
    const getDoc = async () => {
      reviews.value = props.moreInfo.adilhan.reviews
      grades.value = props.moreInfo.adilhan.grades
    }
    const handleLengthInpText = () => {
      if (textInp.value.length > 49) {
        textInp.value = textInp.value.substring(0, textInp.value.length - 1)
      }
    }
    const handleAddReviewOrGrade = async () => {
      if (textInp.value.length) {
        currentDate.value = new Date()
        const testDate = ref([])
        testDate.value = [
          currentDate.value.getDay(),
          currentDate.value.getMonth(),
          currentDate.value.getFullYear(),
        ]
        reviewUser.value = {
          imageUrl: User.photoURL,
          studentName: User.email,
          grade: Number(gradeUser.value),
          text: textInp.value,
          date: testDate.value,
        }
        textBtnAddedReview.value = 'Loading added reviews.'
        await updateReviews(
          'more info',
          props.moreInfo.id,
          textInp.value,
          gradeUser.value,
          userName.value
        )
        textBtnAddedReview.value = 'Add review and grade'
        textInp.value = ''
        currentDate.value = new Date()
        reviewUser.value = {}
        errTextInpMore.value = ''
        gradeUser.value = 1
      } else {
        // await fetch('http://localhost:3000/course', {
        //   method: 'PATCH',
        //   body: JSON.stringify({
        //     rating: [...grades.value, Number(gradeUser.value)],
        //   }),
        //   headers: { 'Content-type': 'application/json' },
        // })
      }
    }

    onMounted(() => {
      getDoc()
    })
    return {
      userName,
      textBtnAddedReview,
      errTextInpMore,
      handleLengthInpText,
      gradeUser,
      reviewUser,
      currentDate,
      AvatarReviewIcon: require('../../assets/img/DetailsAboutTeach/imageReview1.png'),
      AvatarUserIcon: require('@/assets/img/sidebar/avatarIcon.png'),
      cross: require('@/assets/icons/FeedBack/cross.svg'),
      starActiveIcon: require('@/assets/icons/DetailsAboutTeach/starActive.svg'),
      starNotActiveIcon: require('@/assets/icons/DetailsAboutTeach/starNotActive.svg'),
      handleAddReviewOrGrade,
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
        .numLengthTextInp {
          margin-left: vw(-31);
          margin-top: vw(50);
          @include font(vw(14), bold, 20px, #ffcb33);
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
        margin-left: vw(155);
        &:hover {
          color: $blue;
          background: $white;
          border: 3px dashed $blue;
        }
      }
      .feedback__create-rev_error {
        display: flex;
        align-items: center;
        border: none;
        margin-left: none;
      }
    }
    span {
      margin-top: vw(10);
      @include font(vw(14), bold, 20px, red);
    }
  }
  &__content {
    h2 {
      @include font(vw(20), bold, 20px, #ffcb33);
      padding: vw(30);
      background: $white;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
      width: vw(650);
    }
  }
}
</style>
