import { useContext } from "react"
import { StepperContext } from "../../contexts/StepperContext"

export const Account = ({setName, setEmail, setPhone}) => {

    const {userData, setUserData} = useContext(StepperContext)

    const handleChange = e => {
        const {name, value} = e.target 
        setUserData({ ...userData, [name]: value })
    }

  return (
    <div className="flex flex-col">
        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                {" "}
                Username
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray 200 rounded">
                <input 
                    type="text" 
                    onChange={e => {setName(e.target.value); handleChange()}}
                    name="username"
                    placeholder="Username"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    required 
                />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                {" "}
                Email
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray 200 rounded">
                <input 
                    type="email" 
                    onChange={e => {setEmail(e.target.value); handleChange()}}
                    name="email"
                    placeholder="Email"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
                    required
                />
            </div>
        </div>

        <div className="w-full mx-2 flex-1">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                {" "}
                Phone
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray 200 rounded">
                <input 
                    type="number" 
                    onChange={e => {setPhone(e.target.value); handleChange()}}
                    name="phone"
                    placeholder="Phone number"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800" 
                />
            </div>
        </div>
    </div>
  )
}
