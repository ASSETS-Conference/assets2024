import React from "react";

export default function HeadingThree({
    children,
    colour = "text-primary-text-dark",
}) {
    return (
        <h3 className={`font-normal text-lg md:text-xl xl:text-3xl ${colour}`}>
            {children}
        </h3>
    );
}
