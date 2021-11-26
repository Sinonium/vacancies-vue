<template>
  <div class="Details-about__teach">
    <CartTeach :course="course" />
    <CartCourseRating
      :course="course"
      :courseRatingMiddArithmetic="courseRatingMiddArithmetic"
      :courseRatingPercentFive="courseRatingPercentFive"
      :courseRatingPercentFour="courseRatingPercentFour"
      :courseRatingPercentThree="courseRatingPercentThree"
      :courseRatingPercentTwo="courseRatingPercentTwo"
      :courseRatingPercentOne="courseRatingPercentOne"
    />
    <BlockReviews :course="course" />
  </div>
</template>

<script>
import CartTeach from './CartTeach/CartTeach.vue'
import CartCourseRating from '../DetailsAboutTeach/CartRating/CartCourseRating.vue'
import BlockReviews from './BlockReviews/BlockReviews.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { CartTeach, CartCourseRating, BlockReviews },
  setup(props) {
    const course = ref({
      title: 'Test',
      description: 'loremloremloremlorem',
      rating: [
        4, 5, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 5, 5, 5, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      teacher: {
        name: 'Jacob Garner',
        teachImage: require('@/assets/img/DetailsAboutTeach/imageTeach.png'),
        features: 'Software Developer, Architect, and UX Designer,',
        recentNews:
          "Newly married in Cleveland Ohio, Tony is primarily focused these days on trying to be a good husband. While inexperienced at that, he's quite experienced in all things web.",
        biography:
          'Tony has been programming since he was 12 years old, and got into web sites and web application development at 16. After graduating with a Computer Science degree from Case Western Reserve University.',
        data: [
          {
            number: '4.6',
            title: 'Instructor Rating',
            icon: `<svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369574 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
              fill="#C3CAD9"
            />
          </svg>`,
          },
          {
            number: '72,205',
            title: 'Reviews',
            icon: `<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 4H17V12C17 12.55 16.55 13 16 13H4V14C4 15.1 4.9 16 6 16H16L20 20V6C20 4.9 19.1 4 18 4ZM15 9V2C15 0.9 14.1 0 13 0H2C0.9 0 0 0.9 0 2V15L4 11H13C14.1 11 15 10.1 15 9Z"
              fill="#C3CAD9"
            />
          </svg>`,
          },
          {
            number: '224,567',
            title: 'Students',
            icon: `<svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
              fill="#C3CAD9"
            />
          </svg>`,
          },
          {
            number: '7',
            title: 'Courses',
            icon: `<svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 13.5V6.5C8 6.09 8.47 5.85 8.8 6.1L13.47 9.6C13.74 9.8 13.74 10.2 13.47 10.4L8.8 13.9C8.47 14.15 8 13.91 8 13.5Z"
              fill="#C3CAD9"
            />
          </svg>`,
          },
        ],
      },
    })
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
    // const getCollection = async () => {
    //   const response = await fetch('http://localhost:3000/course')
    //   const json = await response.json()
    //   console.log(json)
    //   course.value = json
    //   // console.log(course.value)
    // }
    const calctPercentOfRating = () => {
      course.value.rating.map((num, i) => {
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
          courseRatingPercentTwo.value = courseRatingPercentTwo.value.toFixed(2)
        }
        if (countRating.nums === 1) {
          courseRatingPercentOne.value =
            (countRating.count / countRatingStar.value) * 100
          courseRatingPercentOne.value = courseRatingPercentOne.value.toFixed(2)
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
      console.log(courseRatingMiddArithmetic.value)
    }

    onMounted(() => {
      // getCollection()
      calctPercentOfRating()
      console.log(course.value)
    })

    return {
      course,
      courseRatingFive,
      courseRatingFour,
      courseRatingThree,
      courseRatingTwo,
      courseRatingOne,
      courseRatingArray,
      countRatingStar,
      courseRatingMiddArithmetic,
      courseRatingPercentFive,
      courseRatingPercentFour,
      courseRatingPercentThree,
      courseRatingPercentTwo,
      courseRatingPercentOne,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.Details-about__teach {
  margin-left: vw(140);
  margin-top: vw(30);
  // position: absolute;
  // top: vw(310);
  // left: vw(410);
}
.details-page__bottom {
  margin-left: vw(-350);
  margin-top: vw(35);
  margin-bottom: vw(40);
  @include flex();
  &-arrow_prev , &-arrow_next {
    background: $white;
    box-shadow: 0 vw(2) vw(5) rgba(54, 61, 77, 0.03);
    border-radius: vw(30);
    padding: vw(15);
  }
  &-arrow_prev {
    img {
      transform: rotate(-90deg);
    }
  }
  &-arrow_next {
    margin-left: vw(235);
    img {
      transform: rotate(90deg);
    }
  }
  &-btn_push_page {
    background: $white;
    box-shadow: 0 vw(2) vw(5) rgba(54, 61, 77, 0.03);
    border-radius: vw(30);
    @include flex();
    padding: vw(17) vw(38) vw(15) vw(26);
    margin-left: vw(235);
    span {
      @include font(vw(12),bold,20px,$greyBlue60);
      margin-left: vw(16);
    }
  }
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
