import { getGiphyApi } from 'services/giphy'

export const ADD_TREND_GIFS = 'ADD_TREND_GIFS';

export const addTrendGifs = (limit: number, offset: number) => {
    return (dispatch) => {
        getGiphyApi('/trend', { limit, offset })
            .then(({ data }) => {
                dispatch({ type: ADD_TREND_GIFS, payload: data });
            })
            .catch(console.log)
    }
}