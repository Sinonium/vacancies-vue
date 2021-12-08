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
    const clickedCategories = ref(null)
    const subCategory = ref('');
    const category = ref("");
    const setSubCata = (params) => {
      subCategory.value = params;
      handleCategories(clickedCategories.value)
    };
    const handleCategories = (i) => {
      clickedCategories.value = i
      category.value = i
      context.emit("clickedSubCata", category.value, subCategory.value);
    };

    return {
      category,
      clickedCategories,
      subCategory,
      handleCategories,
      setSubCata,
    };
      },
   };
</script>
