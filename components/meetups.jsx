import React from 'react';
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
export default function Meetups() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Here is a list of other Meetups:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {meetupEvents.map((meetup) => (
            <div key={meetup.title}
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <p>{meetup.title}</p>
              <a href={meetup.eventurl}>Click me for event</a>
              <p>Start time: {meetup.dateTime}</p>
              <p>End time: {meetup.endTime}</p>
              <p>Is Online?: {meetup.isOnline}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
  }