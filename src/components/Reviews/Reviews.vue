<template>
  <div class="reviews">
    <div v-if="moreInfo.reviews.length" class="reviews__content">
      <h2>Reviews course</h2>
      <div
        v-for="review in moreInfo.reviews.sort(
          (a, b) => a.createdAt - b.createdAt
        )"
        :key="review"
      >
        <CartRev :review="review" />
      </div>
    </div>
    <div v-else>
      <h2>
        No reviews, be the first :(. You can do this in the Feedback tab :).
      </h2>
    </div>
  </div>
</template>

<script>
import CartRev from '../DetailsAboutTeach/BlockReviews/CartReview/CartReview.vue'
export default {
  components: { CartRev },
  props: ['moreInfo'],
  setup(props) {
    const reviews = props.moreInfo.reviews

    return { reviews }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.reviews {
  div {
    h2 {
      margin-left: 5vw;
      @include font(vw(20), bold, 20px, #ffcb33);
      padding: vw(30);
      background: $white;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
      width: vw(600);
    }
  }
}
@media screen and (max-width: 1440px) {
  .reviews {
    div {
      h2 {
        margin-left: 5vw;
        @include font(vw(25), bold, 20px, #ffcb33);
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .reviews div h2 {
    font-size: 2.4vw;
  }
}
@media screen and (max-width: 580px) {
  .reviews div h2 {
    width: 74vw;
  }
}
@media screen and(max-width: 426px) {
  .reviews {
    div {
      h2 {
        margin-left: 6vmin;
        @include font(vmin(20), bold, 20px, #ffcb33);
        padding: vmin(30);
        background: $white;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
        width: vmin(275);
      }
    }
  }
}
</style>
