<template>
  <div class="Details-about__teach">
    <CartTeach :courses="courses" />
    <CartCourseRating :courses="courses" />
    <BlockReviews :courses="courses" />
  </div>
</template>

<script>
import CartTeach from './CartTeach/CartTeach.vue'
import CartCourseRating from '../DetailsAboutTeach/CartRating/CartCourseRating.vue'
import BlockReviews from './BlockReviews/BlockReviews.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  components: { CartTeach, CartCourseRating, BlockReviews },
  setup(props) {
    const courses = ref([])

    // const getCollection = async () => {
    //   const response = await fetch('http://localhost:3000/coursess');
    //   const json = await response.json();
    //   courses.value = json
    // }

    // onMounted(() => {
    //   getCollection()
    // })

    return { courses }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.Details-about__teach {
  margin-left: vw(190);
  margin-top: vw(30);
  // position: absolute;
  // top: vw(310);
  // left: vw(410);
}
@media screen and (max-width: 551px) {
  .Details-about__teach {
    margin-left: vmin(1);
    margin-top: vmin(30);
  }
}
</style>
