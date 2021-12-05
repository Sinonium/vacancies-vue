<template>
<ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Create</span>
      </li>
      <Create v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Design</span>
      </li>
      <Design v-if="clickedCategories === 2" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Introduction</span>
      </li>
      <Introduction v-if="clickedCategories === 3" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Create from "./Create.vue";
   import Design from "./Design.vue";
   import Introduction from "./Introduction.vue";
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
