import React from 'react';

export default class Stars extends React.Component {   

    calculateRating(rating) {
        if(rating === undefined) {
            rating = 0;
        }
        let checkedStars = [];
        for(let i = 1; i <= 5; i++) {
            checkedStars.push(rating >= i ? 'fa fa-star checked' : 'fa fa-star');
        }
        return checkedStars;
    }

    render() {
        const rating = this.props.rating;
        const stars = this.calculateRating(rating);

        return(
            stars.map((value, index) => {
                return <span className={value} data-index={index + 1} onClick={this.props.onSubmit} key={index}></span>
            })
        )
    }
}