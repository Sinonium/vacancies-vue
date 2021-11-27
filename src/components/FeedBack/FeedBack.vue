<template>
  <div class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleTextAddText">
        <input type="text" placeholder="Your review" v-model="textInp" />
        <button>Add review</button>
      </form>
    </div>
    <div class="feedback__content">
      <span style="margin-left: 20px" v-for="rev in reviews" :key="rev">
        {{ rev }}
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const reviews = ref(['Text'])
    const textInp = ref('')

    const handleTextAddText = () => {
      reviews.value.push(textInp.value)
      textInp.value = ''
    }
    return { handleTextAddText, textInp, reviews }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.feedback__create-rev {
  margin-top: vw(30);
  height: vw(105);
  width: vw(730);
  padding: vw(35) vw(40) vw(74) vw(37);
  background: $white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      color: black !important;
      border-radius: 1.875vw;
      width: 20vw;
      height: 2.3vw;
      padding: vw(10);
      border: 2px solid $blue;
      outline: none;
      @include font(vw(12), bold, 20px, $white);
      @include flex();
    }
    button {
      color: $white;
      background: $blue;
      border-radius: 1.875vw;
      width: 7.8125vw;
      height: 3.125vw;
      cursor: pointer;
      padding: vw(10);
      border: none;
      outline: none;
      @include font(vw(12), bold, 20px, $white);
      @include flex();
      transition: 0.5s;
      margin-left: vw(210);
      &:hover {
        color: $blue;
        background: $white;
        border: 3px dashed $blue;
      }
    }
  }
}
</style>
