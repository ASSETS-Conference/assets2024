import React from "react";
import { formatDate } from "../utils/mergeDates";

export function DateList({ dates, notice }) {
    return dates && dates.length ? (
        <>
            {notice ? (
                <div className="pl-4 flex flex-row items-center gap-3">
                    <p className=" bg-theme-blue text-white ml-[-1rem] p-2 font-bold">
                        Notice:
                    </p>
                    <p className="mb-[1rem]">{notice}</p>
                </div>
            ) : null}
            {dates.map((date, i, all) => {
                return (
                    <MonthContainer
                        key={`month_container-${i}`}
                        isLast={all.length - 1 === i}
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
                <p className="h3"> </p>
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
    // const formatted = new Date(`${monthName} 1, ${year}`);
    // const endOfMonth = new Date(
    //     formatted.getFullYear(),
    //     formatted.getMonth() + 1,
    //     0
    // ).getTime();
    // const isPast = endOfMonth < new Date().setHours(0, 0, 0, 0);

    return (
        <div className={`pt-10 w-[100%] flex flex-col md:flex-row items-start`}>
            <div className="flex-1">
                <p
                    className={`h2 uppercase ${
                        false ? "opacity-50" : "opacity-100"
                    }`}
                >{`${monthName} ${year}`}</p>
            </div>
            <div
                className={`flex-1 border-black w-[100%] ${
                    isLast
                        ? `border-b-[0px]`
                        : "border-b-[1px] md:border-b-[2px]"
                }`}
            >
                {eventItems.map((event, i) => {
                    return (
                        <EventItem
                            key={`event-item-${i}`}
                            title={event.title}
                            subtitle={event.subtitle}
                            date={event.date}
                            time={event.time}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export function EventItem({ title, subtitle, date, time }) {
    // const isPast = new Date(formatDate(date)) < new Date().setHours(0, 0, 0, 0);

    return (
        <div className={`mb-8 ${false ? "opacity-50" : "opacity-100"}`}>
            <p className="font-medium my-2 text-xl md:mt-2 md:text-2xl">
                {title}
            </p>
            {subtitle && (
                <p className="mb-2 !-mt-2 text-sm">
                    <em>{subtitle}</em>
                </p>
            )}
            <div className="grid grid-cols-2 gap-8">
                <p>{date}</p>
                {time ? <p className="!mt-0">{time} AOE</p> : null}
            </div>
        </div>
    );
}
