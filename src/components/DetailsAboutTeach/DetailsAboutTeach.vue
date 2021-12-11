<template>
  <section class="Details-about__teach">
    <CartTeach :moreInfo="moreInfo" :course="course" />
    <CartCourseRating :moreInfo="moreInfo" :course="course" />
    <BlockReviews :moreInfo="moreInfo" :course="course" />
  </section>
</template>

<script>
import CartTeach from './CartTeach/CartTeach.vue'
import CartCourseRating from '../DetailsAboutTeach/CartRating/CartCourseRating.vue'
import BlockReviews from './BlockReviews/BlockReviews.vue'
export default {
  components: { CartTeach, CartCourseRating, BlockReviews },
  props: ['course', 'moreInfo'],
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
@media screen and (max-width: 769px) {
  .Details-about__teach {
    margin-left: 7.75vw;
  }
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
