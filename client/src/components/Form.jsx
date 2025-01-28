import React, { useState } from 'react'
import { Stepper } from './formComponents/Stepper'
import { StepperControl } from './formComponents/StepperControl'
import { Account } from './formComponents/Account'
import { Complete } from './formComponents/Complete'
import { StepperContext } from '../contexts/StepperContext'
import { CalendarFields } from './formComponents/CalendarFields'
import { ServiceField } from './formComponents/ServiceField'

export const Form = () => {

    const [currentStep, setCurrentStep] = useState(1)
	//States del formulario:
	const [userData, setUserData] = useState("")
	const [finalData, setFinalData] = useState([])

    //States para los datos:
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [date, setDate] = useState("")
    const [service, setService] = useState("")

	const steps = [
		{
			description: "Client Information",
			completed: false,
			highlighted: true, //Por defecto, el primer step sera el highlighted
			selected:true, //Por defecto, tambien el primer paso sera el seleccionado.
		},
		{
			description: "Set Your Date",
			completed: false,
			highlighted: false, //Por defecto, el primer step sera el highlighted
			selected: false, //Por defecto, tambien el primer paso sera el seleccionado.
		},
        {
			description: "Select Your Service",
			completed: false,
			highlighted: false, //Por defecto, el primer step sera el highlighted
			selected: false, //Por defecto, tambien el primer paso sera el seleccionado.
		},
		{
			description: "Complete",
			completed: false,
			highlighted: false, //Por defecto, el primer step sera el highlighted
			selected: false, //Por defecto, tambien el primer paso sera el seleccionado.
		},
	]

    const displayStep = step => {
        switch(step) {
            case 1:
                return <Account setName={setName} setEmail={setEmail} setPhone={setPhone} />
            case 2:
                return <CalendarFields setDate={setDate} />
            case 3:
                return <ServiceField setService={setService} />
            case 4:
                return <Complete name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} date={date} setDate={setDate} service={service} setService={setService} />
        }
    }

	const handleClick = direction => {
		let newStep = currentStep
		direction === "next" ? newStep++ : newStep--
		newStep > 0 && newStep < steps.length + 1 && setCurrentStep(newStep) //Si newStep es mayor a cero y menor al largo de steps, se asigna su valor a currentStep.
	}

  return (
    <div className="bg-form_bg flex justify-center items-center h-fit w-full my-4">
        <div className='min-w-fit sm:min-w-[80%] md:max-w-1/2 mx-auto my-8 shadow-xl rounded-2xl p-4 bg-white'>
            {/* Stepper */}
            <div className="container horizontal mt-5">
                <Stepper 
                                steps={steps}
                                currentStep={currentStep}
                />

                            {/* Display components */}
                            <div className='my-10 p-10'>
                                <StepperContext.Provider value={{
                                    userData,
                                    setUserData,
                                    finalData,
                                    setFinalData,
                                }}>
                                    {displayStep(currentStep)}
                                </StepperContext.Provider>
                            </div>
            </div>

            {/* Navigation Controls */}
            {
                        currentStep !== steps.length && 
                        <StepperControl 
                            handleClick={handleClick} 
                            currentStep={currentStep}
                            steps={steps}
                        />
                    }
        </div>
    </div>
  )
}