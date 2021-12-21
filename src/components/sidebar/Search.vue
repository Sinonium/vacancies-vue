<template>
  <div class="search">
    <span class="search-user">{{ userName }}</span>
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
import { user } from "@/composables/getUser";
export default {
  setup() {
    const store = useStore();
    const userName = user.value.email;

    const userInfo = computed(() => store.state.userInfo);
    return {
      searchIcon: require("@/assets/img/sidebar/search.svg"),
      avatarIcon: require("@/assets/img/sidebar/avatarIcon.png"),
      userInfo,
      userName,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.search {
  @include flex(space-around);
  background-color: $greyBlue20;
  min-height: vw(90);
  &-user {
    @include font(vw(22), 700, vw(30), $greyBlue50);
  }
  &-image {
    width: vw(35);
    height: vw(35);
  }
}
@media screen and (max-width: 769px) {
  .search {
    min-height: vw(120);
    &-user {
      @include font(vw(28), 700, vw(35), $greyBlue50);
    }
    &-image {
      width: vw(60);
      height: vw(60);
    }
  }
}
@media screen and (max-width: 579px) {
  .search {
    min-height: vw(165);
     &-user {
      @include font(vmin(15), 700, vmin(20), $greyBlue50);
    }
    &-image {
      width: vw(80);
      height: vw(80);
    }
  }
}
@media screen and (max-width: 426px) {
  .search {
    min-height: vmin(55);
     &-user {
      @include font(vmin(16), 700, vmin(20), $greyBlue50);
    }
    &-image {
      width: vmin(40);
      height: vmin(40);
    }
  }
}
</style>
