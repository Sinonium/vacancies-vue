<template>
  <div class="cart">
    <div class="cart__profile">
      <div class="cart__profile-video">
        <img src="../assets/img/addToCartImg/video1.png" alt="video" />
      </div>
      <div class="cart__profile-price">
        <span>$24.90</span>
        <span>$78.99</span>
      </div>
      <p>This price is available for another 5 hours!</p>
      <div class="cart__profile-button">
        <button @click="toggleModal">Buy Now</button>
        <p>30 days money back guarantee</p>
      </div>
      <div class="cart__profile-course">
        <p>This Course Includes</p>
        <div>
          <div class="img__list">
            <ul>
              <li>
                <div>
                  <img src="../assets/img/addToCartImg/hours.svg" alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/img/addToCartImg/articles.svg" alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/img/addToCartImg/lifetime.svg" alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/img/addToCartImg/access.svg" alt="" />
                </div>
              </li>
              <li>
                <div>
                  <img src="../assets/img/addToCartImg/completion.svg" alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div class="course__list">
            <ul>
              <li v-for="item in courseList" :key="item">
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="cart__getStarted">
      <div class="cart__getStarted-img">
        <img src="../assets/img/addToCartImg/Lightbulb.svg" alt="" />
      </div>
      <div>
        <div class="cart__getStarted-title">
          <h3>Find The Right Course for you</h3>
        </div>
        <p>Answer a few questions to get personalized recommendations.</p>
        <button><router-link to="/test">Get Started</router-link></button>
      </div>
    </div>
    <div class="cart__banner">
      <img src="../assets/img/addToCartImg/video2.png" alt="" />
    </div>
  </div>
  <BuyModal @close="toggleModal" :modalActive="modalActive" />
</template>

