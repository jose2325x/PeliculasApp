import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '32a3c845ebc5683f287c03567d29b751',
    language: 'es-ES',
  },
});

export default movieDB;
