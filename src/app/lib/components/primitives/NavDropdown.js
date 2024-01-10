"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const NavDropdown = ({ items, visible }) => {
    const pathname = usePathname();

    return (
        visible && (
            <ul className="bg-theme-dark py-4 px-8 md:absolute md:top-16 md:left-0 md:min-w-[220px] flex flex-col gap-2">
                {items.map((item) => (
                    <li>
                        <a
                            className={`underline hoctive:decoration-4 ${
                                pathname === item.href ? "decoration-4" : ""
                            }`}
                            href={item.href}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    );
};

export default NavDropdown;
