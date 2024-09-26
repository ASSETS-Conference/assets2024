import React from "react";
import { ScheduleEvent } from "./ScheduleEvent";

export const ScheduleSection = ({ day, background }) => {
  return (
    <div className="min-w-full">
      <h2 className={`m-0 p-0 sticky top-0 pb-8 pt-8 z-30 ${background}`}>
        {day.date}
      </h2>
      <div className="min-w-full z-20">
        {day.events.map((event, i) => {
          return (
            <ScheduleEvent
              background={`${background}`}
              key={"se-" + i}
              title={event.title}
              startTime={event.startTime}
              endTime={event.endTime}
              content={event.content}
              dualTrack={event.dualTrack}
            />
          );
        })}
      </div>
    </div>
  );
};
