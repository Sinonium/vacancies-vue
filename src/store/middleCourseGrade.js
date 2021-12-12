const middleCourseGrade = {
  state: () => ({
    middCourseGrade: 0,
    courseRatingPercentFive: 0,
    courseRatingPercentFour: 0,
    courseRatingPercentThree: 0,
    courseRatingPercentTwo: 0,
    courseRatingPercentOne: 0,
  }),
  getters: {},
  mutations: {
    UPDATE__MIDD_GRADE(state) {
      const courseRating = course.rating.length
      const courseRatingFive = ref([])
      const courseRatingFour = ref([])
      const courseRatingThree = ref([])
      const courseRatingTwo = ref([])
      const courseRatingOne = ref([])
      const courseRatingArray = ref([])
      const countRatingStar = ref(0)
      course.rating.map((num) => {
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
      state.middCourseGrade =
        (5 * courseRatingFive.value.length +
          4 * courseRatingFour.value.length +
          3 * courseRatingThree.value.length +
          2 * courseRatingTwo.value.length +
          1 * courseRatingOne.value.length) /
        countRatingStar.value
      state.middCourseGrade.value =
        state.middCourseGrade.value.toFixed(1)
    },
  },
  actions: {},
}
export default middleCourseGrade
