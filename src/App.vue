<template>
   <div class="main-container">
      <SideBar v-if="user" :active="sidebar" />

      <div class="hero" @click.self="closeSidebar">
         <Header @sidebarClick="handleSidebar" v-if="user" />
         <router-view />
         <Footer v-if="user" />
      </div>
   </div>
</template>

<script>
   import Header from "@/components/Header";
   import Footer from "@/components/Footer";
   import SideBar from "./components/SideBar";
   import { user } from "./composables/getUser";
   import { ref } from "@vue/reactivity";
   export default {
      components: { Header, Footer, SideBar },
      setup() {
         let screenWidth = window.screen.width;
         window.addEventListener(
            `resize`,
            () => {
               screenWidth = window.screen.width;
               if (screenWidth > 769) {
                  sidebar.value = true;
               }
            },
            false
         );
         const sidebar = ref(true);
         const handleSidebar = () => {
            if (screenWidth < 769) {
               sidebar.value = !sidebar.value;
            }
         };
         const closeSidebar = () => {
            if (screenWidth < 769) {
               sidebar.value = false
            }
         }
         if (screenWidth <= 769) {
            sidebar.value = false;
         }

         return { user, sidebar, handleSidebar, closeSidebar };
      },
   };
</script>

<style lang="scss">
   @import "@/assets/scss/index.scss";
   body {
      background-color: $bg-main;
      overflow-x: hidden;
   }

   body,
   h3,
   ul,
   div,
   span {
      padding: 0;
      margin: 0;
   }

   .main-container {
      display: flex;
      .hero {
         margin-left: vw(330);
         width: 100%;
      }
   }

   #nav {
      display: flex;
      justify-content: center;
   }
   .row {
      display: flex;
   }
   .col-3 {
      width: 25%;
   }
   @media screen and(max-width: 769px) {
      .main-container {
         .hero {
            margin: 0;
         }
      }
   }
</style>
