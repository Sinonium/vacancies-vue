<template>
   <aside class="sidebar">
      <SidebarSearch />
      <div class="sidebar__content">
         <ul class="sidebar__main-group">
            <li>
               <span>COURSE CATEGORIES</span>
               <img :src="arrowExpand" alt="" />
            </li>
            <CourseCategories />
            <li>
               <span>PRICELIST</span>
               <img :src="arrowExpand" alt="" />
            </li>
            <PriceList />
            <li>
               <span>STUDENT LEVEL OF TRAINING</span>
               <img :src="arrowExpand" alt="" />
            </li>
            <LevelOfTraining />
            <li>
               <span>COURSE RATING</span>
               <img :src="arrowExpand" alt="" />
            </li>
            <CourseRating />
            <li>
               <span>DURATION COURSES</span>
               <img :src="arrowExpand" alt="" />
            </li>
            <Duration />
         </ul>
      </div>
   </aside>
</template>

<script>
   import CourseCategories from "./sidebar/CourseCategories.vue";
   import CourseRating from "./sidebar/CourseRating.vue";
   import Duration from "./sidebar/Duration.vue";
   import LevelOfTraining from "./sidebar/LevelOfTraining.vue";
   import PriceList from "./sidebar/PriceList.vue";
   import SidebarSearch from "./sidebar/SidebarSearch.vue";
   export default {
      components: {
         SidebarSearch,
         CourseCategories,
         PriceList,
         LevelOfTraining,
         CourseRating,
         Duration,
      },
      setup() {
         return {
            arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";

   .sidebar__content {
      background-color: $greyBlue25;
      height: vw(2055);
      .sidebar__main-group {
         li {
            display: flex;
            align-items: center;
            cursor: pointer;
            span {
               @include font(vw(12), 700, vw(20), $greyBlue50);
               margin: vw(25) auto vw(25) vw(30);
            }
            img {
               margin: vw(32);
               max-width: vw(12);
               max-height: vw(7);
            }
         }
      }
   }
</style>
