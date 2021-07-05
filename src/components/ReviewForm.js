import React from 'react';
import Stars from './Stars';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewName: '',
            reviewStars: '',
            reviewText: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleStarsClick = this.handleStarsClick.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let review = {
            reviewName: this.state.reviewName,
            reviewStars: this.state.reviewStars,
            reviewText: this.state.reviewText,
        }
        this.props.onSubmit(review);
        this.setState({
            reviewName: '',
            reviewStars: '',
            reviewText: '',
        })
    }

    handleOnChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });

    }

    handleStarsClick (event) {

        let rating = event.target.getAttribute('data-index');
        this.setState({
            reviewStars: rating,
        })

    }

    render() {
        return (
            <div id="reviewForm">
                <h3>Leave a Review:</h3>
                <form>
                    <label htmlFor="reviewName" className="form-label">Name: </label>
                    <input type="text" name="reviewName" id="reviewName" value={this.state.reviewName}
                     className="form-control" onChange={this.handleOnChange} />
                    <label htmlFor="reviewStars" className="form-label">Rating:&nbsp;</label>
                    <Stars onSubmit={this.handleStarsClick} onMouseOver={this.handleStarsClick} rating={this.state.reviewStars} />
                    <input type="hidden" name="reviewStars" id="reviewStars" 
                    value={this.state.reviewStars} onChange={this.handleOnChange} />
                    <br />
                    <label htmlFor="reviewText" className="form-label">Review: </label>
                    <textarea name="reviewText" id="reviewText" className="form-control" 
                    onChange={this.handleOnChange} value={this.state.reviewText} />
                    
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}