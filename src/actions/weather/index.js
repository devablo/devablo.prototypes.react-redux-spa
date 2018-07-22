export const FETCH_WEATHER_BEGIN = "FETCH_WEATHER_BEGIN";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchWeatherBegin = () => ({
    type: FETCH_WEATHER_BEGIN
});

export const fetchWeatherSuccess = data => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: { data }
});

export const fetchWeatherFailure = error => ({
    type: FETCH_WEATHER_FAILURE,
    payload: { error }
});

export function fetchWeather(location) {
    return dispatch => {
      dispatch(fetchWeatherBegin());

      return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location},AU&appid=1df3243cdb8e24ae805770065076544d`)
        .then(handleErrors)
        .then(response => { return response.json(); })
        .then(json => {
            console.log(json);
            dispatch(fetchWeatherSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchWeatherFailure(error)));
    };
}