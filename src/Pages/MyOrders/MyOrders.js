import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import spinner from '../../images/spin.gif';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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
                .then(result => {
                    setMyOrders(result);
                    setIsLoading(false);
                })
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

    //spinner for loading
    if (isLoading) {
        return (
            <div>
                <div className="bg-gray-100">
                    <img className="mx-auto" src={spinner} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto shadow-2xl my-10 rounded-xl">
                <h1 className="text-3xl lg:text-5xl text-gray-600 text-center py-10 xl:py-14">My Orders</h1>
                <div className="container xl:max-w-5xl px-4 py-16 mx-auto bg-white">
                    {
                        myOrders.map(order => <div className="flex bg-green-50 shadow-2xl rounded-lg my-4" key={order._id}>
                            <div className="grid lg:grid-cols-5 gap-4 grid-flow-row">
                                <div>
                                    <img className="xl:h-32 xl:rounded-l-lg" src={order.plan.imageURL} alt="" />
                                </div>
                                <h2 className="m-auto text-xl xl:col-span-2 font-semibold">{order.plan.title}</h2>
                                <h2 className="m-auto text-xl font-semibold text-red-500">${order.plan.price}</h2>
                                <button onClick={() => handleCancellation(order._id)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white m-auto">Cancel</button>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;