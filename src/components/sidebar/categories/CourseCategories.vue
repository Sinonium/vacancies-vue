<template>
   <ul class="categories">
      <li
         @click="clickedCategories = 'dev'"
         :class="{ clickedCata: clickedCategories === 'dev' }"
      >
         <img :src="devIcon" alt="" />
         <span>Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubDevCategories v-if="clickedCategories === 'dev'"/>
      <li
         @click="clickedCategories = 'bus'"
         :class="{ clickedCata: clickedCategories === 'bus' }"
      >
         <img :src="busIcon" alt="" />
         <span>Business</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubBusCategories v-if="clickedCategories === 'bus'"/>
      <li
         @click="clickedCategories = 'fin'"
         :class="{ clickedCata: clickedCategories === 'fin' }"
      >
         <img :src="finIcon" alt="" />
         <span>Finance & Accounting</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'soft'"
         :class="{ clickedCata: clickedCategories === 'soft' }"
      >
         <img :src="itIcon" alt="" />
         <span>IT & Software</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'office'"
         :class="{ clickedCata: clickedCategories === 'office' }"
      >
         <img :src="offIcon" alt="" />
         <span>Office Productivity</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'pers'"
         :class="{ clickedCata: clickedCategories === 'pers' }"
      >
         <img :src="persIcon" alt="" />
         <span>Personal Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'design'"
         :class="{ clickedCata: clickedCategories === 'design' }"
      >
         <img :src="desigIcon" alt="" />
         <span>Design and Art</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'market'"
         :class="{ clickedCata: clickedCategories === 'market' }"
      >
         <img :src="markIcon" alt="" />
         <span>Marketing and Sales</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'life'"
         :class="{ clickedCata: clickedCategories === 'life' }"
      >
         <img :src="lifeIcon" alt="" />
         <span>Lifestyle and Fashion</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'photo'"
         :class="{ clickedCata: clickedCategories === 'photo' }"
      >
         <img :src="photoIcon" alt="" />
         <span>Photography</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'heal'"
         :class="{ clickedCata: clickedCategories === 'heal' }"
      >
         <img :src="healIcon" alt="" />
         <span>Health & Fitness</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'music'"
         :class="{ clickedCata: clickedCategories === 'music' }"
      >
         <img :src="musIcon" alt="" />
         <span>Music and Sound Design</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="clickedCategories = 'teach'"
         :class="{ clickedCata: clickedCategories === 'teach' }"
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