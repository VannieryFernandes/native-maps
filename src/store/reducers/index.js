import { combineReducers } from "redux";

import locationReducers from './locationReducers'

export default combineReducers({
 
  getLocations: locationReducers

});