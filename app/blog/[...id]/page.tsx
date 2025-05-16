import React from 'react'
import Router from 'next/navigation';

interface PostPageProps {
    params: {
        _id: string[];
    }
}

async function getPostFromParams(params: PostPageProps["params"]) {
    const _id = params?._id?.join("/")
   
}

export default function PostPage({params} : PostPageProps) {
  return (
        <article className='container py-6 prose dark:prose-invert max-w-3xl mx-auto'>
            <h1 className='mb-2'></h1>
        </article>
  )
}
