import React from 'react';
import { Button, ButtonGroup, Col, Form, Row } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Row>
                <Col md={10} className="mx-auto">
                    <h3 className='fw-bold text-uppercase mb-5 mt-5'>Contact</h3>
                    <Form>
                        <Row className='gy-4'>
                            <Col md={6}>
                                <input className='form-control' type="text" placeholder='Your name' />
                            </Col>
                            <Col md={6}>
                                <input className='form-control' type="text" placeholder='Your Email' />
                            </Col>
                            <Col md={12}>
                                <textarea className='form-control' name="" id="" cols="100" rows="10"></textarea>
                            </Col>
                            <Col md={12}>
                                <Button>Submit</Button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Contact;