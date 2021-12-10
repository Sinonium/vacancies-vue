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
  <div class="details-page">
    <div class="details-page__head">
      <ul>
        <li
          :class="{ active: currentDetailsPage === 'About' }"
          @click="handleCurrentPage('About')"
        >
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.95286 15.7333C4.95286 15.7333 0 15.1963 0 10.9971C0 6.79791 2.53581 5.06667 4.64504 4.0128C6.75427 2.95893 7.08326 0 7.08326 0C7.08326 0 10.3801 1.85876 10.8542 4.18686C11.3283 6.51497 9.89102 8.44444 9.89102 8.44444C9.89102 8.44444 11.4796 8.32292 12.1577 7.16771C12.8358 6.0125 12.9889 5.06667 12.9889 5.06667C12.9889 5.06667 16.068 9.80043 14.4328 12.2156C12.7976 14.6307 10.3751 16 10.3751 16C10.3751 16 7.43432 14.6768 6.70687 13.1947C5.97941 11.7126 6.50234 9.6 6.50234 9.6C6.50234 9.6 4.09996 10.3661 3.72077 12.2156C3.34158 14.065 4.95286 15.7333 4.95286 15.7333Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>About</span>
        </li>
        <li
          :class="{ active: currentDetailsPage === 'Content' }"
          @click="handleCurrentPage('Content')"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 14.4625V17.5025C0 17.7825 0.22 18.0025 0.5 18.0025H3.54C3.67 18.0025 3.8 17.9525 3.89 17.8525L14.81 6.94249L11.06 3.19249L0.15 14.1025C0.05 14.2025 0 14.3225 0 14.4625ZM17.71 4.04249C18.1 3.65249 18.1 3.02249 17.71 2.63249L15.37 0.292486C15.1832 0.105233 14.9295 0 14.665 0C14.4005 0 14.1468 0.105233 13.96 0.292486L12.13 2.12249L15.88 5.87249L17.71 4.04249Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Content</span>
        </li>
        <li
          :class="{ active: currentDetailsPage === 'Description' }"
          @click="handleCurrentPage('Description')"
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 2C1.55 2 2 1.55 2 1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1C0 1.55 0.45 2 1 2ZM2 5C2 5.55 1.55 6 1 6C0.45 6 0 5.55 0 5C0 4.45 0.45 4 1 4C1.55 4 2 4.45 2 5ZM2 9C2 9.55 1.55 10 1 10C0.45 10 0 9.55 0 9C0 8.45 0.45 8 1 8C1.55 8 2 8.45 2 9ZM18 5C18 5.55 17.55 6 17 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H17C17.55 4 18 4.45 18 5ZM17 10C17.55 10 18 9.55 18 9C18 8.45 17.55 8 17 8H5C4.45 8 4 8.45 4 9C4 9.55 4.45 10 5 10H17ZM5 2C4.45 2 4 1.55 4 1C4 0.45 4.45 0 5 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H5Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Description</span>
        </li>
        <li
          :class="{ active: currentDetailsPage === 'Instructor' }"
          @click="handleCurrentPage('Instructor')"
        >
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
          <span>Instructor</span>
        </li>
        <li
          :class="{ active: currentDetailsPage === 'Feedback' }"
          @click="handleCurrentPage('Feedback')"
        >
          <svg
            width="22"
            height="14"
            viewBox="0 0 22 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H13C13.55 14 14 13.55 14 13V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C14.05 8.06 14.06 8.08 14.07 8.09C15.21 8.92 16 10.03 16 11.5V13C16 13.35 15.93 13.69 15.82 14H21C21.55 14 22 13.55 22 13V11.5C22 9.17 17.33 8 15 8Z"
              fill="#C3CAD9"
            />
          </svg>
          <span>Feedback</span>
        </li>
      </ul>
    </div>
    <main class="details-page__content">
      <div v-if="currentDetailsPage === 'Instructor'">
        <DetailsAboutTeach :course="course" />
        <div class="details-page__bottom">
          <div class="details-page__bottom-arrow_prev">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
          <div
            @click="handleCurrentPage('Feedback')"
            class="details-page__bottom-btn_push_page"
          >
            <img :src="studsIcon" alt="" />
            <span> Feedback </span>
          </div>
          <div class="details-page__bottom-arrow_next">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
        </div>
      </div>
      <div v-if="currentDetailsPage === 'About'">
        <CourseContent :moreInfo="moreInfo" />
        <div class="details-page__bottom">
          <div class="details-page__bottom-arrow_prev">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
          <div
            @click="handleCurrentPage('Content')"
            class="details-page__bottom-btn_push_page"
          >
            <img :src="pencilIcon" alt="" />
            <span> Content </span>
          </div>
          <div class="details-page__bottom-arrow_next">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
        </div>
      </div>
      <div v-if="currentDetailsPage === 'Description'">
        <Description />
        <div class="details-page__bottom">
          <div class="details-page__bottom-arrow_prev">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
          <div
            @click="handleCurrentPage('Instructor')"
            class="details-page__bottom-btn_push_page"
          >
            <img :src="studIcon" alt="" />
            <span>Instructor</span>
          </div>
          <div class="details-page__bottom-arrow_next">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
        </div>
      </div>
      <div v-if="currentDetailsPage === 'Feedback'">
        <FeedBack />
        <div class="details-page__bottom">
          <div class="details-page__bottom-arrow_prev">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
          <div
            @click="handleCurrentPage('About')"
            class="details-page__bottom-btn_push_page"
          >
            <img :src="fireIcon" alt="" />
            <span> About </span>
          </div>
          <div class="details-page__bottom-arrow_next">
            <img :src="ArrowIcon" alt="ArrowIcon" />
          </div>
        </div>
      </div>
      <div v-if="currentDetailsPage === 'Content'" class="details-page__bottom">
        <div class="details-page__bottom-arrow_prev">
          <img :src="ArrowIcon" alt="ArrowIcon" />
        </div>
        <div
          @click="handleCurrentPage('Description')"
          class="details-page__bottom-btn_push_page"
        >
          <img :src="kebabIcon" alt="" />
          <span>Description</span>
        </div>
        <div class="details-page__bottom-arrow_next">
          <img :src="ArrowIcon" alt="ArrowIcon" />
        </div>
      </div>
    </main>
    <div class="details-page__modal">
      <AddToCart />
    </div>
  </div>
