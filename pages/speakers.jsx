import speakers from '../data/2021/speakers.json'

const exclusionList = ['Chris Benson','John Cosgrove']

export default function Speakers() {

    return (

<div className="bg-white">
<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
  <div className="space-y-12">
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our speakers</h2>

    <ul
      role="list"
      className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
    >
      {speakers.filter(
        speaker => !exclusionList.includes(speaker.fullName)
      ).map((person) => (
        <li key={person.id}>
          <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
            <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img className="object-cover shadow-lg rounded-lg" src={person.profilePicture} alt="" />
            </div>
            <div className="sm:col-span-2">
              <div className="space-y-4">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>{person.fullName}</h3>
                  <p className="text-indigo-600">{person.sessions[0].name}</p>
                </div>
                <div className="text-lg">
                  <p className="text-gray-500">{person.bio}</p>
                </div>
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
