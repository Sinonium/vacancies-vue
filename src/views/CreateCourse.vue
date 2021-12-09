<template>
  <form class="admin-board" @submit.prevent="handleSubmit()">
    <h3 class="admin-board__heading">New Course Creation</h3>
    <div class="create-course">
      <div class="create-course__name">
        <h4 class="create-course__title">Name of the course</h4>
        <p class="create-course__instruction">
          Write the name of your course. The name should attract attention and
          reflect the essence of the course.
        </p>
        <label></label>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="name"
        />

        <p class="create-course__title">Some good examples:</p>
        <div class="create-course__examples">
          <span>Technical Design</span>
          <span>Web development</span>
          <span>Create 2d Animations</span>
        </div>
      </div>
    </div>

    <div class="create-course">
      <div class="create-course__description">
        <h4 class="create-course__title">Course Description</h4>

        <div class="create-course__questions">
          <div class="questions">
            <p>
              <span></span>
              What tasks will the work be used for?
            </p>
          </div>

          <div class="questions">
            <p>
              <span></span>
              What users is your product targeted to?
            </p>
          </div>

          <div class="questions">
            <p>
              <span></span>
              What criteria will you evaluate the result of work?
            </p>
          </div>
        </div>

        <p class="create-course__instruction">Type the heading</p>
        <textarea
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          cols="40"
          rows="3"
          placeholder="Type the heading"
          v-model="heading"
        ></textarea>

        <p class="create-course__instruction">Tell us about course</p>
        <textarea
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          cols="40"
          rows="3"
          placeholder="Tell us about course"
          v-model="mainInfo"
        ></textarea>

        <p class="create-course__instruction">
          Tell us in detail about your course (it is not very important)
        </p>
        <textarea
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          cols="40"
          rows="3"
          placeholder="Tell us in detail about your course"
          v-model="moreInfo"
        ></textarea>

        <p class="create-course__title">Photo of your course</p>
        <p class="create-course__instruction">Write the URL:</p>
        <input
          class="url-input"
          type="text"
          placeholder="https://drive.google.com/uc?export=view&id=1B5ZusvPN1mH91omnBkzilaJL8PkWC08e"
          v-model="imageURL"
        />

        <h4 class="create-course__title">What will the student study?</h4>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="study"
        />

        <h4 class="create-course__title">Who this course is for:</h4>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="whoIsfor"
        />

        <h4 class="create-course__title">About Teacher</h4>
        <p class="create-course__instruction">Type the name of the teacher</p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="teacher"
        />
      </div>
    </div>

    <div class="create-course">
      <div class="create-course__price">
        <h4 class="create-course__title">Price:</h4>
        <input type="number" placeholder="100$" v-model="price" />
      </div>
    </div>

    <div class="create-course">
      <div class="create-course__categories">
        <h4 class="create-course__title">Project Categories</h4>
            <select name="" id="" v-model="selected">
               <option v-for="option in categories" :key="option.text" :value="option.value">{{option.text}}</option>
            </select>
            <SubACategories @selectedCates="popa" v-if="selected === 'Development'"/>
            <SubBCategories @selectedCates="popa" v-if="selected === 'Business'" />
            <SubCCategories @selectedCates="popa" v-if="selected === 'Finance & Accounting'" />
            <SubDCategories @selectedCates="popa" v-if="selected === 'IT & Software'" />
            <SubDCategories @selectedCates="popa" v-if="selected === 'Office Productivity'" />
            <SubECategories @selectedCates="popa" v-if="selected === 'Personal Development'" />
            <SubFCategories @selectedCates="popa" v-if="selected === 'Design and Art'" /> 
            <SubGCategories @selectedCates="popa" v-if="selected === 'Marketing and Sales'" /> 
            <SubHCategories @selectedCates="popa" v-if="selected === 'Lifestyle and Fashion'" /> 
            <SubICategories @selectedCates="popa" v-if="selected === 'Photography'" /> 
            <SubJCategories @selectedCates="popa" v-if="selected === 'Health & Fitness'" /> 
            <SubKCategories @selectedCates="popa" v-if="selected === 'Music and Sound Design'" /> 
            <SubLCategories @selectedCates="popa" v-if="selected === 'Teaching & Academics'" /> 
        <div>
          <h4 class="create-course__title">Course levels</h4>
          <p class="create-course__instruction">
            Choose the level of your course
          </p>
          <select name="" id="" v-model="level">
            <option value="all">all levels</option>
            <option value="initial">initial</option>
            <option value="medium">medium</option>
            <option value="expert">expert</option>
          </select>
          <label for=""></label>
          {{ all }}
        </div>
        <div>
          <h4 class="create-course__title">Pricelist</h4>
          <p class="create-course__instruction">Choose one of this options</p>
          <select name="" id="" v-model="pricelist">
            <option value="paid">Paid courses and videos</option>
            <option value="free">Free courses and videos</option>
          </select>
          <label for=""></label>
        </div>
        <div>
          <h4 class="create-course__title">Duration courses</h4>
          <p class="create-course__instruction">Choose one of this options</p>
          <select name="" id="" v-model="duration">
            <option value="0-2">0-2 Hours</option>
            <option value="3-6">3-6 Hours</option>
            <option value="7-16">7-16 Hours</option>
            <option value="17+ hours">17+ Hours</option>
          </select>
          <label for=""></label>
        </div>
      </div>
    </div>

    <div class="create-course">
      <div class="create-course__lectures">
        <h4 class="create-course__title">Course Content</h4>

        <p class="create-course__instruction">Type the name of the lecture:</p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          placeholder="JavaScript Foundation"
        />

        <p class="create-course__instruction">Type the name of the lesson:</p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          placeholder="How To Succedd In This Course"
        />

      </div>
      </div>
    <div class="publish">
      <button>Publish Course</button>
    </div>
  </form>
