import React from 'react';

const Search = () => {
    return (
        <div className="flex bg-white">
            <div className="container max-w-6xl mx-auto shadow-2xl bg-green-500 py-12 xl:py-20 xl:-mt-32 xl:rounded-2xl">
                <div className="mx-auto">
                    <h2 className="xl:text-3xl pt-3 pb-3 text-gray-100">Search Your Next Breathtaking Gateway</h2>
                    <input className="w-2/3 xl:w-1/2 rounded-lg py-2 xl:py-4 text-center appearance-none border border-transparent bg-gray-100 text-gray-700 placeholder-gray-600 shadow-xl text-base focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white" type="text" placeholder="Where do you want to go?" />
                </div>
            </div>
        </div>
    );
};

export default Search;