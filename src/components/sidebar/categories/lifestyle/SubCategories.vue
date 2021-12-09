<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Create' }"
         @click="handleCategories('Create')"
      >
         <span>Create</span>
      </li>
      <Create @clickedCata="setSubCata" v-if="clickedCategories === 'Create'" />
      <li
         :class="{ clicked: clickedCategories === 'Design' }"
         @click="handleCategories('Design')"
      >
         <span>Design</span>
      </li>
      <Design @clickedCata="setSubCata" v-if="clickedCategories === 'Design'" />
      <li
         :class="{ clicked: clickedCategories === 'Introduction' }"
         @click="handleCategories('Introduction')"
      >
         <span>Introduction</span>
      </li>
      <Introduction
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Introduction'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Create from "./Create.vue";
   import Design from "./Design.vue";
   import Introduction from "./Introduction.vue";
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
