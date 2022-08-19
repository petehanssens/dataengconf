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

const warehouses = ["Redshift", "Snowflake", "S3", "EMR", "Big Query", "Azure Data Warehouse", "Other"]
const languages = ["Python", ""]

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
            <div className="bg-yellow-300 rounded-3xl sm:py-10 sm:px-12 lg:p-10 lg:flex col flex-col lg:items-center">
              
              <div className="lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-700">Join the Data Engineers Slack Channel</h2>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                By filling out this form and accepting the code of conduct, you will receive an invite shortly afterwards to join the Data Engineers slack channel.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                {formStatus ? (
                    <div className="text-success mb-2">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">Well done on signing up!</h2>
                    </div>
                ) : (
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8" onSubmit={handleSubmit(onSubmit)}>
                  <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</h3>
                  <ul class="grid gap-6 w-full md:grid-cols-3">
                      <li>
                          <input type="checkbox" id="react-option" value="" class="hidden peer" required=""/>
                          <label for="react-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 peer-checked:border-4 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                              <div class="block">
                                  <svg class="mb-2 w-7 h-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M475.6 384.1C469.7 394.3 458.9 400 447.9 400c-5.488 0-11.04-1.406-16.13-4.375l-25.09-14.64l5.379 20.29c3.393 12.81-4.256 25.97-17.08 29.34c-2.064 .5625-4.129 .8125-6.164 .8125c-10.63 0-20.36-7.094-23.21-17.84l-17.74-66.92L288 311.7l.0002 70.5l48.38 48.88c9.338 9.438 9.244 24.62-.1875 33.94C331.5 469.7 325.4 472 319.3 472c-6.193 0-12.39-2.375-17.08-7.125l-14.22-14.37L288 480c0 17.69-14.34 32-32.03 32s-32.03-14.31-32.03-32l-.0002-29.5l-14.22 14.37c-9.322 9.438-24.53 9.5-33.97 .1875c-9.432-9.312-9.525-24.5-.1875-33.94l48.38-48.88L223.1 311.7l-59.87 34.93l-17.74 66.92c-2.848 10.75-12.58 17.84-23.21 17.84c-2.035 0-4.1-.25-6.164-.8125c-12.82-3.375-20.47-16.53-17.08-29.34l5.379-20.29l-25.09 14.64C75.11 398.6 69.56 400 64.07 400c-11.01 0-21.74-5.688-27.69-15.88c-8.932-15.25-3.785-34.84 11.5-43.75l25.96-15.15l-20.33-5.508C40.7 316.3 33.15 303.1 36.62 290.3S53.23 270 66.09 273.4L132 291.3L192.5 256L132 220.7L66.09 238.6c-2.111 .5625-4.225 .8438-6.305 .8438c-10.57 0-20.27-7.031-23.16-17.72C33.15 208.9 40.7 195.8 53.51 192.3l20.33-5.508L47.88 171.6c-15.28-8.906-20.43-28.5-11.5-43.75c8.885-15.28 28.5-20.44 43.81-11.5l25.09 14.64L99.9 110.7C96.51 97.91 104.2 84.75 116.1 81.38C129.9 77.91 142.1 85.63 146.4 98.41l17.74 66.92L223.1 200.3l-.0002-70.5L175.6 80.88C166.3 71.44 166.3 56.25 175.8 46.94C185.2 37.59 200.4 37.72 209.8 47.13l14.22 14.37L223.1 32c0-17.69 14.34-32 32.03-32s32.03 14.31 32.03 32l.0002 29.5l14.22-14.37c9.307-9.406 24.51-9.531 33.97-.1875c9.432 9.312 9.525 24.5 .1875 33.94l-48.38 48.88L288 200.3l59.87-34.93l17.74-66.92c3.395-12.78 16.56-20.5 29.38-17.03c12.82 3.375 20.47 16.53 17.08 29.34l-5.379 20.29l25.09-14.64c15.28-8.906 34.91-3.75 43.81 11.5c8.932 15.25 3.785 34.84-11.5 43.75l-25.96 15.15l20.33 5.508c12.81 3.469 20.37 16.66 16.89 29.44c-2.895 10.69-12.59 17.72-23.16 17.72c-2.08 0-4.193-.2813-6.305-.8438L379.1 220.7L319.5 256l60.46 35.28l65.95-17.87C458.8 270 471.9 277.5 475.4 290.3c3.473 12.78-4.082 25.97-16.89 29.44l-20.33 5.508l25.96 15.15C479.4 349.3 484.5 368.9 475.6 384.1z"/></svg>
                                  <div class="w-full text-lg font-semibold">Snowflake</div>
                              </div>
                          </label>
                      </li>
                      
                      <li>
                          <input type="checkbox" id="flowbite-option" value="" class="hidden peer"/>
                          <label for="flowbite-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                              <div class="block">
                                  <svg class="mb-2 w-7 h-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>
                                  <div class="w-full text-lg font-semibold">Vue Js</div>
                                  <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>
                              </div>
                          </label>
                      </li>
                      <li>
                          <input type="checkbox" id="angular-option" value="" class="hidden peer"/>
                          <label for="angular-option" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                              <div class="block">
                                  <svg class="mb-2 w-7 h-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>
                                  <div class="w-full text-lg font-semibold">Angular</div>
                                  <div class="w-full text-sm">A TypeScript-based web application framework.</div>
                              </div>
                          </label>
                      </li>
                  </ul>
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

                  <fieldset>
                  <label>What warehouses technologies are you familiar with?</label><br/>
                  <input type="checkbox" id="redshift" {...register("warehouse")} name="warehouse" value="redshift"/><label> Redshift</label>
                  <br/>
                  <input type="checkbox" id="snowflake" {...register("warehouse")} name="warehouse" value="snowflake"/><label> Snowflake</label>
                  <br/>
                  <input type="checkbox" id="databricks" {...register("warehouse")} name="warehouse" value="databricks"/><label> Databricks</label>
                  <br/>
                  <input type="checkbox" id="big_query" {...register("warehouse")} name="warehouse" value="big_query"/><label> Big Query</label>
                  <br/>
                  <input type="checkbox" id="azure_data_warehouse" {...register("warehouse")} name="warehouse" value="azure_data_warehouse"/><label> Synapse</label>
                  <br/>
                  <input type="checkbox" id="other" {...register("warehouse")} name="warehouse" value="other"/><label> Other</label> 
                  <br/>
                  </fieldset>
                  <fieldset>
                  <label>What languages you use to do data engineering</label><br/>
                  <label>
                  <input type="checkbox" id="python" {...register("languages")} name="languages" value="python"/> Python 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="scala" {...register("languages")} name="languages" value="scala"/> Scala 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="java" {...register("languages")} name="languages" value="java"/> Java 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="go" {...register("languages")} name="languages" value="go"/> Go 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="node.js" {...register("languages")} name="languages" value="node.js"/> Node.js 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="r" {...register("languages")} name="languages" value="r"/> R 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="other" {...register("languages")} name="languages" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What frameworks do you use to do data engineering?</label><br/>

                  <label>
                  <input type="checkbox" id="airflow" {...register("frameworks")} name="frameworks" value="airflow"/> Airflow 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="luigi" {...register("frameworks")} name="frameworks" value="luigi"/> Luigi 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="spark" {...register("frameworks")} name="frameworks" value="spark"/> Spark 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="dbt" {...register("frameworks")} name="frameworks" value="dbt"/> dbt 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="kafka" {...register("frameworks")} name="frameworks" value="kafka"/> Kafka 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="other" {...register("frameworks")} name="frameworks" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What clouds do you use</label><br/>

                  <label>
                  <input type="checkbox" id="aws" {...register("clouds")} name="clouds" value="aws"/> AWS 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="gcp" {...register("clouds")} name="clouds" value="gcp"/> GCP 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="azure" {...register("clouds")} name="clouds" value="azure"/> Azure 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="oracle" {...register("clouds")} name="clouds" value="oracle"/> Oracle 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="alicloud" {...register("clouds")} name="clouds" value="alicloud"/> AliCloud 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="onprem" {...register("clouds")} name="clouds" value="onprem"/> On Prem 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="other" {...register("clouds")} name="clouds" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What vendors do you use</label><br/>

                  <label>
                  <input type="checkbox" id="confluent" {...register("vendors")} name="vendors" value="confluent"/> Confluent 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="databricks" {...register("vendors")} name="vendors" value="databricks"/> Databricks 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="fivetran" {...register("vendors")} name="vendors" value="fivetran"/> fivetran 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="matillion" {...register("vendors")} name="vendors" value="matillion"/> Matillion 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="cloudera" {...register("vendors")} name="vendors" value="cloudera"/> cloudera 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="mapr" {...register("vendors")} name="vendors" value="mapr"/> Mapr 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="pentaho" {...register("vendors")} name="vendors" value="pentaho"/> Pentaho 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="talend" {...register("vendors")} name="vendors" value="talend"/> Talend 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="other" {...register("vendors")} name="vendors" value="other"/> Other 
                  </label><br/>
                  </fieldset>
                  
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
