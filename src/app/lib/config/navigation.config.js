const MENU_DATA = [
    { title: "Home", href: "/" },
    {
        title: "Authors",
        href: null,
        children: [
            { title: "Call for Papers", href: "/authors/call-for-papers/" },
            { title: "Workshop Proposals", href: "/authors/workshops/" },
        ],
    },
    {
        title: "Attending",
        href: null,
        children: [
            { title: "Overview", href: "/attending/overview/" },
            { title: "Registration", href: "/attending/registration/" },
        ],
    },
    {
        title: "Program",
        href: null,
        children: [
            { title: "Program", href: "/program/overview/" },
            { title: "Keynote", href: "/program/keynote/" },
        ],
    },
    {
        title: "Committees",
        href: null,
        children: [
            {
                title: "Organizing Committee",
                href: "/committees/organizing/",
            },
            { title: "Program Committee", href: "/committees/program/" },
            {
                title: "Policy on Program Committee",
                href: "/committees/policy/",
            },
        ],
    },
    {
        title: "Sponsors",
        href: null,
        children: [
            {
                title: "Sponsors",
                href: "/sponsors/",
            },
            {
                title: "Become a Sponsor",
                href: "/sponsors/become-a-sponsor/",
            },
        ],
    },
    { title: "Code of Conduct", href: "/code-of-conduct/" },
];

export { MENU_DATA };
