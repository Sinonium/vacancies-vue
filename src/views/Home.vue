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
      <CourseItem  v-for="course in courses" :key="course.id" :course="course"/>
    </div>
  </div>
</template>

<script>
import CourseItem from '../components/CourseItem.vue'
import { onMounted, computed} from '@vue/runtime-core'
import { useStore } from 'vuex'
import Filters from '../components/Filters/Fiters.vue'
export default {
  components: { Filters, CourseItem, },
  setup() {
    const store = useStore()

    const courses = computed(() => store.state.courses)
    const selectedCourse = computed(()=> store.state.categories.category);

    onMounted(() => {
      store.dispatch('getCourses')
    })

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
  padding: vw(80);
  width: vw(1200);
  .row {
    display: flex;
    flex-wrap: wrap;
  }
}
.courses-info {
  margin: vw(30) vw(30);
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
    display: inline-flex;
    .students {
      @include font(vw(13), 700, vh(25));
      color: $white;
      margin: vw(23);
    }
  }
}

@media screen and (max-width: 400px) {
  .courses-items {
    width: vmin(200);
    padding: vmin(0) vmin(40);
    margin: vmin(40) 0;
    .row {
      margin-top: vmin(20);
      display: block;
    }
}
  .courses-info {
    margin: vmin(25) 0 vmin(25) vmin(0) ;
    width: vmin(320);
    &__image {
      width: 120%;
      height: vmin(200);
    }
    &__block {
      padding: vmin(30) 0 vmin(10) vmin(15);
      width: 100%;
    }
    &__title {
      display: block;
       width: vmin(150);
      .name {
        @include font(vmin(15), 700, vmin(20));
        margin-top: vmin(40);
        color: white;
      }
      .sticker {
        width: vmin(70);
      }
    }
    &__block-2 {
      margin: 0 0 0 vmin(15);
      p {
       @include font(vmin(18), 600, vmin(20));
       color: white;
       margin-top: vmin(10)
      }
      h5 {
        @include font(vmin(10), 600, vmin(20));
        color: white;
        
      }
    }
    &__students {
      display: block;
      margin-top: vmin(-5);
      span{
        margin: 0;
      }
      .students {
        display: flex;
        align-items: center;
        margin-top: vmin(-10);
        @include font(vmin(6), 700, vmin(10));
        color: $white;
          img {
          width: vmin(15);
          margin-right: vmin(15);
        }
      }

      
    }
  }
}
</style>
