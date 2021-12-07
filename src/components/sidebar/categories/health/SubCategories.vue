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
