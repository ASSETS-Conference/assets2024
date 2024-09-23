import React from "react";

export const ScheduleEvent = ({
  startTime,
  endTime,
  title,
  dualTrack,
  content,
}) => {
  return (
    <div className="border-b-2 pb-4">
      <h3 className="font-medium text-xl mt-2 mb-2 p-0 sticky top-0">
        {startTime} - {endTime}
      </h3>
      <h4 className="font-normal text-lg m-0 p-0 sticky top-48">{title}</h4>
    </div>
  );
};
