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
         <span>System Software</span>
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
