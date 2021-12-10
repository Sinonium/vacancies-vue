<template>
  <div class="search">
    <img class="search-icon" :src="searchIcon" alt="Search" />
    <input placeholder="Search Courses ..." type="text" />
    <img
      v-if="userInfo"
      class="search-image"
      :src="userInfo.photo"
      alt="Avatar"
    />
  </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const userInfo = computed(() => store.state.userInfo)
    return {
      searchIcon: require('@/assets/img/sidebar/search.svg'),
      avatarIcon: require('@/assets/img/sidebar/avatarIcon.png'),
      userInfo,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.search {
  @include flex(space-evenly);
  background-color: $greyBlue20;
  min-height: vw(90);
  &-icon {
    width: vw(17);
    height: vw(17);
  }
  &-image {
    width: vw(35);
    height: vw(35);
  }
  input {
    background-color: inherit;
    border: none;
    outline: saddlebrown;
    color: $greyBlue85;
    font-size: vw(13);
  }
}
</style>
