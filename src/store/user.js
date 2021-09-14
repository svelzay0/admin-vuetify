import axios from "axios";
import router from "@/router";
import handleError from "../shared/error";
import headers from "../shared/headers";

export default {
  namespaced: true,
  state: {
    user: {},
    base64Token: "",
  },
  mutations: {
    setUser(state, payload) {
      state.user.token = payload["access_token"];
      state.user.id = payload["user_id"];
      state.user.refreshToken = payload["refresh_token"];
    },
    createBase64Token(state) {
      let random = Math.random().toString(36).substring(2);
      const token = random + ":" + process.env.VUE_APP_API_KEY;
      localStorage.setItem("token64", btoa(token));
      state.base64Token = btoa(token);
    },
    clearUser(state) {
      state.user = {};
    },
  },
  actions: {
    async loginUser({ commit }, { email, password }) {
      this.commit("shared/clearError");
      this.commit("shared/setLoading", true);
      try {
        const { data } = await axios({
          url: process.env.VUE_APP_API_AUTH + "/auth/login",
          method: "post",
          headers: headers(process.env, localStorage.getItem("token64")),
          data: {
            username: email,
            password: password,
          },
        });
        commit("setUser", data);
        setItems(localStorage, data);
        localStorage.setItem("user", data["user_id"]);
        this.commit("shared/setLoading", false);
        return true;
      } catch (e) {
        this.commit("shared/setLoading", false);
        this.commit("shared/setError", e.message);
        handleError(e);
      }
    },
    async refreshToken({ commit }) {
      this.commit("shared/clearError");
      try {
        const { data } = await axios({
          url: process.env.VUE_APP_API_AUTH + "/auth/refresh",
          method: "post",
          headers: headers(process.env, localStorage.getItem("token64")),
          data: {
            refresh_token: localStorage.getItem("refresh_token"),
            client_id: localStorage.getItem("user"),
            client_secret: process.env.VUE_APP_API_KEY,
          },
        });
        commit("setUser", data);
        setItems(localStorage, data);
        this.commit("shared/clearError");
      } catch (e) {
        this.commit("shared/setError", e.message);
        handleError(e);
      }
    },
    async logoutUser({ commit }) {
      this.commit("shared/clearError");
      try {
        await axios({
          url: process.env.VUE_APP_API_AUTH + "/auth/logout",
          method: "post",
          headers: {
            "X-Api-Factory-Application-Id": `${process.env["VUE_APP_API_FACTORY_ID"]}`,
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
          },
        });
        removeItems(localStorage);
        commit("clearUser");
        await router.push({ name: "Auth" });
      } catch (e) {
        removeItems(localStorage);
        this.commit("shared/setError", e.message);
        handleError(e);
      }
    },
  },
  getters: {
    base64Token(state) {
      return state.base64Token;
    },
  },
};

const setItems = (localStorage, data) => {
  const now = Date.now();
  localStorage.setItem("token", data["access_token"]);
  localStorage.setItem("refresh_token", data["refresh_token"]);
  localStorage.setItem("tokenCreated", now);
}

const removeItems = (localStorage) => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("tokenCreated");
  localStorage.removeItem("user");
}