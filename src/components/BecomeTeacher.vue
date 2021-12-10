<template>
  <div class="header__record-teacher">
    <button
      v-if="!currentUserInfo.isTeacher"
      @click="$refs.modalTeacher.openModal()"
    >
      Become a Teacher
    </button>
    <router-link v-else :to="{ name: 'Becometeacher' }"
      ><span>Create a Course</span></router-link
    >
    <modal ref="modalTeacher">
      <template v-slot:modal__content>
        <h1>Do you want to become a teacher?</h1>
        <router-link
          :to="{ name: 'Becometeacher' }"
          @click="$refs.modalTeacher.closeModal()"
        >
          <button>Yes</button>
        </router-link>
        <button @click="$refs.modalTeacher.closeModal()">Cancel</button>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
export default {
  props: ['currentUserInfo'],
  components: { Modal },
  setup() {
    return {}
  },
}
</script>

<style></style>
