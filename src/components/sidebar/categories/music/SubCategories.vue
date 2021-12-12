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
