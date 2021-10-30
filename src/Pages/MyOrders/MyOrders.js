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
            fetch('https://infinite-sea-11636.herokuapp.com/my-bookings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userIdentifier)
            })
                .then(res => res.json())
                .then(result => setMyOrders(result))
        }
    }, [user])

    const handleCancellation = (id) => {
        const confirmDelete = window.confirm('Confirm cancell this booking?');
        if (confirmDelete) {
            fetch(`https://infinite-sea-11636.herokuapp.com/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const restOrders = myOrders.filter(item => item._id !== id);
                        setMyOrders(restOrders);
                        alert('Booking Cancelled Successfully.');
                    }
                });
        }
    }

    return (
        <div className="container mx-auto">
            {
                myOrders.map(order => <div className="flex bg-green-100 shadow-lg my-4" key={order._id}>
                    <img className="h-32" src={order.plan.imageURL} alt="" />
                    <h2 className="m-auto text-xl font-semibold">{order.plan.title}</h2>
                    <h2 className="m-auto text-xl font-semibold text-red-500">${order.plan.price}</h2>
                    <button onClick={() => handleCancellation(order._id)} className="bg-red-400 px-6 py-4 text-white m-auto">Cancel Booking</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;