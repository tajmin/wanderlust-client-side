import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const userIdentifier = {};

    useEffect(() => {
        if (user.email) {
            userIdentifier.name = user.displayName;
            userIdentifier.email = user.email;
            fetch('http://localhost:5000/my-bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userIdentifier)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    setMyOrders(result);
                })
        }
    }, [user])

    return (
        <div className="container mx-auto">
            {
                myOrders.map(order => <div className="flex bg-green-100 shadow-lg my-4" key={order._id}>
                    <img className="h-32" src={order.plan.imageURL} alt="" />
                    <h2 className="m-auto text-xl font-semibold">{order.plan.title}</h2>
                    <h2 className="m-auto text-xl font-semibold text-red-500">${order.plan.price}</h2>
                    <button className="bg-red-400 px-6 py-4 text-white m-auto">Cancel Booking</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;