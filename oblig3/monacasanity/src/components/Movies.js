import Movie from './Movie';

function Movies(props) {
    return (
        <>
            <Movie>
                title= {props.title}
                actor= {props.actor}
                children= {props.children}
            </Movie>
        </>
    );

}

export default Movies; 