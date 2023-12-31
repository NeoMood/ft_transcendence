import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React from 'react'
import ContextProvider from './contextApi'
import Reload from './reload'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ping Pong',
  description: 'ft_transcendence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <div className=' w-[100vw] flex '>
            <ContextProvider>
              {/* <Reload> */}
                {children}
              {/* </Reload> */}
            </ContextProvider>
          </div>
        </body>
    </html>
  )
}
