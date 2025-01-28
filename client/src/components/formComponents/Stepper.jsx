import React, { useEffect, useRef, useState } from 'react'

export const Stepper = ({steps, currentStep}) => {

	const [newStep, setNewStep] = useState([])
	const stepRef = useRef()

	const updateStep = (stepNumber, steps) => {
		const newSteps = [...steps] //newSteps es el array steps
		let count = 0

		while (count < newSteps.length) {
			if (count === stepNumber) { //Si la cuenta es igual al paso seleccionado
				newSteps[count] = { //El valor del indice es igual a count de steps es...
					...newSteps[count], //El valor actual de los demas datos de ese paso
					highlighted: true, //El resto se pone en true
					selected: true,
					completed: true,
				}
				count++
			} else if (count < stepNumber) {
				newSteps[count] = { //El valor del indice es mayor a count de steps es...
					...newSteps[count], //El valor actual de los demas datos de ese paso
					highlighted: false, //Solo se cambia esto con respecto al pasoo anterior
					selected: true,
					completed: true,
				}
				count++
			} else { //El step tdv esta pendinete
				newSteps[count] = { 
					...newSteps[count], //El valor actual de los demas datos de ese paso
					highlighted: false, //El resto se pone en false
					selected: false,
					completed: false,
				}
				count++
			}
		}
		return newSteps
	}

	useEffect(() => {
		stepRef.current = steps; //stepRef.Current es el valor del estado de steps
		const current = updateStep(currentStep - 1, stepRef.current) //updateSteps recibe el step actual y stepRef.current y le asigna el valor de return a la variable current.
		setNewStep(current)
	}, [steps, currentStep])

  return (
    <div className='mx-4 p-4 flex justify-between items-center'>
        {
					newStep.map((step, index) => {
						return (
								<div key={index} className={index !== newStep.length - 1 ? 'w-full flex items-center' : "flex items-center"}>
									<div className="relative flex flex-col items-center text-teal-600">
											<div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 ${step.selected ? "bg-primary text-white font-bold border border-primary" : ""}`}>
													{/* Display Number */}
													{step.completed ? (
														<span className='text-white font-bold text-xl'>{index + 1}</span>
													) : (
														index + 1
													)}
											</div>

											<div className={`hidden sm:block absolute top-0 text-center mt-16 w-32 text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"}`}>
													{/* Display Description */}
													{step.description}
											</div>
									</div>
									<div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-primary" : "border-gray-300"}`} />
							</div>
						)
					})
				}
    </div>
  )
}
