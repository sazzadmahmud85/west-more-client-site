import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Card } from 'react-bootstrap'
import './Booking.css'
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
const Booking = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { bookingId } = useParams()
    const [books, setBooks] = useState()

    useEffect(() => {
        fetch('https://infinite-earth-23575.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // console.log(books);
    const book = books?.find(book => book?.id === bookingId)
    console.log('booking data is', book);

    const onSubmit = data => {
        data.status = 'PENDING';
        data.poductId = bookingId;
        data.productName = book?.title;
        data.img = book?.img
        console.log(JSON.stringify(data))
        fetch("https://infinite-earth-23575.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Order placed successfully');
                    reset()
                }
            })


        console.log(data)

    };
    return (
        <div>

            <Row>
                <Col md={1}>
                </Col>
                <Col md={5}>
                    <div className="book-final">
                        <div style={{ width: '100%' }}>
                            <Card.Img variant="top" src={book?.img} />
                            <Card.Body>
                                <Card.Title>{book?.title}</Card.Title>
                                <Card.Text>
                                    {book?.dec.slice(0, 159)}
                                </Card.Text>

                                <Card.Title><i class="fas fa-dollar-sign"></i> {book?.price}</Card.Title>
                            </Card.Body>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div id="booking" className="section">
                        <div className="section-center">
                            <div className="container">
                                <div className="row">
                                    <div className="booking-form">
                                        <div className="form-header">
                                            <h2 className="text-info mt-4">Order Information</h2>
                                        </div>
                                        <form className="booking" onSubmit={handleSubmit(onSubmit)}>

                                            <input type="text" defaultValue={user?.displayName} {...register("name")} />
                                            <br />
                                            <br />
                                            <input type="email" defaultValue={user?.email} {...register("email")} />
                                            <br />
                                            <br />
                                            <input type="text" {...register("address")} placeholder="Your Address " />
                                            <br />
                                            <br />
                                            <input type="phone" {...register("phone")} placeholder="Your Phone" />

<br />


                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <br />
                                            <input className="btn btn-danger" type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={1}>
                </Col>
            </Row>

        </div>
    );
};

export default Booking;