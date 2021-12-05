<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Physical Fitness</span>
      </li>
      <PhysicalFitness v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Yoga</span>
      </li>
      <Yoga v-if="clickedCategories === 2" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Therapeutic Fasting</span>
      </li>
      <TherapeuticFasting v-if="clickedCategories === 3" />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import PhysicalFitness from "./PhysicalFitness.vue";
   import Yoga from "./Yoga.vue";
   import TherapeuticFasting from "./TherapeuticFasting.vue";
   export default {
      components: { PhysicalFitness, Yoga, TherapeuticFasting },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
