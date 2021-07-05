import React from 'react';
import Stars from './Stars';

export default class Review extends React.Component {
    render() {
        const review = this.props.review;
        return(
            <div className="movieReview border p-3">
                <h4>Name: {review.reviewName}</h4>
                <h4>Rating: <Stars rating={review.reviewStars} /></h4>
                <p>{review.reviewText}</p>

            </div>
        )
    }
}