"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
    const pathname = usePathname();
    const [backgroundVisible, setBackgroundVisible] = useState(false);
    const [mobileViewVisible, setMobileViewVisible] = useState(false);

    const _MENU_DATA = [
        { title: "Home", href: "/" },
        // here for easy access, remove later
        { title: "Workshop Proposals", href: "/authors/workshops" },
        { title: "Code of Conduct", href: "/code-of-conduct/" },
        {
            title: "Organizing Committee",
            href: "/committees/organizing-committee/",
        },
    ];

    useEffect(() => {
        // adds background to navbar when user scrolls
        const toggleBackground = () => {
            if (window.scrollY > 100) {
                setBackgroundVisible(true);
            } else {
                setBackgroundVisible(false);
            }
        };

        window.addEventListener("scroll", toggleBackground);
    }, []);

    return (
        <nav
            className={`min-w-full p-6 fixed top-0 z-[998] text-theme-off-white transition-all ease-in-out duration-300 ${
                backgroundVisible || mobileViewVisible ? "bg-theme-dark" : ""
            }`}
        >
            <div
                onClick={() => setMobileViewVisible(!mobileViewVisible)}
                className="sm:hidden w-full flex justify-between items-center"
            >
                <img aria-hidden="true" className={`self-start w-5 ${ backgroundVisible || mobileViewVisible ? 'visible' : 'invisible'}`} src="/assets/logos/a24-lighthouse-grey.svg" alt="An image of a lighthouse used as the ASSETS 2024 Logo"/>
                {mobileViewVisible ? (
                    <MdOutlineClose className="text-2xl cursor-pointer" />
                ) : (
                    <AiOutlineMenu className="text-xl cursor-pointer" />
                )}
            </div>
            <ul
                className={`min-h-full min-w-full sm:flex sm:flex-row flex-col justify-center items-center sm:opacity-100 gap-16 font-medium sm:opacity-100 ${
                    mobileViewVisible ? "opacity-100 flex" : "opacity-0 hidden"
                }`}
            >
                {_MENU_DATA.map((data, i) => (
                    <li key={`menu_item-${i}`}>
                        <a
                            className={`underline hoctive:decoration-4 ${
                                pathname === data.href ? "decoration-4" : ""
                            }`}
                            href={data.href}
                        >
                            {data.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
