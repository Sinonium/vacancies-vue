<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Software' }"
         @click="handleCategories('Software')"
      >
         <span>Software</span>
      </li>
      <Software
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Software'"
      />
      <li
         :class="{ clicked: clickedCategories === 'SystemSoftware' }"
         @click="handleCategories('SystemSoftware')"
      >
         <span>SystemSoftware</span>
      </li>
      <SystemSoftware
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'SystemSoftware'"
      />
      <li
         :class="{ clicked: clickedCategories === 'ApplicationSoftware' }"
         @click="handleCategories('ApplicationSoftware')"
      >
         <span>Application Software</span>
      </li>
      <ApplicationSoftware
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'ApplicationSoftware'"
      />
      <li
         :class="{ clicked: clickedCategories === 'OperatingSystem' }"
         @click="handleCategories('OperatingSystem')"
      >
         <span>Operating System</span>
      </li>
      <OperatingSystem
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'OperatingSystem'"
      />
      <li
         :class="{ clicked: clickedCategories === 'OSTypes' }"
         @click="handleCategories('OSTypes')"
      >
         <span>OS Types</span>
      </li>
      <OSTypes
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'OSTypes'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import Software from "./Software.vue";
   import SystemSoftware from "./SystemSoftware.vue";
   import ApplicationSoftware from "./ApplicationSoftware.vue";
   import OperatingSystem from "./OperatingSystem.vue";
   import OSTypes from "./OSTypes.vue";
   export default {
      components: {
         Software,
         SystemSoftware,
         ApplicationSoftware,
         OperatingSystem,
         OSTypes,
      },
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
