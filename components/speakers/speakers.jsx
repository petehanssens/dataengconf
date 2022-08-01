import { useEffect, useId, useState } from 'react'
// import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
// import clsx from 'clsx'
import Image from 'next/image'

const days = [
    {
      name: 'Melbourne',
      date: 'September 27',
      dateTime: '2022-09-27',
      speakers: [
        {
          "id": "40d0a78e-f139-4fc7-a5a0-d6f388dbdc84",
          "firstName": "Akira",
          "lastName": "Takihara Wang",
          "fullName": "Akira Takihara Wang",
          "bio": "Hey there! \r\n\r\nI'm a Data Engineer at Afterpay and teach at The University of Melbourne in my spare time.\r\n\r\nI like to spend my spare time gaming, watching the footy (go Collingwood!), and teaching.",
          "tagLine": "Data Engineer, Afterpay (Block)",
          "profilePicture": "https://sessionize.com/image/1241-400o400o2-Q2x5ywUK5BZbn3VuZQRoye.jpg",
          "sessions": [
            {
              "id": '362261',
              "name": "Metadata driven framework for data discovery and data quality"
            }
          ],
          "isTopSpeaker": 'false',
          "links": [],
          "questionAnswers": [],
          "categories": []
        },
        {
          "id": "42089591-8913-4dba-b615-93332091dd97",
          "firstName": "Ann",
          "lastName": "Clark",
          "fullName": "Ann Clark",
          "bio": "Ann has over 7 years' experience in lexicography, data quality, semantic metadata & knowledge management; and is excited to work on semantic systems at Nearmap.",
          "tagLine": "AI Ontologist, Nearmap",
          "profilePicture": "https://sessionize.com/image/bdb4-400o400o2-wadAckBioYc9W4VQs763s3.jpg",
          "sessions": [
            {
              "id": '360256',
              "name": "Building a Scalable, Reproducible Ontology System to Improve Deep Learning Data"
            }
          ],
          "isTopSpeaker": 'false',
          "links": [],
          "questionAnswers": [],
          "categories": []
        },
      ],
    },
    {
      name: 'Sydney',
      date: 'September 29',
      dateTime: '2022-09-29',
      speakers: [
        {
          "id": "42089591-8913-4dba-b615-93332091dd97",
          "firstName": "Ann",
          "lastName": "Clark",
          "fullName": "Ann Clark",
          "bio": "Ann has over 7 years' experience in lexicography, data quality, semantic metadata & knowledge management; and is excited to work on semantic systems at Nearmap.",
          "tagLine": "AI Ontologist, Nearmap",
          "profilePicture": "https://sessionize.com/image/bdb4-400o400o2-wadAckBioYc9W4VQs763s3.jpg",
          "sessions": [
            {
              "id": '360256',
              "name": "Building a Scalable, Reproducible Ontology System to Improve Deep Learning Data"
            }
          ],
          "isTopSpeaker": 'false',
          "links": [],
          "questionAnswers": [],
          "categories": []
        },
        {
          "id": "40d0a78e-f139-4fc7-a5a0-d6f388dbdc84",
          "firstName": "Akira",
          "lastName": "Takihara Wang",
          "fullName": "Akira Takihara Wang",
          "bio": "Hey there! \r\n\r\nI'm a Data Engineer at Afterpay and teach at The University of Melbourne in my spare time.\r\n\r\nI like to spend my spare time gaming, watching the footy (go Collingwood!), and teaching.",
          "tagLine": "Data Engineer, Afterpay (Block)",
          "profilePicture": "https://sessionize.com/image/1241-400o400o2-Q2x5ywUK5BZbn3VuZQRoye.jpg",
          "sessions": [
            {
              "id": '362261',
              "name": "Metadata driven framework for data discovery and data quality"
            }
          ],
          "isTopSpeaker": 'false',
          "links": [],
          "questionAnswers": [],
          "categories": []
        },
      ],
    },
]





export default function Speakers() {
  
    return (
      <section
        id="speakers"
        aria-labelledby="speakers-title"
        className="py-20 sm:py-32"
      >
        {days[0].speakers.map((speaker) => (
                    <div key={speaker.id}>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <div
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          // style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                        >
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={speaker.profilePicture}
                            alt=""
                            width={100}
                            height={100}
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                        {speaker.fullName}
                      </h3>
                      <p className="mt-1 text-base tracking-tight text-slate-500">
                        {speaker.tagLine}
                      </p>
                    </div>
                  ))}
                  </section>
    )
  }