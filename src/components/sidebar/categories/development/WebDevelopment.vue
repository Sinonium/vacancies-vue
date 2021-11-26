<template>
   <ul>
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Java Script</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>React</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>Vue</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Angular</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>HTML / CSS</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const clickedCategories = ref(null);

         return {
            clickedCategories
         }
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   ul {
      margin-left: vw(30);
      li {
         cursor: pointer;
         list-style: none;
         margin-bottom: vw(15);
         span {
            position: relative;
            @include font(vw(12), 700, vw(20), $greyBlue80);
         }
         span::before {
            content: "";
            position: absolute;
            left: vw(-31);
            bottom: 35%;
            background-color: #fff;
            width: vw(6.6);
            height: vw(6.6);
            border-radius: 50%;
         }
      }
      li.clicked {
         span {
            color: #ffffff;
         }
         span::before {
            background-color: $green;

         }
      }
   }
</style>
