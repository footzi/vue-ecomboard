import projects from './projects';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        projects
    },

    state    : {
        processing: false,
        preloader : false,
        error     : ''
    },

    getters: {
        GET_PRELOADER(state) {
            return state.preloader
        },
        
        GET_ERROR(state) {
            return state.error
        }
    },
    actions: {

    },

    mutations: {
        SET_PROCESSING(state) {
            state.processing = !state.processing;
            state.processing ? state.preloader = true : state.preloader = false;
            state.error = '';
        },

        SET_ERROR(state, error) {
            state.error = error;
        }
    }
});
