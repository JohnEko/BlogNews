"use client"

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from "next/link";
import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


export default function MobileNav(){
  const [open, setOpen] = useState(false);
  return (
    //after this go back to site he
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant="outline" className="w-10 px-0 sm:hidden">
                <Menu className='h5 w-5' />
                <span className='sr-only'>Toggle Theme</span>
            </Button>
        </SheetTrigger>
        <SheetContent side='right'></SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChenge?: (open: boolean) => void;
}

function MobileLink({
    href,
    onOpenChenge,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter()
    return <Link
                href={href}
                onClick={() => {
                    router.push(href.toString());
                    onOpenChenge?.(false);
                }}
                {...props}
                >
                {children}
            </Link>
            
}
