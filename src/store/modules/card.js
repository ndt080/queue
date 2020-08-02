import axios from "axios";

export default ({
    actions: {
        GET_NOTES({commit}){
            return axios('http://localhost:3000/notes',{
                method: "GET"
            }).then((notes) => {
                commit('SET_NOTES', notes.data);
                return notes;
            }).catch((error) => {
                console.log(error);
                return error;
            })
        },
        GET_RECORDS({commit}){
            return axios('http://localhost:3000/comments',{
                method: "GET"
            }).then((recList) => {
                commit('SET_RECORDS', recList.data);
                return recList;
            }).catch((error) => {
                console.log(error);
                return error;
            })
        },
        //Создаем CARD, вызвав мутацию ADD_CARD
        CREATE_CARDS(context, payload) {
            axios.post('http://localhost:3000/notes', payload)
                .then((response) => {
                })
                .catch((error) => {
                    console.log(error);
                });
            context.commit('ADD_CARD', payload);
        },
        REMOVE_CARDS(context, payload) {
            console.log('ID:', payload);
            axios.delete('http://localhost:3000/notes/'+ payload)
                .then(response => {
                });
            context.commit('DELETE_CARD', payload);
        },
        //Создаем CARD, вызвав мутацию ADD_CARD
        CREATE_RECORDS(context, payload) {
            axios.post('http://localhost:3000/comments/', payload)
                .then((response) => {
                })
                .catch((error) => {
                    console.log(error);
                });
            context.commit('ADD_RECORD', payload);
        },
        REMOVE_RECORD(context, payload) {
            console.log('ID:', payload);
            axios.delete('http://localhost:3000/comments/'+ payload)
                .then(response => {
                });
            context.commit('DELETE_RECORD', payload);
        },
    },
    mutations: {
        SET_NOTES(state, notes){
            state.notes = notes;
        },
        SET_RECORDS(state, notes){
            state.recList = notes;
        },
        ADD_CARD(state, payload){
            state.notes.push(payload);
        },
        DELETE_CARD (state, payload){
            state.notes = state.notes.filter((n) => {return n.id !== payload});
        },
        ADD_RECORD(state, payload){
            state.recList.push(payload);
        },
        DELETE_RECORD(state, payload){
            state.recList = state.recList.filter((n) => {return n.id !== payload});
        },
    },
    state: {
        notes: [],
        recList: [],
        loading: false
    },
    getters: {
        getNotes(state){
            return state.notes;
        },
        getList(state){
            return state.recList;
        },
        getLoading(state){
            return state.loading;
        }
    }
})
