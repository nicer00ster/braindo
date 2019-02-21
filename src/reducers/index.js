import { combineReducers } from 'redux';
import caseStudyReducer from './caseStudyReducer';

const rootReducer = combineReducers({
  data: caseStudyReducer,
});

export default rootReducer;
