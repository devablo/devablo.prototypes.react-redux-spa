import { combineReducers } from 'redux'
import podcasts from './podcasts'
import weather from './weather'

const rootReducer = combineReducers({
  podcasts,
  weather
});

export default rootReducer;