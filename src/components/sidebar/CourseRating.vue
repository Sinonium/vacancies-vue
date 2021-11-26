<template>
   <ul>
      <li>
         <img v-if="check1" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check1 = !check1" type="checkbox" />
         <div>
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="halfOfStar" alt="" />
         </div>
         <span :class="{checked: check1}"> 4.5 & up </span>
         <span :class="{checked: check1}">12354</span>
      </li>
      <li>
         <img v-if="check2" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check2 = !check2" type="checkbox" />
         <div>
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="empty" alt="" />
         </div>
         <span :class="{checked: check2}"> 4.0 & up </span>
         <span :class="{checked: check2}">11354</span>
      </li>
      <li>
         <img v-if="check3" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check3 = !check3" type="checkbox" />
         <div>
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="halfOfStar" alt="" />
            <img :src="empty" alt="" />
         </div>
         <span :class="{checked: check3}"> 3.5 & up </span>
         <span :class="{checked: check3}">9564</span>
      </li>
      <li>
         <img v-if="check4" :src="checkboxCheack" alt="" />
         <img v-else :src="checkbox" alt="" />
         <input @click="check4 = !check4" type="checkbox" />
         <div>
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="star" alt="" />
            <img :src="empty" alt="" />
            <img :src="empty" alt="" />
         </div>
         <span :class="{checked: check4}"> 3.0 & up </span>
         <span :class="{checked: check4}">8355</span>
      </li>
   </ul>
</template>

<script>
   import { ref } from "@vue/reactivity";
   export default {
      setup() {
         const check1 = ref(false);
         const check2 = ref(false);
         const check3 = ref(false);
         const check4 = ref(false);
         return {
            check1,
            check2,
            check3,
            check4,
            star: require("@/assets/img/sidebar/star.svg"),
            halfOfStar: require("@/assets/img/sidebar/starHalf.svg"),
            empty: require("@/assets/img/sidebar/emptyStar.svg"),
            checkbox: require("@/assets/img/sidebar/checkbox.svg"),
            checkboxCheack: require("@/assets/img/sidebar/checkboxChecked.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   li {
      display: flex;
      align-items: center;
      margin-bottom: vw(5);
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
         margin: 0 vw(10) 0 vw(34);
         width: vw(20);
         height: vw(20);
      }
      div {
         img {
            margin: 0 vw(2) 0 0;
         }
      }
      span {
         @include font(vw(12), 700, vw(20), $greyBlue60);
         margin-left: vw(10);
      }
      span.checked{
         color: $white;
      }
      span:last-child{
         margin-left: auto;
         margin-right: vw(25);
      }
   }
</style>
