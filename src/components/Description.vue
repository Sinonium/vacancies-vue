<template>
  <DescriptionText />
  <Reviews />
</template>

<script>
import DescriptionText from '@/components/DescriptionText.vue'
import Review from '@/components/Review.vue'

export default {
  components: { DescriptionText, Review  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

</style>