<template>
  <div class="tutorials-3">
    <div>
      <DescriptionText />
      <Reviews />
    </div>
    <div>
      <AddToCart />
    </div>
  </div>
</template>

<script>
import AddToCart from '@/components/AddToCart.vue'
import DescriptionText from '@/components/DescriptionText.vue'
import Reviews from '@/components/Reviews.vue'

export default {
  components: { AddToCart, DescriptionText, Reviews },
}
</script>

<style lang="scss" scoped>
.tutorials-3 {
  display: flex;
}
</style>
