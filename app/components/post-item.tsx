'use client'

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";



interface PostItemProps {
    id: string;
    title: string;
    description: string;
    date: string;
}
export function PostItem({id, title, description, date}: PostItemProps){

    
    return <article className="flex flex-col gap-2 border-border border-b py-3">
                <div>
                    <h2 className="text-2xl font-bold">
                        <Link href={id}>{title}</Link>
                    </h2>
                </div>
        {/* this div will handle all our description, image and other things not on the front page */}
                <div className="max-w-none text-muted-foreground">{description}</div>
                <div className="flex justify-between items-center">
                    <dl>
                        {/* This will be the data parse trough the website */}
                        <dt className="sr-only">Published On</dt>
                        <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                            {/* we can use calendar icon from lucid react */}
                            <Calendar className="h-4 w-4" />
                            <time dateTime={date}>{date}</time>
                        </dd>

                    </dl>
                    <Link href={id} className={cn(buttonVariants({variant: "link"}), "py-0")}>
                        Read more 
                    </Link>
                </div>

            </article>
}