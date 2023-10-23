import React from "react";

export default function HeadingOne({
    children,
    colour = "text-primary-text-dark",
}) {
    return (
        <h1 className={`font-bold text-2xl md:text-3xl xl:text-5xl ${colour}`}>
            {children}
        </h1>
    );
}
