<template>

    <div class="review">
      <div class="review__content-logo">
        <img src="../assets/img/logoReview.png" alt="logo" />
        <div class="logo__text">
          <div class="name">
            <h3>{{ review.name }}</h3>
            <p>({{ review.courses }} Courses, {{ review.reviews }} Reviews)</p>
          </div>
          <div class="raiting">
            <img src="../assets/img/raiting.svg" alt="reiting" />
            <p>{{ review.time }}</p>
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
      .name {
        display: flex;
        h3 {
          @include font(vw(13), 700, vh(30), $greyBlue50);
          margin-left: vw(30);
        }
        p {
          @include font(vw(12), 700, vh(1), $greyBlue80);
          margin-left: vw(10);
        }
      }
    }
    .raiting {
      display: flex;
      img {
        margin-left: vw(30);
        width: vw(70);
        height: vw(40);
      }
      p {
        @include font(vw(12), 700, vh(20), $greyBlue80);
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

.review {
  @include mobile {
    &__content-logo {
      img {
        width: vmin(60);
        height: vmin(60);
      }
      .logo__text {
        .name {
          h3 {
            @include font(vmin(9), 700, vmin(15), $greyBlue50);
            margin-left: vmin(30);
          }
          p {
            @include font(vmin(9), 700, vmin(0), $greyBlue80);
            margin-left: vmin(10);
          }
        }
      }
      .raiting {
        img {
          margin-left: vmin(30);
          width: vmin(50);
          height: vmin(25);
        }
        p {
          @include font(vmin(7), 700, vmin(15), $greyBlue80);
          margin-left: vmin(15);
        }
      }
    }
    &__content-text {
      p {
        @include font(vmin(13), 600, vmin(25), $greyBlue60);
        max-width: vmin(600);
      }
    }
  }
}
</style>
