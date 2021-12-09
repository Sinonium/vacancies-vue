<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Physical Fitness' }"
         @click="handleCategories('Physical Fitness')"
      >
         <span>Physical Fitness</span>
      </li>
      <PhysicalFitness @clickedCata="setSubCata" v-if="clickedCategories === 'Physical Fitness'" />
      <li
         :class="{ clicked: clickedCategories === 'Yoga' }"
         @click="handleCategories('Yoga')"
      >
         <span>Yoga</span>
      </li>
      <Yoga @clickedCata="setSubCata" v-if="clickedCategories === 'Yoga'" />
      <li
         :class="{ clicked: clickedCategories === 'Therapeutic Fasting' }"
         @click="handleCategories('Therapeutic Fasting')"
      >
         <span>Therapeutic Fasting</span>
      </li>
      <TherapeuticFasting @clickedCata="setSubCata" v-if="clickedCategories === 'Therapeutic Fasting'" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import PhysicalFitness from "./PhysicalFitness.vue";
   import Yoga from "./Yoga.vue";
   import TherapeuticFasting from "./TherapeuticFasting.vue";
   export default {
      components: { PhysicalFitness, Yoga, TherapeuticFasting },
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
