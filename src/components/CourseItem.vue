<template>
  <div class="col-3">
    <div v-if="course" class="course-item">
      <div class="course-item__header">
        <img class="course-item__image" :src="course.imageUrl" alt="course" />
        <div class="course-item__time">
          <img src="./../assets/img/clock.svg" alt="time" />
          <span>{{ course.time }} hours</span>
        </div>
        <div class="course-item__like" @click="handleLike(course.id)">
          <img src="./../assets/img/like.svg" alt="like" />
        </div>
      </div>
      <router-link
        :to="{ name: 'DetailsCourse', params: { id: course.moreInfoId } }"
        class="router-link"
        @click="handleClick(course.teacherId)"
      >
        <div className="curse-item__bottom">
          <div className="course-item__info">
            <h3 className="course-item__name">{{ course.name }}</h3>
             <div className="course-item__rating">
               <img v-if="Number(course.grade) >=1" src="./../assets/img/star.svg" alt="rating" />
               <img v-if="Number(course.grade) >=2" src="./../assets/img/star.svg" alt="rating" />
               <img v-if="Number(course.grade) >=3" src="./../assets/img/star.svg" alt="rating" />
               <img v-if="Number(course.grade) >=4" src="./../assets/img/star.svg" alt="rating" />
               <img v-if="Number(course.grade) >=5" src="./../assets/img/star.svg" alt="rating" />
               <img v-if="Number(course.grade) <1 || Number(course.grade)%1!=0 " src="./../assets/img/sidebar/starHalf.svg" alt="rating" />
               <span class="grade">{{ course.grade }}</span>
               <span class="studens">{{ course.students }}</span>
            </div>


            <div className="course-item__details">
              <p class="teacher's-name">{{ course.teacher }}</p>
              <span class="price">${{ course.price }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import update from '@/composables/update'
import useDoc from '@/composables/useDoc'
import getDocument from '@/composables/getDocument'
import { ref } from '@vue/reactivity'

export default {
  props: ['course'],
  setup() {
    const { addLikedCourse } = update()
    const store = useStore()
    const router = useRouter()
    const teacherInfo = ref()

    const { getSingleDoc } = useDoc()

    const handleClick = async (teacherId) => {
      store.dispatch('getTeacher', teacherId)
    }

    const handleLike = async (id) => {
      await addLikedCourse('users', id)
    }

    return {
      teacherInfo,
      handleClick,
      handleLike,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.col-3 {
  margin-right: vw(30);
  margin-bottom: vw(30);
  width: vw(255);
  height: vw(370);
  .router-link {
    text-decoration: none;
  }
  .course-item {
    background: #ffffff;
    height: vw(370);
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-radius: vw(10);
    &__pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .page {
        padding: vw(8);
        border: solid 1px #4d5e80;
      }
    }
    &__header {
      display: flex;
      justify-content: space-between;
      position: relative;
      padding: vw(20);
      height: vw(180);
      z-index: 1;
    }
    &__image {
      position: absolute;
      left: 0;
      top: 0;
      width: vw(255);
      height: vw(190);
      z-index: -1;
    }
    &__time {
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: vw(30);
      padding: vw(10) vw(20);
      max-height: vw(30);
      span {
        @include font(vw(12), 700, vh(20));
        margin-left: vw(10);
        color: $white;
      }
      img {
        width: vw(16);
        height: vw(16);
      }
    }
    &__like {
      width: vw(50);
      height: vw(50);
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      cursor: pointer;
      z-index: 1;
      img {
        padding: vw(17);
        width: vw(16);
        height: vw(16);
      }
    }
    &__info {
      padding: 0 vw(20);
    }
    &__name {
      @include font(vw(13), 700, vh(25));
      color: #6b7a99;
      margin-bottom: vw(10);
      height: vw(50);
    }
    &__rating {
      margin: 0;

      img {
        width: vw(12);
        height: vw(12);
      }
      span {
        @include font(vw(12), 700, vh(20));
        margin-left: vw(14);
        color: #4d5e80;
      }
    }
    &__details {
      display: flex;
      justify-content: space-between;
      p {
        @include font(vw(12), 700, vh(20));
        color: #7d8fb3;
      }
      span {
        margin-top: vw(8);
        @include font(vw(14), 700, vh(30));
        color: #6b7a99;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .col-3 {
    width: vw(400);
    height: vw(550);
    margin-bottom: vw(70);
    .course-item {
      min-height: vw(550);
      border-radius: vw(10);
      &__header {
        padding: vmin(10);
        height: vmin(50);
      }
      &__image {
        width: vw(400);
        height: vw(300);
        z-index: -1;
        border-radius: vmin(3);
      }
      &__time {
        border-radius: vw(30);
        padding: vw(15) vw(25);
        max-height: vw(30);
        span {
          @include font(vw(20), 700, vh(30));
          margin-left: vw(10);
          color: $white;
        }
        img {
          width: vw(20);
          height: vw(20);
        }
      }
      &__like {
        width: vw(55);
        height: vw(55);
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        cursor: pointer;
        z-index: 1;
        img {
          padding: vw(18);
          width: vw(20);
          height: vw(20);
        }
      }
      &__info {
        padding: 0 vw(20);
      }
      &__name {
        margin-top: vw(30);
        @include font(vw(25), 700, vh(15));
        height: vw(70);
      }
      &__rating {
         margin-top: vw(20);
        img {
          width: vw(20);
          height: vw(20);
        }
        span {
          @include font(vw(20), 700, vh(20));
          margin-left: vw(14);
          color: #4d5e80;
        }
      }
      &__details {
        display: flex;
        align-items: center;
        p {
          @include font(vw(20), 700, vh(15));
          color: #7d8fb3;
          margin: 0;
        }
        span {
          margin: 0;
          @include font(vw(20), 700, vh(20));
          color: #6b7a99;
        }
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .col-3 {
    width: vmin(300);
    height: vmin(400);
    .course-item {
      min-height: vmin(350);
      border-radius: vmin(10);
      &__header {
        padding: vmin(10) vmin(5) vmin(100) vmin(5);
        height: vmin(50);
      }
      &__image {
        width: vmin(300);
        height: vmin(200);
        z-index: -1;
        border-radius: vmin(3);
      }
      &__time {
        border-radius: vmin(30);
        padding: vmin(7) vmin(20);
        max-height: vmin(40);
        span {
          @include font(vmin(13), 700, vmin(20));
          margin-left: vmin(5);
          color: white;
        }
        img {
          width: vmin(10);
          height: vmin(10);
        }
      }
      &__like {
        width: vmin(50);
        height: vmin(50);
        img {
          padding: vmin(15);
          width: vmin(20);
          height: vmin(20);
        }
      }
      &__info {
        margin-top: vmin(70);
        padding: 0 vmin(20);
      }
      &__name {
        @include font(vmin(15), 700, vmin(15));
        color: #6b7a99;
        margin-bottom: vmin(5);
        height: vmin(25);
      }
      &__rating {
        margin: vmin(10) 0 0 0;

        img {
          width: vmin(10);
          height: vmin(10);
        }
        span {
          @include font(vmin(15), 700, vmin(10));
          margin-left: vmin(7);
          color: #4d5e80;
        }
      }
      &__details {
        display: flex;
        justify-content: space-between;
        p {
          @include font(vmin(15), 700, vmin(15));
          color: #7d8fb3;
          margin-top: vmin(10);
        }
        span {
          margin-top: vmin(10);
          @include font(vmin(15), 700, vmin(15));
          color: #6b7a99;
        }
      }
    }
  }
}
</style>
