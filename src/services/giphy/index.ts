import axios from 'axios';
import { giphiConfig } from 'config/giphi.config';

const { api_key, endpoint } = giphiConfig;

export function getGiphyApi(url: string, params: Object) {
    return axios.get(endpoint + url, {
        params: {
            ...params,
            api_key
        }
    })
}