const API_KEY = 'd089404e12920dc0b316bc3b96292483';
const API_BASE = `https://api.themoviedb.org/3`;

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const tmdbLists = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(
          `/list/8210167?api_key=${API_KEY}&language=pt-BR`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/list/8210220?api_key=${API_KEY}&language=pt-BR`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/list/8210219?api_key=${API_KEY}&language=pt-BR`,
        ),
      }, 
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
        break;
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`);
        break;
        default:
          info = null;
        break;
      }
      return info;
    }
  },
};

export default tmdbLists;
