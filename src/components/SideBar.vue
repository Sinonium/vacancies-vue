<template>
  <aside :class="{ active: active }" class="sidebar">
    <SidebarSearch />
    <div class="sidebar__content">
      <PerfectScrollbar>
        <ul class="sidebar__main-group">
          <li @click="list.a = !list.a">
            <span class="title">COURSE CATEGORIES</span>
            <img
              class="arrow"
              :class="{ clicked: list.a }"
              :src="arrowExpand"
              alt=""
            />
          </li>
          <CourseCategories v-if="list.a" />
          <li @click="list.b = !list.b">
            <span class="title">PRICELIST</span>
            <img
              class="arrow"
              :class="{ clicked: list.b }"
              :src="arrowExpand"
              alt=""
            />
          </li>
          <PriceList v-if="list.b" />
          <li @click="list.c = !list.c">
            <span class="title">STUDENT LEVEL OF TRAINING</span>
            <img
              class="arrow"
              :class="{ clicked: list.c }"
              :src="arrowExpand"
              alt=""
            />
          </li>
          <LevelOfTraining v-if="list.c" />
          <li @click="list.d = !list.d">
            <span class="title">COURSE RATING</span>
            <img
              class="arrow"
              :class="{ clicked: list.d }"
              :src="arrowExpand"
              alt=""
            />
          </li>
          <CourseRating v-if="list.d" />
          <li @click="list.e = !list.e">
            <span class="title">DURATION COURSES</span>
            <img
              class="arrow"
              :class="{ clicked: list.e }"
              :src="arrowExpand"
              alt=""
            />
          </li>
          <Duration v-if="list.e" />
        </ul>
        <button @click.prevent="handleClick()" class="header__record-logOut">
            Log Out
         </button>
      </PerfectScrollbar>
    </div>
  </aside>
</template>

