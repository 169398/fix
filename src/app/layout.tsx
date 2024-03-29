import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/Theme-provider"
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LeaveTracker',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>


<html lang="en">
   <body className={inter.className}> 
   <ThemeProvider
   attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
       >
         {children}
   </ThemeProvider>
   
   </body>
 </html>
    </ClerkProvider>
 
    
   
  )
}
