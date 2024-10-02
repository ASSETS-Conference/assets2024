import React from "react";
import Container from "../primitives/Container";
import { ScheduleSection } from "./ScheduleSection";
import Footer from "../primitives/Footer";

export const Schedule = ({ events }) => {
  return (
    <div className="absolute left-0 w-[100vw] min-w-[100vw] ">
      {events.map((day, i) => {
        return (
          <div className={` py-4 ${determineBackground(i)}`} key={'div-sch-'+i}>
            <Container key={'container-s'+i}>
              <ScheduleSection key={'scs-'+i} day={day} background={determineBackground(i)} />
            </Container>
          </div>
        );
      })}
      <Container className={`${determineBackground(1)} w-full min-w-full`}>
        <div className="pt-4 pb-12 flex flex-col items-center align-middle justify-center w-full min-w-full">
          <p className="font-light text-sm md:text-xl  p-0 text-black/50">{`— End —`}</p>
          <p className="font-light text-xs md:text-base  p-0 text-black/50">{`See You Next Year! 👋`}</p>
          

        </div>
      </Container>
      <Footer />
    </div>
  );
};

const determineBackground = (i) => {
  return i % 2 === 0 ? "bg-[#F6F6F6]" : "bg-[#F2F2F2]";
};
