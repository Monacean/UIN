import {useState} from 'react';
import {getMovie} from '../utils/movieService';
import Movie from './Movie';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1100px;
    padding: 0 2rem;
    text-align: center; 
`;

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    border: 1px black 10px; 
    font-size: 2rem;
    padding: 1rem;
    margin: 2rem;
    background-color: #5f9ea0;
    color: white;

    :hover {
        background-color: black;
        color: white;
    }
    
    a {
        text-decoration: none; 
    }
`;

const StyledList =  styled.ul`
    padding: 30px;
    list-style-type: none; 
`; 


const Movies = () => {
    const [data, setData] = useState([]);

    const handleClick= async () =>{
        const movies= await getMovie();
        console.log(movies);
        setData(movies);
    }
    return (
        <StyledDiv>
            <StyledButton type="button" onClick= {handleClick}>Get Movies</StyledButton>
            <StyledList>{data?.length > 0 ? data.map((movie, index) => 
            <Movie key={index} title={movie.title} actor= {movie.actor}/>) : null}</StyledList>
        </StyledDiv>
    );
};

export default Movies; 