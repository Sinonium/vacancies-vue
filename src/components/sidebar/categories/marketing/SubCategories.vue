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
