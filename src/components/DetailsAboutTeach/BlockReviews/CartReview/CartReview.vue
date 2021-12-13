<template>
  <div class="cart-review">
    <div class="cart-review__header">
      <div class="cart-review__header_profile">
        <div class="image">
          <img :src="review.photo" alt="imageTeach" />
        </div>
        <div class="data">
          <h4>{{ review.userName }}</h4>
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
            {{ resultReviewDateYear }} years
          </span>
          <span v-if="reviewDate[1] < 12 && resultReviewDateMonth !== 0">
            {{ resultReviewDateMonth }} month
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
              <span v-else> {{ resultReviewDateDay }} day </span>
            </span>
          </span>
          <span>ago</span>
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
        reviewText.value = props.review.text.substring(0, 30) + '....'
      } else {
        reviewText.value = props.review.text
      }
    }
    const returnReviewTextAll = () => {
      reviewText.value = props.review.text
    }
    const currentDate = new Date()
    const reviewDate = props.review.createdAt
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
  margin-left: 5vw;
  &__header {
    @include flex(space-between);
    &_profile {
      @include flex();
      .image {
        img {
          min-width: vw(60);
          max-width: vw(60);
        }
      }
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
    }
  }
}
@media screen and (max-width: 1440px) {
  .cart-review__text p {
    @include font(vw(20), 600, 25px, $greyBlue60);
  }
  .cart-review__header_profile .data h4 {
    @include font(vw(18), bold, 25px, $greyBlue50);
  }
  .cart-review__header_data span {
    font-size: 0.9vw;
  }
}
@media screen and (max-width: 1024px) {
  .cart-review {
    width: 48vw;
    margin-left: 5vw;
  }
}
@media screen and (max-width: 769px) {
  .cart-review {
    width: 69vw;
  }
  .cart-review__header_data span {
    font-size: 1.4vw;
  }
  .cart-review__header_profile .data h4 {
    font-size: 1.4vw;
  }
  .cart-review__text p {
    font-size: 1.4vw;
  }
}
@media screen and(max-width: 580px) {
  .cart-review__text p {
    font-size: 2.2vw;
  }
  .cart-review__header_profile .data h4 {
    font-size: 1.9vw;
  }
  .cart-review__header_data span {
    font-size: 1.8vw;
  }
  .cart-review {
    width: 78vw;
  }
}
@media screen and(max-width: 426px) {
  .cart-review {
    width: vmin(330);
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: vmin(25) vmin(40) vmin(74) vmin(37);
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    margin-top: vmin(30);
    margin-left: 6vmin;
    &__header {
      @include flex(space-between);
      flex-direction: column;
      &_profile {
        @include flex();
        .data {
          margin-left: 40.66667vmin;
          h4 {
            @include font(vmin(13), bold, 25px, $greyBlue50);
          }
          span {
            @include font(vmin(12), bold, 20px, $greyBlue70);
          }
        }
      }
      &_data {
        margin-top: 3vmin;
        margin-left: 18vmin;
        @include flex();
        div {
          margin-left: -24vmin;
          img {
            margin-left: vmin(5);
          }
        }
        span {
          @include font(vmin(12), bold, 20px, $greyBlue70);
          margin-left: 6vmin;
        }
      }
    }
    &__text {
      max-width: vmin(570);
      p {
        @include font(vmin(13), 600, 25px, $greyBlue60);
        position: relative;
      }
    }
  }
}
@media screen and(max-width:376px) {
}
@media screen and (max-width: 408px) {
  .cart-review__header_data {
    margin-left: 14vmin;
  }
}
</style>
