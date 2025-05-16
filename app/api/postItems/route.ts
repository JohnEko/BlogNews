// this is our endpoint route
import dbConnet from "@/config/db";
import PostItem from "@/models/PostItems";

dbConnet()

export async function GET() {
    // this symbol '-__v' means we do not want to select this from mongodb db
    const postItems = await PostItem.find().select('-__v');
    return Response.json(postItems)
    
}

export async function POST(request: Request) {
    // this symbol '-__v' means we do not want to select this from mongodb db and ...is a spread operator
    const postItem = await request.json();
    try {
        const saveItem = await new PostItem({...postItem}).save()
        return new Response(JSON.stringify(saveItem), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 201
        });

    } catch (error) {
        return new Response(JSON.stringify({ messages: 'SERVER ERROR'}),
    {
        status: 500,

    });
    }
   
    
}