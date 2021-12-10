<template>
  <div v-show="modalActive" class="modal">
    <transition name="modal-animation-inner">
      <div v-show="modalActive" class="modal__inner">
        <div class="modal__inner-text">
          <h3>This Course Includes</h3>
          <p>
            25 hours of video on demand, 24 Articles, Full lifetime
            access,Access via mobile devices, Certificate of Completion
          </p>
        </div>
        <form class="items" @submit.prevent="handleSubmit">
          <div>
            <input
              type="text"
              placeholder="First Name"
              v-model="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              v-model="lastName"
              required
            />
          </div>
          <input
            type="number"
            placeholder="Card Number"
            v-model="cardNumber"
            required
          />
          <div>
            <input
              type="number"
              placeholder="MM / YY"
              v-model="mmyy"
              required
            />
            <input type="number" placeholder="CVC" v-model="cvc" required />
          </div>
          <div>
            <input
              type="text"
              placeholder="Country"
              v-model="country"
              required
            />
            <input
              type="text"
              placeholder="Zip Code"
              v-model="zipCode"
              required
            />
          </div>
          <div class="buttons">
            <button @click="close" type="button">Close</button>
            <button>Buy course</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import update from '@/composables/update'
import { useStore } from 'vuex'
import { user } from '@/composables/getUser'
export default {
  props: ['modalActive', 'course'],

  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }

    const store = useStore()

    const id = computed(() => store.state.courseId)

    const { updateUserBuy, updateCourse } = update()

    const handleSubmit = async () => {
      await updateUserBuy(user.value.uid, id.value)
      await updateCourse(id.value)
    }

    const firstName = ref('')
    const lastName = ref('')
    const cardNumber = ref('')
    const mmyy = ref('')
    const cvc = ref('')
    const country = ref('')
    const zipCode = ref('')

    return {
      id,
      handleSubmit,
      close,
      firstName,
      lastName,
      cardNumber,
      mmyy,
      cvc,
      country,
      zipCode,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.modal-animation-inner-enter-from {
  transform: scale(0.8);
}

.modal {
  z-index: 10;
  inset: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  .modal__inner {
    margin: 0 auto;
    max-width: vw(550);
    background-color: $white;
    padding: vw(15);
    border-radius: vw(10);
    margin-top: vh(100);
    padding: vw(50);
    h1 {
      @include font(vw(35), 700, vw(20));
      color: $greyBlue25;
      text-align: center;
    }
    &-text {
      margin: auto;
      width: vw(430);
      h3 {
        @include font(vw(25), 700, vw(30));
      }
      p {
        @include font(vw(14), 600, vw(20));
      }
    }
    .buttons {
      width: vw(430);
      margin: auto;
      display: flex;
      justify-content: space-between;
      margin-top: vh(10);
      button {
        @include font(vw(12), 700, vw(20), $greyBlue60);
        width: vw(90);
        height: vw(40);
        background-color: $greyBlue98;
        border-radius: vw(30);
        margin-right: vw(10);
        border: none;
        margin: 0;
      }
      button:active {
        background-color: $blue;
        color: $white;
      }
    }
  }
}
.items {
  margin: auto;
  width: vw(430);
  input {
    @include font(vw(13), 600, vw(20), $greyBlue70);
    width: vw(415);
    height: vh(40);
    border-radius: vw(10);
    border: vw(2) solid $greyBlue70;
    margin-bottom: vh(15);
  }
  div {
    display: flex;
    input {
      width: vw(200);
      margin-right: vw(10);
    }
  }
}
input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']:hover,
input[type='number']:focus {
  -moz-appearance: number-input;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
