<template>
  <div class="courses-info">
    <div class="courses-info__block">
      <div class="courses-info__block-theme">
        <div class="courses-info__content">
          <p class="categories">Advanced <b>JavaScript</b> Concepts</p>
          <h5>Development • It & Software • Web Development</h5>
        </div>
        <div class="courses-info__students">
          <img src="./../assets/img/students.svg" alt="" />
          <span class="students">4,454,356</span>
          <div>
            <h5 class="about-students">
              Students are learning JavaScript on Courses
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.courses-info {
  background-image: url("../assets/img/courses-info-2.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: vw(1210);
  height: vw(255);
  margin: vw(30) vw(30);
  &__like {
    display: flex;
  }
  &__image {
    width:100%;
  }
  &__block {
    padding: vw(45) vw(70);
    display: flex;
  }

  &__block-theme {
    margin: 0 vw(10);
    p {
      @include font(vw(24), 600, vh(30));
      color: $white;
    }
    h5 {
      @include font(vw(13), 600, vh(25));
      color: $white;
    }
  }
  &__students {
    @include flex();
    margin-top: vw(10);
    .students {
      @include font(vw(13), 700, vh(25));
      color: $white;
      margin: vw(23);
    }
  }
}
@media screen and (max-width: 1440px) {
  .courses-info {
    background-image: url("../assets/img/courses-info-2.png");
    background-position: center;
    width: vw(1210);
    height: vw(300);
    &__block-theme {
      p {
        @include font(vw(25), 600, vh(30));
        color: $white;
      }
      h5 {
        @include font(vw(23), 600, vh(25));
        color: $white;
      }
    }
    &__students {
      .students {
        @include font(vw(23), 700, vh(25));
        color: $white;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .courses-info {
    background-image: url("../assets/img/courses-info-2.png");
    background-position: center;
    height: vw(350);
    &__block-theme {
      p {
        @include font(vw(35), 600, vh(30));
        color: $white;
      }
      h5 {
        @include font(vw(25), 600, vh(25));
        color: $white;
      }
    }
    &__students {
      .students {
        @include font(vw(25), 700, vh(25));
        color: $white;
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .courses-info {
    background-image: url("../assets/img/courses-info-2.png");
    background-position: center;
    width: vw(1500);
    height: vw(430);
    &__block-theme {
      p {
        @include font(vw(40), 600, vh(30));
        color: $white;
      }
      h5 {
        @include font(vw(30), 600, vh(25));
        color: $white;
      }
    }
    &__students {
      .students {
        @include font(vw(30), 700, vh(25));
        color: $white;
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .courses-info {
    background-image: url("../assets/img/courses-info-2.png");
    width: 100%;
    height: vmin(255);
    margin: vmin(15) 0;
    &__block {
      padding: vmin(5);
    }

    &__block-theme {
      p {
        @include font(vmin(24), 600, vmin(30));
        color: $white;
      }
      h5 {
        @include font(vmin(13), 600, vmin(25));
        color: $white;
      }
    }
    &__students {
      margin-top: vmin(10);
      .students {
        @include font(vmin(13), 700, vmin(25));
        color: $white;
        margin: vmin(23);
      }
    }
  }
}
</style>
