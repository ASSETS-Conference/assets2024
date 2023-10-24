import React from "react";
import Container from "./primitives/Container";

export default function Banner({ heading, subheading }) {
    return (
        <div className="h-[35vh] w-full relative overflow-hidden bg-hero-img bg-center bg-cover text-theme-off-white">
            <Container className="z-[50] relative h-full flex flex-col gap-3 justify-end py-6">
                <h1 className="text-6xl">{heading}</h1>
                <p>{subheading}</p>
            </Container>
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-[75%] bg-gradient-to-b from-black/80 to-black/0"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-t from-black/70 to-black/0"
            />
        </div>
    );
}
