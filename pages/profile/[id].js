import { useRouter } from 'next/router'
import posts from '../../data/profiles.json'
import React from 'react';
import Layout from '../../components/layout';

export default function Profile() {
    const router = useRouter()
    const post = posts.find(x => x.id === router.query.id)
    console.log(post)
    if (!post) return <p></p>

    return (
        <>
        <Layout>
            <p className="text-4xl">{post.Name}</p>
            <div className="max-w w-full lg:max-w-full lg:flex">                                
                <div className="border-t border-b border-l border-gray-400 bg-white h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                    <img src={post.Image} alt={post.Name} className="object-center rounded-full h-32 content-center" />
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2">{post.Name}</div>
                        <p className="text-gray-700 text-base">{post.Position}</p>
                        <p className="text-gray-400 text-base">{post.Company}</p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}