import React from "react";
import Details from "../../Details";

const MultiEvent = ({ content }) => {
  return (
    <div className="mb-4 px-0 py-2">
      <Details
        open
        summary={content.title}
        className="sticky top-[8.5rem] md:top-[8.75rem] z-10"
      >
        <div
          className={`border-x-2 border-y-2 px-2 bg-white`}
          id="content-region"
        >
          {content.isNumbered ? (
            // In this case, we have a list in-which the elements are numbered (voting IDs for example)
            <ol
              className="mb-4 list-decimal marker:md:text-base marker:text-xs"
              start={content.startsFrom ?? 0}
            >
              {content.items.map((item, key) => (
                <ListItem item={item} key={key} />
              ))}
            </ol>
          ) : (
            <ul className="mb-4">
              {content.items.map((item, key) => (
                <ListItem item={item} key={`me-li-${key}`} />
              ))}
            </ul>
          )}
        </div>
      </Details>
    </div>
  );
};

const ListItem = ({ item }) => {
  return (
    <li>
      <p className="text-xs md:text-base font-semibold p-0 -mb-2">
        {item.title}
      </p>
      <p className="text-[0.65rem] md:text-sm leading-relaxed italic p-0 -mt-4">
        {item.author}
      </p>
    </li>
  );
};

export default MultiEvent;
