"use client"
import { PostItem } from "../components/post-item"
import React, {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import { json } from "node:stream/consumers"
import { Link } from "lucide-react"
import PostItemroute from "../section/PostItemroute"
import Trending from "@/recentActivities/Trending"
import TrendingPost from "../components/TrendingPost"

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
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
                <div className="flex-1 space-y-4">
                    {/* can add pr-60 to move right the blog is a slug*/}
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">NaijaGist</h1>
                    <hr />
                    {/* add what our blog is about */}
                    <p className="text-xl text-muted-foreground">
                        The web development blog forum
                    
                    </p>
                    <hr className="mt-8" />
                    {/* now we can get the data from backend
                     when we click details we go to detail page
                     get the top 3 trending stories and top stories  */}
                    <a href="/news-details">News</a>
                        {displayPost && displayPost.length > 0 &&
                            displayPost
                            .filter(
                                    (item: {trending: boolean; top: boolean}) =>
                                    !item.trending && item.top
                        )
                            .slice(0, 3)

                            .map((item: {item: {
                                            _id: string
                                            img: string
                                            category: string
                                            date: string
                                            title: string
                                            brief: string
                                            avatar: string
                                            author: string
                                        }}) => 
                                
                                <>
                                <PostItemroute 
                                    key={item._id} 
                                    item={item}/>
                                
                                <hr className="mt-8" />
                                </>
                    
                
            
                )
            }
                    
            </div>         
            </div>

            {/* creating a trending post or top topics */}
            
            <div className="trending">
                <h3>Trending</h3>
                <ul className="trending-post">
                    {displayPost && displayPost.length > 0 &&
                            displayPost
                            .filter((item: {trending: boolean}) => item.trending)
                            .map((
                                item: {
                                    _id: string
                                    img: string
                                    category: string
                                    date: string
                                    title: string
                                    brief: string
                                    avatar: string
                                    author: string
                                    },
                                    index : number
                                    ) =>(
                            // we need to define the index and item on the child component
                                <TrendingPost 
                                    key={item._id}
                                    index={index}
                                    item={item}
                                />
                            ))
                            
                    }

                </ul>

            </div>
            
        
            
        </div>
        
    )
}


// "use client"
// import { PostItem } from "../components/post-item"
// import React, {useState, useEffect} from "react"
// import { useRouter } from "next/navigation"

// // This is a slug function just like an id
// export default async function BlogPage() {
// // lets work with our backend data
//     const router = useRouter()
//     const [displayPost, setdisplayPost] = useState<any | []>([])

//     const getItemsData = () => {
//         fetch(`/api/postitems`)
//             .then(response => response.json())
//             .then(data => setdisplayPost(data))
//             .catch(e => console.log(e.message))
//     };
//      useEffect(() => {
//         getItemsData()
//      }, []);

//     return(
//         <div className="container max-w-4xl py-6 lg:py-10">
//             <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
//                 <div className="flex-1 space-y-4">
//                     {/* can add pr-60 to move right the blog is a slug*/}
//                     <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
//                     {/* add what our blog is about */}
//                     <p className="text-xl text-muted-foreground">
//                         The web development blog forum
                    
//                     </p>
//                     <hr className="mt-8" />
//                 </div>
                
//             </div>
//             {/* to display all our post to the frontend */}
//             <hr className="mt-8" />
//             {displayPost?.length > 0 ? (
//                  <ul className="flex flex-col">
//                     {displayPost.map((item: {item: {id: string; title: string}}) => (        
//                         <p key={item._id}>{item.title}</p>
//                     ))} 


//         </div>
        
//     )
// }


//                     {displayPost.map((posts: any) => {
//                         const {id, date, title, description} = posts
//                         return <li key={id}>
//                             <PostItem 
//                                 id={id} 
//                                 date={date} 
//                                 title={title} 
//                                 description={description}/>
//                         </li>
//                     })}
//                 </ul>
//             ):(
//                 <p>No post found yet</p>

//             )}
//             {/* <p>No post found yet</p> */}