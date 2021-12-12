<template>
  <div class="description">
    <div class="container">
      <div class="description__content">
        <div class="description__content-text">
          <h3>Description</h3>
          <p>{{ text.heading }}</p>
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
  setup() {
    const text = {
      heading:
        "Become a Python Programmer and learn one of employer's most requested skills of 2018!",
      text: 'This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3. (Note, we also provide older Python 2 notes in case you need them)',
      projects:
        'With over 100 lectures and more than 20 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, and homework assignments as well as 3 major projects to create a Python project portfolio! ',
      willTeach:
        'This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!',
      helpYou:
        "We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered! ",
      willCover:
        'This course will cover such advanced concepts as objects and object literals, function expressions, prototypical inheritance, functional programming, scope chains, function constructors (plus new ES6 features), immediately invoked function expressions (IIFEs), call, apply, bind, and more.',
    }
    const items = ref([
      'Beginners who have never programmed before.',
      'Programmers switching languages to Python.',
      'Intermediate Python programmers who want to level up their skills!',
      'Those who have suffered surprising errors while writing Javascript',
      'Those with basic Javascript skills who wish to improve',
    ])

    return { text, items }
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
      max-width: vmin(350);
    }
     &__content {
      width: vmin(330);
    }
       &__content-text {
      h3 {
        @include font(vmin(10), 700, vmin(10), $greyBlue50);
      }
      p {
        @include font(vmin(8), 700, vmin(10), $greyBlue50);
      }
    }
      &__content-text__bottom {
      p {
        @include font(vmin(8), 700, vmin(10), $greyBlue60);
      }
    }
      &__course {
      h3 {
        @include font(vmin(10), 700, vmin(10), $greyBlue50);
      }
      ul {
        li {
          p {
            @include font(vmin(8), 700, vmin(10), $greyBlue60);
          }
          svg {
            margin-top: vmin(10);
            margin-left: vmin(2);
            margin-right: vmin(10);
            width: vmin(6);
            height: vmin(8);
          }
        }
      }
      p {
        @include font(vmin(8), 500, vmin(10), $greyBlue60);
      }
    }
  }
}
</style>
