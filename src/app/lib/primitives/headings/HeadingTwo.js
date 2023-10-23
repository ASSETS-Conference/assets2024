import React from "react";

export default function HeadingTwo({
    children,
    colour = "text-primary-text-dark",
}) {
    return (
        <h2 className={`font-bold text-xl md:text-2xl xl:text-4xl ${colour}`}>
            {children}
        </h2>
    );
}
