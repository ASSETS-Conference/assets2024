const MENU_DATA = [
  { title: "Home", href: "/" },
  {
    title: "Authors",
    href: null,
    children: [
      { title: "Call for Papers", href: "/authors/call-for-papers/" },
      {
        title: "Technical Papers",
        href: "/authors/call-for-papers/technical-papers",
      },
      { title: "Posters and Demos", href: "/authors/posters-and-demos/" },
      { title: "Doctoral Consortium", href: "/authors/doctoral-consortium/" },
      { title: "Workshop Proposals", href: "/authors/workshops/" },
      {
        title: "Experience Reports",
        href: "/authors/experience-reports",
      },
      {
        title: "Student Research Competition",
        href: "/authors/student-research-competition",
      },
      { title: "Mentoring", href: "/authors/mentoring" },
    ],
  },
  {
    title: "Additional Resources",
    href: null,
    children: [
      {
        title: "Creating Accessible ACM Conference Papers",
        href: "/resources/creating-a11y-papers",
      },
      {
        title: "Submission Templates",
        href: "/resources/submission-templates",
      },
      // { title: "Workshop Proposals", href: "/authors/workshops/" },
    ],
  },
  // {
  //     title: "Attending",
  //     href: null,
  //     children: [
  //         { title: "Overview", href: "/attending/overview/" },
  //         { title: "Registration", href: "/attending/registration/" },
  //     ],
  // },
  // {
  //     title: "Program",
  //     href: null,
  //     children: [
  //         { title: "Program", href: "/program/overview/" },
  //         { title: "Keynote", href: "/program/keynote/" },
  //     ],
  // },
  {
    title: "Committees",
    href: null,
    children: [
      {
        title: "Organizing Committee",
        href: "/committees/organizing/",
      },
      { title: "Program Committee", href: "/committees/program/" },
      // {
      //     title: "Policy on Program Committee",
      //     href: "/committees/policy/",
      // },
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
