export const FETCH_PODCASTS_BEGIN = "FETCH_PODCASTS_BEGIN";
export const FETCH_PODCASTS_SUCCESS = "FETCH_PODCASTS_SUCCESS";
export const FETCH_PODCASTS_FAILURE = "FETCH_PODCASTS_FAILURE";

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const fetchPodcastsBegin = () => ({
    type: FETCH_PODCASTS_BEGIN
});

export const fetchPodcastsSuccess = podcasts => ({
    type: FETCH_PODCASTS_SUCCESS,
    payload: { podcasts }
});

export const fetchPodcastsFailure = error => ({
    type: FETCH_PODCASTS_FAILURE,
    payload: { error }
});

export function fetchPodcasts() {
    return dispatch => {
      dispatch(fetchPodcastsBegin());

      return fetch("https://cdn-hitnetwork-catchup.scadigital.io/api/v1/podcasts/catchup/?stationCode=2day&pagesize=1&showIds=1198&showIds=14146&showIds=70753&showIds=1192")
        .then(handleErrors)
        .then(response => { return response.json(); })
        .then(json => {
            dispatch(fetchPodcastsSuccess(json));
            return json;
        })
        .catch(error => dispatch(fetchPodcastsFailure(error)));
    };
}
