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
            <div className="bg-white pt-8 pb-12">
                <h1 className="text-3xl lg:text-5xl text-gray-600 text-center py-10 xl:py-14">Tour Plans</h1>
                <div className="container mx-auto px-8 lg:my-12">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
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