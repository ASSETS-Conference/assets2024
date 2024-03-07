import React from "react";
import NextLink from "next/link";

export default function Link({ children, href, target, className, colour }) {
    const colourSelect = (colour) =>
        colour === "primary" ? "text-link-underline-red" : "";

    function adjustSrc(src) {
        const basePath = process.env.NEXT_PUBLIC_IN_GITHUB_ACTIONS
            ? "/assets2024"
            : "";
        const url = src.startsWith("/")
            ? `${basePath}${src}`
            : `${basePath}/${src}`;
        return `${url}`;
    }

    return (
        <a
            href={adjustSrc(href)}
            target={target}
            className={` underline hoctive:decoration-4 ${className} ${colourSelect(
                colour
            )}`}
        >
            {children}
        </a>
    );
}
