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

  let hackAPIGW = process.env.DATAENGAU_API_GW + "/startup-reg";
  const [formStatus, setFormStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fire();
    axios
      .post(hackAPIGW, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setFormStatus(true);
        console.log(response.data);
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
              Let us know about your Startup!
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-indigo-100">
              Please fill this form and we can share your startup details on our
              website!.
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
                  placeholder="Name of the Startup"
                />
                <label className="sr-only">Founder</label>
                <input
                  id="founder"
                  {...register("founder", { required: true })}
                  name="founder"
                  type="text"
                  autoComplete="founder"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Founded by"
                />

                <label className="sr-only">Website</label>
                <input
                  id="website"
                  {...register("website", { required: true })}
                  name="website"
                  type="text"
                  autoComplete="website"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Website URL"
                />
                <label className="sr-only">Introduction</label>
                <textarea
                  id="introduction"
                  {...register("introduction", { required: true })}
                  name="introduction"
                  type="textarea"
                  rows={3}
                  autoComplete="introduction"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Please provide us a brief Introduction"
                />

                <label className="sr-only">City</label>
                <input
                  id="city"
                  {...register("city", { required: true })}
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Startup City"
                />
                <label className="sr-only">Logo</label>
                <input
                  id="logo"
                  {...register("logo", { required: true })}
                  name="logo"
                  type="file"
                  autoComplete="logo"
                  required
                  className="item-center w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pink-900 focus:ring-white rounded-md"
                  placeholder="Startup Logo"
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
