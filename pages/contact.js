import SEO from "../components/seo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube, faLinkedin, faMeetup } from '@fortawesome/free-brands-svg-icons' 

export default function ContactUs() {
  return (
  <>
  <SEO
    keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
    title="Contact Us - DataEngBytes!"
    description="Reach out if you have a question, DataEngBytes"
  />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Conference</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                DataEngBytes is a community conference that is run annually!
              </p>
            </div>
            <div className="mt-9">
              <a href="https://twitter.com/dataengconfau">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                    icon={faTwitter} />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>DataEngConfAU - Twitter</p>
                  </div>
                </div>
              </a>
              <a href="mailto:sydney@dataengconf.com.au">
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                    icon={faMailBulk} />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>Email Sydney @ dataengconf.com.au</p>
                  </div>
                </div>
              </a>
              <a href="https://www.youtube.com/dataengau">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                    icon={faYoutube} />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>YouTube</p>
                    <p>DataEngAu - YouTube</p>
                  </div>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/dataengconfau/">
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                    icon={faLinkedin} />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>LinkedIn</p>
                    <p>DataEngConfAU - LinkedIn</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Meetup</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                The data eng meetup meets monthly or thereabouts in 3 different cities, Brisbane, Melbourne and Sydney.
                For now, due to COVID-19, we run combined meetups which you can catch on our YouTube channel.
              </p>
            </div>
            <div className="mt-9">
              <a href="https://www.meetup.com/Brisbane-Data-Engineering-Meetup/">
                <div className="flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                      icon={faMeetup} />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Brisbane</p>
                    </div>
                </div>
              </a>
              <a href="https://www.meetup.com/Melbourne-Data-Engineering-Meetup/">  
                <div className="flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                      icon={faMeetup} />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Melbourne</p>
                    </div>
                </div>
              </a>
              <a href="https://www.meetup.com/Sydney-Data-Engineering-Meetup/">
                <div className="flex">
                    <div className="flex-shrink-0">
                      <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                      icon={faMeetup} />
                    </div>
                    <div className="ml-3 text-base text-gray-500">
                      <p>Sydney</p>
                    </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
