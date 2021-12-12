<template>
  <div class="filters">
    <ul>
      <li
        class="filtersItem"
        :class="{ active: activeItem === i }"
        @click="handleactiveItem(i)"
        v-for="(item, i) in testfilters"
        :key="item.title"
      >
        <FilterItem :item="item" :activeItem="activeItem"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import FilterItem from './FiltersItem.vue'
export default {
  components: { FilterItem },
  setup() {
    const testfilters = ref([
      {
        id: 0,
        title: 'Most Popular',
        icon: `<svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.95286 15.7333C4.95286 15.7333 0 15.1963 0 10.9971C0 6.79791 2.53581 5.06667 4.64504 4.0128C6.75427 2.95893 7.08326 0 7.08326 0C7.08326 0 10.3801 1.85876 10.8542 4.18686C11.3283 6.51497 9.89102 8.44444 9.89102 8.44444C9.89102 8.44444 11.4796 8.32292 12.1577 7.16771C12.8358 6.0125 12.9889 5.06667 12.9889 5.06667C12.9889 5.06667 16.068 9.80043 14.4328 12.2156C12.7976 14.6307 10.3751 16 10.3751 16C10.3751 16 7.43432 14.6768 6.70687 13.1947C5.97941 11.7126 6.50234 9.6 6.50234 9.6C6.50234 9.6 4.09996 10.3661 3.72077 12.2156C3.34158 14.065 4.95286 15.7333 4.95286 15.7333Z"
            fill="#C3CAD9"
          />
        </svg>`,
      },
      {
        id: 1,
        title: "Editor's choice",
        icon: `<svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.12 0.443758L6.58 5.98376C6.21 6.35376 6 6.86376 6 7.39376V17.3838C6 18.4838 6.9 19.3838 8 19.3838H17C17.8 19.3838 18.52 18.9038 18.84 18.1738L22.1 10.5638C22.94 8.58376 21.49 6.38376 19.34 6.38376H13.69L14.64 1.80376C14.74 1.30376 14.59 0.793758 14.23 0.433758C13.64 -0.146242 12.7 -0.146242 12.12 0.443758ZM2 19.3838C3.1 19.3838 4 18.4838 4 17.3838V9.38376C4 8.28376 3.1 7.38376 2 7.38376C0.9 7.38376 0 8.28376 0 9.38376V17.3838C0 18.4838 0.9 19.3838 2 19.3838Z"
            fill="#C3CAD9"
          />
        </svg>`,
      },
      {
        id: 2,
        title: 'New Courses',
        icon: `<svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 8.9C9.39 8.9 8.9 9.39 8.9 10C8.9 10.61 9.39 11.1 10 11.1C10.61 11.1 11.1 10.61 11.1 10C11.1 9.39 10.61 8.9 10 8.9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM12.19 12.19L4 16L7.81 7.81L16 4L12.19 12.19Z"
            fill="#C3CAD9"
          />
        </svg>`,
      },
      {
        id: 3,
        title: 'New Teachers',
        icon: `<svg
          width="21"
          height="18"
          viewBox="0 0 21 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_2977)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.9075 9.9V12.71C2.9075 13.44 3.3075 14.12 3.9475 14.47L8.9475 17.2C9.5475 17.53 10.2675 17.53 10.8675 17.2L15.8675 14.47C16.5075 14.12 16.9075 13.44 16.9075 12.71V9.9L10.8675 13.2C10.2675 13.53 9.5475 13.53 8.9475 13.2L2.9075 9.9ZM8.9475 0.24L0.5175 4.84C-0.1725 5.22 -0.1725 6.22 0.5175 6.6L8.9475 11.2C9.5475 11.53 10.2675 11.53 10.8675 11.2L18.9075 6.81V12.72C18.9075 13.27 19.3575 13.72 19.9075 13.72C20.4575 13.72 20.9075 13.27 20.9075 12.72V6.31C20.9075 5.94 20.7075 5.61 20.3875 5.43L10.8675 0.24C10.2675 -0.08 9.5475 -0.08 8.9475 0.24Z"
              fill="#C3CAD9"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_2977">
              <rect width="21" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>`,
      },
    ])
    const filters = ref([0, 0, 0, 0])
    const coursesFilter = (i) => {
      filters.value = [0, 0, 0, 0]
      filters.value[i] = 1
      console.log(filters.value)
      switch (i) {
        case 2:
          courses.value.sort((a, b) =>
            (a.data[2] - 2000) * 372 + a.data[1] * 31 + a.data[0] <
            (b.data[2] - 2000) * 372 + b.data[1] * 31 + b.data[0]
              ? 1
              : -1
          )
          break
        case 0:
          courses.value.sort((a, b) => (a.students < b.students ? 1 : -1))
          break
        case 1:
          courses.value.sort((a, b) => (a.grade < b.grade ? 1 : -1))
          break
        case 3:
          courses.value.sort((a, b) =>
            (a.teacher_data[2] - 2000) * 372 +
              a.teacher_data[1] * 31 +
              a.teacher_data[0] <
            (b.teacher_data[2] - 2000) * 372 +
              b.teacher_data[1] * 31 +
              b.teacher_data[0]
              ? 1
              : -1
          )
          break
      }
      console.log(courses.value)
    }
    const activeItem = ref(0)
    const handleactiveItem = (index) => {
      activeItem.value = index
    }

    return { activeItem, handleactiveItem, testfilters, filters, coursesFilter }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
.filtersItem {
  cursor: pointer;
  div {
    @include font(vw(12), 700, vw(20), $greyBlue60);
    display: flex;
    align-items: center;
    div {
      svg {
        width: vw(20);
        height: vw(20);
      }
    }
  }
}
.active {
  position: relative;
  div {
    @include font(vw(12), 800, vw(20));
    color: $blue !important;
    svg {
      path {
        fill: $blue;
      }
    }
  }
}
.active::before {
  position: absolute;
  content: '';
  left: vw(-10);
  top: vw(50);
  background-color: $blue;
  width: 120%;
  height: 2px;
}
.filters {
  position: relative;
  ul {
    margin-left: vw(90);
    margin-top: vw(45);
    display: flex;
    list-style-type: none;
    li {
      margin-right: vw(50);
    }
  }
}
.filters::before {
  position: absolute;
  content: '';
  left: 0;
  top: vw(50);
  background-color: $greyBlue95;
  width: 100%;
  height: 2px;
}
@media screen and (max-width: 1024px) {
  .filtersItem {
    div {
      @include font(vmin(10), 600, vmin(10), $greyBlue60);
      div {
        svg {
          width: vmin(8);
          height: vmin(8);
        }
      }
    }
  }
  .active {
    span {
      @include font(vmin(6), 800, vmin(10));
    }
  }
  .active::before {
    left: vmin(-2);
    top: vmin(30);
    width: 120%;
  }
  .filters {
    ul {
      margin-left: vmin(20);
      margin-top: vmin(25);
      li {
        margin-right: vmin(15);
        margin-bottom: vmin(10);
      }
    }
  }
  .filters::before {
    top: vmin(30);
  }
}
</style>
