import React from "react";
import Container from "./Container";
import Link from "./Link";
import Image from "@/app/lib/components/primitives/Image";

export default function Footer() {
  return (
    <footer className="min-w-full bg-theme-dark text-theme-off-white">
      <Container className={"py-16 md:py-20"}>
        <div className="flex flex-col xl:justify-between md:justify-normal xl:flex-row">
          <div className="">
            <p className="text-xl font-bold xl:text-2xl">
              &copy; 2024 ASSETS 2024 Organizing Committee
            </p>
            <div className="mt-8 max-w-[100%] xl:max-w-[60%]">
              <p className="font-light">
                Please contact the{" "}
                <Link href="mailto:generalchair-assets24@acm.org">
                  General Chair
                </Link>{" "}
                for more information about the conference.
              </p>
              <p className="mt-4">
                Please contact the{" "}
                <Link href="mailto:web-assets24@acm.org">
                  Web and Graphics Design Chairs
                </Link>{" "}
                for website feedback and/or feature requests.
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold hidden xl:block text-right">
              All rights reserved
            </p>
            <Image
              unoptimized
              width={500}
              height={225}
              className="mt-12 w-[200px] md:w-[40%] xl:w-auto "
              src="/assets/logos/a24-full-logo-grey.svg"
              alt="Assets 2024 Logo, displaying a lighthouse to the left and the words 'assets' in the middle."
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
