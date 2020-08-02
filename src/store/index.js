import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import card from './modules/card'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        card
    }
})
