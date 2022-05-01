import React from 'react';
import chambell from '../../images/person.avif';
import chambell1 from '../../images/person1.avif';
import chambell2 from '../../images/person2.avif';
import "./Mentor.css";

const Mentor = () => {
    return (
        <>
            <h3 className='fw-bold text-center text-uppercase fs-1 mt-5 mb-5'>Our Mentor</h3>
            <div className='mentor'>
                <div className='mentor-img'>
                    <img src={chambell} alt="" />
                    <h2>Chambell</h2>
                </div>
                <div className='mentor-img'>
                    <img src={chambell1} alt="" />
                    <h2>Brown</h2>
                </div>
                <div className='mentor-img'>
                    <img src={chambell2} alt="" />
                    <h2>Dark</h2>
                </div>
            </div>
        </>
    );
};

export default Mentor;