</template>

<script>

import addCollection from '@/composables/addCollection'
import { ref } from '@vue/reactivity'
import { v4 as uuid } from 'uuid'
import SubACategories from '@/components/AdminPanel/SubACategories.vue'
import SubBCategories from '@/components/AdminPanel/SubBCategories.vue'
import SubCCategories from '@/components/AdminPanel/SubCCategories.vue'
import SubDCategories from '@/components/AdminPanel/SubDCategories.vue'
import SubECategories from '@/components/AdminPanel/SubECategories.vue'
import SubFCategories from '@/components/AdminPanel/SubFCategories.vue'
import SubGCategories from '@/components/AdminPanel/SubGCategories.vue'
import SubHCategories from '@/components/AdminPanel/SubHCategories.vue'
import SubICategories from '@/components/AdminPanel/SubICategories.vue'
import SubJCategories from '@/components/AdminPanel/SubJCategories.vue'
import SubKCategories from '@/components/AdminPanel/SubKCategories.vue'
import SubLCategories from '@/components/AdminPanel/SubLCategories.vue'
export default {
  components: { SubACategories, SubBCategories, SubCCategories, SubDCategories,SubECategories, SubFCategories, SubGCategories, SubHCategories, SubICategories, SubJCategories, SubKCategories, SubLCategories},

  setup() {
    const categories = [
        {
            text: 'Development',
            value: 'Development'
        },
        {
            text: 'Business',
            value: 'Business'
        },
        {
            text: 'Finance & Accounting',
            value: 'Finance & Accounting'
        },
        {
            text: 'IT & Software',
            value: 'IT & Software'
        },
        {
            text: 'Office Productivity',
            value: 'Office Productivity'
        },
        {
            text: 'Personal Development',
            value: 'Personal Development'
        },
        {
            text: 'Design and Art',
            value: 'Design and Art'
        },
        {
            text: 'Marketing and Sales',
            value: 'Marketing and Sales'
        },
        {
            text: 'Lifestyle and Fashion',
            value: 'Lifestyle and Fashion'
        },
        {
            text: 'Photography',
            value: 'Photography'
        },
        {
            text: 'Health & Fitness',
            value: 'Health & Fitness'
        },
        {
            text: 'Music and Sound Design',
            value: 'Music and Sound Design'
        },
        {
            text: 'Teaching & Academics',
            value: 'Teaching & Academics'
        },

    ]
    const popa = (a, b) => {
      jopa.value = [selected.value, a, b]
  }
    const selected = ref('')
    const jopa = ref([])

    const myId = uuid()

    const heading = ref('')
    const name = ref('')
    const price = ref('')
    const imageURL = ref('')
    const mainInfo = ref('')
    const moreInfo = ref('')
    const teacher = ref('')
    const level = ref('')
    const whoIsfor = ref('')
    const pricelist = ref('')
    const duration = ref('')

    const handleSubmit = async () => {
      await addCollection('courses', {
        name: name.value,
        price: price.value,
        imageURL: imageURL.value,
        teacher: teacher.value,
        level: level.value,
        whoIsfor: whoIsfor.value,
        pricelist: pricelist.value,
        duration: duration.value,
        categories: jopa.value,
        moreInfoId: myId,
      }),
        await addCollection(
          'more info',
          {
            heading: heading.value,
            mainInfo: mainInfo.value,
            moreInfo: moreInfo.value,
          },
          false,
          myId
        )
    }

    return {
      popa,
      handleSubmit,
      name,
      price,
      imageURL,
      categories,
      teacher,
      heading,
      mainInfo,
      moreInfo,
      categories,
      level,
      whoIsfor,
      pricelist,
      duration,
      selected
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
// @import '@riophae/vue-treeselect/dist/vue-treeselect.css';

.admin-board {
  margin: vw(30) vw(160);
  width: vw(760);
  &__heading {
    @include font(vw(16), 700, vh(30));
    color: $greyBlue60;
  }

  .publish {
    margin: 0 vw(30);
    button {
      @include font(vw(14), 600, vh(30));
      color: white;
      background-color: $blue;
      width: vw(200);
      height: vw(60);
      border: none;
      border-radius: vw(10);
    }
  }
  .create-course {
    margin: vw(30) 0;
    padding: vw(60);
    background: $white;
    box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
    border-radius: vw(10);
    &__title {
      @include font(vw(16), 700, vw(30));
      color: $greyBlue50;
    }
    &__instruction {
      @include font(vw(13), 700, vh(25));
      color: $greyBlue70;
      margin: vw(30) 0 vw(20) 0;
    }
    label {
      @include font(vw(13), 700, vh(25));
      color: $greyBlue70;
    }
    select {
      border-radius: vw(30);
      padding: vw(10) vw(30);
    }
    .url-input {
      text-transform: initial;
    }
    input {
      border: 2px solid #f5f6f7;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
      border-radius: vw(5);
      padding: vw(16) vw(10) vw(16) vw(15);
      width: vw(600);
      margin: 0 0 vw(15) 0;
      text-transform: capitalize;
      @include font(vw(13), 600, vh(30));
    }
    &__examples {
      span {
        @include font(vw(12), 700, vh(20));
        color: $greyBlue70;
        background: $greyBlue98;
        border-radius: vw(5);
        padding: vw(20) vw(10);
        margin: 0 0 0 vw(15);
      }
    }
    .examples {
      @include font(vw(13), 700, vw(25));
      color: $greyBlue70;
    }
    &__description {
      textarea {
        border: 2px solid #f5f6f7;
        box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
        border-radius: vw(5);
        width: vw(605);
        height: vw(120);
        resize: none;
        @include font(vw(13), 600, vh(30));
      }
    }
    &__questions {
      display: block;
      margin-bottom: vw(20);
      .questions {
        display: flex;
        p {
          @include font(vw(13), 700, vh(25));
          color: $greyBlue70;
        }
        span {
          display: inline-flex;
          margin: vw(3) vw(10);
          width: 15px;
          height: 2px;
          content: ' ';
          background-color: $greyBlue90;
        }
      }
    }
    &__categories {
      .category-blocks {
        display: flex;
        .category-block {
          display: block;
          margin: 0 vw(40) 0 0;
          .title {
            @include font(vw(13), 700, vh(25));
            color: $greyBlue50;
            margin-bottom: vw(20);
          }
          .category {
            @include font(vw(12), 700, vh(20));
            color: $greyBlue70;
          }
          .category:hover {
            color: $green;
          }
          .more {
            @include font(vw(12), 700, vh(20));
            color: $blue;
            margin-top: vw(20);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .admin-board {
    margin: vmin(15) vmin(40);
    &__heading {
      @include font(vmin(15), 700, vmin(15));
    }
    .publish {
      margin: 0 vmin(15);
      button {
        @include font(vmin(7), 600, vmin(15));
        color: white;
        width: vmin(100);
        height: vmin(30);
        border-radius: vmin(10);
      }
    }
    .create-course {
      margin: vmin(15) 0;
      padding: vmin(15);
      width: vmin(230);
      border-radius: vmin(5);
      &__title {
        @include font(vmin(10), 700, vmin(13));
      }
      &__instruction {
        @include font(vmin(7), 700, vmin(13));
        margin: vmin(15) 0 vmin(10) 0;
      }
      input {
        border-radius: vmin(5);
        padding: vw(10);
        margin: 0 0 vmin(15) 0;
        width: vmin(220);
      }
      &__examples {
        span {
          @include font(vmin(6), 700, vmin(10));
          border-radius: vmin(5);
          padding: vmin(3);
          margin: 0 0 0 vmin(6);
        }
      }
      .examples {
        @include font(vmin(6), 700, vmin(13));
      }
      &__description {
        textarea {
          border-radius: vmin(5);
          width: vmin(180);
          height: vmin(60);
          @include font(vmin(6), 600, vmin(15));
        }
      }
      &__questions {
        margin-bottom: vmin(10);
        .questions {
          p {
            @include font(vmin(7), 700, vmin(13));
          }
          span {
            margin: vmin(3) vmin(5);
            width: vmin(6);
            height: vmin(2);
          }
        }
      }
      &__categories {
        .category-blocks {
          .category-block {
            margin: 0 vmin(5) 0 0;
            .title {
              @include font(vmin(7), 600, vh(13));
              margin-bottom: vmin(7);
            }
            .category {
              @include font(vmin(6), 600, vmin(10));
            }
            .more {
              @include font(vmin(6), 700, vh(10));
              margin-top: vmin(10);
              color: $blue;
            }
          }
        }
      }
    }
  }
}
</style>
