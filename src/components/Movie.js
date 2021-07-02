import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

export default class Movie extends React.Component {
    render() {
        return(
            <div className="movie shadow p-3 mb-5 bg-body rounded">
                <h3>{this.props.title} - {this.props.year}</h3>                
                <div className="movieRating"><Stars /></div>
                <img src="movie.image" className="moviePoster" alt="this movie poster"></img>
                <p> Movie.Synopsis</p>
                <ReviewList />
                <ReviewForm />
            </div>

        )
    }
}