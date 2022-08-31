import { Fragment } from "react";
import SEO from "../components/seo";

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
      "Mark your calendar for September 27th (Melbourne) and 29th (Sydney) and get ready for a great day!",
  },
  {
    question: "How much does the conference cost?",
    answer:
      "Super dooper early bird tickets start at $99 + GST. Full price tickets will be $199 + GST!",
  },
  {
    question: "How do I register/purchase my ticket?",
    answer:
      "You can purchase them [here](https://www.tickettailor.com/events/dataengbytes/)",
  },
  {
    question: "Can I get a refund if there's a COVID outbreak?",
    answer:
      "In the event of a COVID-19 related lockdown where either the in-person element of DataEngBytes is not able to take place or you are not able to attend because of a lockdown in your area, we will provide a full refund.",
  },
  {
    question: "Can I still participate if I don’t live in Australia?",
    answer:
      "Yes! We will provide details for online access closer to the event.  Wherever you are in the world, you can introduce a submission as a speaker or join the live streaming on the day.",
  },
  {
    question: "Is this a virtual event?",
    answer:
      "We are a global community, so the event will be streamed and we will offer our virtual participants a great experience. \n \n However, we are working towards offering an in person experience for those who want to attend in Sydney and Melbourne. We will announce further details soon, so stay tuned in our social media or come back to this page for more information about the in person event.",
  },
  {
    question: "Where will the conference be held?",
    answer:
      "Sydney's venue is the Museum of Contemporary Art in the Rocks and Melbourne will be hosted at the State Library Victoria in the Conversation Quarter and the Village Roadshow Theatrette.",
  },
  {
    question: "Can I speak at the conference?",
    answer:
      "Applications are open! And you can find more information  [here](https://sessionize.com/dataengbytes-2022/). \n \n We are looking for a range of stories and real-world experiences from working on your side projects through to enterprise level applications. Share your learnings, experiences and best practices with us.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
        title="FAQs - DataEngBytes!"
        description="Get all your questions answered - DataEngBytes"
      />
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
            <div className="mt-8">
              <dl className="divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                    <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                    <dd className="mt-2 md:mt-0 md:col-span-7">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Fragment>
    )
}