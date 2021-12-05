<template>
   <ul class="categories">
      <li
         @click="handleClick('dev')"
         :class="{ clickedCata: clickedCategories === 'dev' }"
      >
         <img :src="devIcon" alt="" />
         <span>Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubDevCategories v-if="clickedCategories === 'dev'" />
      <li
         @click="handleClick('bus')"
         :class="{ clickedCata: clickedCategories === 'bus' }"
      >
         <img :src="busIcon" alt="" />
         <span>Business</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubBusCategories v-if="clickedCategories === 'bus'" />
      <li
         @click="handleClick('fin')"
         :class="{ clickedCata: clickedCategories === 'fin' }"
      >
         <img :src="finIcon" alt="" />
         <span>Finance & Accounting</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubFinanceCategories v-if="clickedCategories === 'fin'"/>
      <li
         @click="handleClick('soft')"
         :class="{ clickedCata: clickedCategories === 'soft' }"
      >
         <img :src="itIcon" alt="" />
         <span>IT & Software</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="handleClick('office')"
         :class="{ clickedCata: clickedCategories === 'office' }"
      >
         <img :src="offIcon" alt="" />
         <span>Office Productivity</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="handleClick('pers')"
         :class="{ clickedCata: clickedCategories === 'pers' }"
      >
         <img :src="persIcon" alt="" />
         <span>Personal Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li
         @click="handleClick('design')"
         :class="{ clickedCata: clickedCategories === 'design' }"
      >
         <img :src="desigIcon" alt="" />
         <span>Design and Art</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubDesignCategories v-if="clickedCategories === 'design'" />
      <li
         @click="handleClick('market')"
         :class="{ clickedCata: clickedCategories === 'market' }"
      >
         <img :src="markIcon" alt="" />
         <span>Marketing and Sales</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubMarketingCategories v-if="clickedCategories === 'market'" />
      <li
         @click="handleClick('life')"
         :class="{ clickedCata: clickedCategories === 'life' }"
      >
         <img :src="lifeIcon" alt="" />
         <span>Lifestyle and Fashion</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubLifeStyleCategories v-if="clickedCategories === 'life'" />
      <li
         @click="handleClick('photo')"
         :class="{ clickedCata: clickedCategories === 'photo' }"
      >
         <img :src="photoIcon" alt="" />
         <span>Photography</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubPhotoCategories v-if="clickedCategories === 'photo'" />
      <li
         @click="handleClick('heal')"
         :class="{ clickedCata: clickedCategories === 'heal' }"
      >
         <img :src="healIcon" alt="" />
         <span>Health & Fitness</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubHealthCategories v-if="clickedCategories === 'heal'" />
      <li
         @click="handleClick('music')"
         :class="{ clickedCata: clickedCategories === 'music' }"
      >
         <img :src="musIcon" alt="" />
         <span>Music and Sound Design</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubMusicCategories v-if="clickedCategories === 'music'" />
      <li
         @click="handleClick('teach')"
         :class="{ clickedCata: clickedCategories === 'teach' }"
      >
         <img :src="teachIcon" alt="" />
         <span>Teaching & Academics</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <SubTeachCategories v-if="clickedCategories === 'teach'" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import SubDevCategories from "./development/SubCategories.vue";
   import SubBusCategories from "./business/SubCategories.vue";
   import SubFinanceCategories from './finance/SubCategories.vue'
   import SubDesignCategories from "./design/SubCategories.vue";
   import SubMarketingCategories from "./marketing/SubCategories.vue";
   import SubLifeStyleCategories from "./lifestyle/SubCategories.vue";
   import SubPhotoCategories from "./photography/SubCategories.vue";
   import SubHealthCategories from "./health/SubCategories.vue";
   import SubMusicCategories from "./music/SubCategories.vue";
   import SubTeachCategories from './teaching/SubCategories.vue'
   export default {
      components: {
         SubDevCategories,
         SubBusCategories,
         SubFinanceCategories,
         SubDesignCategories,
         SubMarketingCategories,
         SubLifeStyleCategories,
         SubPhotoCategories,
         SubHealthCategories,
         SubMusicCategories,
         SubTeachCategories,
      },
      setup() {
         const handleClick = (i) => {
            if (clickedCategories.value !== i) {
              return clickedCategories.value = i
            } else {
              return clickedCategories.value = null
            }
         }
         const clickedCategories = ref(null);
         return {
            handleClick,
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
