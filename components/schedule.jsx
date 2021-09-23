import { sessions, speakers, rooms } from '../data/2021/all.json'
  
const onlineRoom = '21024'

const formatDate = (dateString) => {
const options = { hour: "numeric", minute: "numeric" }
return new Date(dateString).toLocaleDateString('en-AU', options)
}

export default function Example() {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {sessions.filter(
              speaker => onlineRoom.includes(speaker.roomId)
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
                <p className="text-indigo-600">{formatDate(session.startsAt)}</p>
                <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                <p className="text-sm text-gray-500 truncate">{speakers.find(x => x.id === session.speakers[0]).fullName}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    )
  }