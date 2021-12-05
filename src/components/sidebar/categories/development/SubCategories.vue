<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Web Development</span>
      </li>
      <WebDevelopment v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Mobile Apps</span>
      </li>
      <MobileApps v-if="clickedCategories === 2" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Programming Languages</span>
      </li>
      <ProgrammingLanguages v-if="clickedCategories === 3"/>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Game Development</span>
      </li>
      <GameDevelopment v-if="clickedCategories === 4"/>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>Databases</span>
      </li>
      <Databases v-if="clickedCategories === 5"/>
      <li
         :class="{ clicked: clickedCategories === 6 }"
         @click="clickedCategories = 6"
      >
         <span>Software Testing</span>
      </li>
      <SoftwareTesting v-if="clickedCategories === 6"/>
      <li
         :class="{ clicked: clickedCategories === 7 }"
         @click="clickedCategories = 7"
      >
         <span>Software Engineering</span>
      </li>
      <SoftwareEngineering v-if="clickedCategories === 7"/>
      <li
         :class="{ clicked: clickedCategories === 8 }"
         @click="clickedCategories = 8"
      >
         <span>Development Tools</span>
      </li>
      <DevelopmentTools v-if="clickedCategories === 8"/>
      <li
         :class="{ clicked: clickedCategories === 9 }"
         @click="clickedCategories = 9"
      >
         <span>E-Commerce</span>
      </li>
      <ECommerce v-if="clickedCategories === 9"/>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import WebDevelopment from "./WebDevelopment.vue";
   import MobileApps from "./MobileApps.vue";
   import ProgrammingLanguages from "./ProgrammingLanguages.vue";
   import GameDevelopment from "./GameDevelopment.vue";
   import Databases from "./Databases.vue";
   import SoftwareTesting from "./SoftwareTesting.vue";
   import SoftwareEngineering from "./SoftwareEngineering.vue";
   import DevelopmentTools from "./DevelopmentTools.vue";
   import ECommerce from "./ECommerce.vue";
   export default {
      components: {
         WebDevelopment,
         MobileApps,
         ProgrammingLanguages,
         GameDevelopment,
         Databases,
         SoftwareTesting,
         SoftwareEngineering,
         DevelopmentTools,
         ECommerce,
      },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
