<template>
  <div class="main-container">
    <div class="sidebar">
    </div>
    <div>
        <Header/>
        <div id="nav">
          <router-link to="/">Home</router-link> | 
          <router-link to="/detailsCourse">Details Course</router-link>
        </div>
        <router-view/>
        <Footer/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
	components: { Header, Footer },
};
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
body{
    background-color: $bg-main;
}

body, h3, ul, div, span {
    padding: 0;
    margin: 0;
}

.main-container {
  display: flex;
  .sidebar {
    width: vw(330);
  }
}

#nav{
  display: flex;
  justify-content: center;
}
</style>
