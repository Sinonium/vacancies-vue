<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Marketing</span>
      </li>
      <Marketing v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Sales</span>
      </li>
      <Sales v-if="clickedCategories === 2" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Marketing from "./Marketing.vue";
   import Sales from "./Sales.vue";
   export default {
      components: { Marketing, Sales },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
