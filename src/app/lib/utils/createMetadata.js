/**
 * Generates valid metadata and ogp data per page.
 * @returns {import('next').Metadata} Metadata to be used by `page.js` elements.
 */
const createMetadata = ({ title }) => {

  /** @type {import('next').Metadata} */
  let md = {
    title: `ASSETS '24 | ${title}`,
    description:
      "The official website of The 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '24)",
    keywords: [
      "ASSETS 2024",
      "ASSETS'24",
      "SIGACCESS",
      "SIGCHI",
      "CHI",
      "Conference",
      "St. John's Conference",
      "Accessibility Conference",
    ],
    openGraph: {
      type: "website",
      url: "https://assets24.sigaccess.org/",
      title: `ASSETS '24 | ${title}`,
      description:
        "The official website of The 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '24)",
      siteName: "ASSETS '24",
      images: [
        {
          url: "https://assets24.sigaccess.org/ogp/opengraph2.jpg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@sigaccess",
      creator: "@sigaccess",
      title: `ASSETS '24 | ${title}`,
      description:
        "The official website of The 26th International ACM SIGACCESS Conference on Computers and Accessibility (ASSETS '24)",
      images: "https://assets24.sigaccess.org/ogp/opengraph2.jpg",
    },
  };

  return md;
};

export { createMetadata };
