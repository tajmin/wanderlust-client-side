import React from 'react';

const Search = () => {
    return (
        <div className="flex">
            <div className="container max-w-6xl mx-auto bg-green-500 py-12 xl:py-20 xl:-mt-32 xl:rounded-2xl">
                <div className="mx-auto">
                    <h2 className="xl:text-3xl pt-4 pb-6 text-gray-200">Search Your Next Breathtaking Gateway</h2>
                    <input className="w-2/3 xl:w-1/2 border-none rounded-lg py-2 xl:py-4 text-center" type="text" placeholder="Where do you want to go?" />
                </div>
            </div>
        </div>
    );
};

export default Search;