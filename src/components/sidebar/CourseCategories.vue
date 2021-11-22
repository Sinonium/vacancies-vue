<template>
   <ul>
      <li>
         <img :src="devIcon" alt="" />
         <span>Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="busIcon" alt="" />
         <span>Business</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="finIcon" alt="" />
         <span>Finance & Accounting</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="itIcon" alt="" />
         <span>IT & Software</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="offIcon" alt="" />
         <span>Office Productivity</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="persIcon" alt="" />
         <span>Personal Development</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="desigIcon" alt="" />
         <span>Design and Art</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="markIcon" alt="" />
         <span>Marketing and Sales</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="lifeIcon" alt="" />
         <span>Lifestyle and Fashion</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="photoIcon" alt="" />
         <span>Photography</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="healIcon" alt="" />
         <span>Health & Fitness</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="musIcon" alt="" />
         <span>Music and Sound Design</span>
         <img :src="arrowExpand" alt="" />
      </li>
      <li>
         <img :src="teachIcon" alt="" />
         <span>Teaching & Academics</span>
         <img :src="arrowExpand" alt="" />
      </li>
   </ul>
</template>

<script>
   export default {
      setup() {
         return {
            arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
            devIcon: require("@/assets/img/sidebar/devIcon.svg"),
            busIcon: require("@/assets/img/sidebar/busIcon.svg"),
            finIcon: require("@/assets/img/sidebar/finIcon.svg"),
            itIcon: require("@/assets/img/sidebar/itIcon.svg"),
            offIcon: require("@/assets/img/sidebar/offIcon.svg"),
            persIcon: require("@/assets/img/sidebar/persIcon.svg"),
            desigIcon: require("@/assets/img/sidebar/desigIcon.svg"),
            markIcon: require("@/assets/img/sidebar/markIcon.svg"),
            lifeIcon: require("@/assets/img/sidebar/lifeIcon.svg"),
            photoIcon: require("@/assets/img/sidebar/photoIcon.svg"),
            healIcon: require("@/assets/img/sidebar/healIcon.svg"),
            musIcon: require("@/assets/img/sidebar/musIcon.svg"),
            teachIcon: require("@/assets/img/sidebar/teachIcon.svg"),
         };
      },
   };
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/index.scss";
   li {
      display: flex;
      align-items: center;
      span {
         @include font(vw(13), 700, vw(25), $white);
         margin-right: auto;
      }
      img {
         margin: 0 vw(24) 0 vw(34);
         max-height: vw(22);
         max-width: vw(22);
      }
      img:last-child {
         margin-right: vw(32);
         max-width: vw(12);
         max-height: vw(7);
      }
   }
</style>
