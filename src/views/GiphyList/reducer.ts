
import produce from "immer";

import { IAction } from 'store/models/actions';
import { IGiphyListState } from 'store/models/giphy';

import { ADD_TREND_GIFS, FETCH_GIFS_START, FETCH_GIFS_COMPLETE } from './actions'

const initialSate: IGiphyListState = {
    isLoading: true,
    giphyList: []
}

const giphyTrendListReducer = (state: IGiphyListState = initialSate, action: IAction): IGiphyListState =>
    produce(state, draft => {
        switch (action.type) {
            case ADD_TREND_GIFS:
                draft.giphyList.push(...action.payload);
                break;
            case FETCH_GIFS_START:
                draft.isLoading = true;
                break;
            case FETCH_GIFS_COMPLETE:
                draft.isLoading = false;
                break;
            default:
                break;
        }
    })

export default giphyTrendListReducer;