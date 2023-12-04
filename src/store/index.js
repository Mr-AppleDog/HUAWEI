import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token:0
    },       //状态管理
    mutations: {
        isToken(state,params){
            state.token = params
        }
    },   //修改state
    actions: {},    //异步操作
    getters:{},     //计算属性
    modules: {}
})


export default store
