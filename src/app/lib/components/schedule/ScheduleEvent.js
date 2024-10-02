import React from "react";
import MultiEvent from "./bits/MultiEvent";
import SingleEvent from "./bits/SingleEvent";
import DualTrack from "./bits/DualTrack";
import Link from "../primitives/Link";

export const ScheduleEvent = ({
  background,
  startTime,
  endTime,
  title,
  link,
  dualTrack,
  content,
}) => {
  return (
    <div className="pb-4">
      <div
        className={`sticky md:top-24 top-16 py-2 md:-translate-y-4 ${background} z-20 flex flex-row gap-8 items-center lg:justify-normal justify-between`}
      >
        <h3 className="font-semibold text-sm md:text-xl mt-2 mb-2 pt-0 md:w-auto w-20">
          {startTime} &ndash; {endTime}
        </h3>
        <h4 className="font-light text-sm md:text-xl mt-2 mb-2 p-0 md:text-left text-right flex md:flex-row flex-col md:gap-2">
          {title}
          {link ? <Link className={'text-black'} href={link.href}>{link.text}</Link> : null}
        </h4>
      </div>
      <div>
        {content?.map((content, key) =>
          determineContentType(content, dualTrack, key)
        )}
      </div>
      <hr className="border-t-2" />
    </div>
  );
};

function determineContentType(content, isDualTrack, key) {
  if (!isDualTrack) {
    if (content.title) {
      return <MultiEvent content={content} key={"me-" + key} />;
    } else if (content.title === null) {
      return (
        <div>
          <ul className="border-x-2 border-y-2 px-2 bg-white mb-4 py-4">
            {content.items.map((items) => (
              <SingleEvent content={items} key={`se-` + key} />
            ))}
          </ul>
        </div>
      );
    }
  } else {
    return (
      <div>
        <DualTrack content={content} key={`dt-${key}`} />
      </div>
    );
  }
}
