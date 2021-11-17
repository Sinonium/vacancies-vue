<template>
  <div class="courses-info">
      <img class="courses-info__image" src="./../assets/img/courses-info.png" alt="">
      <div class="courses-info__block">
      <div class="courses-info__title">
          <img src="./../assets/img/stickers.svg" alt="">
          <h3 class="name">Java Script Courses</h3>
      </div>
      <div class="courses-info__block-2">
      <div class="courses-info__content">
          <p class="categories">Related Categories:</p>
          <h5>Development 
             It & Software
             Web Development</h5>
      </div>
      <div class="courses-info__students">
          <img src="./../assets/img/students.svg" alt="">
          <span class="students">4,454,356</span>
          <h5 class="about-students">Students are learning JavaScript on Courses</h5>
      </div>
      </div>
      </div>
  </div>
  <CourseItem/>
</template>

<script>

import CourseItem from '../components/CourseItem.vue'
export default {
  components: { CourseItem },
 }
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
   .courses-info{
       margin: vw(120) 0 0 vw(360);
       position: relative;
       &__image{
           width: vw(1210);
       }
       &__block{
           padding: vw(45) vw(70);
           display: flex;
           position: absolute;
           left: 0;
           top: 0;
       }
       &__title{
           display: block;
            .name{
               @include font(vw(30),700,vh(50));
               color: $white;
           }
       }
       &__block-2{
          margin: 0 vw(180);
          p{
              @include font(vw(13), 600, vh(25));
              color: $white;
              opacity: 0.3;
          }
          h5{
              @include font(vw(13), 600, vh(25)); 
              color: $white;
          }
       }
       &__students{
           display: inline-flex;
          .students{
              @include font(vw(13), 700, vh(25));
              color: $white;
              margin: vw(23);
          }
       }
   }
</style>
