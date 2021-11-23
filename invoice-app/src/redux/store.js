import { applyMiddleware, compose, createStore } from "redux";
import { myReducer } from "./reducer"; // reducer koji si sa ma napravila
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const store = createStore(myReducer, ["Use Redux"]); // najjednostavniji moguci redux store

// ovo smo dodali da bi redux store bio cuvan takodje u localstorage (i da bi preziveo refresh)
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, myReducer);

// kreiramo Redux store
// export const store = createStore(myReducer); // najprostiji store bez debuggera
// export const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()); // NOVO store koji omgucava koriscenje browser ekstenzije Redux DevTools Extension
// If you setup your store with middleware and enhancers, change:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(myReducer, composeEnhancers(applyMiddleware(thunk))); // NOVO store koji podrzava i thunk i redux-dev-tools i React Native Debugger
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
); // NOVO store koji podrzava i thunk i redux-dev-tools i React Native Debugger

export const persistor = persistStore(store);

export default store;
