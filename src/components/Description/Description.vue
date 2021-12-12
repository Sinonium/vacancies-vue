<template>
   <div v-if="info">
      <DescriptionText :moreInfo="moreInfo" />
      <FeaturedReview />
   </div>
</template>

<script>
   import DescriptionText from "./DescriptionText.vue";
   import FeaturedReview from "./FeaturedReview.vue";


   export default {
      components: { DescriptionText, FeaturedReview },
      props: ['moreInfo'],
      setup() {

      },
   };
</script>
<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   div {
      margin-left: vw(30);
   }
</style>
