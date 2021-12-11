<template>
  <ul>
    <li>
      <img v-if="check1" :src="checkboxCheack" alt="" />
      <img v-else :src="checkbox" alt="" />
      <input @click="check1 = !check1" type="checkbox" />
      <span :class="{ checked: check1 }">0-2 Hours</span>
    </li>
    <li>
      <img v-if="check2" :src="checkboxCheack" alt="" />
      <img v-else :src="checkbox" alt="" />
      <input @click="check2 = !check2" type="checkbox" />
      <span :class="{ checked: check2 }">3-6 Hours</span>
    </li>
    <li>
      <img v-if="check3" :src="checkboxCheack" alt="" />
      <img v-else :src="checkbox" alt="" />
      <input @click="check3 = !check3" type="checkbox" />
      <span :class="{ checked: check3 }">7-16 Hours</span>
    </li>
    <li>
      <img v-if="check4" :src="checkboxCheack" alt="" />
      <img v-else :src="checkbox" alt="" />
      <input @click="check4 = !check4" type="checkbox" />
      <span :class="{ checked: check4 }">17+ Hours</span>
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
      checkbox: require("@/assets/img/sidebar/checkbox.svg"),
      checkboxCheack: require("@/assets/img/sidebar/checkboxChecked.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  li {
    position: relative;
    margin-left: vw(34);
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      position: absolute;
      left: vw(-5);
      z-index: 2;
      opacity: 0;
      display: block;
      width: vw(20);
      height: vw(20);
    }
    img {
      width: vw(20);
      height: vw(20);
    }
    span {
      @include font(vw(12), 700, vw(20), $greyBlue50);
      margin: vw(10);
    }
    span.checked {
      color: $white;
    }
  }
}
@media screen and(max-width:769px) {
  ul {
    li {
      margin-left: vw(40);
      input[type="checkbox"] {
        left: vw(-10);
        width: vw(38);
        height: vw(38);
      }
      img {
        width: vw(38);
        height: vw(38);
      }
      span {
        @include font(vw(21), 700, vw(25), $greyBlue50);
        margin: vw(25);
      }
    }
  }
}
@media screen and(max-width:579px) {
  ul {
    li {
      margin-left: vw(50);
      input[type="checkbox"] {
        left: vw(-10);
        width: vw(55);
        height: vw(55);
      }
      img {
        width: vw(55);
        height: vw(55);
      }
      span {
        @include font(vw(40), 500, vw(50), $greyBlue50);
        margin: vw(35);
      }
    }
  }
}
@media screen and(max-width:426px) {
  ul {
    li {
      margin-left: vmin(20);
      input[type="checkbox"] {
        left: vmin(-3);
        width: vmin(20);
        height: vmin(20);
      }
      img {
        width: vmin(20);
        height: vmin(20);
      }
      span {
        @include font(vmin(12), 400, vmin(20), $greyBlue50);
        margin: vmin(18);
      }
    }
  }
}
</style>