</template>

<script>
import FeedBack from '@/components/FeedBack/FeedBack.vue'
import AddToCart from '@/components/AddToCart.vue'
import DetailsAboutTeach from '@/components/DetailsAboutTeach/DetailsAboutTeach.vue'
import CourseContent from '@/components/CourseContent.vue'
import Description from '@/components/Description/Description.vue'
import { computed, ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  components: {
    FeedBack,
    AddToCart,
    Description,
    DetailsAboutTeach,
    CourseContent,
  },
  setup() {
    const store = useStore()

    const moreInfo = computed(() => store.state.courseMoreInfo)

    const course = ref()
    const getDoc = async () => {
      const response = await fetch('http://localhost:3000/course')
      const json = await response.json()
      course.value = json
    }
    const currentDetailsPage = ref('About')
    const handleCurrentPage = (currentWord) => {
      currentDetailsPage.value = currentWord
    }
    onMounted(() => {
      getDoc()
    })

    return {
      moreInfo,
      course,
      fireIcon: require('@/assets/icons/DetailsAboutTeach/fire.svg'),
      studIcon: require('@/assets/icons/DetailsAboutTeach/person.svg'),
      studsIcon: require('@/assets/icons/DetailsAboutTeach/persons.svg'),
      pencilIcon: require('@/assets/icons/DetailsAboutTeach/pencil.svg'),
      kebabIcon: require('@/assets/icons/DetailsAboutTeach/kebab.svg'),
      ArrowIcon: require('@/assets/icons/DetailsAboutTeach/arrow.svg'),
      handleCurrentPage,
      currentDetailsPage,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
body {
  background: #e4e7f0;
}
.details-page {
  margin-top: vw(45);
  &__head {
    position: relative;
    display: flex;
    background: $bg-main;
    height: vw(80);
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: $greyBlue95;
      border-radius: 1px;
    }
    ul {
      margin-left: vw(50);
      display: flex;
      align-items: center;
      list-style-type: none;
      li {
        cursor: pointer;
        position: relative;
        margin-left: vw(52);
        @include flex();
        @include font(vw(12), bold, 20px, $greyBlue60);
        &::before {
          content: '';
          position: absolute;
          bottom: vw(-35);
          left: 0;
          width: 0%;
          height: 2px;
          background: $blue;
          border-radius: 1px;
          opacity: 0;
          transition: 0.4s;
        }
        span {
          transition: 0.4s;
          margin-left: vw(17);
        }
      }
      svg {
        path {
          transition: 0.4s;
        }
      }
    }
  }
  &__modal {
    position: absolute;
    top: vw(130);
    left: vw(1150);
  }
}
.details-page__head ul li.active {
  &::before {
    content: '';
    position: absolute;
    bottom: vw(-35);
    left: 0;
    width: 100%;
    height: 2px;
    background: $blue;
    border-radius: 1px;
    opacity: 1;
  }
  span {
    @include font(vw(12), bold, 20px, $blue);
  }
  svg {
    path {
      fill: $blue;
    }
  }
}
.details-page__bottom {
  margin-left: -33.2vw;
  margin-top: vw(35);
  margin-bottom: vw(40);
  @include flex();
  &-arrow_prev,
  &-arrow_next {
    background: $white;
    box-shadow: 0 vw(2) vw(5) rgba(54, 61, 77, 0.03);
    border-radius: vw(30);
    padding: vw(15);
    cursor: pointer;
  }
  &-arrow_prev {
    img {
      transform: rotate(-90deg);
    }
  }
  &-arrow_next {
    margin-left: vw(235);
    img {
      transform: rotate(90deg);
    }
  }
  &-btn_push_page {
    background: $white;
    box-shadow: 0 vw(2) vw(5) rgba(54, 61, 77, 0.03);
    border-radius: vw(30);
    @include flex();
    padding: vw(17) vw(38) vw(15) vw(26);
    margin-left: vw(235);
    cursor: pointer !important;
    span {
      @include font(vw(12), bold, 20px, $greyBlue60);
      margin-left: vw(16);
    }
  }
}
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
@media screen and (max-width: 1123px) {
  .details-page {
    &__head {
      ul {
        margin-left: 5vw;
      }
    }
  }
}
@media screen and (max-width: 823px) {
  .details-page {
    &__head {
      ul {
        margin-left: 4vw;
        li.active {
          &::before {
            margin-top: -0.8vw;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 759px) {
  .details-page {
    &__head {
      ul {
        margin-left: 3vw;
      }
    }
  }
}
@media screen and (max-width: 719px) {
  .details-page {
    &__head {
      ul {
        li {
          span {
            @include font(vw(17), bold, 20px, $greyBlue60);
          }
          svg {
            height: 13px;
          }
        }
      }
    }
  }
  .details-page__head ul li.active span {
    @include font(vw(17), bold, 20px, $blue);
  }
}
</style>
