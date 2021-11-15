<template>
  <div class="main-container">
    <div class="sidebar">

    </div>
    <div>
        <Header/>
        <div id="nav">
          <router-link to="/">Home</router-link> | 
          <router-link to="/description">Details</router-link>
        </div>
        <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/componets/Header";
export default {
	components: { Header },
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
