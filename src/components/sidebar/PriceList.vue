<template>
   <ul>
      <li>
         <img v-if="check1" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check1 = !check1" type="checkbox" />
         <span :class="{ checked: check1 }">Paid courses and videos</span>
         <span :class="{ checked: check1 }">12 354</span>
      </li>
      <li>
         <img v-if="check2" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check2 = !check2" type="checkbox" />
         <span :class="{ checked: check2 }">Free courses and videos</span>
         <span :class="{ checked: check2 }">1 543</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const check1 = ref(false);
         const check2 = ref(false);
         return {
            check1,
            check2,
            checkbox: require("@/assets/img/sidebar/checkbox.svg"),
            checkboxCheack: require("@/assets/img/sidebar/checkboxChecked.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   li {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: vw(10);
      input[type="checkbox"] {
         position: absolute;
         left: vw(30);
         z-index: 2;
         opacity: 0;
         display: block;
         width: vw(20);
         height: vw(20);
      }
      img {
         margin: 0 vw(24) 0 vw(34);
         width: vw(20);
         height: vw(20);
      }
      span {
         @include font(vw(12), 700, vw(20), $greyBlue60);
      }
      span.checked {
         color: $white;
      }
      span:last-child {
         margin-left: auto;
         margin-right: vw(30);
      }
   }

   @media screen and(max-width:769px) {
      li {
         margin-bottom: vw(20);
         input[type="checkbox"] {
            left: vw(28);
            width: vw(38);
            height: vw(38);
         }
         img {
            margin: 0 vw(32) 0 vw(38);
            width: vw(38);
            height: vw(38);
         }
         span {
            @include font(vw(21), 700, vw(25), $greyBlue60);
         }
         span:last-child {
            margin-right: vw(40);
         }
      }
   }
</style>
