/**
 * Converts current date format into a format that can be used by the Date object
 * @param {Array} args - any number of date objects defined in importantdates.config
 * @returns {Object} the merged, filtered, and formatted date object
 */
export function mergeDates(...args) {
    let allDates = [];
    args.forEach((dateObj) => {
        dateObj.forEach((dates) => {
            allDates.push(...dates.eventItems);
        });
    });

    // sort dates in ascending order
    allDates.sort((a, b) => {
        const aFormatted = new Date(formatDate(a.date));
        const bFormatted = new Date(formatDate(b.date));

        if (aFormatted > bFormatted) {
            return 1;
        }

        if (aFormatted < bFormatted) {
            return -1;
        }

        return a.title.localeCompare(b.title);
    });

    let mergedDates = {};
    allDates.forEach((date) => {
        // make key 'month year'
        let formatted = formatDate(date.date);
        let key = `${formatted.split(" ")[0]} ${formatted.split(" ")[2]}`;

        // if (new Date(formatted) < new Date().setHours(0, 0, 0, 0)) {
        //     return;
        // }

        if (!mergedDates.hasOwnProperty(key)) {
            mergedDates[key] = [];
        }

        // push title and full date
        mergedDates[key].push([date.title, date.date]);
    });

    // format dates into original format
    let formattedDates = [];
    Object.entries(mergedDates).forEach(([date, events]) => {
        let month = date.split(" ")[0];
        let year = date.split(" ")[1];
        let dateObj = {};

        dateObj["month"] = month;
        dateObj["year"] = year;
        dateObj["eventItems"] = events.map((event) => {
            let eventObj = {};

            eventObj["title"] = event[0];
            eventObj["date"] = event[1];
            eventObj["time"] = "11:59PM";

            return eventObj;
        });

        formattedDates.push(dateObj);
    });

    return formattedDates;
}

/**
 * Converts current date format into a format that can be used by the Date object
 * @param {string} inputDate - assumes format 'Wednesday, June 5th, 2024'
 * @returns {string} the formatted date - format 'June 5 2024'
 * @author ChatGPT
 */
export function formatDate(inputDate) {
    const parts = inputDate.split(", ");
    const dateString = parts[1].split(" ");
    const month = dateString[0];
    const day = dateString[1].replace(/(?:st|nd|rd|th)/, "");
    const year = parts[2];

    return `${month} ${day} ${year}`;
}
