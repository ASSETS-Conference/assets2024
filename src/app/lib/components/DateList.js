import React from "react";

export function DateList({ dates }) {
  return dates && dates.length ? (
    <>
      {dates.map((date, i, all) => {
        return (
          <MonthContainer
            key={`month_container-${i}`}
            isLast={all.length-1 === i}
            monthName={date.month}
            year={date.year}
            eventItems={date.eventItems}
          />
        );
      })}
    </>
  ) : (
    <div className="w-[100%] flex flex-col md:flex-row items-start">
      {/* <div className="flex-1">
        <p className="h3">{' '}</p>
      </div> */}
      <div className="flex-1">
        <p className="font-light h3 mt-12 md:mt-24">
          {"Dates aren't out just yet "}&mdash; check back later!
        </p>
      </div>
    </div>
  );
}
export function MonthContainer({ monthName, year, eventItems, isLast }) {
  return (
    <div className="pt-10 w-[100%] flex flex-col md:flex-row items-start">
      <div className="flex-1">
        <p className="h2 uppercase">{`${monthName} ${year}`}</p>
      </div>
      <div className={`flex-1 border-black w-[100%] ${isLast ? `border-b-[0px]` : 'border-b-[1px] md:border-b-[2px]'}`}>
        {eventItems.map((event, i) => {
          return <EventItem key={`event-item-${i}`} title={event.title} date={event.date} time={event.time} />;
        })}
      </div>
    </div>
  );
}
export function EventItem({ title, date, time }) {
  return (
    <div className="mb-8">
      <p className="font-medium my-2 text-xl md:mt-2 md:text-2xl">{title}</p>
      <div className="flex flex-row gap-8">
        <p>{date}</p>
        <p>{time} AOE</p>
      </div>
    </div>
  );
}
