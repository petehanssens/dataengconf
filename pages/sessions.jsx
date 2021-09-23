import { sessions, speakers, rooms } from '../data/2021/all.json'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const onlineRoom = '21024'

const formatDate = (dateString) => {
  const options = { hour: "numeric", minute: "numeric", month: "long", day: "numeric",  }
  return new Date(dateString).toLocaleDateString('en-AU', options)
}

export default function Speakers() {

    return (

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Live Track Sessions</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our full program of speakers for the live track
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {sessions.filter(
              speaker => onlineRoom.includes(speaker.roomId)
            ).map((post) => (
            <div key={post.id}>
              <div>
                <a href={post.category} className="inline-block">
                  <span
                    className={classNames(
                      post.category,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="text-indigo-600">{formatDate(post.startsAt)}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              {post.speakers.map((speaker) => ( 
              <div key={speaker} className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={speakers.find(x => x.id === speaker).fullName}>
                    <span className="sr-only">{speakers.find(x => x.id === speaker).fullName}</span>
                    <img className="h-10 w-10 rounded-full" src={speakers.find(x => x.id === speaker).profilePicture} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href='/speakers'>{speakers.find(x => x.id === speaker).fullName}</a>
                  </p>
                </div>
              </div>
              )
                )
              }
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">On-demand Sessions</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our on-demand speakers will be available directly after the conclusion of the conference
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {sessions.filter(
              speaker => !onlineRoom.includes(speaker.roomId)
            ).map((post) => (
            <div key={post.id}>
              <div>
                <a href={post.category} className="inline-block">
                  <span
                    className={classNames(
                      post.category,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category}
                  </span>
                </a>
              </div>
              <a href={post.href} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              {post.speakers.map((speaker) => ( 
              <div key={speaker} className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={speakers.find(x => x.id === speaker).fullName}>
                    <span className="sr-only">{speakers.find(x => x.id === speaker).fullName}</span>
                    <img className="h-10 w-10 rounded-full" src={speakers.find(x => x.id === speaker).profilePicture} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href='/speakers'>{speakers.find(x => x.id === speaker).fullName}</a>
                  </p>
                </div>
              </div>
              )
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
