"use client" // this is a client component
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
