import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import Stars from './Stars';

export default class Movie extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.movie.id,
            title: props.movie.title,
            year: props.movie.year,
            rating: props.movie.rating,
            image: props.movie.image,
            synopsis: props.movie.synopsis,
            reviews: props.movie.reviews,
        }

        this.handleReviewSubmit = this.handleReviewSubmit.bind(this);

    }

    handleReviewSubmit(movie) {

        let movieReviews = this.state.reviews;

        movieReviews.push(
            {
                reviewName: movie.reviewName,
                reviewStars: movie.reviewStars,
                reviewText: movie.reviewText,
            } 
        )
        let movieRating = movieReviews.map(rating => parseInt(rating.reviewStars));

        let ratingAvg = movieRating.reduce((a, b) => (a + b)) / movieRating.length;

        this.setState({
            reviews: movieReviews,
            rating: ratingAvg,
        })

    }

    handleOnChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {

        const movie = {
            id: this.state.id,
            title: this.state.title,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            synopsis: this.state.synopsis,
            reviews: this.state.reviews,
        }

        return(
            <div className="movie shadow p-3 mb-5 bg-body rounded row" id={movie.key}>
                <div className="col-4">
                    <div className="card">
                        <img src={movie.image} className="moviePoster card-img-top" alt={movie.title + 'Poster'}></img>
                        <div className="card-body">
                            <div className="card-title fs-4 fw-bold">
                                {movie.title} - {movie.year} <br />
                                <Stars rating={movie.rating}/>
                            </div>
                            <p>{movie.synopsis}</p>
                        </div>
                        
                    </div>
                </div>

                <div className="col-8">                    
                    <ReviewList reviews={movie.reviews} />
                    <ReviewForm onSubmit={this.handleReviewSubmit} />
                </div>
            </div>
        )
    }
}