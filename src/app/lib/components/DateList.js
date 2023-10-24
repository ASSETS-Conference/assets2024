import React from "react";

export default function DateList() {
  return (
    's'
  );
}
export function MonthContainer({monthName, year, eventItems }) {
    return (
        <div className="pt-10 w-[100%] flex flex-col md:flex-row items-start">
        <div className="flex-1">
          <p className="h2 uppercase">{`${monthName} ${year}`}</p>
        </div>
        <div className="flex-1 border-b-[1px] md:border-b-[2px] border-black w-[100%]">
          
        </div>
      </div>
    )
}
export function EventItem({date}) {
  return (
    <div className="mb-8">
      <p className="font-medium my-2 text-xl md:mt-2 md:text-2xl">title</p>
      <div className="flex flex-row gap-8">
        <p>03.10.2023</p>
        <p>11:59PM AOE</p>
      </div>
    </div>
  );
}
