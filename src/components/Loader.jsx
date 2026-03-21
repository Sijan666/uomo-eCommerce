import React from "react";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500 mb-4"></div>
        <p className="text-gray-600 text-lg font-medium tracking-wide">
            Loading...
        </p>
        </div>
    );
};

export default Loader;