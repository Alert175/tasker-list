<template lang="html">
  <div class="wrapper-main grid">
    <h3 class="head">tasker</h3>
    <input type="text" class="addItem" v-model="item" v-on:keyup.enter="addListItem" placeholder="Какие задачи на сегодня?">
    <ul class="listTasks">
      <li v-for="(task, id) in tasks" class="listItem" v-bind:class="{compliteTask: task.complite, listItem}">
        <span type="checkbox" id="_check" v-on:click="completeTask(id, task.complite)">
          <i class="far fa-circle fa-1x" v-if="!task.complite"></i>
          <i class="fas fa-check fa-1x" v-if="task.complite"></i>
        </span>
          <span class="taskDescription">{{task.description}}</span>
          <button type="button" class="deleteTask" v-on:click="deleteListItem(id)">
            <i class="fas fa-backspace fa-2x"></i>
          </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      item: '',
      showItem: true,
      tasks:[]
    }
  },
  methods:{
    addListItem: function(){
          this.item == '' ? alert('Друг, укажи задачу :)') : this.tasks.push({description : this.item, complite: false});
          this.item = '';
          this.save();
    },
    completeTask: function(id, complite){
        this.tasks[id].complite = !complite;
        this.save();
    },
    deleteListItem: function(id){
        this.tasks.splice(id, 1);
        this.save();
    },
    //сохраняю актуальный массив tasks в локальное хранилище в формате JSON
    save: function(){
      localStorage.clear();
      // console.log(JSON.stringify(this.tasks));
      localStorage["tasks"] = JSON.stringify(this.tasks);
    },
    //Получаю массив tasks в формате JSON если он есть
    onload: function(){
      if (localStorage["tasks"] !== undefined) {
        this.tasks = JSON.parse(localStorage["tasks"]);
      }
      else {
        console.log('локальное хранилище пусто');
      }
    }
  },
  // при загрузке вызываю функцию
  beforeMount(){
    this.onload()
  }
}
</script>

<style lang="css" scoped>

  .wrapper-main{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 150px 80px auto;
      grid-template-areas:
          "heat"
          "addItem"
          "listTasks";
      width: 50%;
      margin-left: 25%;
  }
  .save{
    height: 100%;
    border: none;
    background: rgba(245, 245, 245, 0.91);
    -webkit-transition: .5s;
    transition: .5s;
  }
  .save:focus{
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
  }
  .head{
      grid-area: heat;
      text-align: center;
      vertical-align: bottom;
      font-size: 50px;
      font-family: 'Josefin Slab', serif;
      border-bottom: 1px solid rgba(47, 47, 47, 0.81);

  }
  .addItem{
      grid-area: addItem;
      background: rgba(245, 245, 245, 0.91);
      border: 1px solid rgba(245, 245, 245, 0.91);
      border-bottom: 1px solid rgba(47, 47, 47, 0.81);
      text-align: center;
      font-size: 25px;
      font-family: 'Poiret One', cursive;
  }
  .listTasks{
      grid-area: listTasks;
      background: rgba(255, 255, 255, 0.91);
      width: 100%;
      padding: 0;
      margin-left: 0px;
  }
  .listItem{
      display: grid;
      grid-template-columns: 10% 80% 10%;
      grid-template-rows: auto;
      grid-template-areas: "fa-1x taskDescription deleteTask";
      list-style: none;
      width: 100%;
      margin-top: 15px;
      text-align: center;
      font-size: 30px;
      font-family: 'Caveat', cursive;
      border-bottom: 1px solid rgba(47, 47, 47, 0.81);
  }
  .fa-1x{
      grid-area: fa-1x;
      -webkit-transition: opacity .5s ease;
      transition: opacity .5s ease;
  }
  .taskDescription{
      grid-area: taskDescription;
      text-align: center;
  }
  .deleteTask{
      grid-area: deleteTask;
      background: rgba(255, 255, 255, 0.91);
      border: 1px solid rgba(255, 255, 255, 0.91);
  }
  .compliteTask{
      text-decoration: line-through;
      color: gray;
  }
  @media screen and (max-width:800px) {
      .wrapper-main{
        width: 80%;
        margin-left: 10%;
      }
  }
  @media screen and (max-width:500px) {
      .wrapper-main{
        width: 100%;
        margin-left: 0%;
      }
      .listItem{
        grid-template-columns: 10% 75% 15%;
      }
  }
</style>
