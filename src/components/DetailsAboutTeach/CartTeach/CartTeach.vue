<template>
  <div class="cart-teach">
    <div class="cart-teach__about_teach col-4">
      <h4>About the Instructor</h4>
      <img :src="course.teacher.imageUrl" alt="Image teacher" />
      <ul class="cart-teach__about_teach_list">
        <li
          v-for="item in course.teacher.data"
          :key="item.title"
          class="cart-teach__about_teach_list-item"
        >
          <span v-html="item.icon"></span>
          <!-- <span class="first__span"> {{ item.num.length }} </span> -->
          <span class="last__span"> {{ item.title }} </span>
        </li>
      </ul>
    </div>
    <div class="cart-teach__features_teach col-5">
      <h2>{{ course.teacher.name }}</h2>
      <span> {{ course.teacher.features }} </span>
      <p>{{ course.teacher.recentNews }}</p>
      <p>{{ course.teacher.biography }}</p>
    </div>
    <span style="cursor: pointer" class="cart-teach__kebab">
      <svg
        width="16"
        height="4"
        viewBox="0 0 16 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
          fill="#C3CAD9"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: ['course'],
  setup(props) {
    // const popa = props.course.teacher.data[0].num.length
    // const popa1 = props.course.teacher.data[1].num.length
    // const popa2 = props.course.teacher.data[2].num.length
    // const popa3 = props.course.teacher.data[3].num.length
    // const popas = [
    //   popa,popa1,popa2,popa3
    // ]
    // return { popas , popa, popa1, popa2, popa3 }
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.cart-teach__kebab {
  position: absolute;
  right: 5%;
}
.col-4 {
  width: 35%;
}
.col-5 {
  width: 70%;
}
.cart-teach {
  position: relative;
  height: vw(445);
  width: vw(730);
  display: flex;
  padding: vw(35) vw(40) vw(74) vw(37);
  background: $white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
  &__about_teach {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h4 {
      @include font(vw(13), bold, 25px, $greyBlue50);
    }
    img {
      margin-left: vw(-45);
    }
    &_list {
      margin-left: vw(-45);
      list-style-type: none;
      &-item {
        margin-top: vw(25);
        align-items: center;
        display: flex;
        svg {
          margin-left: vw(16);
          max-height: 17px;
          max-width: 16px;
        }
        span {
          margin-left: vw(11);
        }
        .first__span {
          @include font(vw(13), bold, 25px, $greyBlue50);
        }
        .last__span {
          @include font(vw(12), bold, 20px, $greyBlue60);
        }
      }
    }
  }
  &__features_teach {
    margin-left: vw(81);
    h2 {
      @include font(vw(14), bold, 30px, $greyBlue50);
    }
    p,
    span {
      @include font(vw(13), bold, 25px, $greyBlue70);
      max-width: vw(360);
    }
  }
}
@media screen and (max-width: 1257px) {
  .cart-teach {
    padding: 2.1875vw ​1.5vw 2.625vw 3.3125vw;
  }
}
@media screen and (max-width: 1256px) {
  .cart-teach {
    padding: 2.1875vw ​1.5vw 2.625vw 3.3125vw;
  }
}
@media screen and (max-width: 1221px) {
  .cart-teach__about_teach_list-item {
    margin-top: 1.2vw;
  }
}
@media screen and (max-width: 1178px) {
  .cart-teach {
    padding: 2.1875vw 0.5vw 3.625vw 3.3125vw;
  }
}
@media screen and (max-width: 1105px) {
  .cart-teach {
    padding: 1.1875vw 0.5vw 1.625vw 3.3125vw;
  }
}
@media screen and (max-width: 1077px) {
  .cart-teach {
    height: 30vw;
  }
}
@media screen and (max-width: 1016px) {
  .cart-teach {
    padding: 1.1875vw 0.5vw 1.625vw 2.3125vw;
  }
}
@media screen and (max-width: 961px) {
  .cart-teach {
    &__about_teach {
      h4 {
        @include font(vw(17.5), bold, 25px, $greyBlue50);
      }
      &_list {
        &-item {
          .first__span {
            @include font(vw(15), bold, 25px, $greyBlue50);
          }
          .last__span {
            @include font(vw(14), bold, 20px, $greyBlue60);
          }
        }
      }
    }
    &__features_teach {
      h2 {
        @include font(vw(16), bold, 30px, $greyBlue50);
      }
      p,
      span {
        @include font(vw(15), bold, 25px, $greyBlue70);
        max-width: vw(360);
      }
    }
    height: 35vw;
    padding: 1.1875vw 0.5vw 1.625vw 2.3125vw;
  }
  .cart-teach__about_teach_list {
    margin-left: -0.8125vw;
    list-style-type: none;
  }
}
@media screen and (max-width: 907px) {
  .cart-teach {
    padding: 0.1875vw 0.5vw 4.625vw 2.3125vw;
  }
}
@media screen and (max-width: 890px) {
  .cart-teach {
    height: 37vw;
  }
}
@media screen and (max-width: 835px) {
  .cart-teach {
    &__features_teach {
      p {
        @include font(vw(17), bold, 22px, $greyBlue70);
        max-width: vw(360);
      }
    }
  }
}
@media screen and (max-width: 770px) {
  .cart-teach {
    height: 39vw;
    &__about_teach {
      &_list {
        &-item {
          .first__span {
            @include font(vw(15), bold, 25px, $greyBlue50);
          }
          .last__span {
            @include font(vw(14), bold, 20px, $greyBlue60);
          }
        }
      }
    }
    &__features_teach {
      p {
        @include font(vw(18), bold, 18px, $greyBlue70);
        max-width: vw(360);
      }
    }
  }
}
@media screen and (max-width: 685px) {
  .cart-teach {
    height: 43vw;
    &__features_teach {
      h2 {
        @include font(vw(25), bold, 30px, $greyBlue50);
      }
    }
  }
}
@media screen and (max-width: 658px) {
  .cart-teach {
    height: 46vw;
    &__about_teach {
      h4 {
        @include font(vw(20), bold, 25px, $greyBlue50);
      }
      img {
        height: 11vw;
      }
    }
    &__features_teach {
      p,
      span {
        @include font(vw(20), bold, 16px, $greyBlue70);
        max-width: vw(360);
      }
    }
  }
}
@media screen and (max-width: 638px) {
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
  }
}
@media screen and (max-width: 622px) {
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
  }
}
@media screen and (max-width: 608px) {
  .cart-teach {
    height: 48vw;
  }
}
@media screen and (max-width: 607px) {
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
  }
}
@media screen and (max-width: 596px) {
  .cart-teach {
    width: 49.625vw;
  }
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
  }
}
@media screen and (max-width: 571px) {
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
  }
}
@media screen and (max-width: 551px) {
  .cart-teach {
    height: 177vmin;
    width: 100%;
    display: block;
    padding: 1.33333vmin 0.66667vmin 1.73333vmin 15.86667vmin;
    background: $white;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(54, 61, 77, 0.05);
    &__about_teach {
      margin-left: 19.3vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h4 {
        @include font(vmin(13), bold, 25px, $greyBlue50);
      }
      img {
        margin-left: vmin(-45);
        height: vmin(70);
      }
      &_list {
        margin-left: vmin(-45);
        list-style-type: none;
        &-item {
          margin-top: vmin(25);
          align-items: center;
          display: flex;
          svg {
            margin-left: vmin(16);
          }
          span {
            margin-left: vmin(11);
          }
          .first__span {
            @include font(vmin(13), bold, 25px, $greyBlue50);
          }
          .last__span {
            @include font(vmin(12), bold, 20px, $greyBlue60);
          }
        }
      }
    }
    &__features_teach {
      margin-left: vmin(20);
      h2 {
        @include font(vmin(14), bold, 30px, $greyBlue50);
      }
      p,
      span {
        @include font(vmin(13), bold, 25px, $greyBlue70);
        max-width: vmin(360);
      }
    }
  }
  .cart-teach__kebab {
    position: absolute;
    right: 5%;
    top: 23vmin;
  }
}
@media screen and (max-width: 533px) {
  .cart-teach {
    height: 176vmin;
  }
}
@media screen and (max-width: 507px) {
  .cart-teach {
    height: 190vmin;
  }
}
@media screen and (max-width: 458px) {
  .cart-teach {
    height: 194vmin;
    width: 100%;
  }
}
@media screen and (max-width: 447px) {
  .cart-teach__kebab {
    position: absolute;
    right: -4%;
    top: 23vmin;
  }
}
@media screen and (max-width: 390px) {
  .cart-teach__kebab {
    position: absolute;
    right: -14%;
    top: 23vmin;
  }
}
@media screen and (max-width: 375px) {
  .cart-teach {
    height: 224vmin;
  }
}
@media screen and (max-width: 362px) {
  .cart-teach__kebab {
    position: absolute;
    top: 23vmin;
    right: -23%;
  }
}
@media screen and (max-width: 351px) {
  .cart-teach__kebab {
    position: absolute;
    right: -23%;
    top: 23vmin;
  }
}
@media screen and (max-width: 326px) {
  .cart-teach__kebab {
    position: absolute;
    top: 23vmin;
    right: -33%;
  }
}
@media screen and (max-width: 321px) {
  .cart-teach {
    height: 240vmin;
  }
}
@media screen and (max-width: 319px) {
  .cart-teach {
    .cart-teach {
      &__about_teach {
        h4 {
          @include font(vmin(19), bold, 25px, $greyBlue50);
        }
        &_list {
          &-item {
            .first__span {
              @include font(vmin(18), bold, 25px, $greyBlue50);
            }
            .last__span {
              @include font(vmin(17), bold, 20px, $greyBlue60);
            }
          }
        }
      }
      &__features_teach {
        h2 {
          @include font(vmin(18), bold, 30px, $greyBlue50);
        }
        p,
        span {
          @include font(vmin(17), bold, 25px, $greyBlue70);
          max-width: vmin(360);
        }
      }
    }
  }
}
</style>
