import React from "react";
import adjustSrc from "../../utils/adjustSrc";

export default function Link({ children, href, target, className, colour }) {
    const colourSelect = (colour) =>
        colour === "primary" ? "text-link-underline-red" : "";

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
