import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
//导出store实例
export default new Vuex.Store({
    //设置一个全局访问的 state 对象
    //取值：this.$VuexStore.state.collapse
    state:{
        //表示是否展示侧边栏
        collapse:false,
    },
    //操作 state 数据的方法的集合
    mutations:{
        // 变更 collapse 值
		changeCollapse: function (state, payload) {
			state.collapse = payload;
		},
    }
})