/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'ANZ Startups',
    href: 'mailto:sydney@dataengconf.com.au?subject=ANZ Startups Sponsorship!&body=Hi there, \n\n I\'d like to sponsor DataEngBytes - can you send me a contract!',
    priceMonthly: 500,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'A great way to grow awareness.', 
      'Supporting local startups.'
    ],
  },
  {
    name: 'Online',
    href: 'mailto:sydney@dataengconf.com.au?subject=Online Sponsorship!&body=Hi there, \n\n I\'d like to sponsor DataEngBytes - can you send me a contract!',
    priceMonthly: 2000,
    description: 'Get your brand out there and known to a technical audience',
    includedFeatures: [
      'Marketing emails sent out on your behalf',
      'Access to present at our meetup.',
      'Permanent branding on our channels.',
    ],
  },
  {
    name: '1x Major Event',
    href: 'mailto:sydney@dataengconf.com.au?subject=1x Major Event Sponsorship!&body=Hi there, \n\n I\'d like to sponsor DataEngBytes - can you send me a contract!',
    priceMonthly: 6000,
    description: 'Sponsor us in person and connect with your core audience',
    includedFeatures: [
      'All online features.',
      'One major in person event',
      'A conference or Hackathon.',
      'Sponsorship booth included.',
    ],
  },
  {
    name: 'All Major Events',
    href: 'mailto:sydney@dataengconf.com.au?subject=2x Major Events Sponsorship!&body=Hi there, \n\n I\'d like to sponsor DataEngBytes - can you send me a contract!',
    priceMonthly: 8000,
    description: 'Be top of mind wherever our data engineers gather',
    includedFeatures: [
      'All 1x Major event features. ',
      'Premium sponsorship tier.',
      'Top of the list.',
      'Get your brand front and centre.',
      'Bespoke opportunities.',
    ],
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Sponsorship Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Get involved in the Data Engineering meetup and conference this year... grow your brand awareness amongst our amazing community!
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">/year</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Buy {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
