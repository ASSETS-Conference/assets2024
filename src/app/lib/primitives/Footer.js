import React from "react";
import Container from "./Container";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="min-w-full bg-theme-dark text-theme-off-white">
      <Container className={"py-20"}>
        <div className="flex flex-col xl:justify-between md:justify-normal xl:flex-row">
          <div className="">
            <p className="text-xl font-bold xl:text-2xl">
              &copy; 2024 ASSETS 2024 Organizing Committee
            </p>
            <div className="mt-8 max-w-[100%] xl:max-w-[60%]">
              <p className="font-light">
                Please contact the{" "}
                <Link href="mailto:general-assets24@acm.org">General Chair</Link> for
                more information about the conference.
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
            <p className="text-2xl font-bold hidden xl:block">All rights reserved</p>
            <img className="mt-12 invert w-[200px] md:w-[40%] xl:w-auto " src="./assets/full-a24-logo.svg" alt="Assets 2024 Logo, displaying a lighthouse to the left and the words 'assets' in the middle."/>
          </div>
        </div>
      </Container>
    </footer>
  );
}
