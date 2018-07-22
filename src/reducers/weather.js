import { FETCH_WEATHER_BEGIN, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from './../actions/weather';

const initialState = {
    data: [],
    loading: false,
    error: null
  };

  export default function podcasts(state = initialState, action) {
    switch(action.type){
        case FETCH_WEATHER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: "API Error",
                data: []
            }
        default:
            return state;
    }
}