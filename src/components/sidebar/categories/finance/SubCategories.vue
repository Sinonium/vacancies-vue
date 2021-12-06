<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Analysis' }"
         @click="handleCategories('Analysis')"
      >
         <span>Analysis</span>
      </li>
      <Analysis
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Analysis'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Accounting' }"
         @click="handleCategories('Accounting')"
      >
         <span>Accounting</span>
      </li>
      <Accounting
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Accounting'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Microeconomics' }"
         @click="handleCategories('Microeconomics')"
      >
         <span>Microeconomics</span>
      </li>
      <Microeconomics
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Microeconomics'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Banking' }"
         @click="handleCategories('Banking')"
      >
         <span>Banking</span>
      </li>
      <Banking
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Banking'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Еaxes' }"
         @click="handleCategories('Еaxes')"
      >
         <span>Еaxes</span>
      </li>
      <Eaxes @clickedCata="setSubCata" v-if="clickedCategories === 'Еaxes'"/>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Analysis from "./Analysis.vue";
   import Accounting from "./Accounting.vue";
   import Microeconomics from "./Microeconomics.vue";
   import Banking from "./Banking.vue";
   import Eaxes from "./Eaxes.vue";
   export default {
      components: {
         Analysis,
         Accounting,
         Microeconomics,
         Banking,
         Eaxes,
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
