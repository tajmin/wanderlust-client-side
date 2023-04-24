import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.planId = id;
    fetch("https://wanderlust-server-side.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("order processed successfully!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className="bg-green-500">
        <h1 className="xl:text-3xl font-bold py-10">Confirm Booking</h1>
      </div>
      <div className="container mx-auto grid grid-cols-2">
        <div className="">
          <form
            className="grid grid-cols-1 gap-8 text-left text-lg text-gray-500"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="block">
              <span className="font-semibold">Full name</span>
              <input
                className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                defaultValue={user?.displayName}
                {...register("name")}
              />
            </label>
            <label className="block">
              <span className="font-semibold">Email</span>
              <input
                className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                defaultValue={user?.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
            </label>
            <label className="block">
              <span className="font-semibold">Address</span>
              <input
                className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
            </label>
            <label className="block">
              <span className="font-semibold">City</span>
              <input
                className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                placeholder="City"
                defaultValue=""
                {...register("city")}
              />
            </label>
            <label className="block">
              <span className="font-semibold">Phone</span>
              <input
                className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />
            </label>
            <input
              className="w-1/3 py-3 rounded hover:bg-blue-600 bg-blue-500 cursor-pointer text-white font-bold"
              type="submit"
              value="Confirm Booking"
            />
          </form>
        </div>
        <div className="bg-red-500"></div>
      </div>
    </div>
  );
};

export default Booking;
