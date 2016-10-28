import { routerReducer } from 'react-router-redux'
import trial from './reducers/trial';

export default function(state = {}, action) {
  return {
    routing: routerReducer(state.routing, action),
    trial: trial(state.trial, action),
  }
}
