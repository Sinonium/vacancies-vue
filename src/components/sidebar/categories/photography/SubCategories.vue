<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Direction to choose</span>
      </li>
      <Create v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Introduction to Photography</span>
      </li>
      <Design v-if="clickedCategories === 2" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Working with the model</span>
      </li>
      <Introduction v-if="clickedCategories === 3" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Create from "./DirectionToChoose.vue";
   import Design from "./IntroductionPhoto.vue";
   import Introduction from "./WorkingWithModel.vue";
   export default {
      components: { Create, Design, Introduction },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
