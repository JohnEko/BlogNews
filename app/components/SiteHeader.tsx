import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "./icons"
import { MainNav } from "./main-nav"

import { ModeToggle } from "./mode-toggle"
import { MobileNav } from "./mobile-nav"




export function SiteHeader()  {
    return (
        <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
            <MainNav />
            <div className="flex flex-1 items-center justify-end space-x-2">
                <nav className="flex items-center">
                    {/* add social links */}
                    <Link 
                        href={siteConfig.links.github} 
                        target="_blank" 
                        rel="noreferral"
                        >
                            <div 
                                className={cn(
                                    buttonVariants({ variant: "ghost"}), 
                                    "w-10 px-0 hidden sm:inline-flex"
                                )}
                            >
                                    {/* Getting your social icons */}
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">Github</span>
                         </div>
                    </Link>

                    {/* TWITTER lINK */}
                    <Link 
                        href={siteConfig.links.twitter} 
                        target="_blank" 
                        rel="noreferral"
                        >
                        <div 
                            className={cn(
                                buttonVariants({ variant: "ghost"}), 
                                "w-10 px-0 hidden sm:inline-flex")}
                                >
                                    {/* Getting your social icons */}
                                <Icons.twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                         </div>
                    </Link>
                    <ModeToggle />
                    <MobileNav />
                </nav>
            </div>
        
        </div>
    </header>
)
}
