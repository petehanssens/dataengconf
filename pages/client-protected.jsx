import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'

import SignOut from '../components/auth/sign-out'

function ClientProtected() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        setUser(user)
      })
      .catch(err => setUser(null))
  }, [])

  return (
    <div>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" 
                src="images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png" 
                alt="Workflow" 
              />
              {user && (
                <>
                  <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome, {user.attributes.given_name}
                  </h1>
                  <SignOut />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default withAuthenticator(ClientProtected)