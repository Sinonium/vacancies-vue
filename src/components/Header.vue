<template>
  <header class="header">
    <div class="header__logo">
      <div class="burger">
        <span></span>
      </div>
      <router-link to="/" class="header__logo-text"> Constructor </router-link>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item" v-for="item in headerNav" :key="item">
          <a href="" class="header__nav-link">
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
    <form class="header__form">
      <div>
        <img src="@/assets/img/headerImg/search.svg" alt="" />
        <input type="search" placeholder="Search Courses ..." />
        <img src="@/assets/img/greyArrow.svg" alt="" />
      </div>
    </form>
    <div class="header__record">
      <router-link
        v-if="isTeacher"
        to="/createCourse"
        class="header__record-teacher"
      >
        Create Course
      </router-link>

      <div class="header__record-teacher">
        <button @click="$refs.modalTeacher.openModal()">Become Teacher</button>
        <modal ref="modalTeacher">
          <template v-slot:modal__content>
            <h1>Modal</h1>
            <router-link
              :to="{ name: 'Becometeacher' }"
              @click="$refs.modalTeacher.closeModal()"
            >
              <button>Yes</button>
            </router-link>
            <button @click="$refs.modalTeacher.closeModal()">Cancel</button>
          </template>
        </modal>
      </div>
      <div class="header__record-logIn">
        {{ userName }}
      </div>
      <button @click.prevent="handleClick()" class="header__record-logOut">
        Log Out
      </button>
    </div>
  </header>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import useAuth from '@/composables/useAuth'
import { user } from '../composables/getUser'
import Modal from './Modal.vue'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  components: { Modal },
  setup() {
    const userName = user.value.email
    console.log(user.value.email)
    const isTeacher = ref(false)
    const router = useRouter()
    const store = useStore()

    const userInfo = ref([])

    const handleClick = async () => {
      const { logout } = useAuth()

      try {
        await logout()
        await router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }

    const getUser = async () => {
      console.log(user.value.uid)
      await store.dispatch('getUserInfo', user.value.uid)
      const userInfoData = computed(() => store.state.userInfo)
      console.log(userInfoData.value)
    }

    onMounted(() => {
      getUser()
    })

    const headerNav = ref(['Main', 'Career', 'About', 'Blog', 'Support'])
    return {
      headerNav,
      handleClick,
      isTeacher,
      userName,
      getUser,
      userInfo,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
.header {
  @include flex($justify: space-between);
  background-color: $white;
  padding: vw(20) vw(30) vw(20) vw(45);
  box-sizing: border-box;
  width: vw(1270);
  &__logo {
    @include flex();
    .burger {
      margin-right: vh(36);
      span {
        position: relative;
        display: inline-block;
        margin-bottom: vh(5);
        width: vw(22);
        height: vw(2.5);
        border-radius: vw(3);
        background-color: $greyBlue85;
        &::before,
        &::after {
          content: '';
          position: absolute;
          transform: translateY(vw(-6));
          width: 100%;
          height: 100%;
          background-color: inherit;
        }
        &::after {
          transform: translateY(vw(6));
        }
      }
    }
    &-text {
      @include font(vw(18), 700, vh(30), $greyBlue50);
      text-decoration: none;
    }
  }
  &__nav {
    &-list {
      @include flex();
      list-style-type: none;
    }
    &-item {
      margin-right: vw(20);
      &:last-child {
        margin-right: 0;
      }
    }
    &-link {
      text-decoration: none;
      @include font(vw(13), 700, vw(25), $greyBlue60);
    }
  }
  &__form {
    div {
      @include flex();
      padding: 0 vw(30);
      box-sizing: border-box;
      width: vw(270);
      height: vw(50);
      border: 2px solid $greyBlue98;
      border-radius: vw(30);
    }
    input {
      border: none;
      outline: none;
      padding-left: vw(17);
      &::placeholder {
        @include font(vw(12), 700, vh(20), $greyBlue70);
      }
    }
  }
  &__record {
    @include flex();
    &-teacher {
      text-decoration: none;
      @include font(vw(13), 700, vh(25), $greyBlue60);
      margin-right: vw(54);
    }
    &-logIn {
      text-decoration: none;
      @include font(vw(12), 700, vh(20), $greyBlue70);
      margin-right: vw(40);
    }
    &-logOut {
      @include font(vw(12), 700, vh(20), $blue);
      background-color: rgba(51, 97, 255, 0.1);
      border-radius: vw(30);
      width: vw(100);
      height: vw(50);
      margin: 0;
      @include flex();
    }
  }
}
</style>
