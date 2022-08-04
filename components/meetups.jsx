import React from 'react';
import { DateUtils } from '@aws-amplify/core';

import MeetupData from '../helpers/fetchMeetups';

const meetupEvents = [
    {
      id: '286883761',
      title: 'IN PERSON: Data Engineering meetup, July Edition',
      eventurl: 'https://www.meetup.com/sydney-data-engineering-meetup/events/286883761',
      dateTime: '2022-07-19T17:00+10:00',
      timezone: 'Australia/Sydney',
      endTime: '2022-07-19T19:00+10:00',
      isOnline: false
    },
    {
      id: '286883799',
      title: 'DataEngHack, AMA!',
      eventurl: 'https://www.meetup.com/sydney-data-engineering-meetup/events/284625016',
      dateTime: '2022-04-28T12:00+10:00',
      timezone: 'Australia/Sydney',
      endTime: '2022-04-28T12:30+10:00',
      isOnline: true
    },
    {
      id: '286889012',
      title: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      eventurl: 'https://www.meetup.com/sydney-data-engineering-meetup/events/11111111',
      dateTime: '2022-07-19T17:00+10:00',
      timezone: 'Australia/Sydney',
      endTime: '2022-07-19T19:00+10:00',
      isOnline: false
    },
    {
      id: '326883761',
      title: 'QWERTYUIOPASDFGHJKLZXCVBNM',
      eventurl: 'https://www.meetup.com/sydney-data-engineering-meetup/events/22222222',
      dateTime: '2022-07-19T17:00+10:00',
      timezone: 'Australia/Sydney',
      endTime: '2022-07-19T19:00+10:00',
      isOnline: false
    },
    {
      id: '488883761',
      title: 'QWERTYUIOPASDFGHJKLZXCVBNM1234567',
      eventurl: 'https://www.meetup.com/sydney-data-engineering-meetup/events/333333333',
      dateTime: '2022-07-19T17:00+10:00',
      timezone: 'Australia/Sydney',
      endTime: '2022-07-19T19:00+10:00',
      isOnline: true
    }
]

function boolString(boolval){
  if(boolval===true){
    return "Event is online."
  }
  else
    return "Event is in person."
}

function stripDate(dateTimeVal){
  return dateTimeVal.split('+')[0].split('T')
}

export default function Meetups(props) {
    console.log("Current city:", props.city)
    const meetupData = MeetupData(props.city);
    meetupData.sort((a,b) => {return new Date(stripDate(b.starttime)[0]) - new Date(stripDate(a.starttime)[0]);})

    return (
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Past Meetups</h2>
              <p className="text-xl text-gray-500">
                Here is a list of meetups that occured in {props.city}:
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
              >
                {meetupData.map((meetup) => (
                  <li key={meetup.title} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg" src="../images/meetupLogos/sydney.jpg" alt="" />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="text-lg"><a href={meetup.eventurl}>{meetup.title}</a>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">Event Date: {stripDate(meetup.starttime)[0]}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">Start Time: {stripDate(meetup.starttime)[1]}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">End Time: {stripDate(meetup.endtime)[1]}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{boolString(meetup.isonline)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }