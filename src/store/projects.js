import axios from 'axios';

export default {
    state: {
        all_progects: []
    },

    getters: {
        GET_PROJECTS(state) {
            return state.all_progects
        }
    },

    actions: {
        /**
         * Экшен создает проект
         * @param {object} context - стор
         * @param {object} data - данные из формы
         */
        createProject(context, data) {
            context.commit('SET_PROCESSING');

            axios.post('/api/projects', data)
                .then((res) => {
                    context.commit('SET_PROCESSING');
                })
                .catch((error) => {
                    context.commit('SET_PROCESSING');
                    context.commit('SET_ERROR', error);
                })
        },
        
        /**
         * Экшен получает все проекты
         * @param {object} context - стор
         */
        getProjects(context) {
            axios.get('/api/projects')
                .then((res) => {
                    context.commit('SET_PROJECTS', res.data);
                })
                .catch((error) => {
                    context.commit('SET_ERROR', error);
                })
        }
    },

    mutations: {
        SET_PROJECTS(state, progects) {
            state.all_progects = progects;
        }
    }
}