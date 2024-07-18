const MAIN_DEADLINES = [
    {
        month: "March",
        year: "2024",
        eventItems: [
            {
                title: "Deadline for Requesting Mentors",
                date: "Wednesday, March 20th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "April",
        year: "2024",
        eventItems: [
            {
                title: "Technical Papers: Submission Deadline",
                date: "Wednesday, April 24th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "June",
        year: "2024",
        eventItems: [
            {
                title: "Technical Papers: Author Rebuttal Period Opens",
                date: "Wednesday, June 5th, 2024",
                time: "11:59PM",
            },
            {
                title: "Technical Papers: Author Rebuttal Period Closes",
                date: "Wednesday, June 12th, 2024",
                time: "11:59PM",
            },
            {
                title: "Technical Papers: Acceptance Decisions Sent",
                date: "Wednesday, June 26th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Submission Deadline",
                subtitle:
                    "For Posters and Demos, Experience Reports, DC, SRC and Workshops",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
            {
                title: "Cover letter, Research Project Summary, CV Submission Due",
                subtitle: "For Doctoral Consortium Only",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
            {
                title: "Advisor's Letter of Recommendation Due",
                subtitle: "For Doctoral Consortium Only",
                date: "Wednesday, July 10th, 2024",
                time: "11:59PM",
            },
            {
                title: "Technical Papers: Camera-ready Deadline",
                date: "Wednesday, July 24th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Technical Papers: Video Presentation Deadline",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Notification of Acceptance",
                subtitle:
                    "For Posters, Experience Reports, DC, SRC and Workshops",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Camera Ready Deadline",
                subtitle:
                    "For Posters and Demos, Experience Reports, SRC, and Workshops",
                date: "Wednesday, August 14th, 2024",
                time: "11:59PM",
            },
            {
                title: "Video Presentations Submission Deadline",
                subtitle: "For Posters, Experience Reports, DC and SRC",
                date: "Wednesday, August 28th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "October",
        year: "2024",
        eventItems: [
            {
                title: "ASSETS'24 Workshops",
                date: "Week of October 21st, 2024",
                time: undefined,
            },
        ],
    },
];

const TECHNICAL_PAPERS_SUBPAGE_DEADLINES = [
    {
        month: "April",
        year: "2024",
        eventItems: [
            {
                title: "Technical Paper submission deadline",
                date: "Wednesday, April 24th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "June",
        year: "2024",
        eventItems: [
            {
                title: "Initial Technical Paper reviews sent to authors, rebuttal phase opens",
                date: "Wednesday, June 5th, 2024",
                time: "11:59PM",
            },
            {
                title: "Rebuttal phase closes",
                date: "Wednesday, June 12th, 2024",
                time: "11:59PM",
            },
            {
                title: "Technical Paper acceptance decisions sent to authors",
                date: "Wednesday, June 26th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Camera-ready deadline",
                date: "Wednesday, July 24th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Video presentation",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
        ],
    },
];

const POSTER_DEMOS_DATES = [
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Posters and Demos Submission Deadline",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Notification of Acceptance",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Camera Ready Deadline",
                date: "Wednesday, August 14th, 2024",
                time: "11:59PM",
            },
            {
                title: "Video Presentations Submission Deadline",
                date: "Wednesday, August 28th, 2024",
                time: "11:59PM",
            },
        ],
    },
];

const EXPERIENCE_REPORTS_DATES = [
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Experience Reports Submission Deadline",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Notification of Acceptance",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Final Versions of Experience Reports Due",
                date: "Wednesday, August 14th, 2024",
                time: "11:59PM",
            },
            {
                title: "Video Presentations Submission Deadline",
                date: "Wednesday, August 28th, 2024",
                time: "11:59PM",
            },
        ],
    },
];

const DOCTORAL_CONSORTIUM_DATES = [
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Cover letter, Research Project Summary, CV Submission Due",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
            {
                title: "Advisor's Letter of Recommendation Due",
                date: "Wednesday, July 10th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Notification of Acceptance",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Video Presentation Deadline",
                date: "Wednesday, August 28th, 2024",
                time: "11:59PM",
            },
        ],
    },
];

const STUDENT_RESEARCH_DATES = [
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Initial Submissions Deadline",
                date: "Wednesday, July 3rd, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Acceptance Decisions Released",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Final Versions Deadline",
                date: "Wednesday, August 14th, 2024",
                time: "11:59PM",
            },
            {
                title: "Video Presentations Submission Deadline",
                date: "Wednesday, August 28th, 2024",
                time: "11:59PM",
            },
        ],
    },
];

const WORKSHOP_PROPOSAL_DATES = [
    {
        month: "July",
        year: "2024",
        eventItems: [
            {
                title: "Submission deadline",
                date: "Wednesday, July 3th, 2024",
                time: "11:59PM",
            },
            {
                title: "Open Discussion (via PCS)",
                date: "Sunday, July 10th - Sunday, July 24th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "August",
        year: "2024",
        eventItems: [
            {
                title: "Notification of Acceptance",
                date: "Wednesday, August 7th, 2024",
                time: "11:59PM",
            },
            {
                title: "Workshop Website Online",
                date: "Monday, August 12th, 2024",
                time: "11:59PM",
            },
            {
                title: "Camera-ready Deadline",
                date: "Wednesday, August 14th, 2024",
                time: "11:59PM",
            },
        ],
    },
    {
        month: "October",
        year: "2024",
        eventItems: [
            {
                title: "ASSETS'24 Workshops",
                date: "Week of October 21st, 2024",
                time: undefined,
            },
        ],
    },
];

export {
    MAIN_DEADLINES,
    POSTER_DEMOS_DATES,
    EXPERIENCE_REPORTS_DATES,
    DOCTORAL_CONSORTIUM_DATES,
    STUDENT_RESEARCH_DATES,
    WORKSHOP_PROPOSAL_DATES,
    TECHNICAL_PAPERS_SUBPAGE_DEADLINES,
};
