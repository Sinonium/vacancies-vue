<template>
  <div class="courses-info">
    <img
      class="courses-info__image"
      src="@/assets/img/courses-info-2.png"
      alt=""
    />
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
  margin: vw(30) vw(30);
  position: relative;
  &__like {
    display: flex;
  }

  &__image {
    width: vw(1210);
  }
  &__block {
    padding: vw(45) vw(70);
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
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
    display: inline-flex;
    .students {
      @include font(vw(13), 700, vh(25));
      color: $white;
      margin: vw(23);
    }
  }
}

@media screen and (max-width: 1024px) {
  .courses-info {
    margin: vmin(10) vmin(15);

    &__image {
      width: vmin(285);
    }

    &__block {
      padding: vmin(10) vmin(20);
    }
    &__block-theme {
      margin: 0 vmin(10);
      p {
        @include font(vmin(9), 600, vmin(5));
        color: $white;
      }
      h5 {
        @include font(vmin(9), 600, vmin(10));
        color: $white;
      }
    }
    &__students {
      .students {
        @include font(vmin(7), 700, vmin(20));
        color: $white;
        margin: vmin(10);
      }
    }
  }
}

@media screen and (max-width: 428px){
  .courses-info {
    margin: vmin(10) vmin(10);

    &__image {
      width: vmin(360);
    }
  }
}
</style>
