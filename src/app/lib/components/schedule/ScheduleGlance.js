import React from "react";
import { SCHEDULE_GLANCE } from "../../config/scheduleglance.config";
import Link from "../primitives/Link";

const convertTimeToMinutes = (time) => {
    if (!time) return NaN;

    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    return Number(hours * 60 + minutes);
};

const CreateRow = (row) => {
    const startTimes = row
        .filter((event) => event.startTime)
        .map((event) => convertTimeToMinutes(event.startTime));
    let minTime = Math.min(...startTimes);
    let maxTime = Math.max(...startTimes);

    return (
        <tr className="border-none">
            {row.map((event, idx) => (
                <td
                    key={"glance-row-" + idx}
                    className={`!border-x !border-y-0 text-sm ${
                        event?.title === "Lunch"
                            ? "bg-theme-dark text-theme-off-white"
                            : ""
                    }`}
                >
                    <div
                        className={`flex flex-col`}
                        // ${
                        //     convertTimeToMinutes(event?.startTime) == minTime
                        //         ? "justify-start"
                        //         : convertTimeToMinutes(event?.startTime) ==
                        //         maxTime
                        //         ? "justify-end"
                        //         : "justify-center"
                        // }
                    >
                        <strong>
                            {event.startTime ? event.startTime : ""}
                            {event.endTime ? " - " + event.endTime : ""}
                        </strong>
                        {event.href ? (
                            <Link href={event.href}>{event?.title}</Link>
                        ) : (
                            <>{event?.title}</>
                        )}
                    </div>
                </td>
            ))}
        </tr>
    );
};

export const ScheduleGlance = () => {
    return (
        <div className="overflow-x-auto">
            <table className="border border-theme-dark">
                <thead>
                    <tr>
                        <th>Sunday, October 27, 2024</th>
                        <th>Monday, October 28, 2024</th>
                        <th>Tuesday, October 29, 2024</th>
                        <th>Wednesday, October 30, 2024</th>
                    </tr>
                </thead>
                <tbody className="border-none">
                    {SCHEDULE_GLANCE.map((row) => CreateRow(row))}
                </tbody>
            </table>
        </div>
    );
};
