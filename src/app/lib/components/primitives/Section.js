import React from 'react'

import { FaArrowRight } from 'react-icons/fa';

//TODO: add this into jsdoc
export default function Section({ title, children, className, spacing }) {
  const evalSpacing = () => {
    let setSpacing = '';

    switch (spacing) {
      case 'standard':
        setSpacing = 'py-16 md:py-20'
        break;
      case 'top-only':
        setSpacing = 'pt-16 md:pt-20'
        break;
      case 'bottom-only':
        setSpacing = 'pb-16 md:pb-20'
        break;
      default:
        break;
    }
    return setSpacing;
  }

  return (
    <section className={`${evalSpacing()} ${className}`}>
      <div className='mt-7 border-b-[2px] border-black'>

        <h1 className='flex flex-row justify-flex-start content-center gap-3 mb-6'><FaArrowRight aria-hidden className='mt-[.1rem]'/>{title}</h1>
      </div>
      <div className='mt-7'>
        {children}
      </div>
    </section>
  )
}
