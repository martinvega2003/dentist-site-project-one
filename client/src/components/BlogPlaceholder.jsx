import React from "react";
import { Link } from "react-router-dom";

const BlogPlaceholder = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Article Coming Soon!</h1>
                <p className="text-gray-600 mb-6">
                    Thanks for your interest in our blog! This page is a placeholder for upcoming articles. Stay tuned for exciting content that will be published here soon.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
                >
                    Go Back to the Home Page
                </Link>
            </div>
        </div>
    );
};

export default BlogPlaceholder;
