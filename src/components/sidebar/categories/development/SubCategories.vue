<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Web Development' }"
         @click="handleCategories('Web Development')"
      >
         <span>Web Development</span>
      </li>
      <WebDevelopment
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Web Development'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Mobile Apps' }"
         @click="handleCategories('Mobile Apps')"
      >
         <span>Mobile Apps</span>
      </li>
      <MobileApps
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Mobile Apps'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Programming Languages' }"
         @click="handleCategories('Programming Languages')"
      >
         <span>Programming Languages</span>
      </li>
      <ProgrammingLanguages
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Programming Languages'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Game Development' }"
         @click="handleCategories('Game Development')"
      >
         <span>Game Development</span>
      </li>
      <GameDevelopment
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Game Development'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Databases' }"
         @click="handleCategories('Databases')"
      >
         <span>Databases</span>
      </li>
      <Databases
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Databases'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Software Testing' }"
         @click="handleCategories('Software Testing')"
      >
         <span>Software Testing</span>
      </li>
      <SoftwareTesting
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Software Testing'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Software Engineering' }"
         @click="handleCategories('Software Engineering')"
      >
         <span>Software Engineering</span>
      </li>
      <SoftwareEngineering
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Software Engineering'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Development Tools' }"
         @click="handleCategories('Development Tools')"
      >
         <span>Development Tools</span>
      </li>
      <DevelopmentTools
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Development Tools'"
      />
      <li
         :class="{ clicked: clickedCategories === 'E-Commerce' }"
         @click="handleCategories('E-Commerce')"
      >
         <span>E-Commerce</span>
      </li>
      <ECommerce
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'E-Commerce'"
      />
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
      setup(props, context) {
         const subCategory = ref(undefined);
         const setSubCata = (params) => {
            subCategory.value = params;
         };
         const handleCategories = (cata) => {
            if (cata === clickedCategories.value) {
               clickedCategories.value = cata;
               context.emit("clickedSubCata", cata, subCategory.value);
            } else {
               clickedCategories.value = cata;
               subCategory.value = undefined;
               context.emit("clickedSubCata", cata, subCategory.value);
            }
         };
         const clickedCategories = ref(null);

         return {
            clickedCategories,
            subCategory,
            handleCategories,
            setSubCata,
         };
      },
   };
</script>
