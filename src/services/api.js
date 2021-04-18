import makeRequest from './fetch-request';

const api = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Skyflix',
        items: await makeRequest(`/discover/tv?with_network=213`),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await makeRequest(`/trending/all/week`),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await makeRequest(`/movie/top_rated`),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await makeRequest(`/discover/movie?with_genres=28`),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await makeRequest(`/discover/movie?with_genres=35`),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await makeRequest(`/discover/movie?with_genres=27`),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await makeRequest(`/discover/movie?with_genres=10749`),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await makeRequest(`/discover/movie?with_genres=99`),
      },
    ];
  },

  getMovieInfo: async (id, type) => {
    const types = {
      movie: `/movie/${id}`,
      tv: `/tv/${id}`,
    };

    if (id) {
      return makeRequest(types[type]);
    }

    return {};
  }
};

export default api;
