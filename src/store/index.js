import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapse: false || JSON.parse(sessionStorage.getItem('isCollapse'))
    },
    getters:{},
    mutations: {
        SET_ISCOLLAPSE(state) {
            state.isCollapse = !state.isCollapse
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
        }
    },
    actions: {},
    modules: {}
});
