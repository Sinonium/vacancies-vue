<template>
  <div class="container">
    <div  class="container-div">
      <div :class="{ actives: allShow === true }" class="themes">
        <div  class="themes-title">
          <span>What do you learn?</span>
          <img
            class="themes-title__img"
            src="@/assets/scss/icons/burger-menu.svg"
          />
          <div class="themes-title__item">
            <div class="themes-title__item-1">
              <ul v-if="moreInfo" :class="{ actives: allShow === true }">
                <li v-for="learn in moreInfo.whatStudy" :key="learn">
                  <img src="@/assets/scss/icons/done.svg" />{{ learn }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="button-style">
          <button
            @click="allThemes()"
            :class="{ actives: allShow === true }"
            id="more"
          >
            {{ this.button_themes }}
          </button>
        </div>
      </div>
      <div v-if="moreInfo" class="content">
        <div class="themes-title">
          <span>Course Content</span>
          <img
            class="themes-title__img"
            src="@/assets/scss/icons/burger-menu.svg"
          />
        </div>
        <div :class="{ actives: allSections === true }" class="content-courses">
          <div v-if="moreInfo.courseContent[0]">
            <div class="content-courses__theme">
               <img :class="{ open: isOpen.a }" src="@/assets/img/open.svg" />
              <h6 @click="isOpen.a = !isOpen.a">
                {{ moreInfo.courseContent[0].lectureName }}
              </h6>
              <span>{{ moreInfo.courseContent[0].allTime }}</span>
            </div>
            <div
              v-for="item in moreInfo.courseContent[0].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.a">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div v-if="moreInfo.courseContent[1]">
            <div class="content-courses__theme">
              <img :class="{ open: isOpen.b }" src="@/assets/img/open.svg" />
              <h6
                v-if="moreInfo.courseContent[1]"
                @click="isOpen.b = !isOpen.b"
              >
                {{ moreInfo.courseContent[1].lectureName }}
              </h6>
              <span v-if="moreInfo.courseContent[1]">{{
                moreInfo.courseContent[1].allTime
              }}</span>
            </div>
            <div
              v-for="item in moreInfo.courseContent[1].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.b">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div v-if="moreInfo.courseContent[2]">
            <div  class="content-courses__theme">
            <img :class="{ open: isOpen.c }" src="@/assets/img/open.svg" />
            <h6
             v-if="moreInfo.courseContent[2]" @click="isOpen.c = !isOpen.c">
              {{ moreInfo.courseContent[2].lectureName }}
            </h6>
            <span
            v-if="moreInfo.courseContent[2]">{{ moreInfo.courseContent[2].allTime }}
            </span>
 </div>
            <div
              v-for="item in moreInfo.courseContent[2].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.c">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
           <div v-if="moreInfo.courseContent[3]">
            <div  class="content-courses__theme">
            <img :class="{ open: isOpen.d }" src="@/assets/img/open.svg" />
            <h6 @click="isOpen.d = !isOpen.d">
              {{ moreInfo.courseContent[3].lectureName }}
            </h6>
            <span>{{ moreInfo.courseContent[3].allTime }}</span>
 </div>
            <div
              v-for="item in moreInfo.courseContent[3].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.d">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           <div v-if="moreInfo.courseContent[4]">
            <div class="content-courses__theme">
               <img :class="{ open: isOpen.e }" src="@/assets/img/open.svg" />
              <h6 @click="isOpen.e = !isOpen.e">
                {{ moreInfo.courseContent[4].lectureName }}
              </h6>
              <span>{{ moreInfo.courseContent[4].allTime }}</span>
            </div>
            <div
              v-for="item in moreInfo.courseContent[4].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.e">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
           <div v-if="moreInfo.courseContent[5]">
            <div class="content-courses__theme">
               <img :class="{ open: isOpen.f }" src="@/assets/img/open.svg" />
              <h6 @click="isOpen.f = !isOpen.f">
                {{ moreInfo.courseContent[5].lectureName }}
              </h6>
              <span>{{ moreInfo.courseContent[5].allTime }}</span>
            </div>
            <div
              v-for="item in moreInfo.courseContent[5].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.f">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div v-if="moreInfo.courseContent[6]">
            <div class="content-courses__theme">
               <img :class="{ open: isOpen.g }" src="@/assets/img/open.svg" />
              <h6 @click="isOpen.g = !isOpen.g">
                {{ moreInfo.courseContent[6].lectureName }}
              </h6>
              <span>{{ moreInfo.courseContent[6].allTime }}</span>
            </div>
            <div
              v-for="item in moreInfo.courseContent[6].lessons"
              :key="item.id"
            >
              <div class="content-courses__open" v-if="isOpen.g">
                <div>
                  <ul class="content-courses__all">
                    <img :src="videoIcon" alt="" />
                    <li>{{ item.lessonName }}</li>
                    <a>{{ item.isPreview }}</a>
                    <span>{{ item.time }}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
         
        </div>
        <!-- <button
          class="sections-btn"
          @click="allContents()"
          :class="{ actives: allSections === true }"
          id="more"
        >
          {{ this.button_contents }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["moreInfo"],
  setup(props) {
    console.log(props.moreInfo);
  },
  data() {
    return {
      isOpen: {
        a: false,
        b: false,
        c: false,
        d: false,
        e:false,
        f:false,
        g:false,
      },
      learn: [],
      articles: [],
      button_themes: "Show more",
      // button_contents: 'More Sections',
      allShow: false,
      open: false,
      allSections: false,
      videoIcon: require("@/assets/scss/icons/video.svg"),
    };
  },

  methods: {
    allThemes() {
      if (!this.allShow) {
        this.button_themes = "Show Less";
        this.allShow = true;
      } else {
        this.button_themes = "Show more";
        this.allShow = false;
      }
    },
    // allContents() {
    //   if (!this.allSections) {
    //     this.button_contents = 'Sections'
    //     this.allSections = true
    //   } else {
    //     this.button_contents = 'More Sections'
    //     this.allSections = false
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

.container {
  margin: 0 auto;
  background: $bg-main;
  padding: vw(30) 0 0 vw(60);
}

.themes {
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.137);
  border-radius: vw(10);
  width: vw(730);
  margin-bottom: vw(30);
  height: vw(340);
  &.actives {
    height: 100%;
  }

  &-title {
    @include font(vw(13), bold, vw(25));
    font-family: "San Francisco Pro";
    color: $greyBlue50;
    padding: vw(30) 0 0 vw(30);
    &__item {
      display: flex;

      ul {
        padding: 0;
      }
    }

    &__item-1 {
      @include font(vw(12), bold, vw(20));
      font-family: "San Francisco Pro";
      color: $greyBlue60;
    }
    span {
      padding-right: vw(550);
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    height: vw(200);
    &.actives {
      @include font(vw(12), bold, vw(20));
      height: 100%;
      color: $greyBlue60 !important;
    }
  }
  li {
    list-style-type: none;
    padding-top: vw(25);
    width: 50%;

    img {
      margin-right: vw(20);
    }
  }
}
.button-style {
  display: flex;
  justify-content: center;
  button {
    @include font(vw(12), bold, vw(20));
    font-family: "San Francisco Pro";
    color: $greyBlue60;
    width: vw(190);
    height: vw(40);
    margin: vw(20) 0 vw(20) 0;
    background: #ffffff;
    border: 2px solid #f7f8fa;
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
    border-radius: vw(30);
    cursor: pointer;
    &.actives {
      @include font(vw(12), bold, vw(20));
      color: $greyBlue60 !important ;
    }
    &:hover {
      border: 2px solid $greyBlue95;
      box-shadow: 0 3px 10px 0 $greyBlue85;
    }
  }
}
.sections-btn {
  margin: vw(-50) vw(260) vw(20) vw(270);

  &.actives {
    display: none;
  }
}
.content {
  width: vw(730);
  background: $white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
  border-radius: vw(10);
  padding-bottom: vw(30);

  &-courses {
    width: vw(670);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
    border-radius: vw(10);
    margin: vw(40) vw(30) vw(0) vw(30);
    flex-wrap: wrap;
    overflow: hidden;
    min-height: 100%;
    &.actives {
      @include font(vw(12), bold, vw(20));
      height: 100%;
      color: $greyBlue60 !important;
    }
    &__all {
      display: flex;
      align-items: baseline;
      margin: vw(10) vw(0) vw(10) vw(40);
      border-top: 2px solid $greyBlue98;

      a {
        @include font(vw(12), bold, vw(20));
        font-family: "San Francisco Pro";
        color: $greyBlue60;
        width: 12%;
        text-decoration: none;
      }
    }
    li {
      list-style-type: none;
      @include font(vw(12), bold, vw(20));
      font-family: "San Francisco Pro";
      color: $greyBlue60;
      width: 78%;
      margin: vw(15);
    }
    span {
      @include font(vw(12), bold, vw(20));
      font-family: "San Francisco Pro";
      color: $greyBlue50;
      width: 14%;
    }
    h6 {
      cursor: pointer;
    }
    &__open {
      width: 100%;
    }
    &__item {
      width: 100%;
      border-top: 2px solid $greyBlue98;
    }

    &__theme {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      border-top: 2px solid $greyBlue98;

      h6 {
        @include font(vw(12), bold, vw(20));
        font-family: "San Francisco Pro";
        color: $greyBlue50;
        width: 80%;
      }
      span {
        @include font(vw(12), bold, vw(20));
        font-family: "San Francisco Pro";
        color: $greyBlue50;
        width: 10%;
      }
      img {
        width: vw(13);
        height: vw(13);
        //width: 10%;
        transition: transform 0.1s ease-in-out;
        &.open {
          transform: rotateZ(180deg);
        }
      }
      img {
        padding: 0 vw(20) 0 vw(20);
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .container {
    &-div {
      margin: vmin(10);
    }
  }

  .themes {
    border-radius: vmin(5);
    width: 100%;
    height: 100%;
    &.actives {
      height: 100%;
    }
    &-title {
      @include font(vmin(12), bold, vmin(13));
      padding: vmin(15) 0 0 vmin(15);
      &__img {
        display: none;
      }
      img {
        margin-left: vmin(10);
        width: vmin(7);
      }

      &__item-1 {
        padding-right: vmin(20);
      }

      &__item-1,
      &__item-2 {
        @include font(vmin(9), bold, vmin(10));
        color: $greyBlue60;
      }
    }
    ul {
      height: vmin(100);
      &.actives {
        @include font(vmin(9), bold, vmin(10));
        height: 100%;
        color: $greyBlue60;
      }
    }
    li {
      padding-top: vmin(15);
      width: 80%;
      img {
        margin-right: vmin(20);
      }
    }
    button {
      @include font(vmin(10), bold, vmin(10));
      width: vmin(100);
      height: vmin(20);
      margin: vmin(15) 0 vmin(10) vmin(100);

      &.actives {
        @include font(vmin(7), bold, vmin(10));
        color: $greyBlue60 !important;
      }
      &:hover {
        border: 2px solid $greyBlue95;
        box-shadow: 0 3px 10px 0 $greyBlue85;
      }
    }
  }

  .content {
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
    border-radius: vmin(5);
    padding-bottom: vmin(15);
    &-courses {
      width: 90%;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
      border-radius: vmin(10);
      margin: vmin(20) vmin(20) vmin(0);
      height: 100%;
      &.actives {
        @include font(vmin(12), bold, vmin(20));
        color: $greyBlue60 !important;
      }
      &__all {
        padding: vmin(7);
      }
      li {
        list-style-type: none;
        @include font(vmin(8), bold, vmin(10));
        font-family: "San Francisco Pro";
        color: $greyBlue60;
        width: 60%;
      }
      &__open {
        width: 100%;
      }
      h6 {
        @include font(vmin(10), bold, vmin(10));
        font-family: "San Francisco Pro";
        color: $greyBlue50;
        width: 70%;
        cursor: pointer;
      }
      span {
        display: none;
      }

      img {
        width: vmin(10);
        height: vmin(10);
        padding: 0 vmin(5) 0 vmin(5);
      }
    }
    button {
      @include font(vmin(10), bold, vmin(10));
      width: vmin(100);
      height: vmin(20);
      margin-left: vmin(120);
      &.actives {
        @include font(vmin(10), bold, vmin(10));
        color: $greyBlue60 !important;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .container {
    &-div {
      margin: vmin(10);
    }
    margin: 0 auto;
    padding: 0;
  }
  .themes {
    border-radius: vmin(5);
    width: 100%;
    height: 40%;
    &.actives {
      height: 100%;
    }
    &-title {
      &__img {
        display: none;
      }
      @include font(vmin(16), bold, vmin(15));
      padding-left: vmin(25);
      &__item-1,
      &__item-2 {
        @include font(vmin(12), bold, vmin(10));
        color: $greyBlue60;
        ul {
          width: 90%;
          margin: 0;
        }
      }
    }
    ul {
      height: vmin(100);
      &.actives {
        @include font(vmin(12), bold, vmin(10));
        height: vmin(300);
        color: $greyBlue60;
      }
    }
    li {
      padding-top: vmin(15);
      width: 100%;
      img {
        margin-right: vmin(10);
      }
    }
  }
  .button-style {
    display: flex;
    justify-content: center;
    button {
      @include font(vmin(13), bold, vmin(10));
      width: vmin(120);
      height: vmin(30);

      margin: vmin(15) 0 vmin(20) 0;
      border-radius: vmin(20);
      &.actives {
        @include font(vmin(13), bold, vmin(10));
        color: $greyBlue60 !important;
      }
    }
  }

  .content {
    width: 100%;
    border-radius: vmin(5);
    &-courses {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
      border-radius: vmin(10);
      &.actives {
        @include font(vmin(6), bold, vmin(10));
        height: 100%;
        color: $greyBlue60;
      }
      &__theme {
        svg {
          margin-left: vmin(15);
          max-width: vmin(8);
          max-height: vmin(8);
        }
      }
      li {
        @include font(vmin(11), bold, vmin(10));
        color: $greyBlue60;
      }
      h6 {
        @include font(vmin(12), bold, vmin(10));
        margin: vw(50);
      }
      span {
        display: none;
      }
      img {
        max-width: vmin(15);
        max-height: vmin(15);
        padding: 0 vmin(10) 0 vmin(10);
      }
    }
    button {
      @include font(vmin(13), bold, vmin(10));
      width: vmin(120);
      height: vmin(30);
      margin: vmin(10) 0 vmin(10) vmin(100);
      border-radius: vmin(20);
    }
  }
}
</style>
