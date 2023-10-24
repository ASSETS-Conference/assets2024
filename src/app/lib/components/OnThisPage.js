"use client";
import React, { useEffect, useState } from "react";
import Link from "./primitives/Link";

export default function OnThisPage() {
  const [headings, setHeadings] = useState(null);

  useEffect(() => {
    const rawHeadings = document.querySelectorAll(
      "section h1, h2, h3, h4"
    );
    const headings = Array.from(rawHeadings).map((h)=> {
      return {
        id: h.id,
        text: h.textContent ?? "",
        level: Number(h.tagName.substring(1)),
      }
    })
    setHeadings(headings);
  }, []);


  
  return (
    <div
      id="side-bar-content"
      aria-hidden="true"
      className={`flex-1 min-w-[25%] top-0 mb-4 ml-0 md:mb-16 md:ml-4 `}
    >
      <div className=" md:sticky  md:top-24 relative border-dashed border-theme-dark border-2 p-8 text-theme-dark">
        <p className="h3 font-bold">On this page</p>
        <nav className="mt-2">
          <ul className='list-["\2014"]'> 
            {headings?.map(heading => (
              <li key={heading.id} className={`mx-${heading.level > 1 ? heading.level*4 : '2'}`}>
                <Link className={`m-2`} href={`#${heading.id}`}>{heading.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
