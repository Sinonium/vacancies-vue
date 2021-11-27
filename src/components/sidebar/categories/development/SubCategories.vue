<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Web Development</span>
      </li>
      <WebDevelopment v-if="clickedCategories === 1"/>
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Mobile Apps</span>
      </li>
      <MobileApps v-if="clickedCategories === 2"/>
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Programming Languages</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Game Development</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>Databases</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 6 }"
         @click="clickedCategories = 6"
      >
         <span>Software Testing</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 7 }"
         @click="clickedCategories = 7"
      >
         <span>Software Engineering</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 8 }"
         @click="clickedCategories = 8"
      >
         <span>Development Tools</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 9 }"
         @click="clickedCategories = 9"
      >
         <span>E-Commerce</span>
      </li>
   </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
import WebDevelopment from './WebDevelopment.vue';
import MobileApps from './MobileApps.vue';
   export default {
  components: { WebDevelopment, MobileApps },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories
         }
      },
   };
</script>
