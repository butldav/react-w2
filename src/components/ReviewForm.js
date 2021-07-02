import React from 'react';
import Stars from './Stars';

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div id="reviewForm">
                <h3>Leave a Review:</h3>
                <form>
                    <label htmlFor="reviewName" className="form-label">Name: </label>
                    <input type="text" name="reviewName" id="reviewName" className="form-control"></input>
                    <label htmlFor="reviewStars" className="form-label">Rating:</label>
                    <Stars />
                    <input type="hidden" name="reviewStars" id="reviewStars"></input>
                    <label htmlFor="reviewText" className="form-label">Review: </label>
                    <textarea name="reviewText" id="reviewtext" className="form-control"></textarea>
                    
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}