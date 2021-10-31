import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router';
import { faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Tourplan = (props) => {
    const { _id, title, location, price, description, imageURL } = props.tourplan;
    const history = useHistory();

    const url = `/confirm-booking/${_id}`;

    const handleBooking = () => {
        history.push(url);
    }

    return (
        <div className="border-1 flex flex-col rounded-lg shadow-2xl">
            <div className="overflow-hidden lg:h-96 rounded-t-lg">
                <img src={imageURL} alt="" className="transform scale-150" />
            </div>
            <div className="px-6 py-2 text-left">
                <h2 className="text-lg xl:text-2xl font-semibold uppercase">{title}</h2>
                <div className="grid grid-cols-2 py-3">
                    <p className="text-gray-500"><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</p>
                    <p className="text-gray-500 xl:text-xl text-right">From<span className="pl-2 text-green-500 font-bold"><FontAwesomeIcon icon={faDollarSign} />{price}</span> </p>
                </div>
                <p className="pb-3">{description.slice(0, 100)} ...</p>
                <button onClick={handleBooking} className="bg-green-500 px-5 py-2 mt-2 xl:mt-0 xl:mt-1 text-white">Book Now <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
            </div>

        </div>
    );
};

export default Tourplan;