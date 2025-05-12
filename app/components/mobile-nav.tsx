"use client"

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from "next/link";
import { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Icons } from './icons';
import { siteConfig } from '@/config/site';


export function MobileNav(){
  const [open, setOpen] = useState(false);
  return (
    //after this go back to site he
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant="outline" className="w-10 px-0 sm:hidden">
                <Menu className='h5 w-5' />
                <SheetTitle className='sr-only'>Toggle Theme</SheetTitle>
            </Button>
        </SheetTrigger>

        {/* adding content when the app is used on mobilelink
            when the app is on mobile mode this function represent mobile mode */}
        <SheetContent side='right'>
            <MobileLink onOpenChenge={setOpen} href="/" 
            className="flex items-center"
            >
                <Icons.logo className='mr-2 h-4 w-4' />
                <span className='font-bold'>{siteConfig.name}</span>
            </MobileLink>
            <div className='flex flex-col gap-3 mt-3'>
                <MobileLink onOpenChenge={setOpen} href="/blog">
                    Blog
                </MobileLink>
                <MobileLink onOpenChenge={setOpen} href="/about">
                    About
                </MobileLink>
                <Link target='_blank' 
                    rel='noreferrer' 
                    href={siteConfig.links.github}
                >
                    Github
                </Link>
                <Link target='_blank' 
                    rel='noreferrer' 
                    href={siteConfig.links.twitter}
                >
                    Twitter
                </Link>
            </div>
        </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChenge?: (open: boolean) => void;
    className?: string;
}

function MobileLink({
    href,
    onOpenChenge,
    children,
    className,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    return (
            <Link
                href={href}
                onClick={() => {
                    router.push(href.toString());
                    onOpenChenge?.(false);
                }}
                className={className}
                {...props}
                >
                {children}
            </Link>
    );  
}
