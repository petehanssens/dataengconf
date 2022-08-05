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
                  <label className="sr-only">LinkedIn Profile</label>

                  <fieldset>
                  <label>What warehouse do you use</label><br/>
                  <label for="redshift">
                  <input type="checkbox" id="redshift" name="warehouse" value="redshift"/> Redshift 
                  </label> <br/>
                  <label for="snowflake">
                  <input type="checkbox" id="snowflake" name="warehouse" value="snowflake"/> Snowflake 
                  </label> <br/>
                  <label for="s3">
                  <input type="checkbox" id="s3" name="warehouse" value="s3"/> S3 
                  </label><br/>
                  <label for="emr">
                  <input type="checkbox" id="emr" name="warehouse" value="emr"/> EMR 
                  </label><br/>
                  <label for="big_query">
                  <input type="checkbox" id="big_query" name="warehouse" value="big_query"/> Big Query 
                  </label><br/>
                  <label for="azure_data_warehouse">
                  <input type="checkbox" id="azure_data_warehouse" name="warehouse" value="azure_data_warehouse"/> Azure Data Warehouse
                  </label><br/>
                  <label for="other">
                  <input type="checkbox" id="other" name="warehouse" value="other"/> Other 
                  </label><br/>
                  </fieldset>
                  
                  <fieldset>
                  <label>What languages you use to do data engineering</label><br/>
                  <label for="python">
                  <input type="checkbox" id="python" name="languages" value="python"/> Python 
                  </label><br/>
                  <label for="scala">
                  <input type="checkbox" id="scala" name="languages" value="scala"/> Scala 
                  </label><br/>
                  <label for="java">
                  <input type="checkbox" id="java" name="languages" value="java"/> Java 
                  </label><br/>
                  <label for="go">
                  <input type="checkbox" id="go" name="languages" value="go"/> Go 
                  </label><br/>
                  <label for="node.js">
                  <input type="checkbox" id="node.js" name="languages" value="node.js"/> Node.js 
                  </label><br/>
                  <label for="r">
                  <input type="checkbox" id="r" name="languages" value="r"/> R 
                  </label><br/>
                  <label for="other">
                  <input type="checkbox" id="other" name="languages" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What frameworks do you use to do data engineering?</label><br/>
                  <label for="airflow">
                  <input type="checkbox" id="airflow" name="frameworks" value="airflow"/> Airflow 
                  </label><br/>
                  <label for="luigi">
                  <input type="checkbox" id="luigi" name="frameworks" value="luigi"/> Luigi 
                  </label><br/>
                  <label for="spark">
                  <input type="checkbox" id="spark" name="frameworks" value="spark"/> Spark 
                  </label><br/>
                  <label for="dbt">
                  <input type="checkbox" id="dbt" name="frameworks" value="dbt"/> dbt 
                  </label><br/>
                  <label for="kafka">
                  <input type="checkbox" id="kafka" name="frameworks" value="kafka"/> Kafka 
                  </label><br/>
                  <label for="other">
                  <input type="checkbox" id="other" name="frameworks" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What clouds do you use</label><br/>
                  <label for="aws">
                  <input type="checkbox" id="aws" name="clouds" value="aws"/> AWS 
                  </label><br/>
                  <label for="gcp">
                  <input type="checkbox" id="gcp" name="clouds" value="gcp"/> GCP 
                  </label><br/>
                  <label for="azure">
                  <input type="checkbox" id="azure" name="clouds" value="azure"/> Azure 
                  </label><br/>
                  <label for="oracle">
                  <input type="checkbox" id="oracle" name="clouds" value="oracle"/> Oracle 
                  </label><br/>
                  <label for="alicloud">
                  <input type="checkbox" id="alicloud" name="clouds" value="alicloud"/> AliCloud 
                  </label><br/>
                  <label for="onprem">
                  <input type="checkbox" id="onprem" name="clouds" value="onprem"/> On Prem 
                  </label><br/>
                  <label for="other">
                  <input type="checkbox" id="other" name="clouds" value="other"/> Other 
                  </label><br/>
                  </fieldset>

                  <fieldset>
                  <label>What vendors do you use</label><br/>
                  <label for="confluent">
                  <input type="checkbox" id="confluent" name="vendors" value="confluent"/> Confluent 
                  </label><br/>
                  <label for="databricks">
                  <input type="checkbox" id="databricks" name="vendors" value="databricks"/> Databricks 
                  </label><br/>
                  <label for="fivetran">
                  <input type="checkbox" id="fivetran" name="vendors" value="fivetran"/> fivetran 
                  </label><br/>
                  <label for="matillion">
                  <input type="checkbox" id="matillion" name="vendors" value="matillion"/> Matillion 
                  </label><br/>
                  <label for="cloudera">
                  <input type="checkbox" id="cloudera" name="vendors" value="cloudera"/> cloudera 
                  </label><br/>
                  <label for="mapr">
                  <input type="checkbox" id="mapr" name="vendors" value="mapr"/> Mapr 
                  </label><br/>
                  <label for="pentaho">
                  <input type="checkbox" id="pentaho" name="vendors" value="pentaho"/> Pentaho 
                  </label><br/>
                  <label for="talend">
                  <input type="checkbox" id="talend" name="vendors" value="talend"/> Talend 
                  </label><br/>
                  <label for="other">
                  <input type="checkbox" id="other" name="vendors" value="other"/> Other 
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
