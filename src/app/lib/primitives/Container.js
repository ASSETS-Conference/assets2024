import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={`max-w-[75%] m-auto 2xl:max-w-[2560px] 2xl:px-80 xl:max-w-[100%] xl:px-80 md:max-w-[100%] md:px-40 ${className} `}>
      {children}
    </div>
  )
}
