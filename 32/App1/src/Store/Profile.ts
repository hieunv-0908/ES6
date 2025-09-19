import { combineReducers } from 'redux';
import { profileReducer } from './profile';
import { userReducer } from './userReducer';
import { counterReducer } from './counterReducer';
import { randomReducer } from './randomReducer';
import { companyReducer } from './companyReducer';
import { themeReducer } from './themeReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  users: userReducer,
  counter: counterReducer,
  randomNumbers: randomReducer,
  company: companyReducer,
  theme: themeReducer,
});

export default rootReducer;