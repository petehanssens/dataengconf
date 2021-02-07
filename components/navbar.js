import React, { useState } from 'react';
import Link from 'next/link';



export default function Navbar() {
  function toggle() {
    document.getElementById("nav-content").classList.toggle("hidden");
  }
    return (
<nav className="flex items-center justify-between flex-wrap bg-grey-darkest p-6  w-full z-10 pin-t  site-page-header-ghost-wrapper">
<div className="flex items-center flex-no-shrink text-white mr-6  p-6">
      <Link  href='/' >
      <span className="font-semibold text-xl tracking-tight data-eng-purple"><a>DataEngBytes</a></span>
      </Link>
</div>

<div className="block lg:hidden p-6">
  <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white"
  onClick={toggle}
  >
    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
  </button>
</div>

<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
  <ul className="list-reset lg:flex justify-end flex-1 items-center">
   {/* <li className="mr-3" key="speakers">
      <Link href="/speakers">
        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 p6">
        Speakers
        </a>
      </Link>
    </li>
    <li className="mr-3" key="organisers">
      <Link href="/organisers">
        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 p6">
        Organisers
        </a>
      </Link>
    </li>
    <li className="mr-3" key="code_of_conduct">
      <Link href="/code_of_conduct">
          <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 p6">
          Code of Conduct
          </a>
      </Link>
    </li> */}
    <li className="mr-3" key="contact_us">
      <Link href="/contact_us">
        <a className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4 p6">
        Contact Us
        </a>
      </Link>
    </li>
    <li className="mr-3">
      <p className="pl-3">
        <a href="https://www.meetup.com/Sydney-Data-Engineering-Meetup/" className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded p6">
            Meetup
        </a>
      </p>
    </li>
  </ul>
</div>
</nav>
    );
}
