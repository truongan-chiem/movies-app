import axiosClient from './axiosClient';

const catagory = {
    movie: 'movie',
    tv: 'tv',
};

const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

const tvType = {
    on_the_air: 'on_the_air',
    popular: 'popular',
    top_rated: 'top_rated',
};

const tmdbApi = {
    getMovieList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVIdeos: (cate, id) => {
        const url = catagory[cate] + '/' + id + '/videos';
        return axiosClient.get(url, { params: {} });
    },
    search: (cate, params) => {
        const url = 'search/' + catagory[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = catagory[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = catagory[cate] + '/' + id + '/credits';
        return axiosClient.get(url, { params: {} });
    },
    similar: (cate, id) => {
        const url = catagory[cate] + '/' + id + '/similar';
        return axiosClient.get(url, { params: {} });
    },
};
export { catagory, movieType, tvType };

export default tmdbApi;
