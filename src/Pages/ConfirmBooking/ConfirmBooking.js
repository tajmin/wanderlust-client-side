import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const ConfirmBooking = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [tourDetails, setTourDetails] = useState([]);

    useEffect(() => {
        fetch(`https://infinite-sea-11636.herokuapp.com/plan-details/${id}`)
            .then(res => res.json())
            .then(data => setTourDetails(data));
    }, [])

    const onSubmit = data => {
        data.plan = {
            id: id,
            imageURL: tourDetails.imageURL,
            title: tourDetails.title,
            price: tourDetails.price
        }

        fetch('https://infinite-sea-11636.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert('order processed successfully!');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="bg-green-500">
                <h1 className="xl:text-3xl text-white font-bold py-10">Confirm Booking</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-5">
                <div className="col-span-2">
                    <div className="py-12 px-16 text-left">
                        <h1 className="text-xl xl:text-3xl font-bold">{tourDetails.title}</h1>
                        <span>Located at {tourDetails.location}</span> <span>From ${tourDetails.price}</span>
                        <p>{tourDetails.description}</p>
                    </div>

                    <div className="py-6 px-16 text-left">
                        <h1 className="xl:text-3xl text-gray-500">Fill Out Below to Confirm</h1>
                        <form className="grid grid-cols-1 gap-4 text-left text-gray-500" onSubmit={handleSubmit(onSubmit)}>
                            <label className="block">
                                <span className="font-semibold">Full name</span>
                                <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue={user?.displayName} {...register("name")} />
                            </label>
                            <label className="block">
                                <span className="font-semibold">Email</span>
                                <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue={user?.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                            </label>
                            <label className="block">
                                <span className="font-semibold">Address</span>
                                <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" placeholder="Address" defaultValue="" {...register("address")} />
                            </label>
                            <label className="block">
                                <span className="font-semibold">City</span>
                                <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" placeholder="City" defaultValue="" {...register("city")} />
                            </label>
                            <label className="block">
                                <span className="font-semibold">Phone</span>
                                <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" placeholder="phone number" defaultValue="" {...register("phone")} />
                            </label>
                            <input className="w-1/3 py-3 rounded hover:bg-blue-600 bg-blue-500 cursor-pointer text-white font-bold" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className="col-span-3">
                    <img className="w-full" src={tourDetails.imageURL} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ConfirmBooking;