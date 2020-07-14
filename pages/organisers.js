import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Profiles from '../data/profiles.json';

let OrganisingTeam = Profiles.filter(organiser => organiser.Role=="Organiser");
let CommitteeTeam = Profiles.filter(organiser => organiser.Role=="Committee");

export default function Organisers() {
    return (
        <Layout>
        <p>Organisers</p>
            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                { OrganisingTeam.map(organiser => (
                    <Link href={organiser.Link} >
                    <div class="max-w-sm w-full lg:max-w-full lg:flex">                                
                        <div class="border-t border-b border-l border-gray-400 bg-white h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                            <img src={organiser.Image} alt={organiser.Name} className="object-center rounded-full h-32 content-center" />
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <div class="text-gray-900 font-bold text-xl mb-2">{organiser.Name}</div>
                                <p class="text-gray-700 text-base">{organiser.Position}</p>
                                <p class="text-gray-400 text-base">{organiser.Company}</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    ))}
                </div>
            </div>
                <p>Committee</p>
            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4">
                { CommitteeTeam.map(organiser => (
                    <div class="max-w-sm w-full lg:max-w-full lg:flex">                                
                        <div class="border-t border-b border-l border-gray-400 bg-white h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                            <img src={organiser.Image} alt={organiser.Name} className="object-center rounded-full h-32 content-center" />
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                                <div class="text-gray-900 font-bold text-xl mb-2">{organiser.Name}</div>
                                <p class="text-gray-700 text-base">{organiser.Position}</p>
                                <p class="text-gray-400 text-base">{organiser.Company}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

