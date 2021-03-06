import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from './Global';


const theme = {
    background: '#e6e6fa',
    colors: {
        default: '#8fbc8f'
    },
};

const Theme = ({children}) => (
    <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
);

export default Theme; 