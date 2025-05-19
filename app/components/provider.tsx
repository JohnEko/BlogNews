"use client"

import { ThemeProvider } from "next-themes";
import { Darker_Grotesque } from "next/font/google";
import { ReactNode } from "react";

// this class makes the system Darker_Grotesque, light or system in mode-toggle
export function Providers({children}: {children: ReactNode}) {
    return (
        <ThemeProvider 
            attribute="class" 
            defaultTheme="system" 
            enableSystem 
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}