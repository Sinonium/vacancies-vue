<template>
  <div class="cart-review">
    <div class="cart-review__header">
      <div class="cart-review__header_profile">
        <div class="image">
          <img
            src="@/assets/img/DetailsAboutTeach/imageReview1.png"
            alt="imageTeach"
          />
        </div>
        <div class="data">
          <h4>{{ review.studentName }}</h4>
        </div>
      </div>
      <div class="cart-review__header_data">
        <div v-if="review.grade === 5">
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
        </div>
        <div v-if="review.grade === 4">
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
        </div>
        <div v-if="review.grade === 3">
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
        </div>
        <div v-if="review.grade === 2">
          <img :src="starActiveIcon" alt="" />
          <img :src="starActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
        </div>
        <div v-if="review.grade === 1">
          <img :src="starActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
          <img :src="starNotActiveIcon" alt="" />
        </div>
        <span>
          <span v-if="reviewDate[2] < currentDate.getFullYear()">
            {{ resultReviewDateYear }} years ago
          </span>
          <span v-if="reviewDate[1] < 12 && resultReviewDateMonth !== 0">
            {{ resultReviewDateMonth }} month ago
          </span>
          <span>
            <span
              v-if="
                resultReviewDateDay === 0 &&
                reviewDate[2] === currentDate.getFullYear() &&
                reviewDate[1] === currentDate.getMonth()
              "
            >
              Today
            </span>
            <span>
              <span v-if="resultReviewDateDay === 0"></span>
              <span v-else> {{ resultReviewDateDay }} day ago </span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="cart-review__text">
      <p @click="returnReviewTextAll">
        {{ reviewText }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
export default {
  props: ['review'],
  setup(props) {
    const reviewText = ref(props.review.text)
    const calculateTextReview = () => {
      if (reviewText.value.length > 30) {
        (reviewText.value = props.review.text.substring(0,30) + '....')
      } else {
        reviewText.value = props.review.text
      }
    }
    const returnReviewTextAll = () => {
      reviewText.value = props.review.text
    }
    const currentDate = new Date()
    const reviewDate = props.review.date
    const resultReviewDateMonth = ref(0)
    const resultReviewDateDay = ref(0)
    const resultReviewDateYear = ref(0)

    const getSomeNumAgo = (firstDate, secondDate) => {
      const firstNumDateMonthRef = firstDate.getMonth()
      const secondNumDateMonthRef = secondDate[1]
      const firstNumDateDayRef = firstDate.getDay()
      const secondtNumDateDayRef = secondDate[0]
      const firstNumDateYearRef = firstDate.getFullYear()
      const secondtNumDateYearRef = secondDate[2]

      resultReviewDateDay.value = firstNumDateDayRef - secondtNumDateDayRef
      if (firstNumDateDayRef <= secondtNumDateDayRef) {
        resultReviewDateDay.value = secondtNumDateDayRef - firstNumDateDayRef
      }
      if (firstNumDateDayRef >= secondtNumDateDayRef) {
        resultReviewDateDay.value = firstNumDateDayRef - secondtNumDateDayRef
      }
      resultReviewDateMonth.value = firstNumDateMonthRef - secondNumDateMonthRef
      resultReviewDateYear.value = firstNumDateYearRef - secondtNumDateYearRef
    }
    setTimeout(() => {
      calculateTextReview()
      getSomeNumAgo(currentDate, reviewDate)
    }, 50)
    return {
      returnReviewTextAll,
      reviewText,
      resultReviewDateYear,
      resultReviewDateDay,
      resultReviewDateMonth,
      currentDate,
      reviewDate,
      starActiveIcon: require('@/assets/icons/DetailsAboutTeach/starActive.svg'),
      starNotActiveIcon: require('@/assets/icons/DetailsAboutTeach/starNotActive.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.cart-review {
  width: vw(730);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: vw(25) vw(40) vw(74) vw(37);
  background: $white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
  margin-top: vw(30);
  &__header {
    @include flex(space-between);
    &_profile {
      @include flex();
      .data {
        margin-left: vw(25);
        h4 {
          @include font(vw(13), bold, 25px, $greyBlue50);
        }
        span {
          @include font(vw(12), bold, 20px, $greyBlue70);
        }
      }
    }
    &_data {
      @include flex();
      div {
        img {
          margin-left: vw(5);
        }
      }
      span {
        @include font(vw(12), bold, 20px, $greyBlue70);
        margin-left: vw(15);
      }
    }
  }
  &__text {
    max-width: vw(570);
    p {
      @include font(vw(13), 600, 25px, $greyBlue60);
      position: relative;
      &:hover {
        &::before {
          content: 'Click because look more.';
          position: absolute;
          top: vw(29);
          left: vw(180);
          @include font(vw(12), 600, 25px, black);
          background: rgba(107, 122, 153, 0.5);;
          padding: vw(10);
          border-radius: 50%;
        }
      }
    }
  }
}
@media screen and (max-width: 1296px) {
  .cart-review {
    &__header {
      &_profile {
        .image {
          margin-top: vw(10);
        }
      }
    }
  }
}
@media screen and (max-width: 1256px) {
  .cart-review {
    &__header {
      &_profile {
        .image {
          margin-top: vw(25);
        }
      }
    }
  }
}
@media screen and (max-width: 1263px) {
  .cart-review {
    &__header {
      &_profile {
        .image {
          margin-top: vw(35);
        }
      }
    }
  }
}
@media screen and (max-width: 1125px) {
  .cart-review {
    &__header {
      margin-top: vw(20);
    }
  }
  .cart-review {
    &__header {
      &_profile {
        .image {
          margin-top: vw(40);
        }
      }
    }
  }
}
// @media screen and (max-width: 1077px) {
//   .cart-review {
//     height: 18vw;
//   }
// }
@media screen and (max-width: 961px) {
  .cart-review {
    &__header {
      &_profile {
        .data {
          margin-left: vw(25);
          h4 {
            @include font(vw(20), bold, 25px, $greyBlue50);
          }
          span {
            @include font(vw(15), bold, 20px, $greyBlue70);
          }
        }
      }
      &_data {
        span {
          @include font(vw(14), bold, 20px, $greyBlue70);
        }
      }
    }
    &__text {
      p {
        @include font(vw(15), 600, 25px, $greyBlue60);
      }
    }
  }
}
@media screen and (max-width: 815px) {
  .cart-review {
    &__header {
      margin-top: -0.5vw;
      &_profile {
        .data {
          span {
            @include font(vw(16), bold, 20px, $greyBlue70);
          }
        }
      }
      &_data {
        span {
          @include font(vw(16), bold, 20px, $greyBlue70);
          margin-left: vw(15);
        }
      }
    }
    &__text {
      p {
        @include font(vw(17), 600, 21px, $greyBlue60);
      }
    }
  }
}
// @media screen and (max-width: 697px) {
//   .cart-review {
//     height: 29vw;
//   }
// }
@media screen and (max-width: 658px) {
  .cart-review {
    &__text {
      p {
        @include font(vw(21), 600, 15px, $greyBlue60);
      }
    }
  }
}
@media screen and (max-width: 645px) {
  .cart-review {
    width: 46.625vw;
  }
}
@media screen and (max-width: 613px) {
  .cart-review {
    width: 46.7vw;
  }
}
@media screen and (max-width: 610px) {
  .cart-review {
    &__header {
      &_data {
        div {
          display: none;
        }
      }
    }
  }
}
@media screen and (max-width: 596px) {
  .cart-review {
    width: 49.625vw;
  }
}
@media screen and (max-width: 576px) {
  .cart-review {
    &__header {
      margin-top: 1.5vw;
    }
  }
}
@media screen and (max-width: 551px) {
  .cart-review {
    width: 100%;
    display: block;
    padding: 1vmin 9vmin 1vmin 9vmin;
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    margin-top: vmin(30);
    &__header {
      @include flex(space-between);
      &_profile {
        @include flex();
        .data {
          margin-left: vmin(25);
          h4 {
            @include font(vmin(13), bold, 25px, $greyBlue50);
          }
          span {
            @include font(vmin(12), bold, 20px, $greyBlue70);
          }
        }
      }
      &_data {
        @include flex();
        div {
          display: none;
          img {
            margin-left: vmin(5);
          }
        }
        span {
          @include font(vmin(12), bold, 20px, $greyBlue70);
          margin-left: vmin(15);
        }
      }
    }
    &__text {
      max-width: vmin(500);
      p {
        @include font(vmin(13), 600, 25px, $greyBlue60);
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .cart-review {
    height: 87vmin;
  }
}
@media screen and (max-width: 321px) {
  .cart-review {
    height: 95vmin;
  }
}
@media screen and (max-width: 298px) {
  .cart-review {
    &__header {
      &_profile {
        .data {
          h4 {
            @include font(vmin(15), bold, 25px, $greyBlue50);
          }
          span {
            @include font(vmin(14), bold, 20px, $greyBlue70);
          }
        }
      }
      &_data {
        span {
          @include font(vmin(15), bold, 20px, $greyBlue70);
          margin-left: vmin(15);
        }
      }
    }
    &__text {
      p {
        @include font(vmin(15), 600, 25px, $greyBlue60);
      }
    }
  }
}
</style>
