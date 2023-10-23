import React from 'react'

export default function Link({children, href, className}) {
  return (
   <a href={href} className={` underline hoctive:decoration-4 ${className}`}>{children}</a>
  )
}
