<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Crisis management</span>
      </li>
      <CrisisManagement v-if="clickedCategories === 1"/>
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Project activities</span>
      </li>
      <ProjectActivities v-if="clickedCategories === 2"/>
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Service. Work with clients</span>
      </li>
      <ServiceWorkWithClients v-if="clickedCategories === 3"/>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Analytics</span>
      </li>
      <Analytics v-if="clickedCategories === 4"/>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>Management</span>
      </li>
      <Management v-if="clickedCategories === 5"/>
      <li
         :class="{ clicked: clickedCategories === 6 }"
         @click="clickedCategories = 6"
      >
         <span>Sales</span>
      </li>
      <Sales v-if="clickedCategories === 6"/>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import CrisisManagement from "./CrisisManagement.vue";
   import ProjectActivities from "./ProjectActivities.vue";
   import ServiceWorkWithClients from "./ServiceWorkWithClients.vue";
   import Analytics from "./Analytics.vue";
   import Management from "./Management.vue";
   import Sales from ".//Sales.vue";
   export default {
      components: {
         CrisisManagement,
         ProjectActivities,
         ServiceWorkWithClients,
         Analytics,
         Management,
         Sales,
      },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
