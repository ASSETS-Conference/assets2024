import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { AiFillCalendar } from "react-icons/ai";
import Image from "next/image";

export default function HeroCard() {
    return (
        <div className="2xl:w-[66%] xl:w-[90%] lg:w-[80%] w-[100%] min-h-[50%] h-fit z-10 bg-theme-dark md:p-16 sm:p-12 p-8 flex flex-col gap-16 justify-between">
            <div className="text-theme-off-white flex flex-col gap-8">
                <Image
                    unoptimized
                    width={500}
                    height={225}
                    className="w-[300px]"
                    src="./assets/logos/a24-simplified-logo-grey.svg"
                    alt="Assets 2024 Logo, displaying a lighthouse to the left and the words 'assets' in the middle."
                />
                <p>
                    The 26th International ACM SIGACCESS Conference on Computers
                    and Accessibility
                </p>
            </div>
            <div className="text-theme-off-white flex items-end md:flex-row flex-col md:gap-8 gap-4">
                <p className="md:w-[50%] w-full font-bold flex md:flex-col flex-row md:gap-1 gap-2">
                    <FaLocationPin className="text-xl" />
                    {`St. John's, Newfoundland and Labrador`}
                </p>
                <p className="md:w-[50%] w-full font-bold flex md:flex-col flex-row md:gap-1 gap-2">
                    <AiFillCalendar className="text-xl" />
                    October 28th - 30th, 2024
                </p>
            </div>
        </div>
    );
}
