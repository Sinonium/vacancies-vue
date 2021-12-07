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
