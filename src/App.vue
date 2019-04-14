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
    font-family: 'Fascinate Inline', cursive;
    font-size: 2em;
  }
  a{
    text-decoration: none;
    color: #2b2b2b;
    /* text-shadow: -5px 8px 6px #292929; */
  }
  @media screen and (max-width:800px) {
      #nav{
        width: 80%;
        margin-left: 10%;
      }
  }
  @media screen and (max-width:500px) {
      #nav{
        width: 100%;
        margin-left: 0%;
      }
  }
</style>
