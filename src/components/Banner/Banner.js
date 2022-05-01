import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Sleepy from '../../images/pana.c2b1088a.svg';
import './Banner.css';

const Banner = () => {
    return (
        <Row className='align-items-center'>
            <Col md={6}>
                <h2 className='display-3 fw-bold'>Amazing <br /> Learning website for growing your skill</h2>
                <Button className='mt-3'>Subscription here</Button>
            </Col>
            <Col md={6} className="banner-img">
                <img src={Sleepy} alt="sleepy" />
            </Col>
        </Row>
    );
};

export default Banner;