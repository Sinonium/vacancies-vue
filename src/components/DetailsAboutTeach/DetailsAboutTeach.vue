<template>
  <section class="Details-about__teach">
    <CartTeach :course="course" />
    <CartCourseRating
      :course="course"
    />
    <BlockReviews :course="course" />
  </section>
</template>

<script lang="ts">
import CartTeach from './CartTeach/CartTeach.vue'
import CartCourseRating from '../DetailsAboutTeach/CartRating/CartCourseRating.vue'
import BlockReviews from './BlockReviews/BlockReviews.vue'
export default {
  components: { CartTeach, CartCourseRating, BlockReviews },
  props: ["course"],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.Details-about__teach {
  margin-left: vw(60);
  margin-top: vw(30);
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
