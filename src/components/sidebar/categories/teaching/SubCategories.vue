<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Languages</span>
      </li>
      <Languages v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Scientific subjects</span>
      </li>
      <ScientificSubjects v-if="clickedCategories === 2" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Languages from "./Languages.vue";
   import ScientificSubjects from "./ScientificSubjects.vue";
   export default {
      components: { Languages, ScientificSubjects },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
