export const API_KEY = "&api_key=61cb98bf35c7d608e444bd4dfc1e5de0";
export const BASE_URL = "https://api.themoviedb.org/3";
export const POSTER_IMAGE = "https://image.tmdb.org/t/p/w500";
export const SEARCH_URL = `${BASE_URL}/search/movie?api_key=61cb98bf35c7d608e444bd4dfc1e5de0&query=`;

export const POPULAR_MOVIE_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc${API_KEY}`;
export const HIGHEST_RATED_URL = `${BASE_URL}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc${API_KEY}`;
export const YEAR_POPULAR_URL = `${BASE_URL}/discover/movie?primary_release_year=2022&sort_by=vote_average.desc${API_KEY}`;
export const THEATRE_URL = `${BASE_URL}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22${API_KEY}`;
export const KIDS_MOVIE_URL = `${BASE_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc${API_KEY}`;
export const DRAMA_URL = `${BASE_URL}/discover/movie?with_genres=18&primary_release_year=2022${API_KEY}`;
export const COMEDIE_URL = `${BASE_URL}/discover/movie?with_genres=35&sort_by=popularity.desc${API_KEY}`;
export const GENRES_URL = `${BASE_URL}/genre/movie/list?api_key=61cb98bf35c7d608e444bd4dfc1e5de0&language=en-US`;
