<template>
  <div id="app">
    <div id="nav" class="grid">
      <router-link to="/main">Main</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  body{
    margin: 0 auto;
    padding: 0;
    background: rgba(245, 245, 245, 0.91);
  }
  .grid {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  #nav{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 10vh;
    text-align: center;
    width: 50%;
    margin-left: 25%;
    text-decoration: none;
  }
</style>
