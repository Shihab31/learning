import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ServiceDetail from '../Servicedetail/ServiceDetail';

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("./services.JSON")
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <div>
                <h3 className='fw-bold text-center text-uppercase fs-1 mt-3 mb-5'>Our Service</h3>
            </div>
            <Row>
                {
                    service.map(info => <Col md={3}><ServiceDetail info={info}></ServiceDetail></Col>)
                }
            </Row>
        </div>
    );
};

export default Service;