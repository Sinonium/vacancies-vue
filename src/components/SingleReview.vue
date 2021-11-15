<template>
  <div class="review">
    <div class="review__content-logo">
      <img src="../assets/img/logoReview.png" alt="logo" />
      <div class="logo__text">
        <div class="featured">
          <h3>{{review.name}}</h3>
          <p>({{ review.courses }} Courses, {{ review.reviews }} Reviews)</p>
        </div>
        <div class="raiting">
          <img src="../assets/img/raiting.svg" alt="reiting" />
          <p>{{review.time}}</p>
        </div>
      </div>
    </div>
    <div class="review__content-text">
      <p>{{ review.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['review'],
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.review {
  &__content-logo {
    img {
      width: vw(60);
      height: vw(60);
    }
    display: flex;
    .logo__text {
      .featured {
        display: flex;
        h3 {
          @include font(vw(13), 700, vh(25), $greyBlue50);
          margin-left: vw(30);
        }
        p {
          @include font(vw(12), 700, vh(25), $greyBlue80);
          margin-left: vw(10);
        }
      }
    }
    .raiting {
      display: flex;
      img {
        margin-left: vw(30);
        width: vw(70);
        height: vw(20);
      }
      p {
        @include font(vw(12), 700, vh(1), $greyBlue80);
        margin-left: vw(15);
      }
    }
  }
  &__content-text {
    p {
      @include font(vw(13), 600, vh(25), $greyBlue60);
      max-width: vw(600);
    }
  }
}
</style>
