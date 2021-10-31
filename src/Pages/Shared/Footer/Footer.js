import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="container flex justify-around lg:max-w-lg mx-auto py-6 text-gray-500">
                <NavLink className="text-gray-500 hover:text-green-500" to="/">Home</NavLink>
                <NavLink className="text-gray-500 hover:text-green-500" to="/">Press</NavLink>
                <NavLink className="text-gray-500 hover:text-green-500" to="/">Privacy Policy</NavLink>
                <NavLink className="text-gray-500 hover:text-green-500" to="/">Contact</NavLink>
            </div>
            <div className="flex py-8 bg-black">
                <img className="m-auto h-12" src={logo} alt="" />
            </div>
        </div>
    );
};

export default Footer;