import React from "react";
import Container from "../primitives/Container";
import { ScheduleSection } from "./ScheduleSection";
import Footer from "../primitives/Footer";

export const Schedule = ({ events }) => {
  return (
    <div className="absolute left-0 w-[100vw] min-w-[100vw] ">
      {events.map((day, i) => {
        return (
          <div className={` py-4 ${determineBackground(i)}`}>
            <Container>
              <ScheduleSection day={day} background={determineBackground(i)} />
            </Container>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

const determineBackground = (i) => {
  return i % 2 === 0 ? "bg-theme-off-white/20" : "bg-theme-off-white/30";
};
