"use client"
import React,  {useState, useEffect} from 'react'

export default function PostItems() {
    const [item, setItem] = useState([])

    const getItemData = () =>{
            fetch(`api/postitem/`)
            .then(res=> res.json())
            //set your local variable to the data
            .then(data => setItem(data))
            .catch(e => console.log(e.message))
        }
    
        //we trigger the function on our use effects hooks and get item for users
         useEffect(() => {
            getItemData();
            // whenever item changes we refeach data again)
         }, [item]);

  return (
    <div>PostItems</div>
  )
}
