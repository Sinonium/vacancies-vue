<template>
  <div class="container">
    <div class="container-div">
      <div :class="{ actives: allShow === true }" class="themes">
        <div class="themes-title">
          <span>What do you learn?</span>
          <img src="@/assets/scss/icons/burger-menu.svg" />
          <div class="themes-title__item">
            <div class="themes-title__item-1">
              <ul :class="{ actives: allShow === true }">
                <li v-for="theme in learn" :key="theme.id" :theme="theme">
                  <img src="@/assets/scss/icons/done.svg" />{{ theme }}
                </li>
              </ul>
            </div>
          </div>
          <button
            @click="allThemes()"
            :class="{ actives: allShow === true }"
            id="more"
          >
            {{ this.button_themes }}
          </button>
        </div>
      </div>

      <div class="content">
        <div class="themes-title">
          <span>Course Content</span>
          <img src="@/assets/scss/icons/burger-menu.svg" />
        </div>
        <div :class="{ actives: allSections === true }" class="content-courses">
          <div
            v-for="item in articles"
            :key="item.id"
            class="content-courses__theme"
          >
            <svg
              :class="{ open: item.open }"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.8825 0.2925L0.2925 4.8825C-0.0975 5.2725 -0.0975 5.9025 0.2925 6.2925C0.6825 6.6825 1.3125 6.6825 1.7025 6.2925L5.5925 2.4125L9.4725 6.2925C9.8625 6.6825 10.4925 6.6825 10.8825 6.2925C11.2725 5.9025 11.2725 5.2725 10.8825 4.8825L6.2925 0.2925C5.9125 -0.0975 5.2725 -0.0975 4.8825 0.2925Z"
                fill="#C3CAD9"
              />
            </svg>

            <h6 @click="item.open = !item.open">{{ item.lectureName }}</h6>
            <span> {{ item.lectures }}</span>

            <span> {{ item.allTime }}</span>
            <div class="content-courses__open" v-if="item.open">
              <!-- <div class="content-courses__item"> -->
              <!-- <div class="content-courses__all"> -->

              <div v-for="data in item.content" :key="data.id">
                <ul class="content-courses__all">
                  <a
                    href="https://www.youtube.com/watch?v=-1DRETk-mns&t=7s"
                    target="blank"
                  >
                    <img :src="videoIcon" alt=""
                  /></a>
                  <li>{{ data.name }}</li>
                  <a>{{ data.isPreview }}</a>
                  <span>{{ data.time }}</span>
                </ul>
              </div>
              <!-- </div> -->
              <!-- </div> -->
              <!-- <div class="content-courses__item">
                <div class="content-courses__all">
                  <img :src="videoIcon" alt="" />

                 
                </div>
              </div> -->
              <!-- <div class="content-courses__item">
                <div class="content-courses__all">
                  <img :src="videoIcon" alt="" />

                  <p>{{ item.name_2 }}</p>
                  <a href=""></a>
                  <span>{{ item.time_2 }}</span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <button
          class="sections-btn"
          @click="allContents()"
          :class="{ actives: allSections === true }"
          id="more"
        >
          {{ this.button_contents }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      learn: [],
      articles: [],

      button_themes: "Show more Features",
      button_contents: "5 More Sections",
      allShow: false,
      open: false,
      allSections: false,
      videoIcon: require("@/assets/scss/icons/video.svg"),
    };
  },
  created() {
    fetch("http://localhost:3000/learn")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        this.learn = data;
      });
    fetch("http://localhost:3000/articles")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        this.articles = data;
      });
  },

  methods: {
    allThemes() {
      if (!this.allShow) {
        this.button_themes = 'Show Fewer Features'
        this.allShow = true
      } else {
        this.button_themes = 'Show more Features'
        this.allShow = false
      }
    },
    allContents() {
      if (!this.allSections) {
        this.button_contents = 'Sections'
        this.allSections = true
      } else {
        this.button_contents = '5 More Sections'
        this.allSections = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';

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
  height: vw(350);
  &.actives {
    height: 100%;
  }

  &-title {
    @include font(vw(13), bold, vw(25));
    font-family: 'San Francisco Pro';
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
      font-family: 'San Francisco Pro';
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
button {
  @include font(vw(12), bold, vw(20));
  font-family: 'San Francisco Pro';
  color: $greyBlue60;
  width: vw(190);
  height: vw(40);
  margin: vw(30) 0 vw(40) vw(250);
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
    min-height: vw(240);
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
      width: 60%;
      margin: vw(15);
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
        font-family: 'San Francisco Pro';
        color: $greyBlue50;
        width: 70%;
      }
      span {
        @include font(vw(12), bold, vw(20));
        font-family: 'San Francisco Pro';
        color: $greyBlue50;
        width: 10%;
      }
      svg {
        width: 10%;
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
    background: $bg-main;
    margin: 0 auto;
  }

  .themes {
    border-radius: vmin(5);
    width: vmin(350);
    margin-bottom: vmin(15);
    margin-left: vmin(5);
    height: vmin(200);
    &.actives {
      height: 100%;
    }
    &-title {
      @include font(vmin(8), bold, vmin(13));
      padding: vmin(15) 0 0 vmin(15);
      img {
        width: vmin(7);
      }

      &__item-1 {
        padding-right: vmin(20);
      }

      &__item-1,
      &__item-2 {
        @include font(vmin(6), bold, vmin(10));
      }
      // span {
      //   padding-right: vmin(235);
      // }
    }
    ul {
      height: vmin(100);
      &.actives {
        @include font(vmin(8), bold, vmin(10));
        height: vmin(300);
        color: $greyBlue60 !important;
      }
    }
    li {
      list-style-type: none;
      padding-top: vmin(15);
      width: 60%;
      img {
        margin-right: vmin(20);
      }
    }
    button {
      @include font(vmin(6), bold, vmin(10));
      width: vmin(95);
      height: vmin(20);
      margin: vmin(15) 0 vmin(20) vmin(125);
      border: 2px solid #f7f8fa;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
      border-radius: vmin(15);

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
    margin-left: vmin(5);
    width: vmin(350);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
    border-radius: vmin(5);
    padding-bottom: vmin(15);
    &-courses {
      width: vmin(300);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
      border-radius: vmin(10);
      margin: vmin(40) vmin(30) vmin(0) vmin(30);
      flex-wrap: wrap;
      overflow: hidden;
      height: vmin(220);
      &.actives {
        @include font(vmin(12), bold, vmin(20));
        height: 100%;
        color: $greyBlue60 !important;
      }
      &__all {
        display: flex;
        align-items: baseline;
        margin: vmin(10) vmin(0) vmin(10) vmin(40);
        border-top: 2px solid $greyBlue98;
        a {
          display: none;
        }
      }
      li {
        list-style-type: none;
        @include font(vmin(7), bold, vmin(10));
        font-family: "San Francisco Pro";
        color: $greyBlue60;
        width: 60%;
        margin: vmin(2);
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

      h6 {
        @include font(vmin(7), bold, vmin(10));
        font-family: "San Francisco Pro";
        color: $greyBlue50;
        width: 70%;
      }
      span {
        display: none;
      }

      img {
        width: vmin(10);
        height: vmin(10);
        //padding: 0 vmin(5) 0 vmin(5);
      }
    }
  }
}

@media screen and (max-width: 380px) {
  .container {
    margin: 0 auto;
  }

  .themes {
    border-radius: vmin(5);
    width: vmin(350);
    margin-bottom: vmin(15);
    margin-left: vmin(5);
    height: vmin(200);
    &.actives {
      height: vmin(400);
    }
    &-title {
      @include font(vmin(14), bold, vmin(15));
      &__item {
        flex-direction: column;
      }
      &__item-1,
      &__item-2 {
        @include font(vmin(9), bold, vmin(10));
        ul {
          margin: 0;
        }
      }
      span {
        padding-right: vmin(190);
      }
    }
    ul {
      height: vmin(100);
      &.actives {
        @include font(vmin(8), bold, vmin(10));
        height: vmin(300);
        color: $greyBlue60 !important;
      }
    }
    li {
      list-style-type: none;
      padding-top: vmin(15);
      width: 100%;
      img {
        margin-right: vmin(20);
      }
    }
    button {
      @include font(vmin(9), bold, vmin(10));
      width: vmin(120);
      height: vmin(20);
      margin: vmin(15) 0 vmin(20) vmin(100);
      border: 2px solid #f7f8fa;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
      border-radius: vmin(15);
      .sections-btn {
        margin: vmin(-50) vmin(120) vmin(20) vmin(130);
        &.actives {
          display: none;
        }
      }
    }
  }

  .content {
    margin-left: vmin(5);
    width: vmin(350);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
    border-radius: vmin(5);
    padding-bottom: vmin(15);
    &-courses {
      width: vmin(300);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
      border-radius: vmin(10);
      margin: vmin(40) vmin(30) vmin(0) vmin(30);
      flex-wrap: wrap;
      overflow: hidden;
      height: vmin(190);
      &.actives {
        @include font(vmin(6), bold, vmin(10));
        height: 100%;
        color: $greyBlue60 !important;
      }
      &__theme {
        svg {
          max-width: vmin(7);
          max-height: vmin(7);
        }
      }

      &__item {
        border-top: 2px solid $greyBlue98;

        &__all {
          margin: vmin(5) 0 vmin(5) vmin(20);
        }

        p {
          @include font(vmin(8), bold, vmin(10));
        }

        a {
          @include font(vmin(8), bold, vmin(10));
        }
      }

      h6 {
        @include font(vmin(10), bold, vmin(10));
        margin: vw(50);
      }
      span {
        @include font(vmin(6), bold, vmin(10));
        display: none;
      }

      img {
        max-width: vmin(10);
        max-height: vmin(10);
        padding: 0 vmin(10) 0 vmin(10);
      }
    }
  }
}
</style>
