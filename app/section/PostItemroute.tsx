import Link from 'next/link'
import "./postItemOne.css"
import React from 'react'
import { BlogPageProps } from '../blog/page'

export default function PostItemroute({
    item
}: {
  item: BlogPageProps

}) {
  return (
    <div className=''>
        {/* This link to the date time will be inside the routed page */}
        <Link href={`postitems/${item._id}`}>
            {/* <img src={`/${item.img}`} alt='' className='img_fluid'/> */}
        </Link>
        <div className='post-meta'>
            <span className='date'>{item.category}</span>
            <span className='mx-1'>
                <i className='bi bi-dot'></i>{' '}
            </span>{' '}
            <span>{new Date(item.date).toLocaleDateString('en-US')}</span>

        </div>
        {/* this link takes the user to next route the user to 
        the specific page to read the messages */}
        <h2>
            <Link href={`postitems/${item._id}`}>{item.title}</Link>
             {/* <img src={`/${item.img}`} alt='' className='img_fluid'/> */}
        </h2>

    </div>
  )
}

