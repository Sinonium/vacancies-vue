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
