import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies = [
                
            ]
        }
    }
    render() {
        return(
            <div id="movieList">
                <Movie />
            </div>
        )
    }
}