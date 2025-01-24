import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Complete = ({name, setName, email, setEmail, phone, setPhone, date, setDate, service, setService}) => {
    const [isSuccessful, setIsSuccessful] = useState(null); // Tracks success state (null, true, false)

    useEffect(() => {
        const handleSubmit = async () => {       
            const data = {
              name,
              email,
              phone,
              date,
              service,
            }
        
            try {
              const response = await axios.post("http://localhost:5000/api/leads/booking", data); //magnet, booking
              alert(response.status)
              // Set success state if the request is successful
              if (response.status === 200 || response.status === 201) {
                setIsSuccessful(true); // Form was submitted successfully
                setName("");
                setEmail("");
                setPhone(0);
                setDate("");
                setService("");
              } 
            } catch (error) {
                alert(error)
                setIsSuccessful(false); // Submission failed
            }
        };
        handleSubmit()
    }, [name, email, phone, date, service, setName, setEmail, setPhone, setDate, setService]);

    return (
        <div className='container md:mt-10'>
            <div className="flex flex-col items-center">
                {isSuccessful === true ? (
                    <div className="text-green-400">
                        <svg 
                            className="w-24 h-24"
                            fill="currentColor"
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path 
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                ) : isSuccessful === false ? (
                    <div className="text-red-400">
                        <svg 
                            className="w-24 h-24"
                            fill="currentColor"
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path 
                                fillRule='evenodd'
                                d='M2 2l16 16M2 18L18 2'
                                stroke='red'
                                strokeWidth='2'
                                strokeLinecap='round'
                            />
                        </svg>
                    </div>
                ) : (
                    <div className="text-gray-500">
                        Processing...
                    </div>
                )}
                <div className="mt-3 text-xl font-semibold text-gray-500">
                    {isSuccessful === true ? "Congratulations!" : isSuccessful === false ? "An error occurred." : ""}
                </div>
                <div className="text-lg font-semibold text-gray-500">
                    {isSuccessful === true ? "Your Account has been created." : isSuccessful === false ? "Please try again." : ""}
                </div>
                <a href="/" className="mt-10">
                    <button className="h-10 px-5 text-primary transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-primary hover:text-light">
                        <Link to="/">Close</Link>
                    </button>
                </a>
            </div>
        </div>
    );
};

