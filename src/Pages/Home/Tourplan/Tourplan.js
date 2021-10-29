import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { useHistory } from 'react-router';

const Tourplan = (props) => {
    const { _id, title, location, price, description, imageURL } = props.tourplan;
    const history = useHistory();

    const url = `/service-info/${_id}`;

    const handleBooking = () => {
        history.push(url);
    }

    return (
        <div className="flex flex-1 flex-col xl:flex-row border-1 hover:shadow-lg rounded-lg bg-white space-y-4 pb-8 xl:pb-0">
            <img src={imageURL} alt="" className="w-full xl:w-80 h-auto xl:rounded-l-lg" />
            <div className="px-6 text-left">
                <div className="h-3/4 xl:h-2/3">
                    <h2 className="text-lg xl:text-2xl font-bold uppercase">{title}</h2>
                    <p>{description.slice(0, 100)} ...</p>
                </div>
                <button onClick={handleBooking} className="bg-green-500 px-5 py-2 mt-2 xl:mt-0 xl:mt-1 text-white">Book Now <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
            </div>

        </div>
    );
};

export default Tourplan;