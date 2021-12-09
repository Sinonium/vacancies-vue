<template>
  <div>
    <div
      :class="{ activeIcon: activeItem === item.id }"
      v-html="item.icon"
    ></div>
    <span>{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  props: ['item', 'activeItem'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
div {
  div {
    margin-right: vw(20);
  }
}
@media screen and (max-width: 1024px) {
  div {
    div {
      margin-right: vmin(8);
    }
  }
}
</style>
