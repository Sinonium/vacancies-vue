<template>
  <div v-if="moreInfo.reviews" class="block-reviews">
    <div v-for="review in moreInfo.reviews" :key="review">
      <CartReview :review="review" />
    </div>
  </div>
</template>

<script>
// import { ref } from '@vue/reactivity'
import CartReview from './CartReview/CartReview.vue'
export default {
  components: { CartReview },
  props: ["moreInfo"],
  setup(props) {
    // const reviews = ref([])
    // reviews.value = props.moreInfo.reviews.map((item,index) => {
    //   if(index < 3) {
    //     return props.moreInfo.reviews[index]
    //   }
    // })


    // return { reviews }
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
