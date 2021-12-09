<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Direction to choose' }"
         @click="handleCategories('Direction to choose')"
      >
         <span>Direction to choose</span>
      </li>
      <Create @clickedCata="setSubCata" v-if="clickedCategories === 'Direction to choose'" />
      <li
         :class="{ clicked: clickedCategories === 'Introduction to Photography' }"
         @click="handleCategories('Introduction to Photography')"
      >
         <span>Introduction to Photography</span>
      </li>
      <Design @clickedCata="setSubCata" v-if="clickedCategories === 'Introduction to Photography'" />
      <li
         :class="{ clicked: clickedCategories === 'Working with the mode' }"
         @click="handleCategories('Working with the mode')"
      >
         <span>Working with the model</span>
      </li>
      <Introduction @clickedCata="setSubCata" v-if="clickedCategories === 'Working with the mode'" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Create from "./DirectionToChoose.vue";
   import Design from "./IntroductionPhoto.vue";
   import Introduction from "./WorkingWithModel.vue";
   export default {
      components: { Create, Design, Introduction },
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
