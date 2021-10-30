import React from 'react';
import { useForm } from "react-hook-form";

const NewTourPlan = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://infinite-sea-11636.herokuapp.com/tour-plans', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New plan added successfully!');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="py-6 px-16 text-left">
                <h1 className="xl:text-3xl text-gray-500">Add New Tour Plan</h1>
                <form className="grid grid-cols-1 gap-4 text-left text-gray-500" onSubmit={handleSubmit(onSubmit)}>
                    <label className="block">
                        <span className="font-semibold">Title</span>
                        <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue="" {...register("title", { required: true })} />
                        {errors.title && <span className="error">This field is required</span>}
                    </label>
                    <label className="block">
                        <span className="font-semibold">Location</span>
                        <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue="" {...register("location", { required: true })} />
                        {errors.location && <span className="error">This field is required</span>}
                    </label>
                    <label className="block">
                        <span className="font-semibold">Price</span>
                        <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue="" {...register("price", { required: true })} />
                        {errors.price && <span className="error">This field is required</span>}
                    </label>
                    <label className="block">
                        <span className="font-semibold">Description</span>
                        <textarea className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue="" {...register("description")} />
                    </label>
                    <label className="block">
                        <span className="font-semibold">Image URL</span>
                        <input className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none" defaultValue="" {...register("imageURL", { required: true })} />
                        {errors.imageURL && <span className="error">This field is required</span>}
                    </label>
                    <input className="w-1/3 py-3 rounded hover:bg-blue-600 bg-blue-500 cursor-pointer text-white font-bold" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default NewTourPlan;