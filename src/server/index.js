import axios from 'axios';

// Connect
const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';

// Play movie
const nowPlayingUrl = `${url}/movie/now_playing`;
// Top rate moving
const topratedUrl = `${url}/movie/top_rated`;
// Categories movie
const genreUrl = `${url}/genre/movie/list`;
// List movie
const moviesUrl = `${url}/discover/movie`;
// Person week
const personUrl = `${url}/trending/person/week`;
// TV
const tvsUrl = `${url}/discover/tv`;
const tvUrl = `${url}/tv`;
const onTvUrl = `${url}/tv/on_the_air`;
const tvPopular = `${url}/tv/popular`;
const tvTopRate = `${url}/tv/top_rated`;
const genereTVUrl = `${url}/genre/tv/list`;
const discoverUrl = `${url}/tv/airing_today`;

export const fetchTVAriting = async () => {
    try {
        const { data } = await axios.get(discoverUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
// Detail movie
const movieUrl = `${url}/movie`;
// Page home : 
export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}
export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}
export const fetchMovieByGenre = async (genre_ids) => {
    try {
        const { data } = await axios.get(moviesUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
                with_genres: genre_ids
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}
export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(personUrl, {
            params: {
                api_key: apiKey
            }
        })
        const modifiedData = data['results'].map((p) => ({
            id: p['id'],
            popularity: p['popularity'],
            name: p['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
            known: p['known_for_department']
        }))
        return modifiedData;
    } catch (error) { }
}
export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(topratedUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) {

    }
}
// TV
export const fetchDiscover = async (genre_ids) => {
    try {
        const { data } = await axios.get(tvsUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
                with_genres: genre_ids
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
export const fetchOnTV = async () => {
    try {
        const { data } = await axios.get(onTvUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
export const fetchTVGenre = async () => {
    try {
        const { data } = await axios.get(genereTVUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))
        return modifiedData;
    } catch (error) { }
}
export const fetchTVPopular = async () => {
    try {
        const { data } = await axios.get(tvPopular, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
export const fetchTVTopRate = async () => {
    try {
        const { data } = await axios.get(tvTopRate, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
export const fetchTVCredits = async (id) => {
    try {
        const { data } = await axios.get(`${tvUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}

// Chi tiet phim
export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}
export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: apiKey,
            }
        });
        return data['results'][0];
    } catch (error) { }
}
export const fetchMovieCredits = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((c) => ({
            id: c['id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}
export const fetchSessionTV = async (id) => {
    try {
        const { data } = await axios.get(${tvUrl}/${id}, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const modifiedData = data['seasons'].map((c) => ({
            id: c['id'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['poster_path'],
            img2: 'https://image.tmdb.org/t/p/w200' + c['poster_path'],
            overview: c['overview'],
            episode_count: c['episode_count'],
            date: c['air_date'],
            number_count: c['season_number'],
        }))

        return modifiedData;
    } catch (error) { }
}
// Danh sách khuyến nghị:
export const fetchTVRecommendations = async (id) => {
    try {
        const { data } = await axios.get(${tvUrl}/${id}/recommendations, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['results'].map((c) => ({
            id: c['id'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
            backdrop: 'https://image.tmdb.org/t/p/w200' + c['backdrop_path'],
            overview: c['overview'],
            first_air_date: c['first_air_date'],
            original_name: c['original_name'],
            vote_average: c['vote_average'],
            popularity: c['popularity'],
        }))
        return modifiedData;
    } catch (error) { }
}
export const fetchSimilarTV = async (id) => {
    try {
        const { data } = await axios.get(${tvUrl}/${id}/similar, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}

