import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ClientStories from '../ClientStories/ClientStories';
import Tourplans from '../Tourplans/Tourplans';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourplans></Tourplans>
            <ClientStories></ClientStories>
            <Blog></Blog>
        </div>
    );
};

export default Home;