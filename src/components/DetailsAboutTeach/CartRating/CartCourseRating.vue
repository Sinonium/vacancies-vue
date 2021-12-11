<template>
  <div v-if="courseRating" class="cart-rating_course">
    <div class="cart-rating_course_first">
      <h4>{{ courseRatingMiddArithmetic }}</h4>
      <div>
        <span v-for="star in starTest" :key="star.key">
          <img src="@/assets/icons/DetailsAboutTeach/starActive.svg" alt="" />
        </span>
      </div>
      <span> Course Rating </span>
    </div>
    <div class="cart-rating_course_second">
      <ul>
        <li>
          <div class="lineStar">
            <span :style="{ width: courseRatingPercentFive + '%' }"> </span>
          </div>
          <div class="stars">
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
          </div>
          <span v-if="courseRatingPercentFive.length"> {{ courseRatingPercentFive + ' ' + '%' }} </span>
          <span v-else> {{ 0 + ' ' + '%' }} </span>
        </li>
        <li>
          <div class="lineStar">
            <span :style="{ width: courseRatingPercentFour + '%' }"> </span>
          </div>
          <div class="stars">
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
          </div>
          <span v-if="courseRatingPercentFour.length"> {{ courseRatingPercentFour + ' ' + '%' }} </span>
          <span v-else> {{ 0 + ' ' + '%' }} </span>
        </li>
        <li>
          <div class="lineStar">
            <span :style="{ width: courseRatingPercentThree + '%' }"> </span>
          </div>
          <div class="stars">
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
          </div>
          <span v-if="courseRatingPercentThree.length"> {{ courseRatingPercentThree + ' ' + '%' }} </span>
          <span v-else> {{ 0 + ' ' + '%' }} </span>
        </li>
        <li>
          <div class="lineStar">
            <span :style="{ width: courseRatingPercentTwo + '%' }"> </span>
          </div>
          <div class="stars">
            <img :src="starActiveIcon" alt="" />
            <img :src="starActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
          </div>
          <span v-if="courseRatingPercentTwo.length"> {{ courseRatingPercentTwo + ' ' + '%' }} </span>
          <span v-else> {{ 0 + ' ' + '%' }} </span>
        </li>
        <li>
          <div class="lineStar">
            <span :style="{ width: courseRatingPercentOne + '%' }"> </span>
          </div>
          <div class="stars">
            <img :src="starActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
            <img :src="starNotActiveIcon" alt="" />
          </div>
          <span v-if="courseRatingPercentOne.length"> {{ courseRatingPercentOne + ' ' + '%' }} </span>
          <span v-else> {{ 0 + ' ' + '%' }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  props: ['course'],
  setup(props) {
    const course = props.course
    const courseRating = course.rating.length
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
    return {
      courseRating,
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
      starActiveIcon: require('@/assets/icons/DetailsAboutTeach/starActive.svg'),
      starNotActiveIcon: require('@/assets/icons/DetailsAboutTeach/starNotActive.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.col-3 {
  width: 30%;
}
.col-5 {
  width: 70%;
}
.cart-rating_course {
  margin-top: vw(30);
  height: vw(255);
  width: vw(730);
  display: flex;
  padding: vw(35) vw(40) vw(74) vw(37);
  background: $white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
  &_first {
    @include flex();
    flex-direction: column;
    margin-bottom: vw(30);
    h4 {
      @include font(vw(48), 600, 10px, $greyBlue50);
    }
    div {
      span {
        margin-left: vw(5);
      }
    }
    span {
      @include font(vw(13), bold, 25px, $greyBlue70);
    }
  }
  &_second {
    @include flex();
    flex-direction: column;
    ul {
      margin-left: vw(10);
      list-style-type: none;
      li {
        margin-top: vw(9);
        display: flex;
        align-items: center;
        .lineStar {
          width: vw(280);
          height: vw(8);
          background: $greyBlue97;
          border-radius: 5px;
          position: relative;
          span {
            position: absolute;
            margin-left: vw(-0.75);
            height: 100%;
            border-radius: 5px;
            background: $greyBlue85;
          }
        }
        .stars {
          margin-left: vw(35);
          img {
            margin-left: vw(5);
          }
        }
        span {
          @include font(vw(13), bold, 25px, $greyBlue70);
          margin-left: vw(25);
        }
      }
    }
  }
}
@media screen and (max-width: 1281px) {
  .stars {
    margin-left: 1.1875vw !important;
  }
}
@media screen and (max-width: 1199px) {
  .stars {
    margin-left: 0.1875vw !important;
  }
}
@media screen and (max-width: 1067px) {
  .cart-rating_course {
    &_second {
      margin-bottom: vw(-21);
    }
  }
}
@media screen and (max-width: 925px) {
  .cart-rating_course {
    height: 19.9375vw;
    padding: 2.1875vw 1.5vw 4.625vw 2.3125vw;
  }
}
@media screen and (max-width: 871px) {
  .cart-rating_course {
    padding: 3.1875vw 0.5vw 4.625vw 2.3125vw;
  }
}
@media screen and (max-width: 835px) {
  .cart-rating_course {
    padding: 3.1875vw 0.5vw 3.625vw 1.3125vw;
    &_first {
      span {
        @include font(vw(19), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      ul {
        li {
          span {
            @include font(vw(17), bold, 25px, $greyBlue70);
            margin-left: vw(25);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 801px) {
  .cart-rating_course {
    padding: 2.1875vw 0.5vw 3.625vw 0.3125vw;
  }
}
@media screen and (max-width: 761px) {
  .cart-rating_course {
    &_second {
      ul {
        li {
          .lineStar {
            width: vw(260);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 717px) {
  .cart-rating_course {
    display: flex;
    &_first {
      margin-left: 2.25vw;
    }
    &_second {
      margin-left: 10.375vw;
      ul {
        li {
          .lineStar {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 685px) {
  .cart-rating_course {
    height: 24vw;
  }
}
@media screen and (max-width: 658px) {
  .cart-rating_course {
    &_second {
      ul {
        li {
          span {
            @include font(vw(23), bold, 25px, $greyBlue70);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 629px) {
  .cart-rating_course {
    &_first {
      margin-left: 1.25vw;
    }
  }
}
@media screen and (max-width: 604px) {
  .cart-rating_course {
    &_first {
      margin-left: 0.25vw;
    }
  }
}
@media screen and (max-width: 596px) {
  .cart-rating_course {
    width: 49.625vw;
  }
}
@media screen and (max-width: 551px) {
  .cart-rating_course {
    height: 100vmin;
    width: 100%;
    display: block;
    padding: 2vmin 2vmin 2vmin 2vmin;
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    margin-top: vmin(30);
    &_first {
      @include flex();
      flex-direction: column;
      margin-bottom: vmin(30);
      h4 {
        @include font(vmin(48), 600, 10px, $greyBlue50);
      }
      div {
        span {
          margin-left: vmin(5);
        }
      }
      span {
        @include font(vmin(13), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      @include flex();
      flex-direction: column;
      ul {
        margin-left: vmin(10);
        list-style-type: none;
        li {
          margin-top: vmin(9);
          display: flex;
          align-items: center;
          .lineStar {
            width: vmin(200);
            height: vmin(8);
            background: $greyBlue97;
            border-radius: 5px;
            position: relative;
            span {
              position: absolute;
              margin-left: vmin(-0.75);
              height: 100%;
              border-radius: 5px;
              background: $greyBlue85;
            }
          }
          .stars {
            margin-left: vmin(35);
            img {
              margin-left: vmin(5);
            }
          }
          span {
            @include font(vmin(13), bold, 25px, $greyBlue70);
            margin-left: vmin(25);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 426px) {
  .cart-rating_course {
    &_first {
      margin-bottom: 1vmin;
    }
  }
}
@media screen and (max-width: 362px) {
  .cart-rating_course {
    height: 110vmin;
    &_first {
      margin-bottom: 0vmin;
    }
  }
}
@media screen and (max-width: 298px) {
  .cart-rating_course {
    height: 117vmin;
  }
}
@media screen and (max-width: 298px) {
  .cart-rating_course {
    &_first {
      span {
        @include font(vmin(18), bold, 25px, $greyBlue70);
      }
    }
    &_second {
      ul {
        li {
          span {
            @include font(vmin(17), bold, 25px, $greyBlue70);
          }
        }
      }
    }
  }
}
</style>
