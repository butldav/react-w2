import React from 'react';
import Stars from './Stars';

export default class ReviewForm extends React.Component {
    render() {
        return (
            <div id="reviewForm">
                <h3>Leave a Review:</h3>
                <form>
                    <label htmlFor="reviewName">Name: </label>
                    <input type="text" name="reviewName" id="reviewName"></input>
                    <Stars />
                    <br />
                    <label htmlFor="reviewText">Review: </label>
                    <textarea name="reviewText" id="reviewtext"></textarea>
                    <input type="hidden" name="reviewStars" id="reviewStars"></input>
                    <button type="button">Submit</button>
                </form>
            </div>
        )
    }
}