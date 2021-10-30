import React from 'react';
import Banner from '../Banner/Banner';
import ClientStories from '../ClientStories/ClientStories';
import Tourplans from '../Tourplans/Tourplans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourplans></Tourplans>
            <ClientStories></ClientStories>
        </div>
    );
};

export default Home;