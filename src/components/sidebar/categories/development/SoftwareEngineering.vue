<template>
   <ul class="under">
      <li
         v-for="(cata, index) in categories"
         :key="cata"
         :class="{ clicked: clickedCategories === index }"
         @click="clickedCategories = index, $emit('clickedCata', cata)"
      >
         <span>{{ cata }}</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const categories = [
            "Object oriented programming",
            "Analysis of algorithms",
            "Computer graphics",
            "Cryptography",
         ];
         const clickedCategories = ref(null);

         return {
            clickedCategories,
            categories,
         };
      },
   };
</script>
