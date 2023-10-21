import React from 'react'

/**
 * This element helps screen readers and other tabbed navigation users skip to the main content in the page. 
 * @see https://design-system.service.gov.uk/components/skip-link/
 * 
 * TODO: Make this match theme colours.
 */
export default function SkipToMainContent() {
  return (
    <a tabIndex={1} href='#content' className='absolute bg-slate-700 
    text-neutral-100 border-2/2 border-solid
    border-indigo-500 -z-999 -left-[999px] 
    top-auto overflow-hidden hoctive:left-auto focus:z-999 
    hoctive:p-2 hoctive:w-screen hoctive:overflow-hidden'
    >Skip to main content</a>
  )
}