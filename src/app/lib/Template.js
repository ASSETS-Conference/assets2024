import { Inter } from 'next/font/google'
import React from 'react'
import SkipToMainContent from './SkipToMainContent'

const inter = Inter({ subsets: ['latin'] })

/**
 * Creates a template for the application with a Skip To Main content link already included.
 * @param {import('react').PropsWithChildren} children The children to be displayed within the template
 * @param {string} className The class applied to the `<main/>` element.
 * @returns 
 */
export default function Template({className, children }) {
  return (
    <html lang="en">
      <body className={inter.className}><SkipToMainContent/>{children}</body>
    </html>
  )
}


