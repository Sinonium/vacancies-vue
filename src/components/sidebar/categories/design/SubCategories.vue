<template>
   <ul class="sub">
      <li
         :class="{ clicked: clickedCategories === 'Web design' }"
         @click="handleCategories('Web design')"
      >
         <span>Web design</span>
      </li>
      <WebDesign
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Web design'"
      />
      <li
         :class="{ clicked: clickedCategories === '3D' }"
         @click="handleCategories('3D')"
      >
         <span>3D</span>
      </li>
      <D @clickedCata="setSubCata" v-if="clickedCategories === '3D'" />
      <li
         :class="{ clicked: clickedCategories === 'Video Editing' }"
         @click="handleCategories('Video Editing')"
      >
         <span>Video Editing</span>
      </li>
      <VideoEditing
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Video Editing'"
      />
      <li
         :class="{ clicked: clickedCategories === 'Drawing and Illustration' }"
         @click="handleCategories('Drawing and Illustration')"
      >
         <span>Drawing and Illustration</span>
      </li>
      <DrawingIllustration
         @clickedCata="setSubCata"
         v-if="clickedCategories === 'Drawing and Illustration'"
      />
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   import WebDesign from "./WebDesign.vue";
   import D from "./3D.vue";
   import VideoEditing from "./VideoEditing.vue";
   import DrawingIllustration from "./Drawing&Illustration.vue";
   export default {
      components: { WebDesign, D, VideoEditing, DrawingIllustration },
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
