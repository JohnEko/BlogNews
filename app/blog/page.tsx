"use client"
import { PostItem } from "../components/post-item"
import React, {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import { json } from "node:stream/consumers"
import { Link } from "lucide-react"
import PostItemroute from "../section/PostItemroute"
import Trending from "@/recentActivities/Trending"
import TrendingPost from "../components/TrendingPost"
import Preloader from "../components/Preloader"

// sharing this data accross every location
export interface BlogPageProps {
    _id: string
    img: string
    category: string
    date: string
    title: string
    brief: string
    avatar: string
    author: string
}



// This is a slug function just like an id
export default function BlogPage() {
// lets work with our backend data
    const router = useRouter()
    const [displayPost, setdisplayPost] = useState<any | []>([])
    const [item, setItem] = useState({})

// we going to use the id to get the single page 

    const getItemsData = () => {
        fetch(`api/postItems`)
            .then(response => response.json())
            .then(json => setdisplayPost(json))
            .catch(e => console.log(e.message))
    };
    // get a single blog post when you click it
    //fetch data from backend
    // const getSinglePostData = (id: string) =>{
    //     fetch(`api/postitem/${id}`)
    //     .then(res=>{
    //         if(res.status == 404){
    //             router.push('/not-found')
    //         }
    //         return res.json()
    //     })
    //     //set your local variable to the data
    //     .then(data => setItem(data))
    //     .catch(e => console.log(e.message))
    // }

    //we trigger the function on our use effects hooks and parse in the id
     useEffect(() => {
        getItemsData();
        // getSinglePostData('68247f63c46b7ee1b67bcaff')
     }, []);

    return(
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col-[1rem 3rem 1rem] items-start gap-4 md:flex-row md:justify-between rounded-xl">
                <div className="flex-1 space-x-1">
                    <h1 className="inline-block pt-6 font-black text-4l lg:text-3l">SiteAdvert</h1>
                    <hr className="mt-2" />
                </div>
                <div className="flex-3 space-y-4">
                    {/* can add pr-60 to move right the blog is a slug*/}
                    <h1 className="inline-block font-black text-4xl lg:text-5xl ">NaijaGist</h1>
                    <hr />
                    {/* add what our blog is about */}
                    <p className="text-xl text-muted-foreground">
                        The web development blog forum
                    
                    </p>
                    <hr className="mt-8" />
                    {/* now we can get the data from backend
                     when we click details we go to detail page
                     get the top 3 trending stories and top stories  */}
                     {/* if the data is ready show the post otherwise show preloader */}
                    <Link href="/news-details">News</Link>
                        {displayPost && displayPost.length > 0 ? (
                            displayPost
                            .filter(
                                    (item: {trending: boolean; top: boolean}) =>
                                    !item.trending && item.top
                        )
                            .slice(0, 3)
                            .map((
                                item: BlogPageProps) => (     
                                
                                <>
                                <PostItemroute 
                                    key={item._id} 
                                    item={item}/>
                                
                                <hr className="mt-8" />
                                </>
                            )
                        )
                        // Otherwise show this can do it in all your data mapping, we can use isloading for main project
                    ):(
                      <Preloader />
            
                )
            }
                    
            </div>         
            </div>

            {/* creating a trending post or top topics */}
            <div className="flex-1 md:flex-row md:justify-between">
            <div className="trending">
                <h3>Trending</h3>
                <hr />
                <ul className="trending-post">
                    {displayPost && displayPost.length > 0 &&
                            displayPost
                            .filter((item: {trending: boolean}) => item.trending)
                            .map((
                                item: BlogPageProps,
                                    index : number
                                    ) =>(
                            // we need to define the index and item on the child component
                               <> <TrendingPost 
                                    key={item._id}
                                    index={index}
                                    item={item}      
                                />
                                <hr className="mt-4" />
                                </>
                            ))
                            
                    }

                </ul>

            </div>
            
        </div>
            
        </div>
        
    )
}