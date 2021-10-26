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
const peopleUrl = `${url}/person/popular`;
const personsUrl = `${url}/person`;


// Danh sách phim đã đóng có mặt diễn viên trong đó (phim):
export const fetchCreditsTV = async (id) => {
    try {
        const { data } = await axios.get(`${personsUrl}/${id}/tv_credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['cast'].map((c) => ({
            id: c['id'],
            backPoster: posterUrl + c['backdrop_path'],
            popularity: c['popularith'],
            name: c['name'],
            date: c['first_air_date'],
            poster: posterUrl + c['poster_path'],
            charater: c['character'],
            nameOther: c['popularity'],
        }))

        return modifiedData;
    } catch (error) { }
}

// Phim đóng góp:
export const fetchTV = async (id) => {
    try {
        const { data } = await axios.get(`${personsUrl}/${id}/movie_credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['cast'].map((c) => ({
            id: c['id'],
            backPoster: posterUrl + c['backdrop_path'],
            popularity: c['popularith'],
            title: c['title'],
            date: c['release_date'],
            poster: posterUrl + c['poster_path'],
            overview: c['overview'],
            rating: c['vote_average'],
            character: c['character'],
            nameOther: c['popularity'],
        }))

        return modifiedData;
    } catch (error) { }
}
// Diễn viên chi tiết
export const fetchPersonDetail = async (id) => {
    try {
        const { data } = await axios.get(`${personsUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}
export const fetchPeople = async () => {
    try {
        const { data } = await axios.get(peopleUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            img: posterUrl + m['profile_path'],
            title: m['name'],
            name:m['title'],
            popularity:m['popularity'],
        }))
        return modifiedData;
    } catch (error) {

    }
}
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
// Profile detail preson : 
export const fetchProfile = async (id) => {
    try {
        const { data } = await axios.get(`${personsUrl}/${id}/images`, {
            params: {
                api_key: apiKey
            }
        })
        const modifiedData = data['profiles'].map((p) => ({
            aspect_ratio: p['aspect_ratio'],
            file_path: p['file_path'],
            height: p['height'],
            vote_average: p['vote_average'],
            vote_count: p['vote_count'],
            width: p['width'],
        }))
        return modifiedData;
    } catch (error) { }
}
