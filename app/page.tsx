import Image from "next/image";

// import TrendingTopics from "./properties/TrendingTopics";
// import NewsDetailPage from "./components/news/[id]/page";
// import PropertyNewsList from "./property/PropertyNewsList";
import { Calendar } from "lucide-react";
import Trending from "@/recentActivities/Trending";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pt-20 ">
        {/* <NewsDetailPage />
        {/* <TrendingTopics /> */}
      
        

        <div className="mt-4 ml-[20px] flex justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20">
          {/* <PropertyNewsList /> */}
        </div>      
            
        {/* </div> */}
        {/* space from the top to the trending topics mt-4 grid col-span-1 md:col-span-6 */}
        <div className="container">
          
          {/* <TrendingTopics /> */}
          {/* <Trending /> */} 
        </div>
    </main>
  );
}


