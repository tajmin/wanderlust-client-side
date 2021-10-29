import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const TourplanDetails = () => {
    const { id } = useParams();
    const [tourDetails, setTourDetails] = useState([]);
    const history = useHistory();
    const url = `/booking/${id}`;

    useEffect(() => {
        fetch(`https://infinite-sea-11636.herokuapp.com/plan-details/${id}`)
            .then(res => res.json())
            .then(data => setTourDetails(data));
    }, [])

    const handleProceedBooking = () => {
        history.push(url);
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="bg-gray-200 col-span-2 flex">
                <div className="my-auto px-16 text-left">
                    <h1 className="text-xl xl:text-3xl font-bold">{tourDetails.title}</h1>
                    <span>Located at {tourDetails.location}</span> <span>From ${tourDetails.price}</span>
                    <p>{tourDetails.description}</p>
                    <button onClick={handleProceedBooking} className="px-8 py-3 rounded bg-blue-500 text-white">Proceed to Booking</button>
                </div>
            </div>
            <div className="col-span-3">
                <img className="w-full" src={tourDetails.imageURL} alt="" />
            </div>
        </div>
    );
};

export default TourplanDetails;