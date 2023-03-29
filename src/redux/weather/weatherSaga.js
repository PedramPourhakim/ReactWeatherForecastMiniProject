import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import {all,call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
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
    // yield takeEvery(SEND_WEATHER_REQUEST,
    //     handleGetWeather)//این متد بابت هربار فشردن دکمه یک درخواست جدید به سرور ارسال میکند
    yield takeLatest(SEND_WEATHER_REQUEST,
        handleGetWeather)//هرچقدر دکمه را بزند فقط مرتبه ی آخرش را اجرا میکند و برای دیتابیس بهتر است
}
function* handleGetWeather2(action){
    try {
        const res = yield call(getWeatherRequest, 
            action.payload)
        yield put(receiveWeatherResponse(res?.data))
    } catch (error) {
        yield put(receiveWeatherError(error?.message))
    }
}
export function* watcherSaga2(){
    // yield takeEvery(SEND_WEATHER_REQUEST,
    //     handleGetWeather)//این متد بابت هربار فشردن دکمه یک درخواست جدید به سرور ارسال میکند
    yield takeLatest(SEND_WEATHER_REQUEST,
        handleGetWeather)//هرچقدر دکمه را بزند فقط مرتبه ی آخرش را اجرا میکند و برای دیتابیس بهتر است
}
export function* rootSaga(){
    yield all([
        fork(watcherSaga),
        fork(watcherSaga2)
    ]);
}