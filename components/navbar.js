import React, { useState } from 'react';
import Link from 'next/link';



export default function Navbar() {
  function toggle() {
    document.getElementById("nav-content").classList.toggle("hidden");
  }
    return (
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

              <Link  href='/' >
          <span className="font-semibold text-xl tracking-tight data-eng-purple"><a>DataEngBytes</a></span>
          </Link>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href="/contact_us">Contact Us</a>
          </nav>
          <button class="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-bold mt-4 md:mt-0"
                  href="https://www.meetup.com/Sydney-Data-Engineering-Meetup/">Meetup
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

    );
}