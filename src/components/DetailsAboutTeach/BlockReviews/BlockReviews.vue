<template>
  <div class="block-reviews">
    <div v-for="review in moreInfo.adilhan.teacherReviews" :key="review.id">
      <CartReview :review="review" />
    </div>
  </div>
</template>

<script>
import CartReview from './CartReview/CartReview.vue'
export default {
  components: { CartReview },
  props: ['course',"moreInfo"],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.block-reviews {
  margin-top: vw(30);
}
</style>
