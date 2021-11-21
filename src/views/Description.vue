<template>
  <AddToCart />
  <DescriptionText />
  <Reviews />
</template>

<script>
import AddToCart from '@/components/AddToCart.vue'
import DescriptionText from '@/components/DescriptionText.vue'
import Review from '@/components/Review.vue'

export default {
  components: { AddToCart, DescriptionText, Review  },
}
</script>

<style lang="scss" scoped>

</style>