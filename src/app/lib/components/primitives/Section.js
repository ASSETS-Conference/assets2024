import React from 'react'

import { FaArrowRight } from 'react-icons/fa';

//TODO: add this into jsdoc
export default function Section({ title, children, className, spacing }) {
  const evalSpacing = () => {
    let setSpacing = '';

    switch (spacing) {
      case 'standard':
        setSpacing = 'py-20'
        break;
      case 'top-only':
        setSpacing = 'pt-20'
        break;
      case 'bottom-only':
        setSpacing = 'pb-20'
        break;
      default:
        break;
    }
    return setSpacing;
  }

  return (
    <section className={`${evalSpacing()} ${className}`}>
      <div className='flex flex-row justify-flex-start content-center gap-3 mt-7 font-bold text-2xl md:text-3xl xl:text-5xl border-b-[2px] border-black'>
        <FaArrowRight className='mt-[.1rem]'/>
        <h1 className='mb-6'>{title}</h1>
      </div>
      <div className='mt-7'>
        {children}
      </div>
    </section>
  )
}
