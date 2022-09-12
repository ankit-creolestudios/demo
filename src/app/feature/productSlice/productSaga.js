import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../api";
import { productActions } from "./index";
export const productSaga = [
  takeLatest(productActions.getAllProduct.type, getAllProductSaga),
  takeLatest(productActions.getAllProductById.type, getAllProductByIdSaga),
  takeLatest(productActions.addNewProductStart.type, createNewProductSaga),
];

function* getAllProductSaga() {
  try {
    const res = yield call(api.product.getAllProduct);
    yield put(productActions.getAllProductSuccess(res.data));
    return res;
  } catch (e) {
    console.log("Exception in userLoginSaga");
  }
}

function* getAllProductByIdSaga({ payload }) {
  console.log(payload);
  try {
    const res = yield call(api.product.productById(payload?.id));
    yield put(productActions.getAllProductSuccess(res.data));
    return res;
  } catch (e) {
    console.log("Exception in userLoginSaga");
  }
}
function* createNewProductSaga() {
  try {
    const res = yield call(api);
    yield put(productActions.addNewProductSuccess(res));
  } catch (error) {
    return error;
  }
}
