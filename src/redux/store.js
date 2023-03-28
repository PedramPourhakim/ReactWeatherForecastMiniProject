import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";
import { watcherSaga } from "./weather/weatherSaga";

// const store = createStore(weatherReducer , 
//     composeWithDevTools(applyMiddleware(thunk)))
//npm install redus-saga
const sagaMiddleware = createSagaMiddleware()
const store = createStore(weatherReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)))
//npm install @reduxjs/toolkit
// const store = configureStore({
//     reducer:{
//         weatherReducer
//     },
// })
sagaMiddleware.run(watcherSaga)
export default store;