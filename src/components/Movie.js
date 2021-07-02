import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

export default class Movie extends React.Component {
    render() {
        return(
            <div className="movie">
                <h3>Movie.Title - Movie.Year</h3>
                <div className="movieRating"><Stars /></div>
                <p><img src="movie.image" className="moviePoster" alt="this movie poster"></img> Movie.Synopsis</p>
                <ReviewList />
                <ReviewForm />
            </div>

        )
    }
}