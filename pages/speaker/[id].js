import { useRouter } from 'next/router'
import posts from '../../data/speakers.json'
import React from 'react';
import Layout from '../../components/layout';

export default function Profile() {
    const router = useRouter()
    const post = posts.find(x => x.id === router.query.id)
    if (!post) return <p></p>

    return (
        <Layout>
			<div className="max-w-4xl flex items-center h-auto flex-wrap container mx-auto my-16">
				<div id="profile" className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
					<div className="p-4 md:p-12 text-center lg:text-left">
          				<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-centser"
							style={{
								backgroundImage: 'url('+post.image+')'
							}}
						></div>
						<h1 className="text-3xl font-bold pt-8 lg:pt-0">{post.name}</h1>
						<p className="text-sm">{post.tagLine}</p>
						<p className="text-xs font-bold">{post.Day} - {post.StartTime} (GMT+10)</p>
						<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
						<br></br>
						<div className="lg:grid lg:grid-cols-2">
							<div className="w-full lg:w-4/5 ">
								<img src={post.image} className="rounded-full lg:rounded-lg shadow-2xl hidden lg:block" />
							</div>
							<div>
                <a href= {post.linkedin} className="inline-block py-1 pr-10">
                  <img className="linkedin" alt="linkedin image" href={post.linkedin}/>
                </a>
				<a href= {post.youtube} className="inline-block">
                  <img className="youtube" alt="youtube image" href={post.youtube}/>
                </a>
                <br></br>
								<p className="text-sm">{post.bio} </p>
								<br></br>
								<p className="text-xl font-bold pt-8 lg:pt-0">{post.title}</p>
								<p className="text-sm">{post.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </Layout>
    )
}
