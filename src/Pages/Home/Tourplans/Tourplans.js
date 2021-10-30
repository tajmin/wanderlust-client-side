import React, { useEffect, useState } from 'react';
import Tourplan from '../Tourplan/Tourplan';

const Tourplans = () => {
    const [tourplans, setTourplans] = useState([]);

    useEffect(() => {
        fetch('https://infinite-sea-11636.herokuapp.com/tour-plans')
            .then(res => res.json())
            .then(data => setTourplans(data));
    }, [])

    return (
        <div>
            <div className="bg-pink-50 pt-8 pb-12">
                <h1 className="text-2xl lg:text-5xl text-center pb-10 pt-8 xl:pt-14">Our Services</h1>
                <div className="container mx-auto lg:my-12">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-10 shadow-lg rounded-xl bg-blue-50">
                        {
                            tourplans?.map(item => <Tourplan
                                key={item._id}
                                tourplan={item}
                            >
                            </Tourplan>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Tourplans;