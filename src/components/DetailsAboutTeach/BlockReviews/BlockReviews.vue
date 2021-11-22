<template>
  <div class="block-reviews">
    <div v-for="review in testNumReview" :key="review">
      <CartReview />
    </div>
  </div>
</template>

<script>
import CartReview from './CartReview/CartReview.vue'
export default {
  components: { CartReview },
  setup() {
    const testNumReview = [1, 2]

    return { testNumReview }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.block-reviews {
    margin-top: vw(30);
}
</style>
