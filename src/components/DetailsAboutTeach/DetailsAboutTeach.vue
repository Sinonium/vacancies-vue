<template>
  <div class="Details-about__teach">
    <CartTeach />
    <CartCourseRating
      :course="course"
      :courseRatingMiddArithmetic="courseRatingMiddArithmetic"
      :courseRatingPercentFive="courseRatingPercentFive"
      :courseRatingPercentFour="courseRatingPercentFour"
      :courseRatingPercentThree="courseRatingPercentThree"
      :courseRatingPercentTwo="courseRatingPercentTwo"
      :courseRatingPercentOne="courseRatingPercentOne"
    />
    <BlockReviews />
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
      rating: [4, 5, 3, 4,2,2,2,2,2,2,2,2,2,1,1,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
  margin-left: vw(190);
  margin-top: vw(30);
  // position: absolute;
  // top: vw(310);
  // left: vw(410);
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
