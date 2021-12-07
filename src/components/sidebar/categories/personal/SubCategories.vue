<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Communication' }"
         @click="handleCategories('Communication')"
      >
         <span>Communication</span>
      </li>
      <Communication
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Communication'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Thinking' }"
         @click="handleCategories('Thinking')"
      >
         <span>Thinking</span>
      </li>
      <Thinking @clickedCata="setSubCata" v-if="clickedCategories === 'Thinking'" />
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
         :class="{ clicked: clickedCategories === 'ReadingClub' }"
         @click="handleCategories('ReadingClub')"
      >
         <span>Reading Club</span>
      </li>
      <ReadingClub
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'ReadingClub'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Communication from "./Communication.vue";
   import Thinking from "./Thinking.vue";
   import Languages from "./Languages.vue";
   import ReadingClub from "./ReadingClub.vue";
   export default {
      components: { Communication, Thinking, Languages, ReadingClub },
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
