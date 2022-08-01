import { useEffect, useId, useState } from 'react'
// import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

const days = [
    {
      name: 'Melbourne',
      date: 'September 27',
      dateTime: '2022-09-27',
      speakers: [
        {
            "id": "e96010a2-e660-4eb1-acf7-b2dcaeb6522f",
            "firstName": "Xinwei",
            "lastName": "Jiang",
            "fullName": "Xinwei Jiang",
            "bio": "I am data engineer working in the Afterpay Data engineering and governance team. I did my master from ANU specialising in data processing and AI. I have been work for Afterpay for the last 2 years. I live in Melbourne and enjoy hiking and boxing to keep myself fit. ",
            "tagLine": "Data engineer, Afterpay (Block)",
            "profilePicture": "https://sessionize.com/image/47dc-400o400o2-YGX5Q1WDCTm4TXmQM8rsd8.jpg",
            "sessions": [
              {
                "id": 362261,
                "name": "Metadata driven framework for data discovery and data quality"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "1aa17ca9-c570-453e-8039-492ef552cdef",
            "firstName": "Xuanyi",
            "lastName": "Chew",
            "fullName": "Xuanyi Chew",
            "bio": "Xuanyi is a data scientist by day, explorer of various notions of intelligences and entropy by night. Feel free to nerdsnipe him in his areas of interests: ranging from programming language theory to artificial intelligence in the computer sciences; linguistics - computational and traditional; neuroscience and cognition; information theory and entropy; explanations of theories and causality, maths puzzles and many more. He enjoys tinkering and making his thoughts a reality. ",
            "tagLine": "Human. Enthusiast of intelligences. ",
            "profilePicture": "https://sessionize.com/image/201b-400o400o2-ngMf8xcHquHUBBwWJRC8zC.jpg",
            "sessions": [
              {
                "id": 362633,
                "name": "Change the way you write. Change the way you think."
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "be31cb9f-ba18-4428-aadf-821d2d2821d8",
            "firstName": "Zachary",
            "lastName": "Zeus",
            "fullName": "Zachary Zeus",
            "bio": "Zach has more than 20 years of experience delivering data driven programs of work. He was originally trained as an engineer and approaches technology with a robust and systematic mindset. He has an MBA from NYU where he studied Finance, Entrepreneurship and Management. Zach’s unique balance of technical capability, strategic vision, and commercial sensibility make him an exceptionally fit leader in today’s digital landscape. He co-owns BizCubed with his wife Rebecca, with whom he has 4 children.",
            "tagLine": "Engineer, Father, CEO of BizCubed",
            "profilePicture": "https://sessionize.com/image/871c-400o400o2-EPSRs65iJpCqNbpegTqJs5.jpg",
            "sessions": [
              {
                "id": 363280,
                "name": "Engineering Trust in Data"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "e34e2722-02d0-471e-87f1-afd67d050e92",
            "firstName": "Zainab",
            "lastName": "Maleki",
            "fullName": "Zainab Maleki",
            "bio": "As a full-stack developer and principal DevOps/ Data engineer at Mechanical Rock, Australia's leading cloud native consultancy, Zainab works with progressive tools and practices like serverless technologies and infrastructure-as-code. Cloud native data platforms are her current passion, and she is fast becoming one of Western Australia's leading practitioners. A regular conference presenter, AWS Community Hero and 2020 WiTWA Tech [+] 20 Award winner, Zainab is also passionate about teaching young people the joys of mobile app development.",
            "tagLine": "AWS Community Hero | Principal Consultant at Mechanical Rock | DevOps, Data and Serverless Enthusiast",
            "profilePicture": "https://sessionize.com/image/5eee-400o400o2-wm3k5ndcmZaMT92eNKMvS9.jpg",
            "sessions": [
              {
                "id": 359919,
                "name": "Bringing Software Engineering Rigour to Data"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "2ae15249-123f-4d1e-9492-79e5a549f50c",
            "firstName": "Zeph",
            "lastName": "Yap",
            "fullName": "Zeph Yap",
            "bio": "For the past two years, Zeph has been helping the AI Model Systems team at Nearmap develop tools to improve the model-training process, with a focus on improving the quality of the training data. Besides the ontology system, Zeph has also created a verification module which tracks the quality of the labels entering the training dataset. He speaks three languages with a goal of eventually getting to nine.",
            "tagLine": "Machine Learning Engineer, Nearmap",
            "profilePicture": "https://sessionize.com/image/6a75-400o400o2-DfsKRCab36bYDaUUR2zFkH.jpg",
            "sessions": [
              {
                "id": 360256,
                "name": "Building a Scalable, Reproducible Ontology System to Improve Deep Learning Data"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
      ],
    },
    {
      name: 'Sydney',
      date: 'September 29',
      dateTime: '2022-09-29',
      speakers: [
        {
            "id": "40d0a78e-f139-4fc7-a5a0-d6f388dbdc84",
            "firstName": "Akira",
            "lastName": "Takihara Wang",
            "fullName": "Akira Takihara Wang",
            "bio": "Hey there! \r\n\r\nI'm a Data Engineer at Afterpay and teach at The University of Melbourne in my spare time.\r\n\r\nI like to spend my spare time gaming, watching the footy (go Collingwood!), and teaching.",
            "tagLine": "Data Engineer, Afterpay (Block)",
            "profilePicture": "https://sessionize.com/image/1241-400o400o2-Q2x5ywUK5BZbn3VuZQRoye.jpg",
            "sessions": [
              {
                "id": 362261,
                "name": "Metadata driven framework for data discovery and data quality"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "42089591-8913-4dba-b615-93332091dd97",
            "firstName": "Ann",
            "lastName": "Clark",
            "fullName": "Ann Clark",
            "bio": "Ann has over 7 years' experience in lexicography, data quality, semantic metadata & knowledge management; and is excited to work on semantic systems at Nearmap.",
            "tagLine": "AI Ontologist, Nearmap",
            "profilePicture": "https://sessionize.com/image/bdb4-400o400o2-wadAckBioYc9W4VQs763s3.jpg",
            "sessions": [
              {
                "id": 360256,
                "name": "Building a Scalable, Reproducible Ontology System to Improve Deep Learning Data"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
          {
            "id": "f7d130b3-f2a6-42b3-8a04-9bf4f9c3d9e9",
            "firstName": "Ashika",
            "lastName": "Hettitantirige",
            "fullName": "Ashika Hettitantirige",
            "bio": "Ashika is a graduate engineer in the Data and Analytics R&D team at the Commonwealth Bank of Australia. Within this role, Ashika has gained exposure to work in data engineering, cloud and collaborative analytics. Ashika is passionate about working with data and AI. ",
            "tagLine": "Graduate Engineer, Data Analytics R&D, Commonwealth Bank of Australia",
            "profilePicture": "https://sessionize.com/image/8c77-400o400o2-9KoFz1nt9YbPRRugptH1N2.jpg",
            "sessions": [
              {
                "id": 363283,
                "name": "Data Privacy Engineering to power Responsible Enterprise AI"
              }
            ],
            "isTopSpeaker": false,
            "links": [],
            "questionAnswers": [],
            "categories": []
          },
      ],
    },
]
function Container({ className, ...props }) {
    return (
      <div
        className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
        {...props}
      />
    )
  }
function DiamondIcon(props) {
    return (
      <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
        <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
      </svg>
    )
  }
  

function ImageClipPaths({ id, ...props }) {
    return (
      <svg aria-hidden="true" width={0} height={0} {...props}>
        <defs>
          <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
            <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
          </clipPath>
          <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
            <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
          </clipPath>
          <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
            <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
          </clipPath>
        </defs>
      </svg>
    )
  }

export default function Speakers() {
    let id = useId()
    let [tabOrientation, setTabOrientation] = useState('horizontal')
  
    useEffect(() => {
      let lgMediaQuery = window.matchMedia('(min-width: 1024px)')
  
      function onMediaQueryChange({ matches }) {
        setTabOrientation(matches ? 'vertical' : 'horizontal')
      }
  
      onMediaQueryChange(lgMediaQuery)
      lgMediaQuery.addEventListener('change', onMediaQueryChange)
  
      return () => {
        lgMediaQuery.removeEventListener('change', onMediaQueryChange)
      }
    }, [])
  
    return (
        <section
          id="speakers"
          aria-labelledby="speakers-title"
          className="py-20 sm:py-32"
        >
          <ImageClipPaths id={id} />
          <Container>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="speakers-title"
                className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
              >
                Speakers
              </h2>
              <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                Learn from the experts on the cutting-edge of deception at the most
                sinister companies.
              </p>
            </div>
            <Tab.Group
              as="div"
              className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
              vertical={tabOrientation === 'vertical'}
            >
              <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
                <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
                <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                  {({ selectedIndex }) =>
                    days.map((day, dayIndex) => (
                      <div key={day.dateTime} className="relative lg:pl-8">
                        <DiamondIcon
                          className={clsx(
                            'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                            dayIndex === selectedIndex
                              ? 'fill-blue-600 stroke-blue-600'
                              : 'fill-transparent stroke-slate-400'
                          )}
                        />
                        <div className="relative">
                          <div
                            className={clsx(
                              'font-mono text-sm',
                              dayIndex === selectedIndex
                                ? 'text-blue-600'
                                : 'text-slate-500'
                            )}
                          >
                            <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                              <span className="absolute inset-0" />
                              {day.name}
                            </Tab>
                          </div>
                          <time
                            dateTime={day.dateTime}
                            className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                          >
                            {day.date}
                          </time>
                        </div>
                      </div>
                    ))
                  }
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-3">
                {days.map((day) => (
                  <Tab.Panel
                    key={day.dateTime}
                    className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
                    unmount={false}
                  >
                    {day.speakers.map((speaker) => (
                      <div key={speaker.id}>
                        <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                          <div
                            className={clsx(
                              'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                              [
                                'border-blue-300',
                                'border-indigo-300',
                                'border-sky-300',
                              ][speaker.id % 3]
                            )}
                          />
                          <div
                            className="absolute inset-0 bg-indigo-50"
                            style={{ clipPath: `url(#${id}-${speaker.id % 3})` }}
                          >
                            <Image
                              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                              src={speaker.profilePicture}
                              alt=""
                            //   width={200}
                            //   height={200}
                              layout="fill"
                              priority
                              sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                          </div>
                        </div>
                        <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                          {speaker.fullName}
                        </h3>
                        <p className="mt-1 text-base tracking-tight text-slate-500">
                          {speaker.tagLine}
                        </p>
                      </div>
                    ))}
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </Container>
        </section>
      )
  }

  