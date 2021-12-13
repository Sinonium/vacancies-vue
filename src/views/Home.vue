<template>
  <div class="courses-info">
    <img
      class="courses-info__image"
      src="./../assets/img/courses-info.png"
      alt=""
    />
    <div class="courses-info__block">
      <div class="courses-info__title">
        <img class="sticker" src="./../assets/img/stickers.svg" alt="" />
        <h3 v-if="!selectedCourse[2]" class="name">{{ selectedCourse[2] }}</h3>
        <h3 v-else class="name">{{ selectedCourse[2] }} Courses</h3>
        
      </div>

      <div class="courses-info__block-2">
        <div class="courses-info__content">
          <p class="categories">Related Categories:</p>
          <h5 v-if="selectedCourse">{{selectedCourse[0]}} {{selectedCourse[1]}}</h5>
        </div>
        <div class="courses-info__students">
          
          <span class="students"><img src="./../assets/img/students.svg" alt="" />4,454,356</span>

          <div>
            <h5 class="about-students">
              Students are learning JavaScript on Courses
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Filters />
  <div class="courses-items">
    <div class="row" v-if="courses">
      <CourseItem  v-for="course in courses" :key="course" :course="course"/>
    </div>
  </div>
</template>

<script>
import CourseItem from '../components/CourseItem.vue'
import { onMounted, computed} from '@vue/runtime-core'
import { useStore } from 'vuex'
import Filters from '@/components/Filters/Fiters.vue'
export default {
  components: { Filters, CourseItem, },
  setup() {
    const store = useStore()

    const courses = computed(() => store.state.courses)
    const selectedCourse = computed(()=> store.state.categories.category);
    
    onMounted(() => {
      store.dispatch('getCourses')
      console.log('sasasa');

    })

    setTimeout(() => {
      console.log(courses.value);
    }, 2000);

    return {
      selectedCourse,
      courses,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.courses-items {
  margin: vw(80) 0 0 vw(40);
  width: vw(1200);
  .row {
    display: flex;
    flex-wrap: wrap;
  }
}
.courses-info {
  margin: vw(30) vw(30) vw(60) vw(30);
  position: relative;

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
  &__title {
    display: block;
    .name {
      @include font(vw(30), 700, vh(50));
      color: $white;
      margin-top: vw(50);
    }
    .sticker {
      width: vw(96);
    }
  }
  &__block-2 {
    margin: 0 vw(180);
    p {
      @include font(vw(13), 600, vh(25));
      color: $white;
      opacity: 0.3;
    }
    h5 {
      @include font(vw(13), 600, vh(25));
      color: $white;
    }
  }
  &__students {
    img{
      margin-right: vw(13);
    }
    display: inline-flex;
    .students {
      @include font(vw(13), 700, vh(25));
      color: $white;
      margin: vw(23);
    }
  }
}

@media screen and (max-width: 768px) {
  .courses-items {
    width: 100%;
    margin: vmin(30) 0;
    .row {
      padding: 0 vw(70);
      margin-top: vmin(20);
      display: flex;
      gap: 5%;
    }
  }
  .courses-info {
    margin: vw(60) 0;
    &__image {
      width: 100%;
    }
    &__block {
      padding: vw(30) 0 vw(20) vw(30);
    }
    &__title {
      display: block;
       width: vw(300);
      .name {
        @include font(vw(25), 600, vw(40));
        color: $white;
        margin-top: vw(50);       
      }
      .sticker {
        padding: vw(30);
        width: vw(150);
      }
    }
    &__block-2 {
      margin: 0 0 0 vw(200);
      p {
       @include font(vw(25), 600, vw(40));
        color: $white;
        opacity: 0.3;
        margin: 0;
      }
      h5 {
        @include font(vw(25), 600, vw(40));
        color: $white;
        margin: 0;
      }
    }
    &__students {
      display: block;
      margin: vmin(10) 0 vmin(5);
      span{
        margin: 0;
      }
      .students {
        display: flex;
        align-items: center;
        margin: 0;
        @include font(vw(20), 700, vw(40));
        color: $white;
          img {
          width: vw(30);
          margin-right: vw(30);
        }
      }
    }
  }
}
@media screen and (max-width: 400px) {
  .row{
    display: flex;
    justify-content: center;
    
  }
  .courses-info {
    width: 100%;
    margin: vw(60) 0;
    &__image {
      width: 100%;
      object-fit: cover;
      height: vmin(200);
    }
    &__block {
      margin-left: vmin(10);
      display: block;
      width: 100%;
      padding: 0;
    }
    &__title {
      margin-top: vmin(20);
      display: flex;
      align-items: center;
      width: 100%;
      .name {
        @include font(vmin(17), 600, vmin(25));
        color: $white;
        margin-top: 0;       
      }
      .sticker {
        padding: vmin(10);
        width: vmin(50);
      }
    }
    &__block-2 {
      margin: 0;
      margin-top: vmin(10);
      margin-left: vmin(20);
      p {
       @include font(vmin(10), 600, vmin(20));
       margin-top: vmin(10);
        color: $white;
        opacity: 0.3;
        margin: 0;
      }
      h5 {
        @include font(vmin(10), 600, vmin(20));
        color: $white;
        margin: 0;
      }
    }
    &__students {
      .students {
        margin: 0;
        @include font(vmin(10), 600, vmin(20));
        color: $white;
          img {
          width: vmin(15);
          margin-right: vw(30);
        }
      }
    }
  }
}
</style>
