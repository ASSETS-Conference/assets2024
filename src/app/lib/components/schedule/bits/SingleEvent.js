import React from "react";

const SingleEvent = ({ content }) => {
  return (
    // <ul className="">
    <li>
      <p className="text-xs md:text-base font-semibold p-0 -mb-2">
        {content.title}
      </p>
      <p className="text-[0.65rem] md:text-sm leading-relaxed italic p-0 -mt-4">
        {content.author}
      </p>
    </li>
    // </ul>
  );
};

export default SingleEvent;
