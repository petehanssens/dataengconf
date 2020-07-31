import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Profiles from '../data/profiles.json';

let OrganisingTeam = Profiles.filter(organiser => organiser.Role=="Organiser");
let CommitteeTeam = Profiles.filter(organiser => organiser.Role=="Committee");

export default function Organisers() {
    return (
        <Layout>
            <p className="text-gray-900 text-4xl font-bold mb-2 pl-12">Organisers</p>
            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full">
                { OrganisingTeam.map(organiser => (
                    <Link href={organiser.Link} >     
                        <div className="border border-gray-400 bg-white h-96 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden w-auto px-4 py-2" >
                            <div className="text-gray-900 font-bold text-xl mb-2 flex justify-between">
                                {organiser.Name}
                            </div>     
			                <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-black-500 opacity-75"></div>      
                            <div className="mb-8 grid grid-cols-2 object-center justify-center items-center content-center">
                                <div className=" object-center justify-center items-center content-center">
                                    <img src={organiser.Image} alt={organiser.Name} className="w-full object-center rounded-full p-4 content-center justify-center items-center" />
                                </div>
                                <div className="mb-8">
                                    <p className="text-grey-darker text-base">{organiser.Position}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            <p className="text-gray-900 text-4xl font-bold mb-2 pl-12 pt-12">Committee</p>
            <div className="flex mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 w-full">
                { CommitteeTeam.map(committee => (
                    <Link href={committee.Link} >     
                        <div className="border border-gray-400 bg-white h-96 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden w-auto px-4 py-2" >
                            <div className="text-gray-900 font-bold text-xl mb-2 flex justify-between">
                                {committee.Name}
                            </div>     
			                <div className="mx-auto lg:mx-0 w-full pt-3 border-b-2 border-black-500 opacity-75"></div>      
                            <div className="mb-8 grid grid-cols-2 object-center justify-center items-center content-center">
                                <div className=" object-center justify-center items-center content-center">
                                    <img src={committee.Image} alt={committee.Name} className="w-full object-center rounded-full p-4 content-center justify-center items-center" />
                                </div>
                                <div className="mb-8">
                                    <p className="text-grey-darker text-base">{committee.Position}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

