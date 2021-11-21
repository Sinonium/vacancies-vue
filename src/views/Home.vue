<template>
  <div class="courses-info">
      <img class="courses-info__image" src="./../assets/img/courses-info.png" alt="">
      <div class="courses-info__block">
        
      <div class="courses-info__title">
          <img class="sticker" src="./../assets/img/stickers.svg" alt="">
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
  
          <div>
          <h5 class="about-students">Students are learning JavaScript on Courses</h5>
          </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  <CourseItem />
</template>

<script>
import DetailsAboutTeach from '../components/DetailsAboutTeach/DetailsAboutTeach.vue'
import CourseItem from '../components/CourseItem.vue'
export default {
  components: { CourseItem, DetailsAboutTeach },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
   .courses-info{
       margin: vw(120) vw(30);
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
               margin-top: vw(50);
           }
           .sticker{
               width: vw(96);
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

@media screen and (max-width: 1024px) {
       .courses-info{
       margin: vmin(60) vmin(15);
       
       
       &__image{
           width: vmin(300);
           height: vmin(130);
       }
       &__block{
           padding: vmin(20) 0 vmin(20) vmin(15);
           
           
       }
       &__title{
           display: block;
            .name{
               @include font(vmin(10),700,vmin(25));
               color: $white;
               margin-top: vmin(35);
               display: flex;
               flex-wrap: nowrap;
           }
           .sticker{
               width: vmin(45);
           }
       }
       &__block-2{
          margin: 0 0 0 vmin(30);
          p{
              @include font(vmin(8), 600, vmin(10));
              color: $white;
              opacity: 0.3;
          }
          h5{
              @include font(vmin(7), 600, vmin(5)); 
              color: $white;
          }
       }
       &__students{
           display: block;
           margin-top: vmin(5);
          .students{
              @include font(vmin(5), 700, vmin(5));
              color: $white;
              margin-top: vmin(11);
          }
          
          img{
              width: vmin(10);
          }
       }
   } 
}
</style>
