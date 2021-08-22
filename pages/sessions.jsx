import sessions from '../data/2021/sessions.json'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Speakers() {

    return (

      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Talks</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            The full list of speaker talks
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {sessions[0].sessions.map((post) => (
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
              <div key={speaker.id} className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={speaker.name}>
                    <span className="sr-only">{speaker.name}</span>
                    <img className="h-10 w-10 rounded-full"  alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href={speaker.name}>{speaker.name}</a>
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
