export const API_KEY = 'c47bea02c764d59bdae454ebba69d432';


export function searchMovieAPI(query: string): string {
    return `https://api.themoviedb.org/3/search/movie?api_key=${ API_KEY }&language=en-US&query=${query}&page=1&include_adult=false`;
}

export function getMovieByIdAPI(movieId: string): string {
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=c47bea02c764d59bdae454ebba69d432&language=en-US`;
}