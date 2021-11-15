<template>
  <div class="review">
    <div class="container">
      <div v-for="review in rewievs" :key="review" class="review__content">
        <div class="review__content-title">
          <h3>Featured Review</h3>
          <img src="../assets/img/kebab.svg" alt="kebab" />
        </div>
        <SingleReview :review="review" />
    
        <div class="review__buttons">
          <p>Was this review helpful?</p>
          <button>Yes</button>
          <button @click="handleClickNo()" >No</button>
          <button>Report</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SingleReview from './SingleReview.vue'
export default {
  components: { SingleReview },
  setup() {
    const rewievs = ref([])
    const error = ref('')

    const fetchRewievs = async () => {
      try {
        const response = await fetch('http://localhost:3000/review')
        const json = await response.json()
        rewievs.value = await json
      } catch (err) {
        error.value = 'error while loading'
      }
    }
    fetchRewievs()





    return { rewievs, fetchRewievs, error }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.container {
  max-width: vw(730);
  margin-left: vw(80);
}
.review {
  margin-top: vh(30);
  &__content {
    background-color: $white;
    border-radius: 10px;
    padding: vw(35) vh(40);
    max-width: vw(600);
  }
  &__content-title {
    display: flex;
    justify-content: space-between;
    h3 {
      @include font(vw(13), 700, vh(25), $greyBlue50);
    }
  }
  &__buttons{
    display: flex;
    p{
      @include font(vw(13), 700, vh(25), $greyBlue60);
      margin-right: vw(30);
    }
    button{
      @include font(vw(13), 700, vh(25), $greyBlue60);
      width: vw(55);
      height: vw(40);
      background: #F7F8FA;
      border-radius: vw(5);
      margin-right: vw(10);
      border: none;
    }
    button:active{
      background-color: #ccc;
    }
    button:last-child{
      margin-left: vw(20);
      background: transparent;
    }
  }
}
</style>
