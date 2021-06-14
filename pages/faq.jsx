/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is DataEngBytes?",
    answer:
      "**DataEngBytes**! is a community conference centred on real world data engineering problems and solutions. \n You can find more information on our [website](https://dataengconf.com.au/) and if you have a look at our [youtube channel](https://www.youtube.com/dataengau) you can have an overview of the great community we are building.",
  },
  {
    question: "Who should attend?",
    answer:
      "Anyone who has an interest in data will benefit from this event. Whether you are new to Data Engineering and want to shape your path ahead, or if you have been in the area for a while and want to explore how others are innovating in data. Wherever you are in the world of data, you will find real live stories and best practices, and the best of all, you will get to meet a great community!",
  },
  {
    question: "When is the conference?",
    answer:
      "Mark your calendar for August 26th-27th and get ready for a great day!",
  },
  {
    question: "How much does the conference cost?",
    answer:
      "Super early bird tickets start at $49 + GST. Full price tickets will be $99 + GST!",
  },
  {
    question: "How do I register/purchase my ticket?",
    answer:
      "You can purchase them [here](https://www.tickettailor.com/events/dataengbytes/505988)",
  },
  {
    question: "Can I still participate if I don’t live in Australia?",
    answer:
      "Yes! We will provide details for online access closer to the event.  Wherever you are in the world, you can introduce a submission as a speaker or join the live streaming on the day.",
  },
  {
    question: "Is this a virtual event?",
    answer:
      "We are a global community, so the event will be streamed and we will offer our virtual participants a great experience. \n \n However, we are working towards offering an in person experience for those who want to attend in Sydney and Melbourne. We will announce further details soon, so stay tuned in our social media or come back to this page for more information about the in person event.",
  },
  {
    question: "Where will the conference be held?",
    answer:
      "We are organising venues in Sydney and Melbourne. We will add more information as soon as we can confirm the venues.",
  },
  {
    question: "Can I speak at the conference?",
    answer:
      "Applications are open! And you can find more information  [here](https://sessionize.com/dataengbytes2021/). \n \n We are looking for a range of stories and real-world experiences from working on your side projects through to enterprise level applications. Share your learnings, experiences and best practices with us.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
