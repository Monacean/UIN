import client from './client';

const listMovies= `
    title,
    'actor': actor->name
    `;

    export const getMovie = async () => {
        const data = await client.fetch(`*[_type == "movie"]{${listMovies}}`);
        return data;
    }
