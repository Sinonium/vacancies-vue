<template>
  <section class="feedback">
    <div class="feedback__create-rev">
      <form @submit.prevent="handleTextAddText">
        <div>
          <img :src="AvatarUserIcon" alt="" />
          <input type="text" placeholder="Your review" v-model="textInp" />
        </div>
        <button>Add review</button>
      </form>
    </div>
    <div class="feedback__content">
      <h2>Reviews course</h2>
      <div v-for="rev in reviews" :key="rev">
        <img :src="AvatarReviewIcon" alt="Avatar" />
        <p>{{ rev }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const reviews = ref(['loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'])
    const textInp = ref('')

    const handleTextAddText = (): void => {
      reviews.value.push(textInp.value)
      textInp.value = ''
    }
    return {
      AvatarReviewIcon: require('../../assets/img/DetailsAboutTeach/imageReview1.png'),
      AvatarUserIcon: require('@/assets/img/sidebar/avatarIcon.png'),
      handleTextAddText,
      textInp,
      reviews,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

.feedback {
  margin-left: vw(155);
  &__create-rev {
    margin-top: vw(30);
    height: vw(105);
    width: vw(700);
    padding: vw(35) vw(40) vw(74) vw(37);
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        align-items: center;
        border-radius: 1.875vw;
        width: 20vw;
        height: 2.3vw;
        padding: vw(10);
        border: 2px solid $blue;
        img {
          border-radius: 50%;
          margin-left: vw(5);
        }
        input {
          color: black !important;
          outline: none;
          border: none;
          @include font(vw(12), bold, 20px, $white);
          @include flex();
          margin-left: vw(20);
        }
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
  &__content {
    h2 {
      @include font(vw(20), bold, 20px, $blue);
    }
    div {
      margin-top: vw(30);
      background: $white;
      border-radius: 10px;
      padding: vw(30) vw(40) vw(74) vw(37);
      height: vw(105);
      width: vw(625);
      // img {
      // }
      p {
        max-width: 400px;
        @include font(vw(14), bold, 20px, $greyBlue70);
      }
    }
  }
}
</style>
