import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";
const dataEngLogo =
  "/images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png";
export default function SignIn({ setStatus }) {
  const { register, handleSubmit, setError, clearErrors } = useForm();
  const router = useRouter();

  async function signIn({ username, password }) {
    try {
      await Auth.signIn(username, password);

      router.push("/app");
    } catch (error) {
      console.log("error signing in", error);
      setError("signInform", {
        type: "server",
        message: "Incorrect username or password.",
      });
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <img
          className="mx-auto h-20 w-auto -pb-5"
          src={dataEngLogo}
          alt="Workflow"
        />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(signIn)}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px ">
            <div className=" text-center block">
              <h1 className="font-bold text-2xl">Log into Conference!</h1>
            </div>
            <div className="pt-5">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                {...register("username", { required: true })}
                id="username"
                name="username"
                type="username"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="E-mail Address"
              />
            </div>
            <div className="pt-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="pb-1">
            <button
              type="submit"
              onClick={() => clearErrors()}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            <div className="text-red-700 mt-3; text-center pb-2">
              {/* {errors.signInform?.message} */}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setStatus("register")}
              >
                Sign up for an account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
