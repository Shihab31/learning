import React from 'react';
import { Col, Row } from 'react-bootstrap';
import about from "../../images/about.png";

const About = () => {
    return (
        <>
            <Row className='align-items-center mt-5'>
                <Col md={6}>
                    <h3 className='fw-bold text-uppercase fs-3'>About us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus dolorum voluptate, animi libero officiis eveniet accusamus recusandae. Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro suscipit. Quibusdam culpa asperiores exercitationem architecto quo distinctio sed dolorem!</p>
                </Col>
                <Col md={6}>
                    <img src={about} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default About;