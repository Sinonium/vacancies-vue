<template>
   <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/DetailsCourse">Details Course</router-link>
      <router-link to="/createCourse">Create Course</router-link>|
      <router-link to="/test">Test</router-link>|
   </div>
   <div class="main-container">
      <div class="sidebar">
         <SideBar v-if="user" />
      </div>
      <div class="hero">
         <Header v-if="user" />
         <router-view />
         <Footer v-if="user" />
      </div>
   </div>
</template>

<script>
   import Header from "@/components/Header";
   import Footer from "@/components/Footer";
   import SideBar from "./components/SideBar";
   import {user} from './composables/getUser'
   export default {
      components: { Header, Footer, SideBar },
      setup() {
         

         return {user}
      }
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
      .sidebar {
         width: vw(330);
      }
      .hero{
         margin-left: vw(330);
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
</style>
