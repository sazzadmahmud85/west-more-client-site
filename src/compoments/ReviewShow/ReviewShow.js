import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ReviewShow.css'
import Rating from 'react-rating';
const ReviewShow = () => {
    const [reviews, setReviews] = useState()



    useEffect(() => {
        fetch('https://infinite-earth-23575.herokuapp.com/review')
            .then(res => res.json())
            .then(reviewData => setReviews(reviewData))
    }, [reviews])





    return (
        <>
            <h1 className="text-center font-weight-bold text-info my-5">REVIEW</h1>
            <div className="review">
                {reviews?.map(review => <Card style={{ width: '18rem', marginBottom: '40px' }}>

                    <Card.Body>

                        <Card.Text>
                            <h3>{review.name}</h3>
                            <Rating

                                initialRating={review.rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color" readonly
                            />
                            <p>{review.review}</p>

                        </Card.Text>

                    </Card.Body>
                </Card>)}
            </div>
        </>
    );
};

export default ReviewShow;