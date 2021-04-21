import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
      
            <a href="https://twitter.com/dataengconfau" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
              icon={faTwitter} />
            </a>
      
            <a href="https://www.youtube.com/dataengau" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
                  <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
                  icon={faYoutube} />
            </a>
      
            <a href="https://www.linkedin.com/company/dataengconfau/" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <FontAwesomeIcon className="h-6 w-6 text-gray-400" aria-hidden="true" 
              icon={faLinkedin} />
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2021 DataEngConfAU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>      
    )
}



