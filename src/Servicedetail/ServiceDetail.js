import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './ServiceDetail.css';

const ServiceDetail = (props) => {
    console.log(props);
    const { name, description, img } = props.info;

    return (
        <>
            <div className='service-detail'>
                <img src={img} alt="" />
                <h3 className='mt-3'>{name}</h3>
                <p>{description}</p>
                <Button>See Details</Button>
            </div>
        </>
    );
};

export default ServiceDetail;