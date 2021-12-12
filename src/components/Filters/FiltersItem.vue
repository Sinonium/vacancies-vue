<template>
  <div class="wrapper">
    <div
      :class="{ activeIcon: activeItem === item.id }"
      v-html="item.icon"
    ></div>
    <span>{{ item.title }}</span>
  </div>
</template>

<script>
export default {
  props: ['item'],
  setup() {
    return {}
  },
}
</script>
