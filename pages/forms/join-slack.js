import React, { useState, useCallback, useRef  } from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

const survey_tools = [
  {
    "category":"warehouses",
    "tools":["redshift", "snowflake", "databricks", "big_query", "synapse", "other"],
    "question":"What warehouse technologies are you familiar with?"
  },
  {
    "category":"languages",
    "tools":["python", "scala", "java", "go", "node.js", "r", "other"],
    "question":"What programming languages do you use for Data Engineering?"
  },
  {
    "category":"ETL",
    "tools":["hevo", "fivetran", "informatica", "ssis", "adf", "other"],
    "question":"Which ETL tools are you familiar with?"
  },
  {
    "category":"datatrans",
    "tools":["dbt", "spark", "athena", "coalesce", "other"],
    "question":"Which data modelling and transformation tools have you used?"
  },
  {
    "category":"datacat",
    "tools":["amundsen","atlan","immuta","tableau","qlikview","other"],
    "question":"Which data cataloging tools are you familiar with?"
  },
  {
    "category":"revetl",
    "tools":["rudderstack","census","weld","restapp","other"],
    "question":"Do you have any experience with reverse ETL tools?"
  },
  {
    "category":"datalakes",
    "tools":["databricks","google","azure","aws","other"],
    "question":"Which datalake platforms have you used?"
  },
  {
    "category":"dataquality",
    "tools":["great_expectations", "data_fold","soda","nexus_data","sas","other"],
    "question":"Are you familiar with data quality testing?"
  }
]



function SpeakingForm() {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);
    
    let hackAPIGW = process.env.DATAENGAU_API_GW + '/slack';
    const [formStatus, setFormStatus] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      console.log(data)
      fire();
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
            <div className="bg-emerald-400 rounded-3xl sm:py-10 sm:px-12 lg:p-10 lg:flex-col lg:items-stretch">
              
              <div className="pl-20 flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-700">Join the Data Engineers Slack Channel</h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                By filling out this form and accepting the code of conduct, you will receive an invite shortly afterwards to join the Data Engineers slack channel.
                </p>
              </div>
              <div className="mt-12 pl-20 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                {formStatus ? (
                    <div className="text-success mb-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">Well done on signing up!</h2>
                    </div>
                ) : (
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)}>
                  <label className="sr-only">Full Name</label>
                  <input id="full-name" {...register("full-name",{required: true})}
                    name="full-name" 
                    type="text" 
                    autoComplete="full-name" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Enter your full name" />
                  <label className="sr-only">Email address</label>
                  <input id="email-address" {...register("email-address",{required: true})}
                    name="email-address" 
                    type="email" 
                    autoComplete="email" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="Enter your email" />
                  <label className="sr-only">LinkedIn Profile</label>
                  <input id="linkedin-profile" {...register("linkedin-profile",{required: true})}
                    name="linkedin-profile" 
                    type="text" 
                    autoComplete="linkedin-profile" 
                    required className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md" 
                    placeholder="What is your LinkedIn Profile" />

                  {survey_tools.map((survey_tool)=>(
                    <fieldset>
                      <label className="lg:flex-1 mt-4 max-w-3xl text-lg text-slate-700">{survey_tool.question}</label><br/>
                      <div class="flex">
                      {survey_tool.tools.map((tool)=>(
                        <div class="flex items-center mr-4">
                            <input id={tool} {...register(survey_tool.category)} type="checkbox" name={survey_tool.category} value={tool} class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for={tool} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{capitalizeFirstLetter(tool)}</label>
                        </div>
                      ))}
                      </div>
                    </fieldset>
                  ))}
                  
                  <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                    Submit
                  </button>
                </form>
                )}
                <p className="mt-3 text-sm text-indigo-100">
                I can confirm I have read and agree to the Data Engineers Code of Conduct which can be found here:
                  <a href="https://sydneydataengineers.github.io/code-of-conduct.html" className="text-white font-medium underline"> Code of Conduct </a>
                </p>
                <p className="mt-3 text-sm text-indigo-100">
                  We care about the protection of your data. Read our
                  <a href="/privacy" className="text-white font-medium underline"> Privacy Policy. </a>
                </p>
              </div>
            </div>
          </div>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
    )
}

export default SpeakingForm
