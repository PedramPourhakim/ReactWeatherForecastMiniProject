import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import weatherReducer from "./weather/weatherReducer";

// const store = createStore(weatherReducer , composeWithDevTools(applyMiddleware(thunk)))
//npm install @reduxjs/toolkit
const store = configureStore({
    reducer:{
        weatherReducer
    },
})

export default store;