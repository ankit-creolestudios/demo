import axios from "axios";

const BASEURL = "http://localhost:4000/api";

export default {
  user: {
    login: async (data) => {
      console.log("api");
      return await axios.post(`${BASEURL}/sign-in`, data);
    },
    signUp: async (data) => {
      return await axios.post(`${BASEURL}/register`, data);
    },
  },
  product: {
    getAllProduct: async (data) => {
      return await axios.get(`${BASEURL}//product`);
    },
    productById: async (data) => {
      return await axios.get(`${BASEURL}/product/${data}`);
    },
  },
};
