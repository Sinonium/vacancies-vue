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
