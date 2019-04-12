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
  .grid {
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
