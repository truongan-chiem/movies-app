const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8e4ba24ba1839c2d11d17f2ee4cdf455',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
