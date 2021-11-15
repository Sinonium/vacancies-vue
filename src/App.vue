<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/description">Details</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import '@/assets/scss/index.scss';
body{
    background-color: $bg-main;
}

#nav{
  display: flex;
  justify-content: center;
}
</style>
