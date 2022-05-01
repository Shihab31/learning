import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/elearning-logo.png';
import './Header.css';

const Header = () => {
    return (
        <Row>
            <Col md={8}>
                <div className="logo-area">
                    <img src={logo} alt="logo" />
                </div>
            </Col>
            <Col md={4}>
                <Nav>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/service">Services</Link>
                </Nav>
            </Col>
        </Row>
    );
};

export default Header;