<template>
   <div class="col-3">
      <div v-if="course" class="course-item">
         <div class="course-item__header">
            <img
               class="course-item__image"
               :src="course.imageUrl"
               alt="course"
            />
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
            @click="handleMoreInfo()"
            class="router-link"
         >
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
   import { useStore } from "vuex";
   import { useRouter } from "vue-router";
   import update from "@/composables/update";

   export default {
      props: ["course"],
      setup(props) {
         const { addLikedCourse } = update();
         const store = useStore();
         const router = useRouter();
         const handleMoreInfo = async () => {
            await store.dispatch("getMoreInfo", {
               moreInfoId: props.course.moreInfoId,
               courseId: props.course.id,
            });
         };

         const handleLike = async (id) => {
            await addLikedCourse("users", id);
         };

         return {
            handleLike,
            handleMoreInfo,
         };
      },
   };
</script>

<style lang="scss">
   @import "@/assets/scss/index.scss";
   .col-3 {
      margin-right: vw(30);
      margin-bottom: vw(30);
      width: vw(255);
      .router-link {
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
         margin: 0 auto;
         margin-bottom: vmin(15);
         width: vmin(250);
         .course-item {
            min-height: vmin(230);
            border-radius: vmin(10);
            &__header {
               padding: vmin(10);
               height: vmin(50);
            }
            &__image {
               width: vmin(250);
               height: vmin(130);
               z-index: -1;
               border-radius: vmin(3);
            }
            &__time {
               border-radius: vmin(15);
               padding: vmin(5) vmin(10);
               max-height: vmin(15);
               span {
                  @include font(vmin(9), 700, vmin(20));
                  margin-left: vmin(5);
                  color: white;
               }
               img {
                  width: vmin(10);
                  height: vmin(10);
               }
            }
            &__like {
               width: vmin(25);
               height: vmin(25);
               img {
                  padding: vmin(9);
                  width: vmin(10);
                  height: vmin(10);
               }
            }
            &__info {
               margin-top: vmin(80);
               padding: 0 vmin(20);
            }
            &__name {
               @include font(vmin(10), 700, vmin(25));
               color: #6b7a99;
               margin-bottom: vmin(5);
               height: vmin(25);
            }
            &__rating {
               margin: vmin(8) 0;

               img {
                  width: vmin(6);
                  height: vmin(6);
               }
               span {
                  @include font(vmin(10), 700, vmin(10));
                  margin-left: vmin(7);
                  color: #4d5e80;
               }
            }
            &__details {
               display: flex;
               justify-content: space-between;
               p {
                  @include font(vmin(10), 700, vmin(10));
                  color: #7d8fb3;
                  margin-top: vmin(-7);
               }
               span {
                  margin-top: vmin(-4);
                  @include font(vmin(10), 700, vmin(15));
                  color: #6b7a99;
               }
            }
         }

         img {
            width: vmin(5);
            height: vmin(5);
         }
         span {
            @include font(vw(20), 700, vw(20));
            margin-left: vmin(7);
            color: #4d5e80;
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
</style>
