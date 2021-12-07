<template>
   <ul class="sub">
      <li
         :class="{
            clicked: clickedCategories === 'The Foundations of Sound Design',
         }"
         @click="handleCategories('The Foundations of Sound Design')"
      >
         <span>The Foundations of Sound Design</span>
      </li>
      <FoundationDesign
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'The Foundations of Sound Design'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Sound Design' }"
         @click="handleCategories('Sound Design')"
      >
         <span>Sound Design</span>
      </li>
      <SoundDesign
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Sound Design'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import FoundationDesign from "./FoundationDesign.vue";
   import SoundDesign from "./SoundDesign.vue";
   export default {
      components: { FoundationDesign, SoundDesign },
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
