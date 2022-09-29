
import confDetails from '../../helpers/getConferenceSessions'
const theConfDetails = confDetails()
  
  export default function Example() {
    return (
      <ul role="list" className="divide-y divide-gray-200">
        {theConfDetails.filter((obj) => {
            return obj.goodDate === '2022-09-29'
            })[0].sessions.map((session) => (
                console.log(session),
          <li
            key={session.id}
            className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
          >
            <div className="flex justify-between space-x-3">
              <div className="min-w-0 flex-1">
                <a href="#" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="truncate text-xl font-medium text-gray-900">{session.title}</p>
                  <p className="truncate text-md text-gray-500">{session.speakerObject[0]?.fullName}</p>
                </a>
              </div>
              <time dateTime={session.startsAt} className="flex-shrink-0 whitespace-nowrap text-md text-gray-500">
                {session.startsAt}
              </time>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-600 line-clamp-2">{session.description}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  