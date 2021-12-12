<template>
  <div class="reviews">
    <div v-if="moreInfo.reviews" class="reviews__content">
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
