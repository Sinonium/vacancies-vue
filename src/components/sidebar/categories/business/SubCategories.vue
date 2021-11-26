<template>
   <ul>
      <li
         :class="{ clicked: clickedCategories === 1 }"
         @click="clickedCategories = 1"
      >
         <span>Crisis management</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 2 }"
         @click="clickedCategories = 2"
      >
         <span>Project activities</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 3 }"
         @click="clickedCategories = 3"
      >
         <span>HR management</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 4 }"
         @click="clickedCategories = 4"
      >
         <span>Service. Work with clients</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 5 }"
         @click="clickedCategories = 5"
      >
         <span>Analytics</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 6 }"
         @click="clickedCategories = 6"
      >
         <span>Management</span>
      </li>
      <li
         :class="{ clicked: clickedCategories === 7 }"
         @click="clickedCategories = 7"
      >
         <span>Sales</span>
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
      margin-left: vw(70);
      li {
         list-style: none;
         margin-bottom: vw(15);
         cursor: pointer;
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
