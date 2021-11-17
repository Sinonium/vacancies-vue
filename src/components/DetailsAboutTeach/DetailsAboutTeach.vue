<template>
  <div class="Details-about__teach">
    <CartTeach />
    <CartCourseRating />
    <BlockReviews />
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
    // const cousrses = ref([])

    // onMounted(() => {
    //   const getCollection = async () => {
    //     const response = await fetch('http://localhost:3000/courses')
    //     const json = await response.json()

    //     return cousrses.value = json
    //   }
    //   getCollection()
    // })

    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.Details-about__teach {
  position: absolute;
  top: vw(310);
  left: vw(410);
}
</style>
