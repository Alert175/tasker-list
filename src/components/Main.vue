<template lang="html">
  <div class="wrapper-main">
    <input type="text" class="addItem" v-model="item" v-on:keyup.enter="addListItem" placeholder="Какие задачи на сегодня?">
    <ul class="listTasks">
      <li v-for="(task, id) in tasks" class="listItem" v-bind:class="{compliteTask: task.complite}">
        <span type="checkbox" id="_check" v-on:click="completeTask(id, item.complite)">
          <i class="far fa-circle fa-1x" v-if="!item.complite"></i>
          <i class="fas fa-check fa-1x" v-if="item.complite"></i>
        </span>
          <span class="taskDescription">{{task.description}}/{{task.complite}}</span>
          <button type="button" class="deleteTask" v-on:click="deleteListItem(id)">
            <i class="fas fa-backspace fa-2x"></i>
          </button>
      </li>
    </ul>
  </div>
</template>

<script>
// window.onload = function(){
//   alert(tasks)
// }
export default {
  data(){
    return{
      item: '',
      showItem: true,
      tasks:[]
    }
  },
  methods:{
    // проверяю на пустой input > записываю данные в массив tasks и в localStorage
    addListItem: function(){
          this.item == '' ? alert('Друг, укажи задачу :)') : this.tasks.push({description : this.item, complite: false, index: this.tasks.length-1});
          // if (localStorage["task"] == undefined) {
          //   localStorage["task"] = this.item + '|' + false + '/'
          // } else {
          //   localStorage["task"] += this.item + '|' + false + '/'
          // }
          // console.log(this.tasks.length);

          let serialStorage = this.tasks[this.tasks.length-1];

          serialStorage = JSON.stringify(serialStorage);
          console.dir(serialStorage);
          localStorage[this.tasks.length-1] = serialStorage;
          localStorage["counter"] = this.tasks.length;
          this.item = '';
    },
    completeTask: function(id, complite){
        this.tasks[id].complite = !complite;
    },
    deleteListItem: function(id){
        this.tasks.splice(id, 1);
        localStorage.removeItem(id);
        console.log(id);
        // localStorage["counter"] = localStorage["counter"] - 1

        localStorage.clear();
    },
    // проверяю localStorage на наличие данных по ключу false, и записываю в массив tasks
    onload: function(){
      // let storage = localStorage["task"];
      //
      // // console.log(this.tasks);
      // storage = storage.split('/');
      // storage.pop()
      // // console.log(storage);
      //
      // for (var i = 0; i < storage.length; i++) {
      //   // console.log(storage[i]);
      //   this.tasks.push({description : storage[i], complite: false});
      // }

      let counter = localStorage["counter"];
      console.log(counter);
      if (counter == undefined) {
        console.log('Выводить нечего');
      }
      else {
        for (var i = 0; i < counter; i++) {
          console.log(i);

          if (localStorage[i] == undefined) {
            console.dir(localStorage[i] + ' localStorage[i]');
          }
          else {
            this.tasks.push(JSON.parse(localStorage[i]));
          }

        }
        console.dir(this.tasks);
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
</style>
