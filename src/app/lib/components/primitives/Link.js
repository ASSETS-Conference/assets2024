import React from 'react'
import NextLink from 'next/link';

export default function Link({children, href, target, className, colour}) {
  
  const colourSelect = (colour) => colour === 'primary' ? 'text-link-underline-red' : '';

  return (
   <NextLink href={href} target={target} className={` underline hoctive:decoration-4 ${className} ${colourSelect(colour)}`}>{children}</NextLink>
  )
}
