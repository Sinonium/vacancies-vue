<template>
   <aside class="sidebar">
      <SidebarSearch />
      <div class="sidebar__content">
         <PerfectScrollbar >
         <ul class="sidebar__main-group">
            <li @click="list.a = !list.a">
               <span class="title">COURSE CATEGORIES</span>
               <img class="arrow" :class="{ clicked: list.a }" :src="arrowExpand" alt="" />
            </li>
            <CourseCategories v-if="list.a" />
            <li @click="list.b = !list.b">
               <span class="title">PRICELIST</span>
               <img class="arrow" :class="{ clicked: list.b }" :src="arrowExpand" alt="" />
            </li>
            <PriceList v-if="list.b" />
            <li @click="list.c = !list.c">
               <span class="title">STUDENT LEVEL OF TRAINING</span>
               <img class="arrow" :class="{ clicked: list.c }" :src="arrowExpand" alt="" />
            </li>
            <LevelOfTraining v-if="list.c" />
            <li @click="list.d = !list.d">
               <span class="title">COURSE RATING</span>
               <img class="arrow" :class="{ clicked: list.d }" :src="arrowExpand" alt="" />
            </li>
            <CourseRating v-if="list.d" />
            <li @click="list.e = !list.e">
               <span class="title">DURATION COURSES</span>
               <img class="arrow" :class="{ clicked: list.e }" :src="arrowExpand" alt="" />
            </li>
            <Duration v-if="list.e" />
         </ul>
         </PerfectScrollbar>
      </div>
   </aside>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
   import CourseCategories from "./sidebar/categories/CourseCategories.vue";
   import CourseRating from "./sidebar/CourseRating.vue";
   import Duration from "./sidebar/Duration.vue";
   import LevelOfTraining from "./sidebar/LevelOfTraining.vue";
   import PriceList from "./sidebar/PriceList.vue";
   import SidebarSearch from "./sidebar/Search.vue";
   export default {
      components: {
         PerfectScrollbar,
         SidebarSearch,
         CourseCategories,
         PriceList,
         LevelOfTraining,
         CourseRating,
         Duration,
      },
      setup() {
         const list = ref({
            a: true,
            b: true,
            c: true,
            d: true,
            e: true,
         });
         return {
            list,
            arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
         };
      },
   };
</script>

<style lang="scss">
   @import "@/assets/scss/index.scss";
   @import "~perfect-scrollbar/css/perfect-scrollbar.css";
   aside {
      position: fixed;
   }
   .ps{
      position: relative;
      height: 88vh;
   }
   .sidebar__content {
      background-color: $greyBlue25;
      .sidebar__main-group {
         padding-bottom: vw(80);
         li {
            display: flex;
            align-items: center;
            cursor: pointer;
            span.title {
               @include font(vw(12), 700, vw(20), $greyBlue50);
               margin: vw(25) auto vw(25) vw(30);
            }
            img.arrow {
               margin: vw(32);
               max-width: vw(12);
               max-height: vw(7);
            }
            img.clicked {
               transform: rotate(90deg);
            }
         }
         .categories {
            li {
               display: grid;
               padding: vw(10) 0;
               cursor: pointer;
               grid-template-columns: 1.5fr 4fr 0.8fr;
               span {
                  @include font(vw(13), 700, vw(25), $white);
               }
               img:first-child {
                  margin-left: vw(34);
                  max-height: vw(22);
                  max-width: vw(22);
               }
               img:last-child {
                  margin-right: vw(32);
                  max-width: vw(12);
                  max-height: vw(7);
               }
            }
            li.clickedCata {
               background: #29cc39;
               box-shadow: 0px 10px 30px rgba(41, 204, 57, 0.03);
               border-radius: 5px;
               img:last-child {
                  transform: rotate(90deg);
               }
            }
            .sub {
               margin-left: vw(77);
               li {
                  display: flex;
                  list-style: none;
                  cursor: pointer;
                  span {
                     position: relative;
                     @include font(vw(12), 700, vw(20), $greyBlue80);
                  }
                  span::before {
                     content: "";
                     position: absolute;
                     left: vw(-31);
                     bottom: 35%;
                     background-color: #fff;
                     width: vw(6.6);
                     height: vw(6.6);
                     border-radius: 50%;
                  }
               }
               li.clicked {
                  span {
                     color: #ffffff;
                  }
                  span::before {
                     background-color: $green;
                  }
               }
               .under {
                  margin-left: vw(32);
               }
            }
         }
      }
   }
</style>
