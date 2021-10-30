import React, { useState } from 'react';
import { useEffect } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://infinite-sea-11636.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
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

    return (
        <div>
            <h1>Manage Orders</h1>
            <div className="container mx-auto py-6">
                {
                    allOrders.map((order, index) => <div className="flex bg-green-100 shadow-lg my-4" key={order._id}>
                        <img className="h-32" src={order.plan.imageURL} alt="" />
                        <h2 className="m-auto text-xl font-semibold">{order.plan.title}</h2>
                        <h2 className="m-auto text-xl font-semibold text-red-500">${order.plan.price}</h2>
                        <span className="bg-yellow-600 m-auto px-4 py-2 rounded-lg">{order.status ? 'Approved' : 'Pending'}</span>
                        <button onClick={() => handleApproveBooking(index)} className={order.status ? 'bg-green-500 opacity-25 px-6 py-4 m-auto' : 'bg-green-500 px-6 py-4 m-auto'} disabled={order.status}>Approve Booking</button>
                        <button onClick={() => handleCancellation(order._id)} className="bg-red-400 px-6 py-4 text-white m-auto">Cancel Booking</button>
                    </div>)
                }
            </div>
        </div >
    );
};

export default ManageOrders;