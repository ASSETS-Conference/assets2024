import React from "react";

const MultiEvent = ({ content }) => {
  return (
    <div className="mb-4 px-0 py-2">
      <details open>
        <summary
          className="bg-theme-dark p-4 text-white list-item text-base font-bold cursor-pointer sticky top-[10.5rem] md:top-[8.75rem] z-10"
          id="title-region"
        >
          {content.title}
        </summary>
        <div
          className={`border-x-2 border-y-2 px-2 bg-white`}
          id="content-region"
        >
          <ul className=" mb-4">
            {content.items.map((item) => (
              <li>
                <p className="text-sm md:text-base font-semibold p-0 -mb-2">
                  {item.title}
                </p>
                <p className="text-xs md:text-sm leading-loose italic p-0 -mt-4">
                  {item.author}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
};

export default MultiEvent;
