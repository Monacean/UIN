import {useState} from 'react';
import {getMovie} from '../utils/movieService';
import Movie from './Movie';


const Movies = () => {
    const [data, setMovie] = useState([]);

    const handleClick= async () =>{
        const movies= await getMovie();
        console.log(movies);
        setMovie(movies);
    }
    return (
        <>
            <Movie 
            title='Movie title'
            actor='Actor'
            />
            <button type="button" onClick= {handleClick}>Get Movies</button>
                {data?.length > 0 ? data.map((movie, index) => 
                <Movie key={index} title={movie.title} actor={movie.actor}/>) : null}

        </>
    );

};

export default Movies; 