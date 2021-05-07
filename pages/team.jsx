import Layout from "../components/layout";
import SEO from "../components/seo";

const organisers = [
  {
    full_name:"Peter Hanssens",
    location:"Sydney",
    profile_picture:"images/organisers/peter_hanssens_new.jpg",
    occupation:"Founder and Solutions Architect, Cloud Shuttle",
    description:"Peter is a Solutions Architect and Founder of Cloud Shuttle, a community-focused cloud consultancy. He counts his major interests on the intersection between Serverless and Data Engineering.",
    github:"https://github.com/petehanssens",
    twitter:"https://twitter.com/petehanssens",
    linkedin:"https://www.linkedin.com/in/peterhanssens/",
    website: "https://www.peterhanssens.com.au/"
  },
  {
     full_name:"Kelly Hotta",
     profile_picture:"images/organisers/kelly_hotta.jpg",
     location:"Sydney",
     occupation:"Sales at Fishtown Analytics | Makers of dbt",
     description:"After 8yrs in solution engineering, I recently moved into sales, where I work with dbt Cloud customers across the APAC region. I love helping people solve problems and discover ways to make their working lives better. What excites me most about tech is that it breathes new life to age-old problems \ud83c\udf31 ...and there is always room for improvement!\n\nWhen I\u2019m not working, I enjoy cooking at home, surfing with my partner Chris, and being anywhere outside \u2600\ufe0f",
     linkedin:"https://www.linkedin.com/in/kellyhotta/"
  },
  {
    full_name:"Simon Aubury",
    location:"Sydney",
    profile_picture:"images/organisers/simon_aubury_2.jpeg",
    occupation:"Principal Data Engineer / ThoughtWorks",
    description:"Day job: data steaming & system architecture. Night gig: IoT and random project hacking.",
    twitter:"https://twitter.com/SimonAubury",
    github:"https://github.com/saubury"
  },
  {
    full_name:"Leo Hoare",
    profile_picture:"images/organisers/leo_hoare.jpeg",
    location:"Sydney",
    occupation:"Data Engineer at Itoc",
    description:"I'm enthusiastic about all things data. I love spending time in a range of different areas of the data stack including machine learning, real time streaming and DataOps.",
    linkedin:"https://www.linkedin.com/in/leo-hoare/"
  },
  {
    full_name:"Helen Anderson",
    profile_picture:"images/organisers/hero-helen-anderson.jpeg",
    location:"Wellington",
    occupation:"Digital Product Analyst, KiwiBank",
    description:"Helen is a Business Intelligence Consultant based out of Wellington, New Zealand. She focuses on leading projects that use AWS services to empower users and improve efficiencies.",
    linkedin:"https://www.linkedin.com/in/helenanders26/",
    twitter: "https://twitter.com/helenanders26"
  },
  {
    full_name: "Noel Hanssens",
    profile_picture: "/images/organisers/noel_hanssens.jpeg",
    occupation: "Data Engineering Manager",
    company: "Lifeblood",
    linkedin: "https://www.linkedin.com/in/noelhanssens/",
    twitter: "https://twitter.com/noelhanssens",
    description: "Everything about data blows my hair back.  I am a data professional with 20 years experience, leading teams, managing data projects and uplifting organisational data capabilities.  I run the Melbourne Data Engineering Meetup, have an International MBA, have contributed to the Financial Times, and founded a TEDx.",
  },
  {
    full_name: "Rafael Athayde Mello",
    profile_picture:"images/organisers/rafael_athayde_mello.jpeg",
    location:"Melbourne",
    occupation:"Data Engineer at Culture Amp",
    description:"I am passionate about helping startups scale their data platforms. I like to think about security and privacy and how companies productionize Machine learning.",
    linkedin:"https://www.linkedin.com/in/rafael-mello-035a90143",
    github:"https://github.com/RafaelAMello"
  },
  {
    full_name: "Claudia Silva-Cabrera",
    profile_picture:"images/organisers/Headshot_Claudia.jpg",
    location:"Sydney",
    occupation:"Data engineer @Kinesso",
    description:"Would you like to know the secrets of data? I would like it. I'm a data advocate in all its forms.",
    website:"https://claudia-sc.live"
  },
  {
    full_name:"Adithya Bhat Narjala",
    location:"Melbourne",
    profile_picture:"images/organisers/adithya_bhat_narjala.jpeg",
    occupation:"Data Engineer at Openpay",
    description:"I am passionate about architecting solutions for big-data processing pipelines while considering it's domain specific constraints relating to security and usability.",
    linkedin:"https://www.linkedin.com/in/adithya-bhat-narjala"
  },
  {
    full_name: "Francisco Liwa",
    location:"Brisbane",
    profile_picture: "images/organisers/francisco_liwa.jpeg",
    occupation:"Senior Data Engineer",
    description:"Passionate in Data and IoT",
    linkedin:"https:www.linkedin.com/in/nifrali"
  }
]

