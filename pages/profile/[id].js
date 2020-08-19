import { useRouter } from 'next/router'
import posts from '../../data/profiles.json'
import React from 'react';
import Layout from '../../components/layout';

export default function Profile() {
    const router = useRouter()
    const post = posts.find(x => x.id === router.query.id)
    if (!post) return <p></p>

    return (
        <Layout>
			<div className="max-w-4xl flex items-center h-auto lex-wrap container mx-auto my-16">
				<div id="profile" className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
					<div className="p-4 md:p-12 text-center lg:text-left">
          				<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-centser"
							style={{
								backgroundImage: 'url('+post.Image+')'
							}}
						></div>
						<h1 className="text-3xl font-bold pt-8 lg:pt-0">{post.Name}</h1>
						<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
						<br></br>
						<div className="lg:grid lg:grid-cols-2">
							<div className="w-full lg:w-4/5 ">
								<img src={post.Image} className="rounded-full lg:rounded-lg shadow-2xl hidden lg:block" />
							</div>
							<div>
								<br></br>
                <a href= {post.LinkedIn} className="w-full lg:w-2/5 ">
                  <img style={{}} className="linkedin" alt="linkedin image" href={post.LinkedIn}/>
                </a>
                <br></br>
								<p className="text-2xl font-bold pt-8 lg:pt-0">{post.Position}</p>
								<p className="pt-8 text-sm">{post.description}</p>
								<p className="pt-8 text-sm">{post.Bio} </p>
								<p className="pt-8 text-sm">{post.Tags}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </Layout>
    )
}
