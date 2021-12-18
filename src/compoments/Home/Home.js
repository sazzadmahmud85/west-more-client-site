import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

import './Home.css'
import banner from '../../img/banner.png'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import ReviewShow from '../ReviewShow/ReviewShow';



const Home = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('https://infinite-earth-23575.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    return (
        <>
            <div className="bg">
                <Container>
                    <Row>

                        <Col xs={12} md={6}>
                            <div className="banner-text">
                                <div>
                                    <span style={{ color: "#13AE92", fontSize: '18px' }}>Need Watch??</span>
                                    <br />

                                    <h1 className="text-white" >WEST MORE,<br />
                                        WATCHES TOU WANT
                                    </h1>
                                    <p style={{ color: "#6F8991" }}>It can be a very secure path to earn good money and make you very successfully croativety ontreprenour. You can tako advice from experience Person and improve you.</p>
                                    <Link to="/explore" style={{ textDecoration: "none" }}>
                                        <button style={{ backgroundColor: "#13AE92", fontSize: "18px", fontWeight: 500, color: "#fff" }} className="btn">Read More &nbsp; <i class="fas fa-angle-double-right"></i></button>
                                    </Link>
                                </div>
                            </div>

                        </Col>

                        <Col xs={12} md={6}>
                            <div className="banner-img">
                                <img style={{ width: "75%" }} src={banner} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
            <h1 className="text-center my-5">Watches</h1>
            {!isLoading && <div className="product-area">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                }

            </div>}
            {
                isLoading &&
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }
            <ReviewShow></ReviewShow>

            <div className="services-area">
                <h1 className="text-center my-5">Services</h1>
                <div className="services">
                    <div className="service">
                        <h4>WATCH COLLECTION</h4>
                        <p>At Brave, we work for our customers every day to deliver the best mobile applications for any purposes. We work both with individual and corporate customers.</p>
                    </div>
                    <div className="service">
                        <h4>WEBSITES</h4>
                        <p>Our expert team can design a website of any complexity, from a landing page to a corporate multipage website. Everything depends on what you are looking for.</p>
                    </div>
                    <div className="service">
                        <h4>CONSULTING</h4>
                        <p>Brave team is glad to provide you with professional IT consulting services 24/7. We have been helping lots of companies since our establishment.</p>
                    </div>
                    <div className="service">
                        <h4>SUPPORT</h4>
                        <p>n the modern world of rapid web development, internet marketing plays a vital role in your company’s promotion. We are happy to assist you with it.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;