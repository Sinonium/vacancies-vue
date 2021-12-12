<template>
  <div class="col-3">
    <div class="course-item">
    <router-link :to="{name: 'DetailsCourse', params: {id: course.moreInfoId}}"  @click="handleMoreInfo()" class="router-link">
      <div class="course-item__header">
        <img class="course-item__image" :src="course.imageUrl" alt="course" />
        <div class="course-item__time">
          <img src="./../assets/img/clock.svg" alt="time" />
          <span>{{ course.time }} hours</span>
        </div>
        <div class="course-item__like">
          <img src="./../assets/img/like.svg" alt="like" />
        </div>
      </div>
      <div className="curse-item__bottom">
        <div className="course-item__info">
          <h3 className="course-item__name">{{ course.name }}</h3>
          <div className="course-item__rating">
            <img src="./../assets/img/star.svg" alt="rating" />
            <img src="./../assets/img/star.svg" alt="rating" />
            <img src="./../assets/img/star.svg" alt="rating" />
            <img src="./../assets/img/star.svg" alt="rating" />
            <img src="./../assets/img/star.svg" alt="rating" />
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

export default {
  props: ['course'],
  setup(props) {
    const store = useStore()
    const router = useRouter()
    const handleMoreInfo = async () => {
      await store.dispatch('getMoreInfo', {
        moreInfoId: props.course.moreInfoId,
        courseId: props.course.id,
      })
    }

    return {
      handleMoreInfo,
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
.router-link{
  text-decoration: none;
}
.course-item {
  background: #ffffff;
  max-height: vw(370);
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
    margin: vw(19) 0;

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

@media screen and (max-width: 1024px) {
  .col-3 {
      width: vw(320);
      height: vw(430);
      background-color: #ffffff;
       border-radius: vw(10);
        .course-item {
          width: vw(320);
          height: vw(430);
         
          
          &__header {
            padding: vw(10);
            height: vw(90);
            z-index: 1;
          }
          &__image {
            width: vw(320);
            height: vw(220);
          }
          &__time {
            border-radius: vw(30);
            padding: vw(10) vw(20);
            max-height: vw(40);
            span {
              @include font(vw(20), 700, vw(20));
              margin-left: vw(20);
              color: $white;
            }
            img {
              width: vw(20);
              height: vw(20);
            }
          }
          &__like {
            width: vmin(15);
            height: vmin(15);
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1;
            img {
              padding: 0;
              width: vmin(5);
              height: vmin(5);
            }
          }
          &__info {
            margin-top: vw(140);
            padding: 0 vw(15);
          }
          &__name {
            @include font(vw(20), 700, vw(30));
            color: #6b7a99;
            margin-bottom: 0;
          }
          &__rating {
            margin:  0;
            margin-top: vw(20);

            img {
              width: vmin(5);
              height: vmin(5);
            }
            span {
              @include font(vw(20), 700, vw(20));
              margin-left: vmin(7);
              color: #4d5e80;
            }
          }
          &__details {
            display: flex;
            justify-content: space-between;
            margin-top: vw(10);
            p {
              margin: 0;
              @include font(vw(20), 700, vw(30));
              color: #7d8fb3;
            }
            span {
              margin-top: vmin(4);
              @include font(vw(20), 700, vw(20));
              color: #6b7a99;
            }
          }
        }
      }
}

</style>
