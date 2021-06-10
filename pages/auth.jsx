import { useState } from 'react'
import SignIn from '../components/auth/sign-in'
import Register from '../components/auth/register'
import Confirm from '../components/auth/confirm'

export default function Index() {
    const [status, setStatus] = useState('sign-in')
    const [user, setUser] = useState(null)
    return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
            {status === 'sign-in' ? <SignIn setStatus={setStatus} /> : null}
            {status === 'register' ? <Register setStatus={setStatus} setUser={setUser} /> : null}
            {status === 'confirm' ? <Confirm setUser={setUser} user={user} /> : null}
        </div>
      </div>
    </div>
    )
}


