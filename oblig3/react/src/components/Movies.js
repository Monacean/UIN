import {useState} from 'react';
import Movie from './Movie';


const Movies = () => {
    const [data, setMovie] = useState([]);

    const handleClick = async () =>{
        const movies = await getMovie();
        setMovie(movies);
    }
    return (
        <>
            <Movie 
            title='Movie title'
            actor='Actor'
            />
            <button type="button" onclick= {handleClick}>Get Movies</button>
                {data?.length > 0 ? data.map((movie, index) => 
                <Movie key={index} title={movie.title} actor={movie.actor}/>) : null}

        </>
    );

};

export default Movies; 