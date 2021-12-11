<template>
  <div class="review">
    <div class="container">
      <div class="review__content">
        <div class="review__content-title">
          <h3>Featured Review</h3>
          <img src="@/assets/img/kebab.svg" alt="kebab" />
        </div>
        <div v-if="no" class="if">
          <div class="review__content-logo">
            <img src="@/assets/img/logoReview.png" alt="logo" />
            <div class="logo__text">
              <div class="name">
                <h3>Adam Newton</h3>
              </div>
              <div class="raiting">
                <img src="@/assets/img/raiting.svg" alt="reiting" />
                <p>6 months ago</p>
              </div>
            </div>
          </div>
          <div class="review__content-text">
            <p>
              The beauty of astronomy is that anybody can do it. From the
              tiniest baby to the most advanced astrophysicist, there is
              something for anyone who wants to enjoy astronomy. In fact, it is
              a science that is so accessible that virtually anybody can do it
              virtually anywhere they are. All they have to know how to do is to
              look up. It really is amazing when you think about it that just by
              looking up on any given night, you could.
            </p>
          </div>
          <div class="review__buttons">
            <p>Was this review helpful?</p>
            <button>Yes</button>
            <button @click="togleElement">No</button>
            <button>Report</button>
          </div>
        </div>
        <h2 v-else>We are sorry :(</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const rewievs = ref([])
    const error = ref('')

    const fetchRewievs = async () => {
      try {
        const response = await fetch('')
        const json = await response.json()
        rewievs.value = await json
      } catch (error) {
        error.value = 'error while loading'
      }
    }
    fetchRewievs()

    const no = ref(true)

    const togleElement = () => {
      no.value = !no.value
    }

    return { rewievs, fetchRewievs, error, togleElement, no }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.review {
  margin-top: vw(30);
  .container {
    max-width: vw(700);
    background-color: $white;
    border-radius: 10px;
  }
  &__content {
    padding: vw(35) vh(40);
    max-width: vw(600);
    h2 {
      @include font(vw(25), 700, vh(20), $greyBlue50);
    }
  }
  &__content-title {
    display: flex;
    justify-content: space-between;
    h3 {
      @include font(vw(13), 700, vh(25), $greyBlue50);
    }
  }
  &__content-logo {
    margin-top: vh(25);
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
  &__buttons {
    display: flex;

    p {
      @include font(vw(13), 700, vh(25), $greyBlue60);
      margin-right: vw(30);
    }
    button {
      @include font(vw(13), 700, vh(25), $greyBlue60);
      width: vw(55);
      height: vw(40);
      background-color: $greyBlue98;
      border-radius: vw(5);
      margin-right: vw(10);
      border: none;
    }
    button:active {
      background-color: #ccc;
    }
    button:last-child {
      margin-left: vw(20);
      background: transparent;
      box-shadow: none;
    }
  }
}
@media screen and (max-width: 1024px) {
  .review {
    .container {
      max-width: vmin(180);
    }
    &__content {
      padding: vmin(10) vmin(10);
      width: vmin(170);
      h2 {
        @include font(vmin(6), 700, vmin(10), $greyBlue50);
      }
    }
    &__content-title {
      h3 {
        @include font(vmin(6), 700, vmin(10), $greyBlue50);
      }
    }
    &__content-logo {
      margin-top: vmin(5);
      img {
        width: vmin(20);
        height: vmin(20);
      }
      .logo__text {
        .name {
          h3 {
            @include font(vmin(5), 700, vmin(10), $greyBlue50);
            margin-left: vmin(10);
          }
        }
      }
      .raiting {
        img {
          margin-left: vmin(10);
          width: vmin(25);
          height: vmin(10);
        }
        p {
          @include font(vmin(4), 700, vmin(3), $greyBlue80);
          margin-left: vmin(7);
        }
      }
    }
    &__content-text {
      p {
        @include font(vmin(5), 500, vmin(10), $greyBlue60);
        max-width: vmin(160);
      }
    }
    &__buttons {
      p {
        @include font(vmin(4), 500, vmin(10), $greyBlue60);
        margin-right: vmin(10);
      }
      button {
        @include font(vmin(4), 500, vmin(10), $greyBlue60);
        width: vmin(20);
        height: vmin(10);
        margin-right: vmin(5);
        margin-top: vmin(5);
      }
      button:last-child {
        margin-left: vmin(10);
      }
    }
  }
}
</style>
