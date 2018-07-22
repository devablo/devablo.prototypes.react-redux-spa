const initialState = {
    items: [],
    loading: false,
    error: null
  };

  export default function podcasts(state = initialState, action) {
    switch(action.type){
        case "FETCH_PODCASTS_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_PODCASTS_SUCCESS":
            return {
                ...state,
                loading: false,
                items: action.payload.podcasts
            }
        case "FETCH_PODCASTS_FAILURE":
            return {
                ...state,
                loading: false,
                error: "API Error",
                items: []
            }
        default:
            return state;
    }
}