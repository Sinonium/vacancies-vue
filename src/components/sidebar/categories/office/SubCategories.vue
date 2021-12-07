<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Coding' }"
         @click="handleCategories('Coding')"
      >
         <span>Coding</span>
      </li>
      <Coding
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Coding'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Algorithms' }"
         @click="handleCategories('Algorithms')"
      >
         <span>Algorithms</span>
      </li>
      <Algorithms
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Algorithms'"
      />
      <li
         :class="{ clicked: clickedCategories === 'CRM' }"
         @click="handleCategories('CRM')"
      >
         <span>CRM</span>
      </li>
      <CRM
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'CRM'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Architecture' }"
         @click="handleCategories('Architecture')"
      >
         <span>Architecture</span>
      </li>
      <Architecture
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Architecture'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Coding from "./Coding.vue";
   import Algorithms from "./Algorithms.vue";
   import CRM from "./CRM.vue";
   import Architecture from "./Architecture.vue";
   export default {
      components: {
         Coding,
         Algorithms,
         CRM,
         Architecture,
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
