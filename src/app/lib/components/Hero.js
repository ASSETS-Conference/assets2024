import React from "react";
import Container from "./primitives/Container";
import HeroCard from "./HeroCard";

export default function Hero() {
    return (
        <section className="bg-hero-img w-full min-h-[65vh] py-20 bg-cover bg-[center_center_1rem] relative flex items-center justify-start">
            <Container className={"flex-1"}>
                <div className="z-[20] w-full h-[100%] flex items-center justify-center lg:justify-start aspect aspect-video max-w-6xl">
                    <HeroCard />
                </div>
            </Container>
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black/80 to-black/0"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/30 to-black/0"
            />
        </section>
    );
}
