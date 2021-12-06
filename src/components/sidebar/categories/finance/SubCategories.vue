<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Analysis</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Accounting</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Programming Languages</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Game Development</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>Databases</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 6 }"
         @click="clickedCategories = 6"
      >
         <span>Software Testing</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 7 }"
         @click="clickedCategories = 7"
      >
         <span>Software Engineering</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 8 }"
         @click="clickedCategories = 8"
      >
         <span>Development Tools</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 9 }"
         @click="clickedCategories = 9"
      >
         <span>E-Commerce</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      components: {

      },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
