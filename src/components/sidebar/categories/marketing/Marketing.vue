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
         const categories = [
            "Traditional Marketing",
            "Outbound Marketing",
            "Inbound Marketing",
            "Digital Marketing",
            "Search Engine Marketing",
            "Content Marketing",
            "Social Media Marketing",
            "Video Marketing"

         ];
         const clickedCategories = ref(null);

         return {
            clickedCategories,
            categories
         };
      },
   };
</script>
