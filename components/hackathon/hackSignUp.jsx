import { useState } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";

function HackForm() {
    
    let hackAPIGW = process.env.DATAENGAU_API_GW + '/hackathon';
    const [formStatus, setFormStatus] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       axios
        .post(
            hackAPIGW,
            data,
            { headers: { 'Content-Type': 'application/json' }}
         )
        .then(response => {
          setFormStatus(true);
          console.log(response.data)
        })
        .catch(error => {console.log(error.data)});
    };

    return (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Sign up for the hackathon</h2>
                <p className="mt-4 max-w-3xl text-lg text-indigo-100">Get the details on how you can participate... everyone building out a published blog gets a free DataEngHack T-Shirt.</p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                {formStatus ? (
                    <div className="text-success mb-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">Well done on signing up!</h2>
                    </div>
                ) : (
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)}>
                  <label className="sr-only">First Name</label>
                  <input id="first-name" {...register("first-name",{required: true})}
                    name="first-name" 
                    type="text" 
                    autoComplete="first-name" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Enter your first name" />
                  <label className="sr-only">Last Name</label>
                  <input id="last-name" {...register("last-name",{required: true})}
                    name="last-name" 
                    type="text" 
                    autoComplete="last-name" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Enter your last name" />
                  <label className="sr-only">Email address</label>
                  <input id="email-address" {...register("email-address",{required: true})}
                    name="email-address" 
                    type="email" 
                    autoComplete="email" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Enter your email" />
                  <label className="sr-only">Meetup City</label>
                  <select id="meetup-city" {...register("meetup-city",{required: true})}
                    name="meetup-city" 
                    type="text" 
                    autoComplete="meetup-city" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Select your meetup city">
                    <option value="Sydney">Sydney</option>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Brisbane">Brisbane</option>
                    <option value="Perth">Perth</option>
                  </select>
                  <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                    Sign me Up 
                  </button>
                </form>
                )}
                <p className="mt-3 text-sm text-indigo-100">
                  We care about the protection of your data. Read our
                  <a href="#" className="text-white font-medium underline"> Privacy Policy. </a>
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
export default HackForm
