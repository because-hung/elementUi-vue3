import { createStore } from 'vuex'
import _ from 'lodash'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    SETDATA (state, data) {
      const proper = Object.prototype.hasOwnProperty.call(data, 'createTime')
      if (proper) {
        state.memberTime = data.createTime
      }
      _.assign(state, data)
      console.log(state)
      console.log(proper)
    }
  },
  actions: {
  },
  modules: {
  }
})
