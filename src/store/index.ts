import { createStore } from 'vuex';
import getters from './getters'
import app from './modules/app'

export default createStore({
  modules: {
    app
  },
  getters
})
