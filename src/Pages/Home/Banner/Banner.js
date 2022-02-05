import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id="top-banner" className="flex flex-col justify-end">
            <div className="w-full xl:max-w-5xl my-auto md:my-0 mx-auto px-8 xl:px-24 py-10 xl:py-20 bg-white bg-clip-padding bg-opacity-50  backdrop-filter backdrop-blur-xl shadow-lg xl:rounded-2xl">
                <h1 style={{ lineHeight: "125%" }} className="pb-3 xl:pb-6 text-2xl xl:text-5xl font-semibold text-gray-700 leading-10">Plan Your Next Vacation With <br /><span className='text-green-500 font-bold uppercase'>wanderlust</span></h1>
                <h4 className="xl:text-2xl font-semibold text-gray-500 break-words">You choose the destination, we handle the rest.</h4>
            </div>
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 C 0,400 0,200 0,200 C 89.866028708134,174.5071770334928 179.732057416268,149.01435406698562 269,162 C 358.267942583732,174.98564593301438 446.9377990430621,226.44976076555025 554,243 C 661.0622009569379,259.55023923444975 786.5167464114834,241.18660287081337 898,223 C 1009.4832535885166,204.81339712918663 1106.9952153110048,186.8038277511962 1195,183 C 1283.0047846889952,179.1961722488038 1361.5023923444976,189.5980861244019 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff"></path></svg>
            </div>
        </div>
    );
};

export default Banner;