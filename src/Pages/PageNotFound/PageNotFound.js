import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/dribbble_1.gif'

const PageNotFound = () => {
    return (
        <div className="container mx-auto flex">
            <div className="m-auto pb-10">
                <h1 className="text-5xl font-bold pt-10">404</h1>
                <div className="overflow-hidden">
                    <img className="mx-auto" src={img} alt="" />
                </div>
                <h1 className="text-lg md:text-2xl xl:text-5xl mb-6">Looks like you're lost!</h1>
                <NavLink to="/home" className="py-3 px-6 text-white bg-green-500 hover:bg-green-600 mb-6 rounded-lg">Go to Home</NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;