//引入Vue和Vuex
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
//存储逻辑判断
const actions = {

}
//存储数值改变
const mutations = {

}
//存储数据
const state = {
    //保存手机号
    mobile:"",
}

const store = new Vuex.Store({
    actions,
    mutations,
    state
})

export default store