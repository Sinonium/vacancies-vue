<template>
  <div class="description">
    <div class="container">
      <div class="description__content">
        <div class="description__content-text">
          <h3>Description</h3>
          <p> dfdfdfdf </p>
          <p>{{ text.text }}</p>
        </div>
        <div class="description__content-text__bottom">
          <p>{{ text.projects }}</p>
          <p>{{ text.willTeach }}</p>
          <p>{{ text.helpYou }}</p>
        </div>
        <div class="description__course">
          <h3>Who this course is for:</h3>
          <ul>
            <li v-for="item in items" :key="item">
              <svg
                width="8"
                height="2"
                viewBox="0 0 8 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="8" height="2" rx="1" fill="#C3CAD9" />
              </svg>
              <p>{{ item }}</p>
            </li>
          </ul>
          <p>{{ text.willCover }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  props: ['moreInfo'],
  setup(props) {

    setTimeout(() => {
      console.log(props.value);
    }, 2000);

    return {}
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';

.description {
  margin-top: vw(30);
  .container {
    background-color: $white;
    max-width: vw(700);
    border-radius: 10px;
  }
  &__content {
    padding: vw(35) vh(40);
    width: vw(600);
  }
  &__content-text {
    h3 {
      @include font(vw(13), 700, vh(25), $greyBlue50);
    }
    p {
      @include font(vw(13), 700, vh(25), $greyBlue50);
    }
  }
  &__content-text__bottom {
    p {
      @include font(vw(13), 600, vh(25), $greyBlue60);
    }
  }
  &__course {
    h3 {
      @include font(vw(13), 700, vh(25), $greyBlue50);
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        display: flex;
        p {
          @include font(vw(13), 600, vh(25), $greyBlue60);
        }
        svg {
          margin-top: vw(20);
          margin-left: vw(11);
          margin-right: vw(20);
          width: vw(10);
          height: vh(4);
        }
      }
    }
    p {
      @include font(vw(13), 600, vh(25), $greyBlue60);
    }
  }
}
@media screen and (max-width: 1024px) {
  .description {
    .container {
      max-width: vmin(270);
    }
    &__content {
      padding: vmin(10) vmin(10);
      width: vmin(250);
    }
    &__content-text {
      h3 {
        @include font(vmin(7), 700, vmin(10), $greyBlue50);
      }
      p {
        @include font(vmin(5), 500, vmin(10), $greyBlue50);
      }
    }
    &__content-text__bottom {
      p {
        @include font(vmin(5), 500, vmin(10), $greyBlue60);
      }
    }
    &__course {
      h3 {
        @include font(vmin(5), 700, vmin(10), $greyBlue50);
      }
      ul {
        li {
          p {
            @include font(vmin(5), 500, vmin(10), $greyBlue60);
          }
          svg {
            margin-top: vmin(5);
            margin-left: vmin(2);
            margin-right: vmin(10);
            width: vmin(6);
            height: vmin(8);
          }
        }
      }
      p {
        @include font(vmin(5), 500, vmin(10), $greyBlue60);
      }
    }
  }
}
@media screen and (max-width: 428px){
  .description {
    .container {
      max-width: vmin(347);
    }
     &__content {
      width: vmin(325);
    }
       &__content-text {
      h3 {
        @include font(vmin(15), 700, vmin(10), $greyBlue50);
      }
      p {
        @include font(vmin(15), 600, vmin(19), $greyBlue50);
      }
    }
      &__content-text__bottom {
      p {
        @include font(vmin(15), 600, vmin(19), $greyBlue60);
      }
    }
      &__course {
      h3 {
        @include font(vmin(15), 700, vmin(19), $greyBlue50);
      }
      ul {
        li {
          p {
            @include font(vmin(15), 600, vmin(19), $greyBlue60);
          }
          svg {
            margin-top: vmin(20);
            margin-left: vmin(2);
            margin-right: vmin(10);
            width: vmin(10);
            height: vmin(8);
          }
        }
      }
      p {
        @include font(vmin(15), 600, vmin(19), $greyBlue60);
      }
    }
  }
}
</style>
