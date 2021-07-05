import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {

    render() {
        return(
            this.props.movies.map((movie, id) => <Movie key={id} movie={movie} />)
        )
    }
}