<script>
import { ref } from '@vue/reactivity'
import BuyModal from './BuyModal.vue'
export default {
  components: { BuyModal },
  setup() {
    const courseList = ref([
      '25 hours of video on demand',
      '24 Articles',
      'Full lifetime access',
      'Access via mobile devices',
      'Certificate of Completion',
    ])

    const modalActive = ref(false)
    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }
    return { courseList, modalActive, toggleModal }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.cart {
  width: vw(350);
  margin-top: vh(270);
  margin-left: vw(30);
  p {
    @include font(vw(12), 700, vw(20), $greyBlue70);
    margin-top: vw(33);
  }
  &__profile {
    margin-bottom: vw(30);
    text-align: center;
    background-color: $white;
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-radius: vw(10);
    &-video {
      img {
        width: 100%;
      }
    }
    &-price {
      margin-top: vw(50);
      span {
        @include font(vw(24), 700, vw(30), $greyBlue50);
        &:last-child {
          color: $greyBlue80;
          margin-left: vw(20);
        }
      }
    }
    &-button {
      margin-top: vw(37);
      padding-bottom: vw(35);
      border-bottom: 2px solid $greyBlue98;
      button {
        border-radius: vw(30);
        background-color: $greyBlue98;
        @include font(vw(12), 700, vw(20), $greyBlue60);
        width: vw(125);
        height: vw(50);
        border: none;
        margin-left: vw(20);
        cursor: pointer;
      }
      button:active {
        color: $white;
        background: $blue;
        box-shadow: 0px 10px 30px rgba(51, 97, 255, 0.15);
      }
    }
    &-course {
      text-align: left;
      padding: vw(10) 0 vw(45) vw(40);
      p {
        color: $greyBlue60;
      }
      div {
        @include flex($justify: none);
      }
      .img__list {
        padding-top: vw(37);
        margin-right: vw(25);
        ul {
          @include flex();
          flex-direction: column;
          list-style-type: none;
          li {
            margin-bottom: vw(25);
            div {
              @include flex();
              width: vw(20);
              height: vw(22);
            }
          }
        }
      }
      .course__list {
        padding-top: vw(37);
        ul {
          flex-direction: column;
          list-style-type: none;
          li {
            height: vw(22);
            margin-bottom: vw(25);
            p {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
  &__getStarted {
    margin-bottom: vw(30);
    display: flex;
    background-color: $white;
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-radius: vw(10);
    padding: vw(40) vw(72) vw(40) vw(48);
    p {
      margin-top: vw(20);
    }
    button {
      width: vw(120);
      height: vw(40);
      border: none;
      @include font(vw(12), 700, vw(20), $blue);
      background-color: rgba(51, 97, 255, 0.05);
      border-radius: vw(30);
      margin-top: vw(35);
    }
    &-img {
      width: vw(15);
      height: vw(20);
      margin-right: vw(28);
    }
    &-title {
      h3 {
        @include font(vw(14), 700, vw(30), $greyBlue50);
      }
    }
    a {
      text-decoration: none;
      color: $greyBlue60;
    }
  }
  &__banner {
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1440px) {
  .cart {
    width: vw(370);
    p {
      @include font(vw(18), 700, vw(20), $greyBlue70);
    }
    &__profile {
      &-price {
        span {
          @include font(vw(20), 700, vw(30), $greyBlue50);
        }
      }
      &-button {
        button {
          @include font(vw(18), 700, vw(20), $greyBlue60);
        }
      }
    }
    &__getStarted {
      button {
        @include font(vw(18), 700, vw(20), $blue);
      }
      &-title {
        h3 {
          @include font(vw(20), 700, vw(30), $greyBlue50);
        }
      }
    }
  }
}


@media screen and (max-width: 1024px) {
    .cart {
    width: vw(420);
    p {
      @include font(vw(24), 700, vw(30), $greyBlue70);
    }
    &__profile {
      &-price {
        span {
          @include font(vw(20), 700, vw(30), $greyBlue50);
        }
      }
      &-button {
        button {
          @include font(vw(20), 700, vw(20), $greyBlue60);
          width: vw(150);
          height: vw(50);
        }
      }
    }
    &__getStarted {
      button {
        @include font(vw(20), 700, vw(20), $blue);
        width: vw(150);
        height: vw(50);
      }
      &-title {
        h3 {
          @include font(vw(23), 700, vw(30), $greyBlue50);
        }
      }
    }
  }
}

@media screen and (max-width: 769px) {
    .cart {
    width: vw(600);
    p {
      @include font(vw(28), 700, vw(30), $greyBlue70);
    }
    &__profile {
      &-price {
        span {
          @include font(vw(24), 700, vw(30), $greyBlue50);
        }
      }
      &-button {
        button {
          @include font(vw(24), 700, vw(20), $greyBlue60);
          width: vw(170);
          height: vw(70);
        }
      }
    }
    &__getStarted {
      button {
        @include font(vw(24), 700, vw(20), $blue);
        width: vw(170);
        height: vw(70);
      }
      &-title {
        h3 {
          @include font(vw(28), 700, vw(30), $greyBlue50);
        }
      }
    }
  }
}

@media screen and (max-width: 426px) {
  .cart {
    width: vmin(300);
    margin-top: 0;
    margin-left: vmin(30);
    p {
      @include font(vmin(12), 700, vmin(20), $greyBlue70);
      margin-top: vmin(33);
    }
    &__profile {
      margin-bottom: vmin(30);
      text-align: center;
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
      border-radius: vmin(10);
      &-video {
        img {
          max-width: 100%;
        }
      }
      &-price {
        margin-top: vmin(50);
        span {
          @include font(vmin(24), 700, vmin(30), $greyBlue50);
          &:last-child {
            color: $greyBlue80;
            margin-left: vmin(20);
          }
        }
      }
      &-button {
        margin-top: vmin(37);
        padding-bottom: vmin(35);
        border-bottom: 2px solid $greyBlue98;
        button {
          border-radius: vmin(30);
          background-color: $greyBlue98;
          @include font(vmin(12), 700, vmin(20), $greyBlue60);
          width: vmin(125);
          height: vmin(50);
          border: none;
          margin-left: vmin(20);
          cursor: pointer;
        }
        button:active {
          color: $white;
          background: $blue;
          box-shadow: 0px 10px 30px rgba(51, 97, 255, 0.15);
        }
      }
      &-course {
        text-align: left;
        padding: vmin(10) 0 vmin(45) vmin(40);
        p {
          color: $greyBlue60;
        }
        div {
          @include flex($justify: none);
        }
        .img__list {
          padding-top: vmin(37);
          margin-right: vmin(25);
          ul {
            @include flex();
            flex-direction: column;
            list-style-type: none;
            li {
              margin-bottom: vmin(25);
              div {
                @include flex();
                width: vmin(20);
                height: vmin(22);
              }
            }
          }
        }
        .course__list {
          padding-top: vmin(37);
          ul {
            flex-direction: column;
            list-style-type: none;
            li {
              height: vmin(22);
              margin-bottom: vmin(25);
              p {
                margin-top: 0;
              }
            }
          }
        }
      }
    }
    &__getStarted {
      margin-bottom: vmin(30);
      display: flex;
      background-color: $white;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
      border-radius: vmin(10);
      padding: vmin(40) vmin(72) vmin(40) vmin(48);
      p {
        margin-top: vmin(20);
      }
      button {
        width: vmin(120);
        height: vmin(40);
        border: none;
        @include font(vmin(12), 700, vmin(20), $blue);
        background-color: rgba(51, 97, 255, 0.05);
        border-radius: vmin(30);
        margin-top: vmin(35);
      }
      &-img {
        width: vmin(15);
        height: vmin(20);
        margin-right: vmin(28);
      }
      &-title {
        h3 {
          @include font(vmin(14), 700, vmin(30), $greyBlue50);
        }
      }
      a {
        text-decoration: none;
        color: $greyBlue60;
      }
    }
    &__banner {
      img {
        max-width: 100%;
      }
    }
  }
}


</style>
