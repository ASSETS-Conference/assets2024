"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

const NavDropdown = ({ items }) => {
    const pathname = usePathname();

    return (
        <ul>
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
    );
};

export default NavDropdown;
