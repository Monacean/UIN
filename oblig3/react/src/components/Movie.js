import styled from 'styled-components';

const StyledList =  styled.li`
    padding: 30px;
    list-style-type: none; 
`; 

const StyledSection = styled.section`
border: solid black;
padding: 10px; 
margin: 20px; 
`;

const StyledPhrase = styled.p`
 text-align: center; 
 padding: 10px; 
 text-align: center; 
 font-weight: bolder;
 font-size:24px; 
`;

const Movie = ({title, actor}) => (
    <StyledSection>
    <StyledList><StyledPhrase> {title}</StyledPhrase></StyledList>
    <StyledList><StyledPhrase>{actor}</StyledPhrase></StyledList>
    </StyledSection>
);

export default Movie;