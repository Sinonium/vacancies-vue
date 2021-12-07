<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Marketing' }"
         @click="handleCategories('Marketing')"
      >
         <span>Marketing</span>
      </li>
      <Marketing
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Marketing'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Sales' }"
         @click="handleCategories('Sales')"
      >
         <span>Sales</span>
      </li>
      <Sales @clickedCata="setSubCata" v-if="clickedCategories === 'Sales'" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Marketing from "./Marketing.vue";
   import Sales from "./Sales.vue";
   export default {
      components: { Marketing, Sales },
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
