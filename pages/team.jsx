import Layout from "../components/layout";
import SEO from "../components/seo";

const people = [
  {
    name: 'Emma Dorsey',
    role: 'Senior Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio:
      'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]

const organisers = [
  {
     full_name:"Adithya Bhat Narjala",
     location:"Melbourne",
     occupation:"Data Engineer at Openpay",
     description:"I am passionate about architecting solutions for big-data processing pipelines while considering it's domain specific constraints relating to security and usability.",
     linkedin:"https://www.linkedin.com/in/adithya-bhat-narjala"
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
     full_name:"Leo Hoare",
     profile_picture:"images/organisers/leo_hoare.jpeg",
     location:"Sydney",
     occupation:"Data Engineer at Itoc",
     description:"I'm enthusiastic about all things data. I love spending time in a range of different areas of the data stack including machine learning, real time streaming and DataOps.",
     linkedin:"https://www.linkedin.com/in/leo-hoare/"
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
     full_name:"Peter Hanssens",
     location:"Sydney",
     profile_picture:"images/organisers/peter_hanssens_new.jpg",
     occupation:"Founder and Solutions Architect, Cloud Shuttle",
     description:"Peter is a Solutions Architect and Founder of Cloud Shuttle, a community-focused cloud consultancy. He counts his major interests on the intersection between Serverless and Data Engineering.",
     github:"https://github.com/petehanssens",
     twitter:"https://twitter.com/petehanssens",
     linkedin:"https://www.linkedin.com/in/peterhanssens/"
  },
  {
      full_name: "Rafael Athayde Mello",
      profile_picture:"images/organisers/rafael_athayde_mello.jpeg",
      location:"Melbourne",
      occupation:"Data Engineer at Culture Amp",
      description:"I am passionate about helping startups scale their data platforms. I like to think about security and privacy and how companies productionize Machine learning.",
      linkedin:"https://www.linkedin.com/in/rafael-mello-035a90143",
      github:"https://github.com/RafaelAMello"
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
     occupation:"TODO",
     description:"Passionate about data for 20 years, keen to share my own experiences and learn from others, and proud of being part of such an awesome data community",
     "social_media":null
  },
]


export default function Team() {
    return (
    <Layout>
    <SEO
    keywords={[`DataEngBytes`,`team`]}
    title="Our Team - DataEngBytes 2021!"
    />
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Organisers</h2>
            <p className="text-xl text-gray-500">
              Meet the organisers working hard to bring you DataEngBytes 2021!
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {organisers.map((person) => (
                <li key={person.name}>
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
                      <li>
                        <a href={person.twitter} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
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
                      <li>
                        <a href={person.github} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>


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
                <li key={person.name}>
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
                      <li>
                        <a href={person.twitter} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
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
                      <li>
                        <a href={person.github} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">GitHub</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
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
