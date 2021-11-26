<template>
  <div class="tutorials-3">
    <div>
      <DescriptionText />
      <FeaturedReview />
    </div>
    <div>
      <add-to-cart />
    </div>
  </div>
</template>

<script>
import AddToCart from '../AddToCart.vue'

import DescriptionText from './DescriptionText.vue'
import FeaturedReview from './FeaturedReview.vue'

export default {
  components: { DescriptionText, FeaturedReview, AddToCart },
}
</script>

<style lang="scss" scoped>
.tutorials-3 {
  display: flex;
  margin-left: 128px;
}
</style>
