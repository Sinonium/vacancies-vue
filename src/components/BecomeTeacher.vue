<template>
  <div class="header__record-teacher">
    <router-link
      v-if="!currentUserInfo.isTeacher"
      :to="{ name: 'Becometeacher' }"
    >
      <span>Become a Teacher</span>
    </router-link>
    <router-link v-else :to="{ name: 'CreateCourse' }">
      <span>Create a Course</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['currentUserInfo'],
  setup() {
    return {}
  },
}
</script>

<style></style>
