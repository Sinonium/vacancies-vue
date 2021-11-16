<template>
  <div class="cart-teach">
    <div class="cart-teach__about_teach col-4">
      <h4>About the Instructor</h4>
      <img
        src="@/assets/img/DetailsAboutTeach/imageTeach.png"
        alt="Image teacher"
      />
      <ul class="cart-teach__about_teach_list">
        <li class="cart-teach__about_teach_list-item">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.55696 13.6975L12.707 16.2075C13.467 16.6675 14.397 15.9875 14.197 15.1275L13.097 10.4075L16.767 7.2275C17.437 6.6475 17.077 5.5475 16.197 5.4775L11.367 5.0675L9.47696 0.6075C9.13696 -0.2025 7.97696 -0.2025 7.63696 0.6075L5.74696 5.0575L0.916957 5.4675C0.0369574 5.5375 -0.323043 6.6375 0.346957 7.2175L4.01696 10.3975L2.91696 15.1175C2.71696 15.9775 3.64696 16.6575 4.40696 16.1975L8.55696 13.6975Z"
              fill="#C3CAD9"
            />
          </svg>
          <span> 4.6 </span>
          <span> Instructor Rating </span>
        </li>
        <li class="cart-teach__about_teach_list-item">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 4H17V12C17 12.55 16.55 13 16 13H4V14C4 15.1 4.9 16 6 16H16L20 20V6C20 4.9 19.1 4 18 4ZM15 9V2C15 0.9 14.1 0 13 0H2C0.9 0 0 0.9 0 2V15L4 11H13C14.1 11 15 10.1 15 9Z"
              fill="#C3CAD9"
            />
          </svg>
          <span> 72,205 </span>
          <span> Reviews </span>
        </li>
        <li class="cart-teach__about_teach_list-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z"
              fill="#C3CAD9"
            />
          </svg>
          <span> 224,567 </span>
          <span> Students </span>
        </li>
        <li class="cart-teach__about_teach_list-item">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 13.5V6.5C8 6.09 8.47 5.85 8.8 6.1L13.47 9.6C13.74 9.8 13.74 10.2 13.47 10.4L8.8 13.9C8.47 14.15 8 13.91 8 13.5Z"
              fill="#C3CAD9"
            />
          </svg>
          <span> 7 </span>
          <span> Courses </span>
        </li>
      </ul>
    </div>
    <div class="cart-teach__features_teach col-5">
      <h2>Jacob Garner</h2>
      <span> Software Developer, Architect, and UX Designer </span>
      <p>
        Newly married in Cleveland Ohio, Tony is primarily focused these days on
        trying to be a good husband. While inexperienced at that, he's quite
        experienced in all things web.
      </p>
      <p>
        Tony has been programming since he was 12 years old, and got into web
        sites and web application development at 16. After graduating with a
        Computer Science degree from Case Western Reserve University.
      </p>
    </div>
    <span class="cart-teach__kebab">
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
import teachImage from '../../../assets/img/DetailsAboutTeach/imageTeach.png'
import { ref } from '@vue/reactivity'
export default {
  setup(props) {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.col-4 {
  width: 35%;
}
.col-5 {
    width: 70%;
}
.cart-teach {
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
        }
        span {
          margin-left: vw(11);
          &:first-child {
            @include font(vw(13), bold, 25px, $greyBlue50);
          }
          &:last-child {
            @include font(vw(12), bold, 20px, $greyBlue60);
          }
        }
      }
    }
  }
  &__features_teach {
      margin-left: vw(81);
    h2 {
      @include font(vw(14), bold, 30px, $greyBlue50);
    }
    p,span {
      @include font(vw(13), bold, 25px, $greyBlue70);
      max-width: vw(360);
    }
  }
}
</style>
