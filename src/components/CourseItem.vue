<template>        
        <div class="course-item" @click.prevent="handleMoreInfo">
          <div class="course-item__header">
            <img
              class="course-item__image"
              :src="course.imageURL"
              alt="course"
            />
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
        </div>
</template>

<script>
import { ref } from '@vue/reactivity'
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
      await router.push('/DetailsCourse')
    }

    return {
      handleMoreInfo,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.active {
  @include font(vw(12), 800, vw(20));
  color: $blue !important;
  svg path {
    fill: $blue;
  }
  position: relative;
}
.active::before {
  position: absolute;
  content: '';
  left: vw(-10);
  top: vw(50);
  background-color: $blue;
  width: 120%;
  height: 2px;
}
.filters {
  position: relative;
  ul {
    margin-left: vw(90);
    margin-top: vw(45);
    display: flex;
    list-style-type: none;
    li {
      @include font(vw(12), 700, vw(20), $greyBlue60);
      display: flex;
      align-items: center;
      margin-right: vw(50);
      svg {
        width: vw(20);
        height: vw(20);
        margin-right: vw(15);
      }
    }
  }
}
.filters::before {
  position: absolute;
  content: '';
  left: 0;
  top: vw(50);
  background-color: $greyBlue95;
  width: 100%;
  height: 2px;
}

      .course-item {
        margin: vw(15) vw(10);
        width: vw(255);
        background: #ffffff;
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
  


@media screen and (max-width: 1024px) {
  .active {
    @include font(vmin(6), 800, vmin(10));
  }
  .active::before {
    left: vmin(-2);
    top: vmin(20);
    width: 120%;
  }
  .filters {
    ul {
      margin-left: vmin(20);
      margin-top: vmin(25);
      li {
        @include font(vmin(6), 800, vmin(10), $greyBlue60);
        margin-right: vmin(15);
        svg {
          width: vmin(8);
          height: vmin(8);
          margin-right: vmin(8);
        }
      }
    }
  }
  .filters::before {
    top: vmin(20);
  }

  .course-items {
    width: vmin(320);
    .row {
      display: block;
      margin: vmin(25) 0;
      padding: 0 vmin(70);
      .col-3 {
        display: block;
        max-width: 100%;
        .course-item {
          margin: vmin(15) vmin(10);
          width: vmin(150);
          background: #ffffff;
          box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
          border-radius: 10px;
          &__header {
            display: flex;
            justify-content: space-between;
            position: relative;
            padding: vmin(10);
            height: vmin(90);
            z-index: 1;
          }
          &__image {
            position: absolute;
            left: 0;
            top: 0;
            width: vmin(150);
            height: vmin(90);
            z-index: -1;
          }
          &__time {
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            border-radius: vmin(15);
            padding: 0 vmin(10);
            max-height: vmin(30);
            span {
              @include font(vmin(6), 700, vmin(10));
              margin-left: vmin(10);
              color: $white;
            }
            img {
              width: vmin(8);
              height: vmin(8);
            }
          }
          &__like {
            width: vmin(25);
            height: vmin(25);
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            cursor: pointer;
            z-index: 1;
            img {
              padding: vmin(9);
              width: vmin(8);
              height: vmin(8);
            }
          }
          &__info {
            padding: 0 vmin(10);
          }
          &__name {
            @include font(vmin(7), 700, vmin(13));
            color: #6b7a99;
            margin-bottom: vmin(5);
          }
          &__rating {
            margin: vmin(9) 0;

            img {
              width: vmin(6);
              height: vmin(6);
            }
            span {
              @include font(vmin(6), 700, vmin(10));
              margin-left: vmin(7);
              color: #4d5e80;
            }
          }
          &__details {
            display: flex;
            justify-content: space-between;
            p {
              @include font(vmin(6), 700, vmin(10));
              color: #7d8fb3;
            }
            span {
              margin-top: vmin(4);
              @include font(vmin(7), 700, vmin(15));
              color: #6b7a99;
            }
          }
        }
      }
    }
  }
}
</style>
