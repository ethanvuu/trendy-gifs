
import produce from "immer";

import { IAction } from 'store/models/actions';
import { IGiphyGif } from 'store/models/giphy';

import { ADD_TREND_GIFS } from './actions'


export default (state: IGiphyGif[] = [], action: IAction): IGiphyGif[] =>
    produce(state, draft => {
        switch (action.type) {
            case ADD_TREND_GIFS:
                draft.push(...action.payload);
                break;
            default:
                break;
        }
    })