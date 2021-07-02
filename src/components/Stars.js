import React from 'react';

export default class Stars extends React.Component {
    render() {
        return(
            <div className="starRating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div>
        )
    }
}