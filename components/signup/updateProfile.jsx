import { Auth, API } from "aws-amplify";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import createInitialUser from "../../graphql/users/createInitialUser";

export default function Register({ user, setUser }) {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  async function CreateInitialUser(data) {
    const attr = data;

    const user = await Auth.currentUserInfo();
    console.log("attributes: ", attr);
    try {
      await API.graphql({
        query: createInitialUser,
        variables: {
          email: user.attributes.email,
          first_name: attr.first_name,
          last_name: attr.last_name,
          bio: attr.bio,
          company_name: attr.company_name,
          linkedin: attr.linkedin,
          preferred_meetup: attr.preferred_meetup,
          country: attr.country,
          user_type: "sponsor"
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });

      const message = "Updated cognito user!";
      // console.log(message)
      return message;
    } catch (err) {
      console.log({ err });
      return err;
    }
  }

  async function confirmSignUp({
    first_name,
    last_name,
    bio,
    company_name,
    linkedin,
    preferred_meetup,
    country,
  }) {
    try {
      const data = {
        first_name,
        last_name,
        bio,
        company_name,
        linkedin,
        preferred_meetup,
        country,
      };
      // console.log('hello: ',user)
      CreateInitialUser(data);

      router.push("/client-protected");
    } catch (error) {
      console.log("error updating profile", error);
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(confirmSignUp)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px ">
        <div className="pt-10">
          <label htmlFor="first_name" className="sr-only">
            First Name
          </label>
          <input
            {...register("first_name", { required: true })}
            id="first_name"
            name="first_name"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Please Enter your First Name"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="last_name" className="sr-only">
            Last Name
          </label>
          <input
            {...register("last_name", { required: true })}
            id="last_name"
            name="last_name"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Please Enter your Last Name"
          />
        </div>

        <div className="pt-5">
          <label className="sr-only">Bio</label>
          <textarea
            {...register("bio", { required: true })}
            id="bio"
            name="bio"
            type="textarea"
            rows={3}
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Please Enter your Bio"
          />
        </div>
        <div className="pt-5">
          <label className="sr-only">Company Name</label>
          <input
            {...register("company_name", { required: true })}
            id="company_name"
            name="company_name"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Please Enter the Name of your Company"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="linkedin" className="sr-only">
            LinkedIn Handle
          </label>
          <input
            {...register("linkedin", { required: true })}
            id="linkedin"
            name="linkedin"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Please Enter your LinkedIn Url"
          />
        </div>
        <div className="pt-5">
          <label htmlFor="preferred_meetup" className="sr-only">
            Preferred Meetup
          </label>
          <select
            {...register("preferred_meetup", { required: true })}
            id="preferred_meetup"
            name="preferred_meetup"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder=""
          >
            <option value="Brisbane">Brisbane</option>
            <option value="Melbourne">Melbourne</option>
            <option value="Perth">Perth</option>
            <option value="Sydney">Sydney</option>
          </select>
        </div>
        <div className="pt-5">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            {...register("country", { required: true })}
            id="country"
            name="country"
            type="text"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            // className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            placeholder=""
          >
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="pb-1">
        <button
          type="submit"
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
          Confirm
        </button>
      </div>
    </form>
  );
}
