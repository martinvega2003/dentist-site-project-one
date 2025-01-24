import React from 'react'
import patientOne from "../../images/patient-1.jpg"
import patientTwo from "../../images/patient-2.jpg"
import patientThree from "../../images/patient-3.jpg"

export const ImagesSection = () => {
  return (
    <div className='relative pt-16 pb-40 px-12 flex flex-col md:flex-row justify-evenly items-center'>
      <div className="absolute z-10 inset-0">
        <div className="h-1/2 lg:h-1/3 w-full bg-white"></div>
        <div className="h-1/2 lg:h-2/3 w-full bg-blue-200"></div>
      </div>
			<img src={patientOne} alt="" className='relative z-20 w-full md:w-1/3 h-auto mx-6 md:mx-3 my-6 md:my-0' />
			<img src={patientTwo} alt="" className='relative z-20 w-full md:w-1/3 h-auto mx-6 md:mx-3 my-6 md:my-0' />
			<img src={patientThree} alt="" className='relative z-20 w-full md:w-1/3 h-auto mx-6 md:mx-3 my-6 md:my-0' />

    </div>
  )
}
