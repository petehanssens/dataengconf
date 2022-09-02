import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import getConfSessionDetails from '../../helpers/getConferenceSessions'
const sessionDetails = getConfSessionDetails()


export default function TimeSlots({ day, className }) {
    return (
      <ol
        role="list"
        className={clsx(
          className,
          'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
        )}
      >
        {day.sessions.map((timeSlot, timeSlotIndex) => (
          <li
            key={timeSlot.startsAt}
            aria-label={`${timeSlot.speakerObject[0]?.fullName} talking about ${timeSlot.title} at ${timeSlot.startsAt} - ${timeSlot.endsAt} AEST`}
          >
            {timeSlotIndex > 0 && (
              <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
            )}
            <h4 className="text-lg font-semibold tracking-tight text-blue-900">
              {timeSlot.speakerObject[0]?.fullName}
            </h4>
            {timeSlot.title && (
              <p className="mt-1 tracking-tight text-blue-900">
                {timeSlot.title}
              </p>
            )}
            <p className="mt-1 font-mono text-sm text-slate-500">
              <time dateTime={`${day.goodDate}T${timeSlot.startsAt}-08:00`}>
                {new Date(timeSlot.startsAt).toLocaleTimeString('en-AU')}
              </time>{' '}
              -{' '}
              <time dateTime={`${day.goodDate}T${timeSlot.endsAt}-08:00`}>
                {new Date(timeSlot.endsAt).toLocaleTimeString('en-AU')}
              </time>{' '}
              AEST
            </p>
          </li>
        ))}
      </ol>
    )
  }