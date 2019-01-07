// 用户
const state = {
  currentUser: null,
  isLogin: false
};

const getters = {
  isLogin: (state) => state.isLogin,
  currentUser: (state) => state.currentUser
};

const mutations = {
  userStatus(state, user){
    if(user){
      state.currentUser = user;
      state.isLogin = true;
    }else{
      state.currentUser = null;
      state.isLogin = false;
    }
  }
};

const actions = {
  setUser: (context, user) => {
    context.commit("userStatus", user);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
