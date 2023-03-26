import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherTypes"
import axios from "axios"

const sendWeatherRequest=()=>{
    return {
        type: SEND_WEATHER_REQUEST
    }
}

const receiveWeatherResponse=(data)=>{
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }
}

const receiveWeatherError=(data)=>{
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: data
    }
}
const getWeatherInfo = (query)=>{
    return dispatch=>{
        dispatch(sendWeatherRequest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=91ef236cc9290c783d3e6572ecc7fd35`).then(res=>{
            dispatch(receiveWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(receiveWeatherError(error.message))
        })
    }
}

export default getWeatherInfo