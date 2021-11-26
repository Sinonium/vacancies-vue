<template>
   <ul>
      <li
         @click="clickedCategories = 'dev'"
         :class="{ clicked: clickedCategories === 'dev' }"
      >
         <img :src="devIcon" alt="" />
         <span>Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubDevCategories v-if="clickedCategories === 'dev'"/>
      <li
         @click="clickedCategories = 'bus'"
         :class="{ clicked: clickedCategories === 'bus' }"
      >
         <img :src="busIcon" alt="" />
         <span>Business</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubBusCategories v-if="clickedCategories === 'bus'"/>
      <li
         @click="clickedCategories = 'fin'"
         :class="{ clicked: clickedCategories === 'fin' }"
      >
         <img :src="finIcon" alt="" />
         <span>Finance & Accounting</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'soft'"
         :class="{ clicked: clickedCategories === 'soft' }"
      >
         <img :src="itIcon" alt="" />
         <span>IT & Software</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'office'"
         :class="{ clicked: clickedCategories === 'office' }"
      >
         <img :src="offIcon" alt="" />
         <span>Office Productivity</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'pers'"
         :class="{ clicked: clickedCategories === 'pers' }"
      >
         <img :src="persIcon" alt="" />
         <span>Personal Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'design'"
         :class="{ clicked: clickedCategories === 'design' }"
      >
         <img :src="desigIcon" alt="" />
         <span>Design and Art</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'market'"
         :class="{ clicked: clickedCategories === 'market' }"
      >
         <img :src="markIcon" alt="" />
         <span>Marketing and Sales</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'life'"
         :class="{ clicked: clickedCategories === 'life' }"
      >
         <img :src="lifeIcon" alt="" />
         <span>Lifestyle and Fashion</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'photo'"
         :class="{ clicked: clickedCategories === 'photo' }"
      >
         <img :src="photoIcon" alt="" />
         <span>Photography</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'heal'"
         :class="{ clicked: clickedCategories === 'heal' }"
      >
         <img :src="healIcon" alt="" />
         <span>Health & Fitness</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'music'"
         :class="{ clicked: clickedCategories === 'music' }"
      >
         <img :src="musIcon" alt="" />
         <span>Music and Sound Design</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'teach'"
         :class="{ clicked: clickedCategories === 'teach' }"
      >
         <img :src="teachIcon" alt="" />
         <span>Teaching & Academics</span>
         <img :src="arrowExpand" alt="" />
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import SubDevCategories from "./development/SubCategories.vue";
   import SubBusCategories from './business/SubCategories.vue'
   export default {
      components: {
         SubDevCategories,
         SubBusCategories
      },
      setup() {
         const clickedCategories = ref(null);
         return {
            clickedCategories,
            arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
            devIcon: require("@/assets/img/sidebar/devIcon.svg"),
            busIcon: require("@/assets/img/sidebar/busIcon.svg"),
            finIcon: require("@/assets/img/sidebar/finIcon.svg"),
            itIcon: require("@/assets/img/sidebar/itIcon.svg"),
            offIcon: require("@/assets/img/sidebar/offIcon.svg"),
            persIcon: require("@/assets/img/sidebar/persIcon.svg"),
            desigIcon: require("@/assets/img/sidebar/desigIcon.svg"),
            markIcon: require("@/assets/img/sidebar/markIcon.svg"),
            lifeIcon: require("@/assets/img/sidebar/lifeIcon.svg"),
            photoIcon: require("@/assets/img/sidebar/photoIcon.svg"),
            healIcon: require("@/assets/img/sidebar/healIcon.svg"),
            musIcon: require("@/assets/img/sidebar/musIcon.svg"),
            teachIcon: require("@/assets/img/sidebar/teachIcon.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   ul {
      padding: vw(12);
      margin-top: vw(5);
      li {
         display: flex;
         align-items: center;
         padding: vw(10) 0;
         cursor: pointer;
         span {
            @include font(vw(13), 700, vw(25), $white);
            margin-right: auto;
         }
         img {
            margin: 0 vw(24) 0 vw(34);
            max-height: vw(22);
            max-width: vw(22);
         }
         img:last-child {
            margin-right: vw(32);
            max-width: vw(12);
            max-height: vw(7);
         }
      }
      li.clicked {
         background: #29cc39;
         box-shadow: 0px 10px 30px rgba(41, 204, 57, 0.03);
         border-radius: 5px;
         img:last-child {
            transform: rotate(90deg);
         }
      }
   }
</style>
