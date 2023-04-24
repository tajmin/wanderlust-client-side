import React, { useEffect, useState } from "react";
import Tourplan from "../Tourplan/Tourplan";
import spinner from "../../../images/spin.gif";

const Tourplans = () => {
  const [tourplans, setTourplans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://wanderlust-server-side.vercel.app/tour-plans")
      .then((res) => res.json())
      .then((data) => {
        setTourplans(data);
        setIsLoading(false);
      });
  }, []);

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
      <div className="bg-white pt-8 pb-12">
        <h1 className="text-3xl lg:text-5xl text-gray-600 text-center py-10 xl:py-14">
          Tour Plans
        </h1>
        <div className="container mx-auto px-8 lg:my-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {tourplans?.map((item) => (
              <Tourplan key={item._id} tourplan={item}></Tourplan>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourplans;
