<template>
  <div class="modal" v-if="show">
    <div class="modal__backdrop" @click="closeModal()" />
    <div class="modal__dialog">
      <button type="button" class="modal__close" @click="closeModal()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
          <path
            fill="currentColor"
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          ></path>
        </svg>
      </button>
      <div>
        <slot name="modal__content" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const show = ref(false)

    const closeModal = () => {
      show.value = false
    }

    const openModal = () => {
      show.value = true
    }

    return { show, closeModal, openModal }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: vw(600);
    margin: vw(50) auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: vw(30);
    height: vw(30);
  }
}
</style>
