<template>
   <select name="" id="" v-model="selected">
      <option
         v-for="option in categories"
         :key="option.text"
         :value="option.value"
      >
         {{ option.text }}
      </option>
   </select>
   <select v-if="selected == subCata[index]" name="" id="" v-model="subCategories">
      <option v-for="(sub) in subCata" :key="sub.text" :value="sub.value">
         {{ sub.text }}
      </option>
   </select>
   <span>{{ selected }}</span>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const categories = [
            {
               text: "Web Development",
               value: "Web Development",
            },
            {
               text: "Mobile Apps",
               value: "Mobile Apps",
            },
         ];
         const subCata = [
           [ "Web Development",
            {
               text: "Java Script",
               value: "Java Script",
            },
            {
               text: "React",
               value: "React",
            },
            {
               text: "Vue",
               value: "Vue",
            },
            {
               text: "Angular",
               value: "Angular",
            },
            {
               text: "HTML/CSS",
               value: "HTML/CSS",
            }]
         ];
         const selected = ref("");
         const subCategories = ref("");

         return { categories, subCata, selected, subCategories };
      },
   };
</script>

<style></style>
