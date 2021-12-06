<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>The Foundations of Sound Design</span>
      </li>
      <FoundationDesign v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Sound Design</span>
      </li>
      <SoundDesign v-if="clickedCategories === 2" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import FoundationDesign from "./FoundationDesign.vue";
   import SoundDesign from "./SoundDesign.vue";
   export default {
      components: { FoundationDesign, SoundDesign },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
