import React from 'react'
//import "./trending.css"
import Link from 'next/link';

interface TrendingProps {

}

export default function TrendingPost({
    item, 
    index,
} : {
    item: {_id: string; title: string; author: string};
    index: number;
}) {
  return (
    <li>
        {/* we will still create the postitem page so when you 
        click any page it leads you to the page */}
        <Link href={`/postitem/${item._id}`}>
            <span className='number'>{index + 1}</span>
            <h3>{item.title}</h3>
            <span>{item.author}</span>
        </Link>
    </li>
  )
}
