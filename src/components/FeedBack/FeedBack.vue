<template>
  <section class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleAddReviewOrGrade">
        <div>
          <img v-if="userInfo" :src="userInfo.photo" alt="" />
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
  </section>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { user } from '../../composables/getUser'
import update from '@/composables/update'
import { useStore } from 'vuex'
export default {
  props: ['moreInfo'],
  setup(props) {
    const store = useStore()
    const userInfo = computed(() => store.state.userInfo);
    const currentCourseId = computed(() => store.state.courseId)
    const { updateReviews } = update()
    const { updateGrades } = update()
    const { updateCoursesRaiting } = update()
    const userName = user.value.displayName
    const gradeUser = ref(1)
    const photoUser = ref(
      'https://cdn4.iconfinder.com/data/icons/professions-1-2/151/8-512.png'
    )
    const jopa = ref()
    onMounted(() => {
      setTimeout(() => {
        jopa.value = currentCourseId.value
      },500)
    })
    const currentDate = ref()
    const reviews = ref([])
    const grades = ref([])
    const reviewUser = ref({})
    const textInp = ref('')
    const errTextInpMore = ref('The review cannot exceed 50 characters.')
    const textBtnAddedReview = ref('Add review and grade')
    const getDocs = async () => {
      reviews.value = props.moreInfo.reviews
      grades.value = props.moreInfo.grades
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
          imageUrl: null,
          studentName: userName,
          grade: Number(gradeUser.value),
          text: textInp.value,
          date: testDate.value,
        }
        textBtnAddedReview.value = 'Loading add review and grade.'
        await updateReviews(
          'more info',
          props.moreInfo.id,
          textInp.value,
          gradeUser.value,
          userName,
          photoUser.value
        )
        await updateGrades('more info', props.moreInfo.id, gradeUser.value)
        const course = props.moreInfo
        const courseRatingFive = ref([])
        const courseRatingFour = ref([])
        const courseRatingThree = ref([])
        const courseRatingTwo = ref([])
        const courseRatingOne = ref([])
        const courseRatingArray = ref([])
        const countRatingStar = ref(0)
        const courseRatingMiddArithmetic = ref(0)
        const courseRatingPercentFive = ref(0)
        const courseRatingPercentFour = ref(0)
        const courseRatingPercentThree = ref(0)
        const courseRatingPercentTwo = ref(0)
        const courseRatingPercentOne = ref(0)
        const calctPercentOfRating = () => {
          course.grades.map((num) => {
            switch (num) {
              case 1:
                return courseRatingOne.value.push(num)
              case 2:
                return courseRatingTwo.value.push(num)
              case 3:
                return courseRatingThree.value.push(num)
              case 4:
                return courseRatingFour.value.push(num)
              case 5:
                return courseRatingFive.value.push(num)
            }
          })
          countRatingStar.value =
            courseRatingOne.value.length +
            courseRatingTwo.value.length +
            courseRatingThree.value.length +
            courseRatingFour.value.length +
            courseRatingFive.value.length
          courseRatingArray.value = [
            {
              count: courseRatingOne.value.length,
              nums: 1,
            },
            {
              count: courseRatingTwo.value.length,
              nums: 2,
            },
            {
              count: courseRatingThree.value.length,
              nums: 3,
            },
            {
              count: courseRatingFour.value.length,
              nums: 4,
            },
            {
              count: courseRatingFive.value.length,
              nums: 5,
            },
          ]
          courseRatingArray.value.map((countRating) => {
            if (countRating.nums === 5) {
              courseRatingPercentFive.value =
                (countRating.count / countRatingStar.value) * 100
              courseRatingPercentFive.value =
                courseRatingPercentFive.value.toFixed(2)
            }
            if (countRating.nums === 4) {
              courseRatingPercentFour.value =
                (countRating.count / countRatingStar.value) * 100
              courseRatingPercentFour.value =
                courseRatingPercentFour.value.toFixed(2)
            }
            if (countRating.nums === 3) {
              courseRatingPercentThree.value =
                (countRating.count / countRatingStar.value) * 100
              courseRatingPercentThree.value =
                courseRatingPercentThree.value.toFixed(2)
            }
            if (countRating.nums === 2) {
              courseRatingPercentTwo.value =
                (countRating.count / countRatingStar.value) * 100
              courseRatingPercentTwo.value =
                courseRatingPercentTwo.value.toFixed(2)
            }
            if (countRating.nums === 1) {
              courseRatingPercentOne.value =
                (countRating.count / countRatingStar.value) * 100
              courseRatingPercentOne.value =
                courseRatingPercentOne.value.toFixed(2)
            }
          })
          courseRatingMiddArithmetic.value =
            (5 * courseRatingFive.value.length +
              4 * courseRatingFour.value.length +
              3 * courseRatingThree.value.length +
              2 * courseRatingTwo.value.length +
              1 * courseRatingOne.value.length) /
            countRatingStar.value
          courseRatingMiddArithmetic.value =
            courseRatingMiddArithmetic.value.toFixed(1)
        }
        calctPercentOfRating()
        await updateCoursesRaiting(
          'courses',
          jopa.value,
          String(courseRatingMiddArithmetic.value)
        )
        textBtnAddedReview.value = 'Added review and grade'
        setTimeout(() => {
          textBtnAddedReview.value = 'Add review and grade'
        }, 800)
        textInp.value = ''
        currentDate.value = new Date()
        reviewUser.value = {}
        errTextInpMore.value = ''
        gradeUser.value = 1
      } else {
        textBtnAddedReview.value = 'Loading add grade.'
        await updateGrades('more info', props.moreInfo.id, gradeUser.value)
        textBtnAddedReview.value = 'Added grade'
        errTextInpMore.value = ''
        gradeUser.value = 1
        setTimeout(() => {
          textBtnAddedReview.value = 'Add review and grade'
        }, 800)
      }
    }

    onMounted(() => {
      getDocs()
    })
    return {
      userInfo,
      photoUser,
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
        select {
          border: none;
        }
        img {
          border-radius: 50%;
          margin-left: vw(5);
          max-width: vw(50);
          min-width: vw(40);
        }
        input {
          color: black !important;
          outline: none;
          border: none;
          @include font(vw(10), bold, 20px, $white);
          @include flex();
          margin-left: vw(20);
          max-width: 63px;
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
}

@media screen and (max-width: 1440px) {
  .feedback {
    &__create-rev {
      width: 48vw;
      form {
        div {
          width: 16vw;
          height: 8vw;
          input {
            @include font(0.9vw, bold, 20px, $white);
          }
        }
        div:first-child {
          margin-left: -1.68vw;
          span {
            margin-left: -2.93vw;
            margin-top: 5.12vw;
          }
        }
        div:nth-child(2) {
          margin-left: 5vw;
          display: flex;
          justify-content: space-between;
        }
        button {
          font-size: 1.2vw;
          height: 6vw;
          width: 10.3vw;
          margin-left: 10vw;
        }
        .feedback__create-rev_error {
          span {
            font-size: 1vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .feedback {
    margin-left: 6.4vw;
  }
}
@media screen and (max-width: 768px) {
  .feedback__create-rev form button {
    font-size: 1.2vw;
    height: 7vw;
    width: 18.3vw;
    margin-left: 21vw;
  }
  .feedback__create-rev form div:nth-child(2) {
    margin-left: 24vw;
  }
  .feedback__create-rev {
    width: 68vw;
  }
  .feedback__create-rev form div:first-child span {
    margin-left: -4.93vw;
    margin-top: 5.12vw;
    font-size: 1.1vw;
  }
  .feedback__create-rev form div {
    width: 18vw;
    height: 10vw;
  }
}
@media screen and (max-width: 580px) {
  .feedback {
    margin-left: 9.75vw;
  }
  .feedback__create-rev {
    width: 76vw;
  }
  .feedback__create-rev form div {
    width: 28vw;
    height: 12vw;
  }
  .feedback__create-rev form button {
    font-size: 2.2vw;
    height: 9vw;
    width: 25.3vw;
    margin-left: 21vw;
    margin-top: 4vw;
  }
  .feedback__create-rev {
    margin-top: 1.875vw;
    padding: 3.1875vw 0.5vw 5.625vw 5.3125vw;
  }
  .feedback__create-rev form div:nth-child(2) {
    margin-left: 6vw;
  }
  .feedback__create-rev form .feedback__create-rev_error span {
    font-size: 2vw;
  }
  .feedback__create-rev form div input {
    font-size: 2.7vw;
    width: 97px;
  }
  .feedback__create-rev form div:first-child span {
    margin-left: -4.93vw;
    margin-top: 8.12vw;
    font-size: 1.9vw;
  }
}
@media screen and(max-width: 426px) {
  .feedback {
    margin-left: 0vmin;
    &__create-rev {
      margin-top: vmin(30);
      width: vmin(330);
      padding: 3.1875vmin 0.5vmin 5.625vmin 5.3125vmin;
      box-sizing: border-box;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin-left: 6vmin;
      form {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        div {
          display: flex;
          align-items: center;
          border-radius: 1.875vmin;
          width: 30vmin;
          height: 16vmin;
          padding: 2.66667vmin;
          margin-left: 2.66667vmin;
          flex-wrap: wrap;
          img {
            border-radius: 50%;
            margin-left: 0vmin;
            height: 6vmin;
          }
          input {
            font-size: 3.2vmin;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 1.33333vmin;
            margin-top: -4vmin;
            background: none;
          }
          .numLengthTextInp {
            margin-left: -1.93vmin;
            margin-top: 7.12vmin;
            font-size: 2.4vmin !important;
          }
        }
        button {
          border-radius: 1.875vmin;
          width: 35vmin;
          height: 18vmin;
          padding: vmin(10);
          border: none;
          outline: none;
          @include font(vmin(12), bold, 20px, $white);
          @include flex();
          margin-left: 19.33333vmin;
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
        margin-top: vmin(10);
        @include font(vmin(18), bold, 20px, red);
      }
    }
    .feedback__create-rev form .feedback__create-rev_error span {
      font-size: 3vmin;
    }
  }
}
</style>
