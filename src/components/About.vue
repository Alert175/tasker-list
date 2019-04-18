<template lang="html">
  <div class="task-board grid">
    <div class="task-card grid" v-for="(task, id) in tasks">
      <h3 class="task-description" @click="show(id, task.show)" title="Показать/скрыть">{{task.description}}</h3>
      <input v-if="task.show" type="text" v-model="fullDescription" v-on:keyup.enter="addFullDescription(id)" placeholder="Подробное описание">
      <textarea v-if="task.show">{{task.fullDescription}}</textarea>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  store,
  data(){
    return{
      fullDescription: '',
      tasks: []
    }
  },
  methods:{
    show: function(id, show){
      this.tasks[id].show = !show;
      store.commit('onloadTasks', this.tasks);
      this.save();
    },
    addFullDescription: function(id, fullDescription){
      this.tasks[id].fullDescription = this.fullDescription;
      this.fullDescription = '';
      store.commit('onloadTasks', this.tasks);
      this.save();
    },
    //сохраняю актуальный массив tasks в локальное хранилище в формате JSON
    save: function(){
      localStorage.clear();
      localStorage["tasks"] = JSON.stringify(this.tasks);
    }
  },
  beforeMount(){
    if (localStorage["tasks"] !== undefined) {
      this.tasks = JSON.parse(localStorage["tasks"]);
      store.commit('onloadTasks', this.tasks)
    }
    else {
      console.log('локальное хранилище пусто');
    }
  }
}
</script>

<style lang="css" scoped>
  .task-board{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    width: 50%;
    margin-left: 25%;
  }
  .task-card{
    grid-template-columns: 100%;
    width: 100%;
    height: 35vh;
    background: #e2dede;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 10px #222222;
            box-shadow: 5px 5px 10px #222222;
    -webkit-transition: .5s;
    transition: .5s;
  }
  .task-card:hover{
    -webkit-box-shadow: 10px 10px 10px #222222;
            box-shadow: 10px 10px 10px #222222;
    background: #edeaea;
  }
  .task-description{
    width: 100%;
    height: 5vh;
    margin: 0px;
    text-align: center;
    font-size: 35px;
    vertical-align: center;
    font-family: 'Josefin Slab', 'Poiret One', cursive;
    -webkit-transition: .5s;
    transition: .5s;
  }
  .task-description:hover{
    text-shadow: 5px 5px 5px #222222;
    cursor: pointer;
  }
  input{
    width: 90%;
    margin-left: 5%;
    height: 5vh;
    border: none;
    text-align: center;
    font-size: 20px;
    font-family: 'Poiret One', cursive;
    overflow: hidden;
  }
  textarea{
    width: 90%;
    height: 16vh;
    margin-left: 5%;
    padding: 2vh 0;
    text-align: center;
    font-family: 'Caveat', cursive;
    font-size: 25px;
    background: rgba(226, 221, 221, 0);
    border: none;
  }
  @media screen and (max-width:800px) {
    .task-board{
      grid-template-columns: 1fr;
    }
    .task-description{
      font-size: 1.5em;
    }
  }
  @media screen and (max-width:440px){
    .task-board{
      width: 80%;
      margin-left: 10%;
    }
    .task-description{
      font-size: 1.3em;
    }
    input{
      font-size: 15px;
    }
    span{
      font-size: 20px;
    }
  }
</style>
