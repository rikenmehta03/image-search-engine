import { combineReducers } from 'redux'
import search from './search'
import user from './user'
import analytics from './analytics'

export default combineReducers({
  search,
  user,
  analytics
});