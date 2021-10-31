import React from 'react';
import './Refer.css'

const Refer = () => {
    return (
        <div id="refer-banner" className="flex">
            <div className="max-w-6xl m-auto px-8 py-10 xl:py-20 bg-black opacity-80 rounded-2xl">
                <h1 className="pb-6 text-2xl md:tex-3xl xl:text-5xl font-bold text-gray-100 break-words uppercase leading-snug">refer a friend and enjoy 15% off for both of you</h1>
                <input className="w-1/2 border-none rounded-lg" type="text" placeholder="Enter your email" />
            </div>
        </div>
    );
};

export default Refer;