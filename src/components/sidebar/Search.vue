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
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const userInfo = computed(() => store.state.userInfo);
    return {
      searchIcon: require("@/assets/img/sidebar/search.svg"),
      avatarIcon: require("@/assets/img/sidebar/avatarIcon.png"),
      userInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
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
@media screen and (max-width: 769px) {
  .search {
    min-height: vw(120);
    &-icon {
      width: vw(28);
      height: vw(28);
    }
    &-image {
      width: vw(60);
      height: vw(60);
    }
    input {
      font-size: vw(21);
    }
  }
}
@media screen and (max-width: 579px) {
  .search {
    min-height: vw(165);
    &-icon {
      width: vw(40);
      height: vw(40);
    }
    &-image {
      width: vw(80);
      height: vw(80);
    }
    input {
      font-size: vw(40);
    }
  }
}
@media screen and (max-width: 426px) {
  .search {
    min-height: vmin(55);
    &-icon {
      width: vmin(20);
      height: vmin(20);
    }
    &-image {
      width: vmin(40);
      height: vmin(40);
    }
    input {
      font-size: vmin(13);
    }
  }
}
</style>
