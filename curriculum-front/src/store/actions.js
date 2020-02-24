import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/curricula";

export default {
  async getCurricula({ commit }) {
    const res = await axios.get(API_URL);
    commit("updateCurricula", res.data);
  }
};
