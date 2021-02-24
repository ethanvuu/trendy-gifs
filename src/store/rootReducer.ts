import { combineReducers } from 'redux';

import giphyTrendList from 'views/GiphyList/reducer';

const rootReducers = combineReducers({
    giphyTrendList, 
});

export default rootReducers;