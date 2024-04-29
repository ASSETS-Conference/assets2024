import React from 'react'

import { FaArrowRight } from 'react-icons/fa';

export default function Section({ title, children, className, spacing, id }) {

  const generateID = () => {
    return title.replace(/\s/g, '-').toLowerCase();
  }
  const evalSpacing = () => {
    let setSpacing = 'py-16 md:py-20';

    switch (spacing) {
      case 'standard':
        setSpacing = 'py-16 md:py-18'
        break;
      case 'top-only':
        setSpacing = 'pt-16 md:pt-18'
        break;
      case 'bottom-only':
        setSpacing = 'pb-16 md:pb-18'
        break;
      case 'none':
        setSpacing = ''
        break;
      default:
        setSpacing = 'py-16 md:py-18'
        break;
    }
    
    return setSpacing;
  }

  return (
    <section className={`${evalSpacing()} ${className}`}>
      <div className='mt-7 border-b-[2px] border-black'>
        <h1  id={id ? id : generateID()}  className='flex flex-row justify-flex-start content-center gap-3 mb-6 max-w-[30ch]'><FaArrowRight aria-hidden className='mt-[.1rem] min-w-[1em] aspect-square'/>{title}</h1>
      </div>
      <div className='mt-7'>
        {children}
      </div>
    </section>
  )
}
