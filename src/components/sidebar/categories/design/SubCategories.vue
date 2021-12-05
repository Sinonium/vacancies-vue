<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Create</span>
      </li>
      <WebDesign v-if="clickedCategories === 1" />
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Design</span>
      </li>
      <D v-if="clickedCategories === 2" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Introduction</span>
      </li>
      <VideoEditing v-if="clickedCategories === 3" />
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Drawing and Illustration</span>
      </li>
      <DrawingIllustration v-if="clickedCategories === 3" />
   </ul>
</template>

<script lang="ts">
   import { ref } from "@vue/reactivity";
   import WebDesign from "./WebDesign.vue";
   import D from "./3D.vue";
   import VideoEditing from "./VideoEditing.vue";
   import DrawingIllustration from './Drawing&Illustration.vue';
   export default {
      components: { WebDesign, D, VideoEditing, DrawingIllustration },
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories,
         };
      },
   };
</script>
