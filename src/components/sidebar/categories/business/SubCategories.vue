<template>
  <ul class="sub">
    <li
      :class="{ clicked: clickedCategories === 'Crisis management' }"
      @click="handleCategories('Crisis management')"
    >
      <span>Crisis management</span>
    </li>
    <CrisisManagement
      @clickedCata="setSubCata"
      v-if="clickedCategories === 'Crisis management'"
    />
    <li
      :class="{ clicked: clickedCategories === 'Project activities' }"
      @click="handleCategories('Project activities')"
    >
      <span>Project activities</span>
    </li>
    <ProjectActivities
      @clickedCata="setSubCata"
      v-if="clickedCategories === 'Project activities'"
    />
    <li
      :class="{ clicked: clickedCategories === 'Service' }"
      @click="handleCategories('Service')"
    >
      <span>Service. Work with clients</span>
    </li>
    <ServiceWorkWithClients
      @clickedCata="setSubCata"
      v-if="clickedCategories === 'Service'"
    />
    <li
      :class="{ clicked: clickedCategories === 'Analytics' }"
      @click="handleCategories('Analytics')"
    >
      <span>Analytics</span>
    </li>
    <Analytics
      @clickedCata="setSubCata"
      v-if="clickedCategories === 'Analytics'"
    />
    <li
      :class="{ clicked: clickedCategories === 'Management' }"
      @click="handleCategories('Management')"
    >
      <span>Management</span>
    </li>
    <Management
      @clickedCata="setSubCata"
      v-if="clickedCategories === 'Management'"
    />
    <li
      :class="{ clicked: clickedCategories === 'Sales' }"
      @click="handleCategories('Sales')"
    >
      <span>Sales</span>
    </li>
    <Sales @clickedCata="setSubCata" v-if="clickedCategories === 'Sales'" />
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
  setup(props, context) {
    const clickedCategories = ref(null);
    const subCategory = ref("");
    const category = ref("");
    const setSubCata = (params) => {
      subCategory.value = params;
      handleCategories(clickedCategories.value);
    };
    const handleCategories = (i) => {
      clickedCategories.value = i;
      category.value = i;
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
