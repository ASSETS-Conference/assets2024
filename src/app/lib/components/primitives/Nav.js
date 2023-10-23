'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const _MENU_DATA = [
    {title: 'Home', href: '/'},
    {title: 'Code of Conduct', href: '/code-of-conduct/'},
    {title: 'Organizing Committee', href: '/committees/organizing-committee/'},

  ]

  return (
    <nav className="min-w-full p-8 fixed top-0 z-[998] backdrop-blur-sm text-theme-off-white backdrop-blur-md">
        <ul className="min-h-full min-w-full flex flex-row justify-center items-center gap-16 font-medium">
          {_MENU_DATA.map((data, i)=><li><a key={`menu_item-${i}`} className={`underline hoctive:decoration-4 ${usePathname() === data.href ? 'decoration-4' : ''}`} href={data.href}>{data.title}</a></li>)}
        </ul>
    </nav>
  )
}