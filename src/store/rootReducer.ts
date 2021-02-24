import { combineReducers } from 'redux';

import giphyList from 'views/GiphyList/reducer';

const rootReducers = combineReducers({
    giphyList, 
});

export default rootReducers;