/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      name: 'Harry the',
      role: 'Hacker',
      imageUrl:
        '/images/hackathon/hacker.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Harley the',
      role: 'Hipster',
      imageUrl:
        '/images/hackathon/hipster.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Hailey the',
      role: 'Hustler',
      imageUrl:
        '/images/hackathon/hustler.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Your hackathon team</h2>
              <p className="text-xl text-gray-500">
                With 10 teams of 5 data engineers, you'll want to form a diverse team with the right skillsets.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-6">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  