import React from 'react'

export default function Nav() {
  return (
    <nav className="min-w-full p-8 fixed top-0 z-[998] backdrop-blur-sm text-theme-off-white backdrop-blur-md">
        <ul className="min-h-full min-w-full flex flex-row justify-center items-center gap-16 font-medium">
            <li ><a href='/'>Home</a></li>
            <li><a href='/code-of-conduct'>Code of Conduct</a></li>
            <li><a href='/committees/organizing-committee'>Organizing Committee</a></li>
        </ul>
    </nav>
  )
}
