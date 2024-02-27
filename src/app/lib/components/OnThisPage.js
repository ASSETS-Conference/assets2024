"use client";
import React, { useEffect, useState } from "react";
import Link from "./primitives/Link";

/**
 * Based off a tutorial:
 * @see https://blog.openreplay.com/creating-a-table-of-content-widget-in-react/
 */
export default function OnThisPage() {
  const [headings, setHeadings] = useState(null);

  useEffect(() => {
    const rawHeadings = document.querySelectorAll("section h1, h2, h3, h4");
    const headings = Array.from(rawHeadings).map((h) => {
      const level = Number(h.tagName.substring(1));
      return {
        id: h.id,
        text: h.textContent ?? "",
        level: level,
      };
    });
    setHeadings(headings);
  }, []);

  return (
    <div
      id="side-bar-content"
      className={`flex-1 min-w-[25%] max-w-[100%] lg:max-w-[25%] top-0 mb-4 ml-0 md:mb-16 md:ml-4 `}
    >
      <div className=" md:sticky  md:top-24 relative border-dashed border-theme-dark border-2 p-8 text-theme-dark">
        <p className="h3 font-bold">On this page</p>
        <nav className="mt-2">
          <ul className='list-["\2014"] flex flex-col gap-1'>
            {headings?.map((heading, i) => {
              return (
                <li key={heading.id === '' ? `heading-toc-${i}` : heading.id} style={{ marginLeft: `${heading.level}em` }}>
                  <Link className={`m-2`} href={`#${heading.id}`}>
                    {heading.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
