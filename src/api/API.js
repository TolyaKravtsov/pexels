import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: '563492ad6f91700001000001476c2679801648e79c16d0d6c6db44fc',
    },

});

export const API = {
    getHeaderPhoto() {
        return instance.get('curated?page=1');
    },

    searchRequest(searchQuery) {
        return instance.get(`search?query=${searchQuery}`);
    },

};
