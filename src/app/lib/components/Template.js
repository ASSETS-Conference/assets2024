import { Inter } from "next/font/google";
import React from "react";
import SkipToMainContent from "./SkipToMainContent";
import Footer from "./primitives/Footer";
import Nav from "./primitives/Nav";
// import { BackToTop } from './BackToTop'

const inter = Inter({ subsets: ["latin"] });

/**
 * Creates a template for the application with a Skip To Main content link already included.
 * @param {import('react').PropsWithChildren} children The children to be displayed within the template
 * @param {string} className The class applied to the `<main/>` element.
 * @returns
 */
export default function Template({ className, children, noFooter, noStickyMenu=false }) {
  return (
    <html lang="en">
      <body className={inter.className} id="top">
        <SkipToMainContent />
        <Nav noStickyMenu={noStickyMenu} />
        {children}
        {/* <BackToTop/> */}
        {noFooter ? null : <Footer/>}
      </body>
    </html>
  );
}
