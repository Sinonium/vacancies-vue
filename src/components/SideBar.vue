<template>
   <aside class="sidebar">
      <SidebarSearch />
      <div class="sidebar__content">
         <ul class="sidebar__main-group">
            <li @click="list.a = !list.a">
               <span>COURSE CATEGORIES</span>
               <img :class="{clicked : list.a}" :src="arrowExpand" alt="" />
            </li>
            <CourseCategories v-if="list.a"/>
            <li @click="list.b = !list.b">
               <span>PRICELIST</span>
               <img :class="{clicked : list.b}" :src="arrowExpand" alt="" />
            </li>
            <PriceList v-if="list.b"/>
            <li @click="list.c = !list.c">
               <span>STUDENT LEVEL OF TRAINING</span>
               <img :class="{clicked : list.c}" :src="arrowExpand" alt="" />
            </li>
            <LevelOfTraining v-if="list.c"/>
            <li @click="list.d = !list.d">
               <span>COURSE RATING</span>
               <img :class="{clicked : list.d}" :src="arrowExpand" alt="" />
            </li>
            <CourseRating v-if="list.d"/>
            <li @click="list.e = !list.e">
               <span>DURATION COURSES</span>
               <img :class="{clicked : list.e}" :src="arrowExpand" alt="" />
            </li>
            <Duration v-if="list.e"/>
         </ul>
      </div>
   </aside>
</template>

<script>
import { ref } from '@vue/reactivity';
   import CourseCategories from "./sidebar/categories/CourseCategories.vue";
   import CourseRating from "./sidebar/CourseRating.vue";
   import Duration from "./sidebar/Duration.vue";
   import LevelOfTraining from "./sidebar/LevelOfTraining.vue";
   import PriceList from "./sidebar/PriceList.vue";
   import SidebarSearch from "./sidebar/Search.vue";
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
         const list = ref({
            a: true,
            b: true,
            c: true,
            d: true,
            e: true
         })
         return {
            list,
            arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   aside{
         position: fixed;
   }
   .sidebar__content {
      background-color: $greyBlue25;
      height: 90vh;
      overflow-y: scroll;
      .sidebar__main-group {
         padding-bottom: vw(40);
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
            img.clicked{
               transform: rotate(90deg);
            }
         }
      }
   }
</style>
