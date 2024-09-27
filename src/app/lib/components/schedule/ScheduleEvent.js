import React from "react";
import MultiEvent from "./ScheduleBits/MultiEvent";
import SingleEvent from "./ScheduleBits/SingleEvent";

export const ScheduleEvent = ({
  background,
  startTime,
  endTime,
  title,
  dualTrack,
  content,
}) => {
  return (
    <div className="pb-4">
      <div
        className={`sticky top-24 py-2 -translate-y-4 ${background} z-20 flex flex-row gap-8 items-center md:justify-normal justify-between`}
      >
        <h3 className="font-semibold md:text-xl mt-2 mb-2 pt-0 md:w-auto w-20">
          {startTime} &ndash; {endTime}
        </h3>
        <h4 className="font-light md:text-xl mt-2 mb-2 p-0 md:text-left text-right">
          {title}
        </h4>
      </div>
      <div>
        {content?.map((content) => determineContentType(content, dualTrack))}
      </div>
      <hr className="border-t-2" />
    </div>
  );
};

function determineContentType(content, isDualTrack) {
  if (!isDualTrack) {
    if (content.title) {
      return <MultiEvent content={content} />;
    } else if (content.title === null) {
      return (
        <div>
          <ul className="border-x-2 border-y-2 px-2 bg-white mb-4 py-4">
            {content.items.map((items) => (
              <SingleEvent content={items} />
            ))}
          </ul>
        </div>
      );
    }
  }
}
