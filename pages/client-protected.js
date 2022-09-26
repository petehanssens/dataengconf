import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from 'next/router'
import Image from 'next/image'

import SignOut from "../components/auth/sign-out";
import UpdateUser from "../components/signup/updateProfile";
import GetUserInfo from "../helpers/getUserInfo";

const myLoader = ({ src, width, quality }) => {
  return `https://dataengconf.com.au/${src}?w=${width}&q=${quality || 75}`
}

const dataEngLogo =
  "/images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png";
function ClientProtected() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);

  const router = useRouter()

  function scanPage() {
      router.push('/scan')
  }

  const getUserInfo = GetUserInfo();
  console.log('getUserInfo: ',getUserInfo)
  let displayForUser;
  if (getUserInfo && getUserInfo.user) {
    displayForUser = <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"><h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
    Live stream details coming soon
  </h1>
    <Image className="absolute inset-0 h-full w-full object-cover"
        loader={myLoader}
        src="/images/2022/slides/01.png"
        alt="DataEngBytes"
        layout="fixed"
        width={450}
        height={300}
    />

    {getUserInfo.user.user_type && getUserInfo.user.user_type=="sponsor" ?
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border 
        border-transparent text-sm font-medium rounded-md 
        focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500
        text-white  bg-red-600 hover:bg-red-700"
        onClick={() => scanPage()}>
      Scan QR code
    </button>:
    <></>
    }
  </div>
  } else {
    displayForUser = <UpdateUser />
  }
  return (
    <div>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-20 w-auto"
                src={dataEngLogo}
                alt="Workflow"
              />
              {user && (
                <>
                  <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome, {getUserInfo && getUserInfo.user && getUserInfo.user.first_name}
                  </h1>
                  {displayForUser}
                  
                  <SignOut />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default withAuthenticator(ClientProtected);
