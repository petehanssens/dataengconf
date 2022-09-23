import React, { useState, useCallback, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
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
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  let hackAPIGW = process.env.DATAENGAU_API_GW + "/FavDataEngineer";
  const [formStatus, setFormStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fire();
    axios
      .post(hackAPIGW, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setFormStatus(true);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="py-10 px-6 bg-pink-900 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Vote For Your Favourite Data Engineer!
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Please fill this form and let us know your Favourite Data
              Engineer.
            </p>
          </div>
          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            {formStatus ? (
              <div className="text-success mb-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Well done on signing up!
                </h2>
              </div>
            ) : (
              <form
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label className="sr-only">Name</label>
                <input
                  id="name"
                  {...register("name", { required: true })}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Enter the Data Engineer's name"
                />
                <label className="sr-only">LinkedIn</label>
                <input
                  id="linkedin"
                  {...register("linkedin", { required: true })}
                  name="linkedin"
                  type="text"
                  autoComplete="linkedin"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Enter the Data Engineer's LinkedIn URL"
                />
                <label className="sr-only">Reason</label>
                <textarea
                  id="reason"
                  {...register("reason", { required: true })}
                  name="reason"
                  type="textarea"
                  rows={3}
                  autoComplete="reason"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Tell us why they are your favourite?"
                />

                <label className="sr-only">Voter</label>
                <input
                  id="voter"
                  {...register("voter", { required: true })}
                  name="voter"
                  type="text"
                  autoComplete="voter"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Enter your Full Name"
                />
                <label className="sr-only">Email</label>
                <input
                  id="emailaddress"
                  {...register("emailaddress", { required: true })}
                  name="emailaddress"
                  type="text"
                  autoComplete="emailaddress"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Enter your Email Address"
                />

                <button
                  type="submit"
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Submit
                </button>
              </form>
            )}
            <p className="mt-3 text-sm text-indigo-100">
              We care about the protection of your data. Read our
              <a href="/privacy" className="text-white font-medium underline">
                {" "}
                Privacy Policy.{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  );
}

export default SpeakingForm;
