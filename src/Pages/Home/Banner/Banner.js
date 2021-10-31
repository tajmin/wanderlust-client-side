import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id="top-banner" className="flex">
            <div className="max-w-6xl m-auto px-8 py-10 xl:py-20 bg-black opacity-60 rounded-2xl">
                <h1 className="pb-6 text-2xl md:tex-3xl xl:text-5xl font-bold text-gray-100 break-words uppercase">make your next vacation with wonderlust</h1>
                <h4 className="xl:text-2xl font-bold text-gray-300 break-words">You choose the destination, we handle the rest.</h4>
            </div>
        </div>
    );
};

export default Banner;