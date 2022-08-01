import { useEffect, useId, useState } from 'react'
// import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
// import clsx from 'clsx'

const days = [
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
    {
      "id": "491e40d9-e5f2-4336-93f1-6e543f275caa",
      "firstName": "Clara",
      "lastName": "So",
      "fullName": "Clara So",
      "bio": "Gian is a co-founder and CTO of Imply. Gian is also one of the main committers of Apache Druid. Previously, Gian led the data ingestion team at Metamarkets and held senior engineering positions at Yahoo. He holds a B.S. in Computer Science from Caltech.",
      "tagLine": "Gian Merlino, Apache Druid® committer and co-founder of Imply",
      "profilePicture": "https://sessionize.com/image/5e79-400o400o2-9QYDxrcviJ7ukUu42BNFKd.jpg",
      "sessions": [
        {
          "id": 353078,
          "name": "Best of Stream + Batch: When Streaming Analytics Isn’t"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "98d417d3-36e8-44c3-8131-6bb3b67637bd",
      "firstName": "Duana",
      "lastName": "Stanley",
      "fullName": "Duana Stanley",
      "bio": "Duana has 16 years experience as a software engineer, 5 years of agile software development at ThoughtWorks, 5 years of microservices-at-scale at SoundCloud, and recently transitioned to data engineering and ML at Cash App. She does @boutiquemaths as a hobby and would love to do more math at work.",
      "tagLine": "Data Engineer, Cash App",
      "profilePicture": "https://sessionize.com/image/280e-400o400o2-EnWKVnyd8Z4upqGECBeiJi.jpg",
      "sessions": [
        {
          "id": 363029,
          "name": "What is the MVP for Data Engineering projects?"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "2b583bbd-2202-4fd8-9429-97f085cf3923",
      "firstName": "Gian",
      "lastName": "Merlino",
      "fullName": "Gian Merlino",
      "bio": "Gian is a co-author of the open-source Apache Druid® project and co-founder and CTO at Imply. Gian is also the Apache Druid® Committee (PMC) Chair. Previously, Gian led the data ingestion team at Metamarkets and held senior engineering positions at Yahoo. He holds a B.S. in Computer Science from Caltech.",
      "tagLine": "CTO",
      "profilePicture": "https://sessionize.com/image/6deb-400o400o2-nuZ6kFs564ZLABfp35RJ3W.jpg",
      "sessions": [
        {
          "id": 353078,
          "name": "Best of Stream + Batch: When Streaming Analytics Isn’t"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "40cb614a-1c9b-4c44-b4b0-80e9521509d7",
      "firstName": "Gian",
      "lastName": "Merlino",
      "fullName": "Gian Merlino",
      "bio": "Gian is a co-founder and CTO of Imply. Gian is also one of the main committers of Druid. Previously, Gian led the data ingestion team at Metamarkets and held senior engineering positions at Yahoo. He holds a B.S. in Computer Science from Caltech.",
      "tagLine": "Co-Founder & CTO",
      "profilePicture": "https://sessionize.com/image/315e-400o400o2-4a-1c9b-4c44-b4b0-80e9521509d7.d4759d97-cb44-4411-8ef9-d356d9d5d5d7.png",
      "sessions": [
        {
          "id": 353078,
          "name": "Best of Stream + Batch: When Streaming Analytics Isn’t"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "8b01d36b-a1dd-4843-9cbf-ae6194ec53cf",
      "firstName": "Jane",
      "lastName": "Ooi",
      "fullName": "Jane Ooi",
      "bio": "Solution Architect @ AWS",
      "tagLine": "Solution Architect @ AWS",
      "profilePicture": "https://sessionize.com/image/e20a-400o400o2-e1061d6b-aea5-4a09-8839-b2e7ceb71d3a.jpg",
      "sessions": [
        {
          "id": 362624,
          "name": "Data Manifold - Simplified Data Management on AWS"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "ad891e9b-98e7-4062-85f3-9c7f345baf5c",
      "firstName": "Jenna",
      "lastName": "Olovcic",
      "fullName": "Jenna Olovcic",
      "bio": "Numerous years in AdTech across Agency, Publisher & Vendor, 4 years in End to End Business Intelligence at News Corp and Woolworths, Security Enthusiast and Solutions Architect at Fivetran",
      "tagLine": "Fivetran, Solutions Architect",
      "profilePicture": "https://sessionize.com/image/fc04-400o400o2-f9VXXWyRPehWGzJeztANhL.jpg",
      "sessions": [
        {
          "id": 363257,
          "name": "Data Security for Data Engineers"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "5b2d91c2-17cc-4f23-a1e4-df2989eb9a71",
      "firstName": "Karen",
      "lastName": "Davis",
      "fullName": "Karen Davis",
      "bio": "Karen is a Principal Data Engineer at Thoughtworks. Her background is software engineering, data engineering and machine learning. While at Thoughtworks she has worked with numerous clients building large scale data platforms. She is passionate about all things data and is especially interested in data architecture and ways to apply software engineering best practices to data and machine learning.",
      "tagLine": "Principal Data Engineer @ ThoughtWorks",
      "profilePicture": "https://sessionize.com/image/d741-400o400o2-c2-17cc-4f23-a1e4-df2989eb9a71.49b04bf1-8249-4659-ab68-bfb930cd5443.jpg",
      "sessions": [
        {
          "id": 363313,
          "name": "Data replication patterns 101"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "328c297b-cef9-428d-8452-c5b015d09967",
      "firstName": "Lalit",
      "lastName": "Pant",
      "fullName": "Lalit Pant",
      "bio": "Lalit is a Staff Engineer in Data & Analytics R&D team at Commonwealth Bank of Australia. In his current role, Lalit experiments with, develops prototypes and informs next set of decisions on many emerging problem spaces in the bank; from customer data privacy to secure data exchange with partners and cloud collaborative analytics & apps. He has 14 years experience as a data & systems engineer, leading engineering teams across geographies. \r\nHe is passionate about delivering value to customer through data & analytics. Besides work, Lalit is inching towards completing a Masters in Computer Science from Georgia Tech.",
      "tagLine": "Staff Engineer, Data Analytics R&D, Commonwealth Bank of Australia",
      "profilePicture": "https://sessionize.com/image/2733-400o400o2-JtsxZ4xxLG7bJAMYeZbTvw.jpg",
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
    {
      "id": "ea4e794f-a166-4bc4-8a34-07e70dcb0196",
      "firstName": "Lizzie",
      "lastName": "Reid",
      "fullName": "Lizzie Reid",
      "bio": "Lizzie is a Senior Data Engineer at Kasna, where she builds solutions using Google Cloud technology to help customers harness the power of their data. She volunteers for The Good Data Institute to build data capabilities within NFP organisations so they can increase their impact.",
      "tagLine": "Senior Data Engineer at Kasna & Fellow at The Good Data Institute",
      "profilePicture": "https://sessionize.com/image/0db0-400o400o2-DuHEVudVnED1i8c8b1bfpA.jpg",
      "sessions": [
        {
          "id": 363312,
          "name": "Data Engineering for Social Good"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "8f2f01ec-4972-49fe-a204-8f226fa209cb",
      "firstName": "Ned",
      "lastName": "Letcher",
      "fullName": "Ned Letcher",
      "bio": "Ned is a data scientist and engineer at ThoughtWorks, where he helps organisations manage and gain value from their data.",
      "tagLine": "Data specialist at ThoughtWorks",
      "profilePicture": "https://sessionize.com/image/829d-400o400o2-ec-4972-49fe-a204-8f226fa209cb.b72e68b3-91e7-46d2-8291-916fe7f0b5ba.jpg",
      "sessions": [
        {
          "id": 363244,
          "name": "Data Poker not Data Chess - thinking in Bets for Data Teams"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "c3df4dfc-6b55-4eeb-8c88-172584700a76",
      "firstName": "Nigel",
      "lastName": "Dalton",
      "fullName": "Nigel Dalton",
      "bio": "In a technosocial era, Nigel combines his skills as social scientist, writer, business consultant, podcaster, conference host and presenter to thread together new views of our world.",
      "tagLine": "Social Scientist, Thoughtworks",
      "profilePicture": "https://sessionize.com/image/9a00-400o400o2-e2f4c359-6755-42a0-8028-5f89bf68fccf.jpg",
      "sessions": [
        {
          "id": 363244,
          "name": "Data Poker not Data Chess - thinking in Bets for Data Teams"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "40a23d61-be96-4367-8bc9-37dd39b793f5",
      "firstName": "Thiago",
      "lastName": "Baldim",
      "fullName": "Thiago Baldim",
      "bio": "Data Engineer since 2015, experience with Banking, Investments, Telco and SaaS.",
      "tagLine": "Senior Data Engineer at SafetyCulture",
      "profilePicture": "https://sessionize.com/image/df27-400o400o2-avw4L2Se1B4bvctSZ4GE43.png",
      "sessions": [
        {
          "id": 353187,
          "name": "Data Incidents - When things goes wrong"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "83598392-ed1b-4375-936f-5520dcfd7291",
      "firstName": "Timothy",
      "lastName": "Downs",
      "fullName": "Timothy Downs",
      "bio": "Pushing strings since 1990. SA @ AWS since 2020.",
      "tagLine": "Solution Architect @ AWS",
      "profilePicture": "https://sessionize.com/image/c827-400o400o2-RCLBFJjHU29ys2p5WNQf9e.jpg",
      "sessions": [
        {
          "id": 362624,
          "name": "Data Manifold - Simplified Data Management on AWS"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "f5b51983-23b9-429b-8e86-aff4c630a423",
      "firstName": "Vikas",
      "lastName": "Rajput",
      "fullName": "Vikas Rajput",
      "bio": "Speaks Data, Architecture, Automation.  \r\nService-leadership and Fail-fast believer. ",
      "tagLine": "Tinkler at heart. Principal (Data/AI) Engineer @ Microsoft.",
      "profilePicture": "https://sessionize.com/image/b8ed-400o400o2-Tw6CmeU4Wr8f53edZW8iwL.jpg",
      "sessions": [
        {
          "id": 357656,
          "name": "Well-Architecture Framework for Machine Learning"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
    {
      "id": "e4a87ff3-7c55-4f76-a24e-48c7c4bda4bd",
      "firstName": "Vinoaj",
      "lastName": "Vijeyakumaar",
      "fullName": "Vinoaj Vijeyakumaar",
      "bio": "Vinny is a Senior Solutions Architect at Databricks, where he consults with businesses big & small on maximising value from their data. Vinny has been in the data space for 15+ years. His data experience has taken him from scaling MySQL databases for startups, driving Google Analytics adoption in Southeast Asia, running analytics consultancies, being a smart analytics specialist at Google Cloud, and now building out Lakehouses with Databricks. Come say hi, as Vinny is always up for a chat on how to make data & ML as effortless as possible!",
      "tagLine": "Senior Solutions Architect, Databricks",
      "profilePicture": "https://sessionize.com/image/a1de-400o400o2-DNgNbeafFt4o7f149VoGbG.jpg",
      "sessions": [
        {
          "id": 363332,
          "name": "Delta Lake: Turn your Data Lake into a Lakehouse"
        }
      ],
      "isTopSpeaker": false,
      "links": [],
      "questionAnswers": [],
      "categories": []
    },
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
    }
  ]

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

export function Speakers() {
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
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
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
