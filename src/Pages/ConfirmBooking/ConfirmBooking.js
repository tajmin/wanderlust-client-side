import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import spinner from "../../images/spin.gif";

const ConfirmBooking = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [tourDetails, setTourDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://wanderlust-server-side.vercel.app/plan-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourDetails(data);
        reset(data);
        setIsLoading(false);
      });
  }, []);

  const onSubmit = (data) => {
    data.plan = {
      id: id,
      imageURL: tourDetails.imageURL,
      title: tourDetails.title,
      price: tourDetails.price,
    };
    data.status = false;

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

  //spinner for loading
  if (isLoading) {
    return (
      <div>
        <div className="bg-gray-100">
          <img className="mx-auto" src={spinner} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-green-500">
        <h1 className="xl:text-3xl text-white font-bold py-10">
          Confirm Booking
        </h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5">
        <div className="col-span-2 order-last md:order-none">
          <div className="py-12 px-16 text-left">
            <h1 className="text-xl xl:text-3xl font-bold">
              {tourDetails.title}
            </h1>
            <div className="grid grid-cols-2 pt-4 pb-8 xl:text-xl text-gray-500">
              <p className="">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {tourDetails.location}
              </p>
              <p className="text-right">
                From
                <span className="pl-2 text-green-500 font-bold">
                  <FontAwesomeIcon icon={faDollarSign} />
                  {tourDetails.price}
                </span>{" "}
              </p>
            </div>

            <p className="text-gray-500 text-lg">{tourDetails.description}</p>
          </div>

          <div className="py-6 px-16 text-left">
            <h1 className="xl:text-3xl text-gray-500">
              Fill Out Below to Confirm
            </h1>
            <form
              className="grid grid-cols-1 gap-4 text-left text-gray-500"
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
                  placeholder=""
                  defaultValue=""
                  {...register("address")}
                />
              </label>
              <label className="block">
                <span className="font-semibold">City</span>
                <input
                  className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                  placeholder=""
                  defaultValue=""
                  {...register("city")}
                />
              </label>
              <label className="block">
                <span className="font-semibold">Phone</span>
                <input
                  className="mt-2 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-green-500 focus:outline-none"
                  placeholder=""
                  defaultValue=""
                  {...register("phone")}
                />
              </label>
              <input
                className="w-1/3 py-3 rounded hover:bg-green-600 bg-green-500 cursor-pointer text-white font-bold"
                type="submit"
                value="Submit"
              />
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
