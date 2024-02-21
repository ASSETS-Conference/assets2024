"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "./Link";

const NavDropdown = ({ items, visible }) => {
    const pathname = usePathname();

    return (
        visible && (
            <ul className="bg-theme-dark py-4 px-8 md:absolute md:top-16 md:left-0 md:min-w-[220px] flex flex-col gap-2">
                {items.map((item, i) => (
                    <li key={`nav-dropdown-item-${i}`}>
                        <Link
                            className={`underline hoctive:decoration-4 ${
                                pathname === item.href ? "decoration-4" : ""
                            }`}
                            href={item.href}
                            tabIndex="0"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    );
};

export default NavDropdown;
