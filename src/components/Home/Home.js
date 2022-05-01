import React from 'react';
import Service from '../../Service/Service';
import Special from '../../Special/Special';
import Banner from '../Banner/Banner';
import Mentor from '../Mentor/Mentor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Mentor></Mentor>
            <Special></Special>
        </div>
    );
};

export default Home;