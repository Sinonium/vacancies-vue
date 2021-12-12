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
