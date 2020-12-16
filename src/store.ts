import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      userName: ''
    },
    hasLogin: false
  },
  mutations: {
    login:(state)=>{
      state.hasLogin = true;
    },
    setUserInfo:(state,data)=>{
      state.userInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
