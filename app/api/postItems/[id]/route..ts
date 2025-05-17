import React from 'react'
import dbConnet from '@/config/db';
import PostItem from '@/models/PostItems';
import Router from 'next/navigation';
import { responseCookiesToRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';


// dynamic route use to get our ROUTE id to each categories
dbConnet()


export async function GET(
    _request: Request,
    {params} : {params : {id: string}}
){
    // removing the version from the db why we add __v
    try {
        const postItem = await PostItem.findById(params.id).select('__v')
        return Response.json(postItem)
    } catch (error) {
        return new Response(
            JSON.stringify({message: 'No item found for this ID'}),
            {status: 404}
        )
    }
    
}