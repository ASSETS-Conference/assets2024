import React from 'react'

export default function Link({children, href, target, className, colour}) {
  
  const colourSelect = (colour) => colour === 'primary' ? 'text-link-underline-red' : '';

  return (
   <a href={href} target={target} className={` underline hoctive:decoration-4 ${className} ${colourSelect(colour)}`}>{children}</a>
  )
}
