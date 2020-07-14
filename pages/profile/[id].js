import { useRouter } from 'next/router'
import posts from '../../data/profiles.json'
import React, { Component } from 'react';
import PageWrapper from '../../components/page_wrapper'

export default function Profile() {
    const router = useRouter()
    const post = posts.find(x => x.id === router.query.id)
    console.log(post)
    if (!post) return <p></p>

    return (
        <>
        <PageWrapper title={post.Name}>
            <h1>{post.Name}</h1>
            <p>{post.Position}</p>
        </PageWrapper>
        </>
    )
}