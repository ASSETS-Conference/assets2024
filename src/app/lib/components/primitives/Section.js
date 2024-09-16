import React from 'react'

import { FaArrowRight } from 'react-icons/fa';
import { makeAttributeSafe } from '../../utils/basics';

/**
 * 
 * @param {React.PropsWithChildren} props
 * @param {String} props.title The title of the overarching section
 * @param {React.ReactNode} props.children Children placed within the 
 *  
 * @returns 
 */
export default function Section({ title, children, className, spacing, id, invertColours}) {

  const generateID = () => {
    return makeAttributeSafe(title).toLowerCase();
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
    <section className={`${evalSpacing()} ${className} ${invertColours ? 'text-white' : 'text-black'}`}>
      <div className={`mt-7 border-b-[2px]  ${invertColours ? 'border-white' : 'border-black'}`}>
        <h1  id={id ? id : generateID()}  className='flex flex-row justify-flex-start content-center gap-3 mb-6 max-w-[30ch] scroll-m-36'><FaArrowRight aria-hidden className='mt-[.1rem] min-w-[1em] aspect-square'/>{title}</h1>
      </div>
      <div className='mt-7'>
        {children}
      </div>
    </section>
  )
}
