<template>
  <div class="container">
    <div class="themes">
      <div class="themes-title">
        <span>What do you learn?</span>
        <img src="@/assets/scss/icons/burger-menu.svg" />
        <div class="themes-title__item">
          <div class="themes-title__item-1">
            <ul>
              <li v-for="theme in themes" :key="theme.id" :theme="theme">
                <img src="@/assets/scss/icons/done.svg" />{{ theme.name }}
              </li>
              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" /> JavaScript modules
              </li>
              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" />Get friendly supportin
                the course Q&A
              </li>
              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" />learning react / redux
              </li>
            </ul>
          </div>
          <div class="themes-title__item-2">
            <ul>
              <li v-for="theme in themes_2" :key="theme.id" :theme="theme">
                <img src="@/assets/scss/icons/done.svg" />{{ theme.name }}
              </li>

              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" />Error Handing
              </li>
              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" />React library
              </li>
              <li v-if="show">
                <img src="@/assets/scss/icons/done.svg" />Downloadable
                lecturesfor all projects
              </li>
            </ul>
          </div>
        </div>
        <button @click="show = !show">
          <p v-if="show">{{ fewer }}</p>
          <p v-else>{{ more }}</p>
        </button>
      </div>
    </div>

    <div class="content">
      <div class="themes-title">
        <span>Course Content</span>
        <img src="@/assets/scss/icons/burger-menu.svg" />
      </div>
      <div class="content-courses">
        <div
          v-for="item in items"
          :key="item.id"
          class="content-courses__theme"
        >
          <svg
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
          <h6 @click="item.open = !item.open">{{ item.title }} 
            </h6>
   
          <span> {{ item.allTime }}</span>
          <div class="content-courses__open" v-if="item.open">
            <div class="content-courses__item">
              <div class="malika">
                <a
                  href="https://www.youtube.com/watch?v=-1DRETk-mns&t=7s"
                  target="blank"
                >
                  <img :src="videoIcon" alt=""
                /></a>
                <p>{{ item.name }}</p>

                <a
                  href="https://www.youtube.com/watch?v=-1DRETk-mns&t=7s"
                  target="blank"
                  >{{ item.view }}</a
                >
                <span>{{ item.time }}</span>
              </div>
            </div>
            <div class="content-courses__item">
              <div class="malika">
                <img :src="videoIcon" alt="" />

                <p>{{ item.name_1 }}</p>
                <a href=""></a>
                <span>{{ item.time_1 }}</span>
              </div>
            </div>
            <div class="content-courses__item">
              <div class="malika">
                <img :src="videoIcon" alt="" />

                <p>{{ item.name_2 }}</p>
                <a href=""></a>
                <span>{{ item.time_2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      videoIcon: require("@/assets/scss/icons/video.svg"),
      items: [
        {
          title: "Course Content",
          allTime: "8:82",

          name: "How To Succedd In This Course",
          view: "Preview",
          time: "05:34",

          name_1: "Join Our Online Classroom",
          time_1: "01:08",

          name_2: "Exercise: Meet The Comminity!",
          time_2: "01:08",
        },

        {
          title: "JavaScript Foundation",
          lectures: "26 Lectures",
          allTime: "7:82",

          name: "Section Overview",
          view: "Preview",
          time: "05:34",

          name_1: "Exercise: Javascript Engine",
          view: "Preview",
          time_1: "05:08",

          name_2: "Marketing and Sales",
          time_2: "01:08",
        },
        {
          title: "Putting It All Together: The Budget App Project",
           lectures: "3 Lectures",
          allTime: "13:82",

          name: "Local servers",
          time: "05:34",

          name_1: "How to work with JSHint",
          time_1: "01:08",

          name_2: "How to create fadeIn / fadeOut animations",
          time_2: "01:08",
        },
        {
          title: "Next Generation JavaScript: Intro to ES6",
           lectures: "4 Lectures",
          allTime: "10:82",

          name: "How to work with a server in JavaScript part 1",
          time: "02:34",

          name_1: "How to work with a server in JavaScript part 2",
          time_1: "03:08",

          name_2: "How to work with a server in JavaScript part 3",
          time_2: "01:08",
        },
        {
          title: "Customizing the code editor",
           lectures: "7 Lectures",
          allTime: "11:82",

          name: "How To Succedd In This Course",
          time: "05:34",

          name_1: "Timer operation",
          time_1: "01:08",

          name_2: "Implementing a module with displaying images",
          time_2: "01:08",
        },
      ],
      show: false,
      fewer: "Show Fewer Features",
      more: "Show more Features",
      themes: [
        { name: "Get friendly supportinthe course Q&A" },
        { name: "Downloadable lectures for all projects" },
        { name: "Inheritance + Prototpe Chain" },
        { name: "Closures" },
      ],
      themes_2: [
        { name: "Practice your skills with coding challenges" },
        { name: "Object Orinted Programming" },
        { name: "Scope and Execution Context" },
        { name: "Latest features: ES6, ES7, ES8, ES9" },
      ],
    };
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/index.scss";

.container {
  margin: 0 auto;
  background: #e4e7f0;

  .themes {
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.137);
    border-radius: vw(10);
    width: vw(730);
    margin-left: vw(410);
    margin-bottom: vw(30);
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
        padding-right: vw(100);
      }

      &__item-1,
      &__item-2 {
        @include font(vw(12), bold, vw(20));
        font-family: "San Francisco Pro";
        color: $greyBlue60;
      }
      span {
        padding-right: vw(550);
      }
    }
    li {
      list-style-type: none;
      padding-top: vw(25);
      img {
        margin-right: vw(20);
      }
    }
    button {
      @include font(vw(12), bold, vw(20));
      font-family: "San Francisco Pro";
      color: $greyBlue60;
      width: vw(190);
      height: vw(40);
      margin: vw(30) 0 vw(40) vw(250);
      background: #ffffff;
      border: 2px solid #f7f8fa;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.05);
      border-radius: vw(30);
      cursor: pointer;
    }
  }

  .content {
    width: vw(730);
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
    border-radius: vw(10);
    margin-left: vw(410);
    padding-bottom: vw(30);
    &-courses {
      width: vw(670);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.151);
      border-radius: vw(10);
      margin: vw(40) vw(30) vw(45) vw(30);

      h6 {
        cursor: pointer;
      }
      &__open {
        width: 100%;
      }
      &__item {
        width: 100%;
        border-top: 2px solid $greyBlue98;

        .malika {
          display: flex;
          align-items: baseline;
          margin: vw(10) 0 vw(10) vw(40);
        }

        p {
          @include font(vw(12), bold, vw(20));
          font-family: "San Francisco Pro";
          color: $greyBlue60;
          width: 70%;
        }

        a {
          @include font(vw(12), bold, vw(20));
          font-family: "San Francisco Pro";
          color: $greyBlue60;
          width: 10%;
          text-decoration: none;
        }
      }

      &__theme {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;

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
        svg {
          width: 10%;
        }
        img {
          padding: 0 vw(20) 0 vw(20);
        }
      }
    }
  }
}
</style>