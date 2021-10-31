import React, { useState } from 'react';
import { useEffect } from 'react';
import spinner from '../../images/spin.gif';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://infinite-sea-11636.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                setIsLoading(false);
            })
    }, [])

    //cancel booking
    const handleCancellation = (id) => {
        const confirmDelete = window.confirm('Confirm delete this order?');
        if (confirmDelete) {
            fetch(`https://infinite-sea-11636.herokuapp.com/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const restOrders = allOrders.filter(item => item._id !== id);
                        setAllOrders(restOrders);
                        alert('Order deleted Successfully.');
                    }
                });
        }
    }

    //approve booking
    const handleApproveBooking = (index) => {
        const data = {};
        const updatedBooking = allOrders[index];
        updatedBooking.status = true;
        data.bookingId = updatedBooking._id;
        data.status = updatedBooking.status;
        fetch('https://infinite-sea-11636.herokuapp.com/booking', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const restOrders = allOrders.filter(item => item._id !== updatedBooking._id);
                    const newOrders = [updatedBooking, ...restOrders];
                    setAllOrders(newOrders)
                    alert('Booking Approved Successfully!');
                }
            })
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
                <h1 className="text-3xl lg:text-5xl text-gray-600 text-center py-10 xl:py-14">Manage All Orders</h1>
                <div className="container xl:max-w-max px-8 py-8 xl:py-16 mx-auto bg-white">
                    {
                        allOrders.map((order, index) => <div className="flex bg-green-50 shadow-2xl rounded-lg my-4" key={order._id}>
                            <div className="flex-1 grid lg:grid-cols-6 gap-6 grid-flow-row">
                                <div>
                                    <img className="xl:h-32 xl:rounded-l-lg" src={order.plan.imageURL} alt="" />
                                </div>
                                <h2 className="m-auto text-xl xl:col-span-2 font-semibold">{order.plan.title}</h2>
                                <div className="flex justify-around">
                                    <h2 className="m-auto text-xl font-semibold text-red-500">${order.plan.price}</h2>
                                    <span className={order.status ? 'bg-green-500 m-auto px-4 py-2 rounded' : 'bg-yellow-600 m-auto px-4 py-2 rounded'}>{order.status ? 'Approved' : 'Pending'}</span>
                                </div>
                                <h2 className="m-auto text-lg text-gray-500">{order.email}</h2>
                                <div className="flex justify-around pb-3 md:pb-0">
                                    <button onClick={() => handleApproveBooking(index)} className={order.status ? 'bg-green-500 opacity-25 px-4 py-2 rounded text-white m-auto' : 'bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white m-auto'} disabled={order.status}>Approve</button>
                                    <button onClick={() => handleCancellation(order._id)} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white m-auto">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div >
        </div>
    );
};

export default ManageOrders;