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
      <h2>{{ moreInfo.Adilhan.teacher.name }}</h2>
      <span> {{ moreInfo.Adilhan.teacher.features }} </span>
      <p>{{ moreInfo.Adilhan.teacher.recentNews }}</p>
      <p>{{ moreInfo.Adilhan.teacher.biography }}</p>
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
  props: ['course',"moreInfo"],
  setup(props) {
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
  width: vw(730);
  display: flex;
  padding: 1.1875vw 0.5vw 2.625vw 0.125vw;
  background: $white;
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
@media screen and (max-width: 1440px) {
  .cart-teach__about_teach h4 {
    font-size: 1.3vw;
  }
  .cart-teach__about_teach_list-item .last__span {
    font-size: 1.1vw;
  }
  .cart-teach__features_teach h2 {
    font-size: 1.5vw;
  }
  .cart-teach__features_teach span {
    font-size: 1.1vw;
  }
  .cart-teach__about_teach {
    margin-bottom: 4vw;
    margin-left: 2vw;
  }
}
@media screen and (max-width: 1024px) {
  .cart-teach__features_teach p,
  .cart-teach__features_teach span {
    font-size: 1.2vw;
  }
  .cart-teach__about_teach_list-item  {
    margin-top: 3.5vw;
  }
  .cart-teach {
    width: 48vw;
  }
}
@media screen and (max-width: 769px) {
  .cart-teach {
    width: 60vw;
  }
}
@media screen and(max-width: 579px) {
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
@media screen and(max-width: 426px) {
}
@media screen and(max-width:376px) {
}
</style>
