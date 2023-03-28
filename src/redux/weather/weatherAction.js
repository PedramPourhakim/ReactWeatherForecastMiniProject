import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherTypes"
import axios from "axios"

export const sendWeatherRequest=(query)=>{
    return {
        type: SEND_WEATHER_REQUEST,
        payload:query
    }
}

export const receiveWeatherResponse=(data)=>{
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload: data
    }
}

export const receiveWeatherError=(data)=>{
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload: data
    }
}
// function convertToCel(value){
//     return (value-273).toFixed(2);
// }
// const apiKey="91ef236cc9290c783d3e6572ecc7fd35";
// const getWeatherInfo = (query)=>{
//     return (dispatch,getState)=>{
//         dispatch(sendWeatherRequest());
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`).then(res=>{
//             dispatch(receiveWeatherResponse(res.data))
//         }).catch(error=>{
//             dispatch(receiveWeatherError(error.message))
//         })
//     }
// }

// export default getWeatherInfo