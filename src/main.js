import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(BootstrapVue)
Vue.use(Vuex)

const store = new Vuex.Store({
    state () {
      return {
        words: {}, 
        wordsArr: [], 
        keys: Array.from({length: 26}, (_, n) => String.fromCharCode(n+65))
      }
    },
    getters: {
      words(state) {
        return state.words
      }, 
      wordsArr(state) {
        return state.wordsArr
      }, 
      keys(state){
        return state.keys
      }
    },
    mutations: {
      addWords (state, newWords) {
        
          const keyChr = newWords[0][0].toUpperCase()
          if (state.words[keyChr] === undefined) {state.words[keyChr] = []}
          const newArr = [...newWords, ...state.words[keyChr]]
          state.words[keyChr] = newArr
          state.words = Object.assign({}, state.words)
        
      }, 
      addWordsArr(state, newWords){
        state.wordsArr = [ ...state.wordsArr, ...newWords]
      }
    }
  })
const myapp = new Vue({
  render: h => h(App), 
  store: store
})

myapp.$mount('#app')
