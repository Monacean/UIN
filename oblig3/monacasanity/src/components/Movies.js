import {useState} from 'react';
import Movie from './Movie';


const Movies = () => {
    const [movie, setMovie] = useState([]);
    return (
        <>
            <Movie 
            title='Movie title'
            actor='Actor'
            />
            <button type="button">Get Movies</button>
        </>
    );

};

export default Movies; 