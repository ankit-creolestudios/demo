import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  loading: false,
  product: {},
  products: [],
};

const productSlice = createSlice({
  name: "signin/signup",
  initialState: initialValues,
  reducers: {
    addNewProductStart: () => {},
    addNewProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    addNewProductFail: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    getAllProduct: (state) => {
      state.loading = true;
    },
    getAllProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getAllProductFail: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
    getAllProductById: (state) => {
      state.loading = true;
    },
    getAllProductByIdSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getAllProductByIdFail: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;
