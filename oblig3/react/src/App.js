import Movies from './components/Movies.js';
import Theme from './components/styles/Theme.js';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  text-decoration: underline;
  text-align: center; 
  padding: 30px;
`;

const StyledPhrase = styled.p`
 text-align: center; 
 padding: 30px; 
`;

const App = () => {
  return (
  <Theme>
    <StyledHeadline>Movie list in React and Sanity</StyledHeadline>
    <StyledPhrase>Mona C. A.</StyledPhrase>
    <Movies/>
  </Theme>
);
};

export default App; 
