import { useEffect, useState } from 'react'

import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

const schedule = [
  {
    date: 'September 27th',
    dateTime: '2022-09-27',
    summary:
      'DataEngBytes 2022, Melbourne',
    timeSlots: [
      {
        name: 'Welcome',
        description: 'House-keeping | Welcome to Country | Agenda | Socials',
        start: '9:00AM',
        end: '09:10AM',
      },
      {
        name: 'Speaker Melbourne 1',
        description: '45 Minutes - Keynote',
        start: '09:10AM',
        end: '09:55AM',
      },
      {
        name: 'Speaker Melbourne 2',
        description: '35 Minutes - Keynote',
        start: '09:55AM',
        end: '10:30AM',
      },
      {
        name: 'Speaker Melbourne 3',
        description: '35 Minutes - Keynote',
        start: '10:30AM',
        end: '11:05AM',
      },
      {
        name: 'Morning Break',
        description: '20 Minutes',
        start: '11:05AM',
        end: '11:25AM',
      },
      {
        name: 'Speaker Melbourne 4',
        description: '35 Minutes - Keynote',
        start: '11:25',
        end: '12:00',
      },
      {
        name: 'Speaker Melbourne 5',
        description: '35 Minutes - Keynote',
        start: '12:00',
        end: '12:35',
      },
      {
        name: 'Speaker Melbourne 6',
        description: '35 Minutes - Keynote',
        start: '12:35',
        end: '13:10',
      },
      {
        name: 'Lunch',
        description: '40 Minutes',
        start: '13:10',
        end: '13:50',
      },
      {
        name: 'Speaker Melbourne 7',
        description: '20 Minutes - Mini Keynote',
        start: '13:50',
        end: '14:10AM',
      },
      {
        name: 'Speaker Melbourne 8',
        description: '20 Minutes - Mini Keynote',
        start: '14:10',
        end: '14:30',
      },
      {
        name: 'Speaker Melbourne 9',
        description: '20 Minutes - Mini Keynote',
        start: '14:30',
        end: '14:50',
      },
      {
        name: 'Speaker Melbourne 10',
        description: '20 Minutes - Mini Keynote',
        start: '14:50',
        end: '15:10',
      },
      {
        name: 'Afternoon Break',
        description: '20 Minutes',
        start: '15:10AM',
        end: '15:30',
      },
      {
        name: 'Speaker Melbourne 11',
        description: '20 Minutes - Mini Keynote',
        start: '15:30',
        end: '15:50',
      },
      {
        name: 'Speaker Melbourne 12',
        description: '35 Minutes - Keynote',
        start: '15:50',
        end: '16:25',
      },
      {
        name: 'Panel Discussion',
        description: '40 Minutes',
        start: '16:25',
        end: '17:05',
      },
      {
        name: 'Thanks',
        description: '10 Minutes - Wrap Up',
        start: '17:05',
        end: '17:15',
      }
      
    ],
  },
  {
    date: 'September 28th',
    dateTime: '2022-09-28',
    summary:
      'DataEngBytes 2022, Melbourne',
    timeSlots: [
      {
        name: 'Welcome',
        description: 'House-keeping | Welcome to Country | Agenda | Socials',
        start: '9:00AM',
        end: '09:10AM',
      },
      {
        name: 'Speaker Melbourne 1',
        description: '45 Minutes - Keynote',
        start: '09:10AM',
        end: '09:55AM',
      },
      {
        name: 'Speaker Melbourne 2',
        description: '35 Minutes - Keynote',
        start: '09:55AM',
        end: '10:30AM',
      },
      {
        name: 'Speaker Melbourne 3',
        description: '35 Minutes - Keynote',
        start: '10:30AM',
        end: '11:05AM',
      },
      {
        name: 'Morning Break',
        description: '20 Minutes',
        start: '11:05AM',
        end: '11:25AM',
      },
      {
        name: 'Speaker Melbourne 4',
        description: '35 Minutes - Keynote',
        start: '11:25',
        end: '12:00',
      },
      {
        name: 'Speaker Melbourne 5',
        description: '35 Minutes - Keynote',
        start: '12:00',
        end: '12:35',
      },
      {
        name: 'Speaker Melbourne 6',
        description: '35 Minutes - Keynote',
        start: '12:35',
        end: '13:10',
      },
      {
        name: 'Lunch',
        description: '40 Minutes',
        start: '13:10',
        end: '13:50',
      },
      {
        name: 'Speaker Melbourne 7',
        description: '20 Minutes - Mini Keynote',
        start: '13:50',
        end: '14:10AM',
      },
      {
        name: 'Speaker Melbourne 8',
        description: '20 Minutes - Mini Keynote',
        start: '14:10',
        end: '14:30',
      },
      {
        name: 'Speaker Melbourne 9',
        description: '20 Minutes - Mini Keynote',
        start: '14:30',
        end: '14:50',
      },
      {
        name: 'Speaker Melbourne 10',
        description: '20 Minutes - Mini Keynote',
        start: '14:50',
        end: '15:10',
      },
      {
        name: 'Afternoon Break',
        description: '20 Minutes',
        start: '15:10AM',
        end: '15:30',
      },
      {
        name: 'Speaker Melbourne 11',
        description: '20 Minutes - Mini Keynote',
        start: '15:30',
        end: '15:50',
      },
      {
        name: 'Speaker Melbourne 12',
        description: '35 Minutes - Keynote',
        start: '15:50',
        end: '16:25',
      },
      {
        name: 'Panel Discussion',
        description: '40 Minutes',
        start: '16:25',
        end: '17:05',
      },
      {
        name: 'Thanks',
        description: '10 Minutes - Wrap Up',
        start: '17:05',
        end: '17:15',
      }
      
    ],
  },
  {
    date: 'September 29th',
    dateTime: '2022-09-29',
    summary:
      'DataEngBytes 2022, Sydney',
    timeSlots: [
      {
        name: 'Welcome',
        description: 'House-keeping | Welcome to Country | Agenda | Socials',
        start: '9:00AM',
        end: '09:10AM',
      },
      {
        name: 'Speaker Sydney 1',
        description: '45 Minutes - Keynote',
        start: '09:10AM',
        end: '09:55AM',
      },
      {
        name: 'Speaker Sydney 2',
        description: '35 Minutes - Keynote',
        start: '09:55AM',
        end: '10:30AM',
      },
      {
        name: 'Speaker Sydney 3',
        description: '35 Minutes - Keynote',
        start: '10:30AM',
        end: '11:05AM',
      },
      {
        name: 'Morning Break',
        description: '20 Minutes',
        start: '11:05AM',
        end: '11:25AM',
      },
      {
        name: 'Speaker Sydney 4',
        description: '35 Minutes - Keynote',
        start: '11:25',
        end: '12:00',
      },
      {
        name: 'Speaker Sydney 5',
        description: '35 Minutes - Keynote',
        start: '12:00',
        end: '12:35',
      },
      {
        name: 'Speaker Sydney 6',
        description: '35 Minutes - Keynote',
        start: '12:35',
        end: '13:10',
      },
      {
        name: 'Lunch',
        description: '40 Minutes',
        start: '13:10',
        end: '13:50',
      },
      {
        name: 'Speaker Sydney 7',
        description: '20 Minutes - Mini Keynote',
        start: '13:50',
        end: '14:10AM',
      },
      {
        name: 'Speaker Sydney 8',
        description: '20 Minutes - Mini Keynote',
        start: '14:10',
        end: '14:30',
      },
      {
        name: 'Speaker Sydney 9',
        description: '20 Minutes - Mini Keynote',
        start: '14:30',
        end: '14:50',
      },
      {
        name: 'Speaker Sydney 10',
        description: '20 Minutes - Mini Keynote',
        start: '14:50',
        end: '15:10',
      },
      {
        name: 'Afternoon Break',
        description: '20 Minutes',
        start: '15:10AM',
        end: '15:30',
      },
      {
        name: 'Speaker Sydney 11',
        description: '20 Minutes - Mini Keynote',
        start: '15:30',
        end: '15:50',
      },
      {
        name: 'Speaker Sydney 12',
        description: '35 Minutes - Keynote',
        start: '15:50',
        end: '16:25',
      },
      {
        name: 'Panel Discussion',
        description: '40 Minutes',
        start: '16:25',
        end: '17:05',
      },
      {
        name: 'Thanks',
        description: '10 Minutes - Wrap Up',
        start: '17:05',
        end: '17:15',
      }
      
    ],
  },
]

function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
function DiamondIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
      <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  )
}

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((day, dayIndex) => (
            <div
              key={day.dateTime}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <DaySummary
                day={{
                  ...day,
                  date: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.date}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export default function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Our three day schedule is jam-packed with brilliant, creative, innovative
            geniuses in the field of Data Engineering.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The smartest people in our industry giving the best talks you’ve ever
            seen. Grab your tickets today to get to hear from these pioneers
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          {/* <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          /> */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
