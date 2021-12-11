<template>
  <div>
    <DescriptionText />
    <FeaturedReview />
  </div>
</template>

<script>
import DescriptionText from './DescriptionText.vue'
import FeaturedReview from './FeaturedReview.vue'

export default {
  components: { DescriptionText, FeaturedReview },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  div{
    margin-left: vw(30);
  }
</style>