'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/src/store'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'yskills',
//   description: 'improve your knowledge',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' h-full'}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
