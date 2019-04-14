<template>
  <div id="app">
    <div id="nav" class="grid">
      <router-link to="/">Main</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <transition name='fade' mode="out-in">
      <router-view/>
    </transition>
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
    transition: .5s;
  }
  a:hover{
    text-shadow: 5px 5px 5px #222222;
  }
  .fade-enter-active, .fade-leave-active {
    -webkit-transition: 1s;
    transition: 1s;
  }
  .fade-enter, .fade-leave-to {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
    opacity: 0;
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
