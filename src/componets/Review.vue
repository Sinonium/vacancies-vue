<template>
  <div class="review">
    <div class="container">
      <div class="review__content">
        <div class="review__content-title">
          <h3>Featured Review</h3>
          <img src="../assets/img/kebab.svg" alt="kebab" />
        </div>
        <div class="review__content-logo">
          <img src="../assets/img/logoReview.png" alt="logo" />
          <div class="logo__text">
            <div class="featured">
              <h3>Featured Review</h3>
              <p>(44 Courses, 4 Reviews)</p>
            </div>
            <div class="raiting">
              <img src="../assets/img/raiting.svg" alt="reiting" />
              <p>6 months ago</p>
            </div>
          </div>
        </div>
        <div class="review__content-text">
          <p>
            This is really a great course to get a kickstart to your carrier.
            Exercises are really helpful, I myself had a great experience doing
            them. Instructor the other hand is great, very creative and great
            learning techniques are implied in the course to keep you excited
            and to learn everything with easy and in a comfortable way.
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
      p{
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
