import { sessions, speakers, rooms } from '../data/2021/all.json'
  
const onlineRoom = '21024'

const formatTime = (dateString) => {
  const options = { hour: "numeric", minute: "numeric" }
  return new Date(dateString).toLocaleTimeString('en-AU', options)
}

const formatDate = (dateString) => {
  const options = { day: "numeric" }
  return new Date(dateString).toLocaleDateString('en-AU', options)
}

export default function Example() {
    return (   
  <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12"></div>       
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The Schedule</h2>
        <p className="text-xl text-gray-500">
          Spread over 3 action packed days... you won't want to miss a minute!
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Tuesday, 5th October</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sessions.filter(
              element => onlineRoom.includes(element.roomId)
            ).filter(
              element => formatDate(element.startsAt) === '5'
            ).map((session) => (
          <div
            key={session.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={speakers.find(x => x.id === session.speakers[0]).profilePicture} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-indigo-600">{formatTime(session.startsAt)}</p>
                <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                <p className="text-sm text-gray-500 truncate">{speakers.find(x => x.id === session.speakers[0]).fullName}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    <div className="space-y-6"></div>       
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Wednesday, 6th October</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sessions.filter(
              element => onlineRoom.includes(element.roomId)
            ).filter(
              element => formatDate(element.startsAt) === '6'
            ).map((session) => (
          <div
            key={session.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={speakers.find(x => x.id === session.speakers[0]).profilePicture} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-indigo-600">{formatTime(session.startsAt)}</p>
                <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                <p className="text-sm text-gray-500 truncate">{speakers.find(x => x.id === session.speakers[0]).fullName}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    <div className="space-y-6"></div>       
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Thursday, 7th October</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sessions.filter(
              element => onlineRoom.includes(element.roomId)
            ).filter(
              element => formatDate(element.startsAt) === '7'
            ).map((session) => (
          <div
            key={session.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={speakers.find(x => x.id === session.speakers[0]).profilePicture} alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-indigo-600">{formatTime(session.startsAt)}</p>
                <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                <p className="text-sm text-gray-500 truncate">{speakers.find(x => x.id === session.speakers[0]).fullName}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}