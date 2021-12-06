<template>
   <ul class="under">
      <li
         v-for="(cata, index) in categories"
         :key="cata"
         :class="{ clicked: clickedCategories === index }"
         @click="clickedCategories = index"
      >
         <span>{{ cata }}</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const categories = ["B2C / B2B / C2C", "M-commerce", "F-commerce"];
         const clickedCategories = ref(null);

         return {
            clickedCategories,
            categories,
         };
      },
   };
</script>
