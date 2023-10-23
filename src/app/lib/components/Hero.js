import React from "react";
import Container from "./primitives/Container";
import HeroCard from "./HeroCard";

export default function Hero() {
    return (
        <section className="bg-hero-img w-full h-screen bg-cover bg-center relative">
            <Container>
                <div className="z-[20] h-screen w-full flex items-center justify-center lg:justify-start">
                    <HeroCard />
                </div>
            </Container>
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-black/80 to-black/0" />
            <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/30 to-black/0" />
        </section>
    );
}
