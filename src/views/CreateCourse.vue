<template>
  <form class="admin-board" @submit.prevent="handleSubmit">
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

        <p class="create-course__instruction">Type the heading</p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          placeholder="Type the heading"
          v-model="heading"
        />

        <p class="create-course__instruction">Tell us about course</p>
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

        <textarea
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          placeholder="Tell us about course"
          v-model="mainInfo"
        ></textarea>

        <p class="create-course__instruction">
          Tell us in detail about your course (it is not very important)
        </p>
        <textarea
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          name="comment"
          placeholder="Tell us in detail about your course"
          v-model="moreInfo"
        ></textarea>

        <p class="create-course__title">Photo of your course</p>

        <!-- <input
          class="url-input"
          type="fail"


        /> -->

        <label class="downloadimg">
          <input
            type="file"
            @change="getImageUrl"
            id="downloadimg"
            name="downloadimg"
            accept="image/png, image/jpeg"
          />
          <p class="create-course__instruction">Download the picture</p>
        </label>

        <h4 class="create-course__title">What will the student study?</h4>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="study"
        />

        <span class="enter-span">
          <div class="enter" @click="enterWhat">Enter</div>
        </span>

        <h4 class="create-course__title">Who this course is for:</h4>
        <p class="create-course__instruction">Type option one by one</p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          v-model="whoIsfor"
        />
        <span class="enter-span">
          <div class="enter" @click="enterWho">Enter</div>
        </span>

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
          <option
            v-for="option in categories"
            :key="option.text"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
        <SubACategories
          @selectedCates="popa"
          v-if="selected === 'Development'"
        />
        <SubBCategories @selectedCates="popa" v-if="selected === 'Business'" />
        <SubCCategories
          @selectedCates="popa"
          v-if="selected === 'Finance & Accounting'"
        />
        <SubDCategories
          @selectedCates="popa"
          v-if="selected === 'IT & Software'"
        />
        <SubDCategories
          @selectedCates="popa"
          v-if="selected === 'Office Productivity'"
        />
        <SubECategories
          @selectedCates="popa"
          v-if="selected === 'Personal Development'"
        />
        <SubFCategories
          @selectedCates="popa"
          v-if="selected === 'Design and Art'"
        />
        <SubGCategories
          @selectedCates="popa"
          v-if="selected === 'Marketing and Sales'"
        />
        <SubHCategories
          @selectedCates="popa"
          v-if="selected === 'Lifestyle and Fashion'"
        />
        <SubICategories
          @selectedCates="popa"
          v-if="selected === 'Photography'"
        />
        <SubJCategories
          @selectedCates="popa"
          v-if="selected === 'Health & Fitness'"
        />
        <SubKCategories
          @selectedCates="popa"
          v-if="selected === 'Music and Sound Design'"
        />
        <SubLCategories
          @selectedCates="popa"
          v-if="selected === 'Teaching & Academics'"
        />
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
          <p class="create-course__instruction">Type course time</p>
          <input
            onkeyup="this.value=this.value.replace(/^\s/,'')"
            type="number"
            v-model="coursetime"
          />
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
          v-model="lectureName"
        />

        <p class="create-course__instruction">
          Type the name of the lesson: (there can be many lessons here)
        </p>
        <input
          onkeyup="this.value=this.value.replace(/^\s/,'')"
          type="text"
          placeholder="How To Succedd In This Course"
          v-model="lesson"
        />
        <div class="lesson-details">
          <input type="time" v-model="time" />
          <select v-model="type" class="select">
            <option>video</option>
            <option>text</option>
          </select>
        </div>
        <span class="enter-span">
          <div class="enter" @click="enterLesson">Enter</div>
        </span>
      </div>
      <div class=""></div>
      <div class="enter2" @click="enterLecture">Add lecture</div>

    </div>
    <div class="publish">
      <button class="button">Publish Course</button>
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
import useStorage from '@/composables/useStorage'
export default {
  components: {
    SubACategories,
    SubBCategories,
    SubCCategories,
    SubDCategories,
    SubECategories,
    SubFCategories,
    SubGCategories,
    SubHCategories,
    SubICategories,
    SubJCategories,
    SubKCategories,
    SubLCategories,
  },

  setup() {
    const { uploadImageAndGetImageUrl } = useStorage()
    const categories = [
      {
        text: 'Development',
        value: 'Development',
      },
      {
        text: 'Business',
        value: 'Business',
      },
      {
        text: 'Finance & Accounting',
        value: 'Finance & Accounting',
      },
      {
        text: 'IT & Software',
        value: 'IT & Software',
      },
      {
        text: 'Office Productivity',
        value: 'Office Productivity',
      },
      {
        text: 'Personal Development',
        value: 'Personal Development',
      },
      {
        text: 'Design and Art',
        value: 'Design and Art',
      },
      {
        text: 'Marketing and Sales',
        value: 'Marketing and Sales',
      },
      {
        text: 'Lifestyle and Fashion',
        value: 'Lifestyle and Fashion',
      },
      {
        text: 'Photography',
        value: 'Photography',
      },
      {
        text: 'Health & Fitness',
        value: 'Health & Fitness',
      },
      {
        text: 'Music and Sound Design',
        value: 'Music and Sound Design',
      },
      {
        text: 'Teaching & Academics',
        value: 'Teaching & Academics',
      },
    ]
    const popa = (a, b) => {
      jopa.value = [selected.value, a, b]
    }
    const selected = ref('')
    const jopa = ref([])
    const img = ref()

    const responseUrl = ref('')
    const getImageUrl = async (event) => {
      const imgFile = event.target.files[0]
      const imgResponse = await uploadImageAndGetImageUrl(myId, imgFile)
      responseUrl.value = await imgResponse
    }
    const myId = uuid()
    const type = ref('')
    const heading = ref('')
    const name = ref('')
    const price = ref('')
    // const imageURL = ref('')
    const mainInfo = ref('')
    const moreInfo = ref('')
    const teacher = ref('')
    const level = ref('')
    const whoIsfor = ref('')
    const enterIsWho = ref([])
    const enterIsWhat = ref([])
    const pricelist = ref('')
    const duration = ref('')
    const lectureName = ref('')
    const lesson = ref('')
    const time = ref('00:05:05')
    const study = ref('')
    const Lessons = ref([])
    const Lectures = ref([])
    const coursetime = ref()
    const alllecturetime = ref([0, 0, 0])

    const enterWho = () => {
      enterIsWho.value = [...enterIsWho.value, whoIsfor.value]
      whoIsfor.value = ''
    }
    const enterWhat = () => {
      enterIsWhat.value = [...enterIsWhat.value, study.value]
      study.value = ''
    }

    const enterLesson = () => {
      let lesstringtime = ''
      let timeres = time.value.split(':')
      alllecturetime.value[0] = alllecturetime.value[0] + Number(timeres[0])
      alllecturetime.value[1] = alllecturetime.value[1] + Number(timeres[1])
      alllecturetime.value[2] = alllecturetime.value[2] + Number(timeres[2])

      if (timeres[0] != 0) lesstringtime = timeres[0].toString() + ':'

      if (timeres[1].toString().length == 2)
        lesstringtime = lesstringtime + timeres[1].toString() + ':'
      else lesstringtime = lesstringtime + '0' + timeres[1].toString() + ':'

      if (timeres[2].toString().length == 2)
        lesstringtime += timeres[2].toString()
      else lesstringtime = lesstringtime + '0' + timeres[2].toString()
      console.log(lesstringtime)
      Lessons.value = [
        ...Lessons.value,
        {
          time: lesstringtime,
          lessonName: lesson.value,
          type: type.value,
        },
      ]

      time.value = '00:05:05'
      lesson.value = ''
      type.value = ''
    }
    const enterLecture = () => {
      alllecturetime.value[1] =
        Math.floor(alllecturetime.value[2] / 60) + alllecturetime.value[1]
      alllecturetime.value[2] = alllecturetime.value[2] % 60
      alllecturetime.value[0] =
        Math.floor(alllecturetime.value[1] / 60) + alllecturetime.value[0]
      alllecturetime.value[1] = alllecturetime.value[1] % 60
      console.log(alllecturetime.value)

      let stringtime = ''

      if (alllecturetime.value[0] != 0) {
        stringtime = stringtime + alllecturetime.value[0].toString() + ':'
      }

      if (alllecturetime.value[1].toString().length == 2)
        stringtime = stringtime + alllecturetime.value[1].toString() + ':'
      else
        stringtime = stringtime + '0' + alllecturetime.value[1].toString() + ':'

      if (alllecturetime.value[2].toString().length == 2)
        stringtime = stringtime + alllecturetime.value[2].toString()
      else stringtime = stringtime + '0' + alllecturetime.value[2].toString()

      console.log(stringtime)
      Lectures.value = [
        ...Lectures.value,
        {
          lectureName: lectureName.value,
          allTime: stringtime,
          lessons: Lessons.value,
        },
      ]
      lectureName.value = ''
      Lessons.value = []
      alllecturetime.value = [0, 0, 0]
    }

    const handleSubmit = async () => {
      if (coursetime.value >= 0 && coursetime.value <= 2)
        duration.value = '0-2 Hours'
      if (coursetime.value >= 3 && coursetime.value <= 6)
        duration.value = '3-6 Hours'
      if (coursetime.value >= 7 && coursetime.value <= 16)
        duration.value = '7-16 Hours'
      if (coursetime.value >= 17) duration.value = '17+ Hours'

      console.log(responseUrl.value)

      await addCollection('courses', {
        name: name.value,
        price: price.value,
        imageUrl: responseUrl.value,
        teacher: teacher.value,
        level: level.value,
        pricelist: pricelist.value,
        duration: duration.value,
        categories: jopa.value,
        students: 0,
        teacherName: '',
        grade: 0,
        moreInfoId: myId,
      }),
        await addCollection(
          'more info',
          {
            whatStudy: enterIsWhat.value,
            courseContent: Lectures.value,
            heading: heading.value,
            mainInfo: mainInfo.value,
            moreInfo: moreInfo.value,
            whoIsfor: enterIsWho.value,
            grades: [],
            reviews: [],
            teacherID: '',
          },
          false,
          myId
        )
    }

    return {
      responseUrl,
      uploadImageAndGetImageUrl,
      popa,
      handleSubmit,
      lectureName,
      alllecturetime,

      enterLesson,
      enterLecture,
      coursetime,
      Lessons,
      Lectures,
      name,
      type,
      price,
      lesson,
      getImageUrl,
      categories,
      time,
      teacher,
      heading,
      mainInfo,
      moreInfo,
      categories,
      level,
      study,
      whoIsfor,
      pricelist,
      duration,
      selected,
      enterWho,
      enterIsWho,
      enterWhat,
      enterIsWhat,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.admin-board {
  margin: vw(30) vw(160);
  width: vw(760);
  .downloadimg {
    display: flex;
    width: vw(630);
    height: vw(200);
    cursor: pointer;
    background-color: $blue;
    opacity: 0.2;
    justify-content: center;
    input[type='file'] {
      display: none;
    }
    p {
      margin-top: vw(80);
      @include font(vw(18), 700, vh(30));
      color: white;
    }
  }

  .enter2 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @include font(vw(14), 600, vh(30));
    color: $white;
    background-color: $greyBlue70;
    width: vw(100);
    height: vw(50);
    border: none;
    border-radius: vw(5);
  }
  .enter {
    display: flex;
    align-items: center;
    justify-content: center;
    @include font(vw(14), 600, vh(30));
    color: white;
    background-color: $greyBlue90;
    width: vw(70);
    height: vw(30);
    border: none;
    border-radius: vw(5);
  }
  &__heading {
    @include font(vw(16), 700, vh(30));
    color: $greyBlue60;
  }
  .enter-span {
    display: flex;
    justify-content: end;
    padding-right: vw(10);
  }
  .publish {
    display: flex;
    justify-content: center;
    .button {
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
      padding: vw(10) vw(30);
      border: 2px solid #f5f6f7;
      width: 45%;
      box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
      border-radius: vw(5);
      margin-right: vw(10);
      margin-bottom: vw(10);
      height: vw(65);
      padding: vw(10) vw(10) vw(10) vw(15);
      text-transform: capitalize;
      @include font(vw(13), 600, vh(30));
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
    &__lectures {
      .lesson-details {
        display: flex;
        width: 100%;
        justify-content: space-between;
        input {
          width: 46%;
        }
        select {
          width: 46%;
          border: 2px solid #f5f6f7;
          box-shadow: 0px 2px 5px rgba(54, 61, 77, 0.03);
          border-radius: vw(5);
          margin-right: vw(10);
          height: vw(65);
          padding: vw(10) vw(10) vw(10) vw(15);
          text-transform: capitalize;
          @include font(vw(13), 600, vh(30));
        }
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
    
  }
}
@media screen and (max-width: 1024px) {
  .admin-board {
    margin: vmin(15) vmin(50);
    width: vmin(300);
    &__heading {
      @include font(vmin(14), 700, vmin(10));
      width: vmin(200);
    }
    .downloadimg {
    width: vmin(230);
    height: vmin(70);
    p {
      margin-top: vmin(25);
      @include font(vmin(9), 700, vmin(15));
      color: white;
    }
    }
    .enter2 {
    @include font(vmin(7), 600, vmin(15));
    width: vmin(70);
    height: vmin(30);
    border-radius: vw(10);
    }
    .enter {
      @include font(vmin(7), 600, vmin(15));
      width: vmin(50);
      height: vmin(20);
      border: none;
      border-radius: vw(10);
    }
    .publish {
      margin-right: vmin(40);
      .button {
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
        @include font(vmin(13), 700, vmin(13));
      }
      &__instruction {
        @include font(vmin(10), 700, vmin(13));
        margin: vmin(15) 0 vmin(10) 0;
      }
      select {
      padding: vmin(3) vmin(15);
      width: 50%;
      height: vmin(30);
      padding: vmin(5) vmin(5) vmin(5) vmin(10);
      @include font(vmin(7), 600, vh(15));
    }
      input {
        border-radius: vmin(5);
        padding: vw(10);
        margin: 0 0 vmin(15) 0;
        width: vmin(220);
        @include font(vmin(9), 600, vmin(15));
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
          width: vmin(220);
          height: vmin(60);
          @include font(vmin(9), 600, vmin(15));
        }
      }
      &__questions {
        margin-bottom: vmin(10);
        .questions {
          p {
            @include font(vmin(8), 700, vmin(13));
          }
          span {
            margin: vmin(3) vmin(5);
            width: vmin(7);
            height: vmin(2);
          }
        }
      }
      &__lectures {
      .lesson-details {
        select {
          border-radius: vw(10);
          height: vmin(25);
          padding: vw(10) vw(10) vw(10) vw(15);
          text-transform: capitalize;
          @include font(vw(13), 600, vh(30));
        }
      }
    }
      
    }
  }
}
</style>
