import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import userReducer from "./feature/authSlice";
import productReducer from "./feature/productSlice";
import { userSagas } from "./feature/authSlice/saga";
import { productSaga } from "./feature/productSlice/productSaga";
function* rootSaga() {
  yield all([...userSagas, ...productSaga]);
}

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
export const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;
