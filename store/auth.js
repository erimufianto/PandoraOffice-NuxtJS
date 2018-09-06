import Cookies from "js-cookie";

export const state = () => ({
  auth: true,
    username: "",
    nama: "",
    token: ""
});

export const mutations = {
  setUser(state) {
    state.username = user.username;
    state.nama = user.nama;
    state.token = token;
    Cookies.set(user.nama, token, { expires: 1 });
  },
  setAuthenticated(state) {
    if (state.token != null) {
      state.auth = true;
    }
  },
  logout() {
    console.log(12);
  }
};

export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
  getToken(state) {
    return state.token;
  }
};
