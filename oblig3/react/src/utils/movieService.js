import client from './client';

const setMovie= `
    title,
    'actor': actor->name
    `;

    export const getMovie = async () => {
        const data = await client.fetch(`*[_type == "movie"]{${setMovie}}`);
        return data;
    };
