import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import LoginReducer from "./Reducer/LoginReducer";
// import AlertMessageReducer from "./Reducer/AlertMessageReducer";

// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'login',
//   storage,
// };

// const persistedLoginReducer = persistReducer(persistConfig, LoginReducer);

// combineReducers => make a combination for multiple reducer
const allApplicationReducer = combineReducers({
  // LoginReducer: persistedLoginReducer,
  LoginReducer:LoginReducer,
  // AlertMessage:AlertMessageReducer
});

const store = createStore(allApplicationReducer);

// export const persistor = persistStore(store);
export default store;
