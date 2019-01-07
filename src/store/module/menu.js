// 菜单
const state = {
  menuItems: {},
};

const getters = {
  getMenuItems: (state) => state.menuItems
};

const mutations = {
  setMenuItems(state, data){
    state.menuItems = data;
  },
  removeMenuItem(state, data){
    state.menuItems.forEach((item, index) => {
      if(item === data){
        state.menuItems.splice(index, 1);
      }
    });
  },
  pushToMenuItems(state, data){
    state.menuItems.unshift(data);
  }
};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions
}
