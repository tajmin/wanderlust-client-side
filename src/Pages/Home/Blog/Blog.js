import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="bg-gray-100 py-10">
            <h1 className="text-3xl xl:text-5xl text-center pt-12 pb-7 text-gray-600">Latest from Our Blog</h1>
            <h2 className="text-lg xl:text-xl text-center pb-16 text-gray-500 italic">Travel guide, tips, travel regulations, stories and more.</h2>
            <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://i.ibb.co/JzVMHjq/hiking.jpg" alt="" />
                    </div>
                    <div className="pb-4 px-4 rounded-b-lg shadow-2xl text-left text-gray-500 bg-white">
                        <h1 className="text-xl font-semibold py-2">Hiking at Alps</h1>
                        <p className="mb-2">Hiking in the Alps is physically demanding as it involves a lot of ascending and descending.</p>
                        <NavLink className="text-green-500 underline" to="/">Learn More</NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://i.ibb.co/nLH110w/camping.jpg" alt="" />
                    </div>
                    <div className="pb-4 px-4 rounded-b-lg shadow-2xl text-left text-gray-500 bg-white">
                        <h1 className="text-xl font-semibold py-2">Camping Tips</h1>
                        <p className="mb-2">Camping for the first time as a beginner can be intimidating and sometimes, really frustrating. </p>
                        <NavLink className="text-green-500 underline" to="/">Learn More</NavLink>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="rounded-t-lg" src="https://i.ibb.co/x379zRF/boating.jpg" alt="" />
                    </div>
                    <div className="pb-4 px-4 rounded-b-lg shadow-2xl text-left text-gray-500 bg-white">
                        <h1 className="text-xl font-semibold py-2">Canoe at Lake Louise</h1>
                        <p className="mb-2">You can use your own canoe or kayak at Lake Louise or any of the lakes or rivers within Banff National Park.</p>
                        <NavLink className="text-green-500 underline" to="/">Learn More</NavLink>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blog;