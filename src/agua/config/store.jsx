import { createStore, combineReducers } from 'redux';
import Default from './themes/default';

            
const reducers = combineReducers({
    Default,

});

const store = createStore(reducers);

export default (store);