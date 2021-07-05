import React from 'react';
import Review from './Review';

export default class ReviewList extends React.Component {

    render() {
        const reviews = this.props.reviews;
        
        return(

            <div className="reviewList">
                {reviews.map((review, id) => <Review key={id} review={review} />)}
            </div>
        )
    }
}