const committee = [
  {
     full_name:"Nitish Mathew",
     profile_picture:"images/committee/Nitish_Mathew_Small.png",
     location:"Melbourne",
     occupation:"Global Head of Data Engineering, Afterpay",
     description:"I am passionate about coaching leaders build, nurture, and inspire engineering teams deliver tangible business outcomes with simple and useful data products, and have fun along the way.",
     linkedin:"https://www.linkedin.com/in/nmathew/"
  },
  {
     full_name:"Ingrid Anzola",
     location:"Sydney",
     profile_picture:"images/committee/ingrid.png",
     occupation:"Head of Data Platform | Shippit",
     description:"Passionate about data for 20 years, keen to share my own experiences and learn from others, and proud of being part of such an awesome data community",
  },
  {
      full_name: "Rohan Dhupelia",
      profile_picture: "/images/committee/rohan.jpeg",
      occupation: "Engineering Manager, Data Platform, Atlassian",
      company: "Atlassian",
      linkedin: "https://www.linkedin.com/in/rohandhupelia",
      twitter: "https://twitter.com/@rohandhupelia",
      description: "Rohan Dhupelia leads the data platform team at Atlassian, which focuses on further democratizing data in the company and providing a world-class, highly innovative data platform. Rohan has spent the last 10+ years of his career in the data space across a variety of industries, including FMCGs, property, and technology, doing everything from BI report development to data warehousing and data engineering.",
  },
  {
      full_name: "Jess Flanagan",
      profile_picture: "/images/committee/jessica.jpeg",
      occupation: "Head of Engineering, Deckard Technologies",
      company: "Deckard Technologies",
      linkedin: "https://www.linkedin.com/in/jessica-m-flanagan/",
      twitter: "https://twitter.com/@JessMFlan",
      description: "I began my career in the security space, but after repeatedly needing to pull large disparate data sources together, I found a passion for data engineering. I've built pipelines and analytics tools, for many domains including telecommunications, intellectual property management and self-driving cars. Currently, I am co-founder and head of engineering at Deckard Technologies an early stage start-up that is helping US cities, institutions and NGOs become smarter using data analytics and machine learning.",
  }
]

function makePersonSchema(person) {
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: person.full_name,
    url: "https://dataengconf.com.au/team",
    "image": "https://dataengconf.com.au/"+person.profile_picture,
    "sameAs": [
      person.twitter,
      person.linkedin,
      person.website,
      person.github
    ]  
  }
}

const breadcrumb = {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://dataengconf.com.au/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "team",
    "item": "https://dataengconf.com.au/team"  
  }]
}

export default function Team() {
    return (

    <Layout>
      <script 
        key={`breadcrumbJSON`}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {organisers.map((person) => (
    <script
        key={`organiserJSON-${person.full_name}`}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makePersonSchema(person)) }}
    />
      ))
      }
      {committee.map((person) => (
    <script
        key={`committeeJSON-${person.full_name}`}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(makePersonSchema(person)) }}
    />
      ))
      }
    <SEO
    keywords={[`DataEngBytes`,`team`]}
    title="Our Team - DataEngBytes 2021!"
    />
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Organisers</h2>
            <p className="text-xl text-gray-500">
            Meet the organisers working hard to bring you DataEngBytes 2021!
            </p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {organisers.map((organiser) => (
              <li key={organiser.full_name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src={organiser.profile_picture} alt="" />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{organiser.full_name}</h3>
                      <p className="text-indigo-600">{organiser.occupation}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{organiser.description}</p>
                    </div>
                    <ul className="flex space-x-5">
                      {organiser.twitter ?
                      <li>
                        <a href={organiser.twitter} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {organiser.linkedin ?
                      <li>
                        <a href={organiser.linkedin} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {organiser.github ?
                      <li>
                        <a href={organiser.github} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {organiser.website ?
                      <li>
                        <a href={organiser.website} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Website</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">


        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Committee</h2>
            <p className="text-xl text-gray-500">
              Meet the committee who are setting the direction and helping to guide the ship that is DataEngBytes 2021!
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {committee.map((person) => (
                <li key={person.full_name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={person.profile_picture} alt="" />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.full_name}</h3>
                      <p className="text-indigo-600">{person.occupation}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.description}</p>
                    </div>
                    
                    <ul className="flex space-x-5">
                      {person.twitter ?
                      <li>
                        <a href={person.twitter} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {person.linkedin ?
                      <li>
                        <a href={person.linkedin} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {person.github ?
                      <li>
                        <a href={person.github} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                      {person.website ?
                      <li>
                        <a href={person.website} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Website</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      : null}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}
