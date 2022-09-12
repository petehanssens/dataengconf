/* This example requires Tailwind CSS v2.0+ */
import GetSession from '../../helpers/getSessionDetails'
  
export default function Example(panelId) {
    const SydneyPanel = GetSession(panelId)[0]
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{SydneyPanel.title}</h2>
                <p className="text-xl text-gray-500">
                {SydneyPanel.description}
                </p>
            </div>
            <div className="lg:col-span-2">
                <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                {SydneyPanel.speakerObject.map((person) => (
                    <li key={person.id}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <img className="h-16 w-16 rounded-full lg:h-20 lg:w-20" src={person.profilePicture} alt="" />
                        <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.fullName}</h3>
                        <p className="text-indigo-600">{person.tagLine}</p>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}
  