import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //состояние моего хранилища
  state: {
    tasks: []
  },
  //мутации - изменение хранилища
  mutations: {
    // при вызове добавляет обьект в массив
    addTask(state, task){
      state.tasks.push({description: task, complited: false, fullDescription: '', show: false});
    },
    // при вызове перезаписывает массив, делается при загрузке компонента About
    onloadTasks(state, newTasks){
      state.tasks = newTasks
    }
  }
})
