import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/dribbble_1.gif'

const PageNotFound = () => {
    return (
        <div className="container mx-auto flex">
            <div className="m-auto py-20">
                <h1 className="text-lg md:text-2xl xl:text-5xl mb-6">Looks like you're lost!</h1>
                <NavLink to="/home" className="py-3 px-8 text-white bg-green-500 mb-6">Go to Home</NavLink>
                <img className="w-full mt-10" src={img} alt="" />
            </div>
        </div>
    );
};

export default PageNotFound;