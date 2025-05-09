import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icon } from "lucide-react"
import { Inconsolata } from "next/font/google"
import Link from "next/link"
import { Icons } from "./icons"
import { MainNav } from "./main-nav"




const SiteHeader = () => {
    return (
    <header className="sticky top-0 w-full border-b border-border bg-bacground/95 backdrop-blur supports-[bacdrop-filter]:bg-background/60">
        <div className="cointainer flex h-14 max-w-screen-2xl items-center">
            <MainNav />
            <div className="flex flex-1 item-center justify-end space-x-2">
                <nav className="flex item-center">
                    {/* add social links */}
                    <Link 
                        href={siteConfig.links.github} 
                        target="_blank" rel="noreferral"
                        >
                        <div 
                            className={cn(
                                buttonVariants({ variant: "ghost"}), 
                                "w-10 px-0")}
                                >
                                    {/* Getting your social icons */}
                                <Icons.gitHub className="h-4 w-4" />
                                <span className="sr-only">Github</span>
                         </div>
                    </Link>

                    {/* TWITTER lINK */}
                    <Link 
                        href={siteConfig.links.twitter} 
                        target="_blank" rel="noreferral"
                        >
                        <div 
                            className={cn(
                                buttonVariants({ variant: "ghost"}), 
                                "w-10 px-0")}
                                >
                                    {/* Getting your social icons */}
                                <Icons.twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                         </div>
                    </Link>
                </nav>
            </div>
        
        </div>
    </header>
)
}
export default SiteHeader