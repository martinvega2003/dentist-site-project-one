import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const OptInPopup = ({ isVisible, setIsVisible }) => {
    const closePopup = () => setIsVisible(false);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [error, setError] = useState(null)

    // Prevent scrolling when the popup is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => (document.body.style.overflow = 'auto'); // Clean up on unmount
    }, [isVisible]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Basic validation checks
        if (!name || !email || !phone) {
            setError("Please fill in all required fields.");
            // Remove success message after 5 seconds
            setTimeout(() => {
            setError(null);
            }, 5000);
            return;
        }
  
        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            // Remove success message after 5 seconds
            setTimeout(() => {
            setError(null);
            }, 5000);
            return;
        }

        const data = {
            name,
            email,
            phone
        }
      
        try {
            const response = await axios.post("http://localhost:5000/api/leads/magnet", data); //magnet, booking
      
            // Display success message if the request succeeds
            if (response.status === 200 || response.status === 201) {
              setError(false)
              setName("")
              setEmail("")
              setPhone("")
            }
            // Remove success message after 5 seconds
            setTimeout(() => {
                setError(null);
                setIsVisible(false)
            }, 5000);
        } catch (error) {
            setError("Something went wrong. Please, try again later.")
        }
    }

    return (
        isVisible && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
                <div className="bg-white w-[90%] md:w-[70%] lg:w-1/2 p-6 rounded-lg shadow-lg relative">
                    {/* Close Button */}
                    <button
                        onClick={closePopup}
                        className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {/* Persuasive Content */}
                    <h2 className="text-2xl font-bold text-center text-blue-600">
                        Get Your Teeth Whitening for a Year!
                    </h2>
                    <p className="mt-4 text-gray-700 text-center">
                        Sign up today and enjoy a brighter, whiter smile with our exclusive offer! Provide your details
                        below and take the first step towards dazzling teeth.
                    </p>

                    {/* Form */}
                    <form className="mt-6 space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                onChange={e => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        {error === null ? <></> : error ? <p className="text-red-500 mb-4">{error}</p> : <p className="text-green-500 mb-4">Form submitted successfully!</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                            onClick={e => handleSubmit(e)}
                        >
                            Claim Your Offer
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};
