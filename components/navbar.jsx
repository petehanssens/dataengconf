/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  SupportIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeetup } from '@fortawesome/free-brands-svg-icons' 

const meetupLinks = [
  {
    name: 'Brisbane',
    description: 'Learn from local data engineers in Brisbane.',
    href: 'https://www.meetup.com/Brisbane-Data-Engineering-Meetup/',
    icon: <FontAwesomeIcon icon={faMeetup} />
  },
  {
    name: 'Melbourne',
    description: 'Find out who is doing the best data engineering in Melbourne.',
    href: 'https://www.meetup.com/Melbourne-Data-Engineering-Meetup/',
    icon: <FontAwesomeIcon icon={faMeetup} />
  },
  {
    name: 'Sydney',
    description: 'See what companies are leading the field in data engineering in Sydney and beyond.',
    href: 'https://www.meetup.com/Sydney-Data-Engineering-Meetup/',
    icon: <FontAwesomeIcon icon={faMeetup} />
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {

  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">DataEngBytes</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png"
                    alt="DataEngBytes logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a href="https://sessionize.com/dataengbytes2021/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Call for Papers
                </a>
                <a href="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact Us
                </a>
                <a href="/conduct" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Code of Conduct
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                      >
                        <span>Meetups</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {meetupLinks.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <div className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true">
                                  {item.icon}
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png"
                        alt="DataEngBytes logo"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a href="https://sessionize.com/dataengbytes2021/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Call for Papers
                    </a>
                    <a href="/contact" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact Us
                    </a>
                    <a href="/conduct" className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Code of Conduct
                    </a>
                    {meetupLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
