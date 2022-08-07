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
            <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">Join the Data Engineers Slack Channel</h2>
                <p className="mt-4 max-w-3xl text-lg text-indigo-100">
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
                  <label>What warehouse do you use</label><br/>
                  <input type="checkbox" id="redshift" {...register("warehouse")} name="warehouse" value="redshift"/><label> Redshift</label>
                  <br/>
                  <label>
                  <input type="checkbox" id="snowflake" {...register("warehouse")} name="warehouse" value="snowflake"/> Snowflake 
                  </label> <br/>
                  <label>
                  <input type="checkbox" id="s3" {...register("warehouse")} name="warehouse" value="s3"/> S3 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="emr" {...register("warehouse")} name="warehouse" value="emr"/> EMR 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="big_query" {...register("warehouse")} name="warehouse" value="big_query"/> Big Query 
                  </label><br/>
                  <label>
                  <input type="checkbox" id="azure_data_warehouse" {...register("warehouse")} name="warehouse" value="azure_data_warehouse"/> Azure Data Warehouse
                  </label><br/>
                  <label>
                  <input type="checkbox" id="other" {...register("warehouse")} name="warehouse" value="other"/> Other 
                  </label><br/>
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
