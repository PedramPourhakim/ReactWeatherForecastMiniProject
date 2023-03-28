import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from "axios";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAction";

const apiKey="91ef236cc9290c783d3e6572ecc7fd35";
const getWeatherRequest = (query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
}
function* handleGetWeather(action){
    try {
        const res = yield call(getWeatherRequest, 
            action.payload)
        yield put(receiveWeatherResponse(res?.data))
    } catch (error) {
        yield put(receiveWeatherError(error?.message))
    }
}
export function* watcherSaga(){
    yield takeEvery(SEND_WEATHER_REQUEST,
        handleGetWeather)
}