<template>
  <div>
    <DescriptionText :moreInfo="moreInfo" />
    <FeaturedReview />
  </div>
</template>

<script>
import DescriptionText from './DescriptionText.vue'
import FeaturedReview from './FeaturedReview.vue'
import {useStore} from 'vuex'
import { computed } from '@vue/reactivity'

export default {
  components: { DescriptionText, FeaturedReview },
  setup(){
    const store = useStore()
    const moreInfo = computed(() => store.state.moreInfo)
    return{moreInfo}
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  div{
    margin-left: vw(30);
  }
</style>