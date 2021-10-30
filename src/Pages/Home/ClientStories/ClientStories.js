import React from 'react';
import quote from '../../../images/left-quotes-sign.png'


const ClientStories = () => {
    return (
        <div className="bg-yellow-400">
            <h1 className="text-3xl xl:text-5xl text-center py-12 text-gray-100">Client Stories</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 bg-white">
                <div className="flex">
                    <div className="m-auto px-10">
                        <img className="mx-auto pb-4" src={quote} alt="" />
                        <p className="text-lg text-gray-500 italic pb-4">Wonderlust was very fast and efficient in everything they did. EVERYTHING. Loved being able to book everything in the one place, in one transaction. I will most definitely come back!</p>
                        <p><span className="text-xl text-gray-600 font-semibold"> - Joshua Braidwood</span> <br />  Alaska, USA</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/bJmWgst/testimonial-2.jpg" alt="" />
                </div>
                <div className="flex">
                    <div className="m-auto px-10">
                        <img className="mx-auto pb-4" src={quote} alt="" />
                        <p className="text-lg text-gray-500 italic pb-4">I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays.</p>
                        <p><span className="text-xl text-gray-600 font-semibold"> - John Dignam</span><br />
                            Sydney, Australia
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/16SPNV7/testimonial-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientStories;