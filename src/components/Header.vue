<template>
   <header class="header">
      <div class="header__logo">
         <div class="burger" @click="$emit('sidebarClick')">
            <span></span>
         </div>
         <router-link to="/" class="header__logo-text">
            Avocadiki
         </router-link>
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
        <BecomeTeacher :currentUserInfo="currentUserInfo" />
         <button @click.prevent="handleClick()" class="header__record-logOut">
            Log Out
         </button>
      </div>
   </header>
</template>

<script>
   import { computed, ref } from "@vue/reactivity";
   import { useRouter } from "vue-router";
   import { user } from "../composables/getUser";
   import useAuth from "@/composables/useAuth";
   import BecomeTeacher from "@/components/BecomeTeacher";
   import { useStore } from "vuex";
   import { onMounted } from "@vue/runtime-core";
   export default {
      components: { BecomeTeacher },
      setup() {
         console.log(user.value);
         const isTeacher = ref(false);
         const router = useRouter();
         const handleClick = async () => {
            const { logout } = useAuth();

            try {
               await logout();
               await router.push("/login");
            } catch (err) {
               console.log(err);
            }
         };
         const store = useStore();
         const userName = user.value.displayName;

         const currentUserInfo = computed(() => store.state.userInfo);

         const getUser = async () => {
            console.log(user.value.uid);
            await store.dispatch("getUserInfo", user.value.uid);
         };
         onMounted(() => {
            getUser();
         });

         const headerNav = ref(["Main", "Career", "About", "Blog", "Support"]);
         return { userName,headerNav, handleClick, isTeacher, currentUserInfo };
      },
   };
</script>

<style lang="scss">
   @import "@/assets/scss/index.scss";
   .header {
      @include flex($justify: space-between);
      background-color: $white;
      padding: vw(20) vw(30) vw(20) vw(45);
      box-sizing: border-box;
      width: vw(1270);
      &__logo {
         @include flex();
         .burger {
            margin-right: vw(36);
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
                  content: "";
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
         &-teacher {
            a {
                text-decoration: none;
                @include font(vw(12), 700, vh(20), $greyBlue70);
                margin-right: vw(40);
             }
         }
         &-logOut {
            @include font(vw(12), 700, vh(20), $blue);
            background-color: rgba(51, 97, 255, 0.1);
            border-radius: vw(30);
            border: none;
            width: vw(100);
            height: vw(50);
            margin: 0;
            @include flex();
         }
      }
   }
   @media screen and (max-width: 1025px) {
      .header {
         padding: vw(20) vw(30) vw(20) vw(20);
         &__form {
            input {
               width: vw(190);
               &::placeholder {
                  @include font(vw(17), 700, vh(20), $greyBlue70);
               }
            }
         }
         &__logo {
            .burger {
               margin-right: vw(20);
            }
            &-text {
               @include font(vw(20), 700, vh(30), $greyBlue50);
            }
         }
         &__nav {
            &-link {
               @include font(vw(16), 700, vw(25), $greyBlue60);
            }
         }
         &__record {
            @include flex();
            &-teacher {
               @include font(vw(16), 700, vh(25), $greyBlue60);
            }
            &-teacher {
                a {
                    @include font(vw(15), 700, vh(20), $greyBlue70);
                }
            }
            &-logOut {
               @include font(vw(15), 700, vh(20), $blue);
            }
         }
      }
   }
@media screen and (max-width: 1300px) {
    .header {
        &__form {
            input {
                width: vw(170);
            }
        }
    }
}
   @media screen and (max-width: 770px) {
      .header {
         padding: vw(30) vw(40) vw(30) vw(30);
         width: 100%;
         flex-direction: row-reverse;
         &__form {
            div {
               width: vw(360);
               height: vw(70);
            }
            input {
               width: vw(240);
               &::placeholder {
                  @include font(vw(26), 700, vh(20), $greyBlue70);
               }
            }
         }
         &__logo {
            flex-direction: row-reverse;
            .burger {
                span {
                    margin-left: vw(40);
                    margin-right: 0;
                    width: vw(30);
                    height: vw(5);
                  &::before,
                  &::after {
                     transform: translateY(vw(-10));
                  }
                  &::after {
                     transform: translateY(vw(10));
                  }
               }
            }
            &-text {
               @include font(vw(30), 700, vh(30), $greyBlue50);
            }
         }
         &__nav {
            padding-bottom: vw(5);
            &-link {
               @include font(vw(26), 700, vw(25), $greyBlue60);
            }
         }
         &__record {
            display: block;
            &-teacher {
                a {
                    @include font(vw(28), 700, vh(20), $greyBlue70);
                }
            }
            &-logOut {
               display: none;
            }
         }
      }
   }
   @media screen and (max-width: 430px) {
      .header {
        justify-content: center;
         &__logo {
            .burger {
               span {
                  width: vmin(22);
                  height: vmin(3);
                  &::before,
                  &::after {
                     transform: translateY(vmin(-6));
                  }
                  &::after {
                     transform: translateY(vmin(6));
                  }
               }
            }
            &-text {
               margin-right: vmin(10);
               @include font(vmin(16), 700, vmin(30), $greyBlue50);
            }
         }
         &__nav {
            display: none;
         }
         &__form {
            display: none;
         }
         &__record {
            @include flex();
            &-teacher {
               @include font(vmin(15), 700, vmin(25), $greyBlue60);
               text-align: center;
            }
            &-teacher {
                a {
                    @include font(vmin(15), 700, vmin(20), $greyBlue70);
                }
            }
            &-logOut {
               @include font(vmin(15), 700, vmin(20), $blue);
               width: vmin(90);
               height: vmin(35);
               border-radius: vmin(30);
            }
         }
      }
   }
</style>