<script>
import { ref } from "@vue/reactivity";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import CourseCategories from "./sidebar/categories/CourseCategories.vue";
import CourseRating from "./sidebar/CourseRating.vue";
import Duration from "./sidebar/Duration.vue";
import LevelOfTraining from "./sidebar/LevelOfTraining.vue";
import PriceList from "./sidebar/PriceList.vue";
import SidebarSearch from "./sidebar/Search.vue";
export default {
  components: {
    PerfectScrollbar,
    SidebarSearch,
    CourseCategories,
    PriceList,
    LevelOfTraining,
    CourseRating,
    Duration,
  },
  props: ["active"],
  setup() {
    const hide = ref(true);
    const list = ref({
      a: true,
      b: true,
      c: true,
      d: true,
      e: true,
    });
    return {
      hide,
      list,
      arrowExpand: require("@/assets/img/sidebar/arrow.svg"),
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
@import "~perfect-scrollbar/css/perfect-scrollbar.css";
aside {
  position: fixed;
  transition: 0.9s;
  transform: translate(-110%);
  width: vw(330);
}
aside.active {
  transition: 0.9s;
  transform: translate(0);
}
.ps {
  position: relative;
  height: vw(1000);
}
.ps__rail-y {
  background-color: inherit !important;
}
.sidebar__content {
  background-color: $greyBlue25;
  .sidebar__main-group {
    padding-bottom: vw(300);
    li {
      display: flex;
      align-items: center;
      cursor: pointer;
      span.title {
        @include font(vw(12), 700, vw(20), $greyBlue50);
        margin: vw(25) auto vw(25) vw(30);
      }
      img.arrow {
        margin: vw(32);
        max-width: vw(12);
        max-height: vw(7);
      }
      img.clicked {
        transform: rotate(90deg);
      }
    }
    .categories {
      padding: 0 vw(15);
      li {
        display: grid;
        padding: vw(10) 0;
        cursor: pointer;
        grid-template-columns: 1.5fr 5fr 0.6fr;
        span {
          @include font(vw(13), 700, vw(25), $white);
        }
        img:first-child {
          margin-left: vw(20);
          max-height: vw(22);
          max-width: vw(22);
        }
        img:last-child {
          max-width: vw(12);
          max-height: vw(7);
        }
      }
      li.clickedCata {
        background: #29cc39;
        box-shadow: 0px 10px 30px rgba(41, 204, 57, 0.03);
        border-radius: 5px;
        img:last-child {
          transform: rotate(90deg);
        }
      }
      .sub {
        margin-left: vw(65);
        li {
          display: flex;
          list-style: none;
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
        .under {
          margin-left: vw(32);
        }
      }
    }
  }
}
@media screen and (max-width: 1600px) {
  .ps {
    height: vw(1300);
  }
  .sidebar__content {
    .sidebar__main-group {
      padding-bottom: vw(450);
    }
  }
}

@media screen and (max-width: 1440px) {
  .ps {
    height: vw(1300);
  }
}
@media screen and (max-width: 1024px) {
  .ps {
    height: vw(1400);
  }
}
@media screen and (max-width: 769px) {
  .ps {
    height: vw(2200);
  }
  .sidebar {
    z-index: 50;
    width: vw(600);
  }
  .sidebar__content {
    .sidebar__main-group {
      padding-bottom: vw(600);
      li {
        span.title {
          @include font(vw(23), 700, vw(30), $greyBlue50);
          margin: vw(35) auto vw(35) vw(40);
        }
        img.arrow {
          margin: vw(40);
          max-width: vw(18);
          max-height: vw(11);
        }
      }
      .categories {
        padding: 0 vw(15);
        li {
          padding: vw(18) 0;
          grid-template-columns: 1.1fr 5.5fr 0.6fr;
          span {
            @include font(vw(22), 700, vw(30), $white);
          }
          img:first-child {
            margin-left: vw(30);
            max-height: vw(32);
            max-width: vw(32);
          }
          img:last-child {
            max-width: vw(18);
            max-height: vw(11);
          }
        }
        .sub {
          margin-left: vw(90);
          li {
            span {
              @include font(vw(21), 700, vw(30), $greyBlue80);
            }
            span::before {
              left: vw(-43);
            }
          }
          .under {
            margin-left: vw(44);
          }
        }
      }
    }
  }
}
@media screen and(max-width: 579px) {
  .ps {
    height: vmin(550);
  }
  .sidebar {
    width: vw(900);
  }
  .sidebar__content {
    .sidebar__main-group {
      padding-bottom: vw(600);
      li {
        span.title {
          @include font(vw(40), 600, vw(50), $greyBlue50);
          margin: vw(40) auto vw(40) vw(45);
        }
        img.arrow {
          margin: vw(50);
          max-width: vw(27);
          max-height: vw(17);
        }
      }
      .categories {
        padding: 0 vw(20);
        li {
          padding: vw(25) 0;
          grid-template-columns: 1.1fr 5.5fr 0.55fr;
          span {
            @include font(vw(40), 500, vw(50), $white);
          }
          img:first-child {
            margin-left: vw(32);
            max-height: vw(45);
            max-width: vw(45);
          }
          img:last-child {
            max-width: vw(27);
            max-height: vw(17);
          }
        }
        .sub {
          margin-left: vw(135);
          li {
            span {
              @include font(vw(38), 500, vw(50), $greyBlue80);
            }
            span::before {
              left: vw(-85);
              width: vw(13);
              height: vw(13);
            }
          }
          .under {
            margin-left: vw(85);
          }
        }
      }
    }
  }
}
@media screen and(max-width: 426px) {
  .ps {
    height: vmin(1000);
  }
  .sidebar {
    width: vmin(300);
  }
  .sidebar__content {
    .sidebar__main-group {
      padding-bottom: vmin(370);
      li {
        span.title {
          @include font(vmin(12), 500, vmin(22), $greyBlue50);
          margin: vmin(12) auto vmin(10) vmin(15);
        }
        img.arrow {
          margin: vmin(20);
          max-width: vmin(27);
          max-height: vmin(17);
        }
      }
      .categories {
        padding: 0 vmin(12);
        li {
          padding: vmin(10) 0;
          grid-template-columns: 1.1fr 5.5fr 0.55fr;
          span {
            @include font(vmin(12), 400, vmin(20), $white);
          }
          img:first-child {
            margin-left: vmin(10);
            max-height: vmin(22);
            max-width: vmin(22);
          }
          img:last-child {
            max-width: vmin(27);
            max-height: vmin(17);
          }
        }
        .sub {
          margin-left: vmin(45);
          li {
            span {
              @include font(vmin(11), 400, vmin(20), $greyBlue80);
            }
            span::before {
              left: vmin(-26);
              width: vmin(5);
              height: vmin(5);
            }
          }
          .under {
            margin-left: vmin(28);
          }
        }
      }
    }
  }
}
@media screen and(max-width:376px) {
  .sidebar {
    width: vmin(280);
  }
}
</style>
