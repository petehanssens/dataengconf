import { useRouter } from 'next/router'
import posts from '../../data/speakers.json'
import React from 'react';
import Layout from '../../components/layout';

export default function Profile() {
    const router = useRouter()
    const post = posts.find(x => x.id === router.query.id)
    console.log(post)
    if (!post) return <p></p>

    return (
        <Layout>
			<div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap container mx-auto my-32 lg:my-0">
				<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
					<div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-centser"
							style={{
								backgroundImage: 'url('+post.image+')'
							}}
						></div>
						<h1 className="text-3xl font-bold pt-8 lg:pt-0">{post.name}</h1>
						<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <br></br>
            <div className="w-full lg:w-2/5 flex">
							<img src={post.image} className="rounded-full lg:rounded-lg shadow-2xl hidden lg:block" />
						</div>
            <p className="pt-8 text-sm">{<post className="image"></post>}</p>
            <p className="h-4 fill-current text-teal-700 pr-4">{post.title}</p>
						<p className="pt-8 text-sm">{post.description}</p>
						<p className="pt-8 text-sm">{post.bio}</p>
						<p className="pt-8 text-sm">{post.tagLine}</p>
					</div>
				</div>
			</div>
        </Layout>
    )
}
