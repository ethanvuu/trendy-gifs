import { getGiphyApi } from 'services/giphy';

export const ADD_TREND_GIFS = 'ADD_TREND_GIFS';
export const FETCH_GIFS_START = 'FETCH_GIFS_START';
export const FETCH_GIFS_COMPLETE = 'FETCH_GIFS_COMPLETE';


export const addTrendGifs = (offset: number, limit: number) => {
    return (dispatch) => {
        dispatch({ type: FETCH_GIFS_START });
        getGiphyApi('/gifs/trending', { offset, limit })
            .then(({ data: { data } }) => {
                dispatch({ type: ADD_TREND_GIFS, payload: data });
                dispatch({ type: FETCH_GIFS_COMPLETE });
            })
            .catch(() => {
                dispatch({ type: FETCH_GIFS_COMPLETE });
            })
    }
}