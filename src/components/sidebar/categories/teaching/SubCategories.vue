<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Languages' }"
         @click="handleCategories('Languages')"
      >
         <span>Languages</span>
      </li>
      <Languages
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Languages'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Scientific subjects' }"
         @click="handleCategories('Scientific subjects')"
      >
         <span>Scientific subjects</span>
      </li>
      <ScientificSubjects
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Scientific subjects'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Languages from "./Languages.vue";
   import ScientificSubjects from "./ScientificSubjects.vue";
   export default {
      components: { Languages, ScientificSubjects },
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
