import { combineReducers } from 'redux';
import { housesInTheGame, showActiveMembers } from './AppReducer';

const rootReducer = combineReducers({
  housesInTheGame,
  showActiveMembers
});


export default rootReducer;
