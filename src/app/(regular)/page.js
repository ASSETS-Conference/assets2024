import Image from "@/app/lib/components/primitives/Image";
import { DateList } from "@/app/lib/components/DateList";
import Hero from "@/app/lib/components/Hero";
import Container from "@/app/lib/components/primitives/Container";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import {
  DOCTORAL_CONSORTIUM_DATES,
  EXPERIENCE_REPORTS_DATES,
  POSTER_DEMOS_DATES,
  STUDENT_RESEARCH_DATES,
  MAIN_DEADLINES,
  TECHNICAL_PAPERS_SUBPAGE_DEADLINES,
  WORKSHOP_PROPOSAL_DATES,
} from "@/app/lib/config/importantdates.config";
import { createJSON_LD, createMetadata } from "@/app/lib/utils/createMetadata";
import Alert from "@/app/lib/components/Alert";
import { mergeDates } from "@/app/lib/utils/mergeDates";

export const metadata = createMetadata({ title: "Home" });
export default function Home() {
  // const mergedDates = mergeDates(
  //     TECHNICAL_PAPERS_SUBPAGE_DEADLINES,
  //     POSTER_DEMOS_DATES,
  //     EXPERIENCE_REPORTS_DATES,
  //     DOCTORAL_CONSORTIUM_DATES,
  //     STUDENT_RESEARCH_DATES,
  //     WORKSHOP_PROPOSAL_DATES
  // );

  return (
    <>
      <main id="">
        <Hero />
        <Container id="content">
          <div className="pt-16 md:pt-18 pb-4">
            <Alert
              className={"mb-5"}
              raw={true}
              heading={"Registration is Open"}
            >
              <p className="text-md text-white">
                {`We have opened registration on the `}
                <Link className={"text-white"} href={"https://cvent.me/45nlmw"}>
                  CVENT Registration Site
                </Link>

                {` to support attendees who may need additional time to make plans (e.g., travel, visa). Full details of our in-person and virtual conference experiences will be published as they continue to become available.`}
              </p>
            </Alert>
            <Alert
              type={"changes"}
              className={"mb-5"}
              raw={true}
              heading={"Hotel booking is Live"}
            >
              {/* <div className=""> */}
              <p className="text-white break-words">
                {`The hotel is offering ASSETS attendees a group rate of CAD$199 per night. Please use the `}
                <Link
                  href="https://www.marriott.com/events/start.mi?id=1716409363485&key=GRP"
                  target="_blank"
                  colour={"secondary"}
                  className={"text-white"}
                >
                  {`ASSETS'24 Sheraton Hotel Newfoundland booking link`}
                </Link>
                {` to make your reservation.`}
              </p>
              <p className="text-white mt-4">
                {` If you find that the booking link says there is no availability
                for your desired dates, we recommend emailing `}
                <Link
                  className={"break-words"}
                  href={"mailto:reservations@sheratonhotelnewfoundland.com"}
                >
                  reservations@sheratonhotelnewfoundland.com
                </Link>
                {` to ask their help with checking availability and assisting with
                the booking. Please tell them that you are booking for
                ASSETS'24.`}
              </p>
              <p className="text-white mt-4">
                {`For more information, please see the `}
                <Link
                  href={"/attending/overview/"}
                >{`Attending Overview`}</Link>
                {` page.`}
              </p>
              {/* </div> */}
            </Alert>
          </div>
          <Section title="Important Dates" spacing={"none"}>
            <DateList
              dates={MAIN_DEADLINES}
              notice={{
                lowPriority: true,
                text: "All deadlines are 11:59 P.M. Anywhere on Earth (UTC -12:00).",
              }}
            />
          </Section>
          <Section title="ASSETS at a Glance">
            <p className="h3">{`The 26th International ACM SIGACCESS Conference on Computers and Accessibility.`}</p>
            <p>{`The ASSETS conference is the premier forum for presenting research on the design, evaluation, use, and education related to computing for people with disabilities and older adults. For those in Europe and Oceania, ASSETS is rated as Core A — a designation for the top academic conferences that are "highly respected in a discipline area" (Core A; Top 16%).`}</p>
            <p>
              {`We invite high-quality original submissions on topics relevant to computing and accessibility. All contributions are peer-reviewed by an international Program Committee. Accepted papers and the abstracts for posters and demonstrations, experience reports, and the student research competition will be archived in the ACM Digital Library. Authors of selected papers will be invited to submit extended versions of their papers to a special issue of the`}{" "}
              <Link
                href="https://dl.acm.org/journal/taccess"
                target="_blank"
                colour={"primary"}
              >{`ACM Transactions on Accessible Computing (TACCESS)`}</Link>
              .
            </p>
          </Section>
        </Container>
        <div className="bg-theme-dark/95 w-full">
          <Container>
            <Section
              title="Location & Venue"
              spacing={"bottom-only"}
              className={"pt-12"}
              invertColours={true}
            >
              <div className={"flex md:flex-row flex-col gap-12 items-center"}>
                <div className="flex flex-col flex-2 ">
                  <p>
                    {`The ASSETS 2024 Conference will be held at `}{" "}
                    <Link
                      // href="https://www.marriott.com/en-us/hotels/yytsi-sheraton-hotel-newfoundland/overview/"
                      href="https://www.marriott.com/events/start.mi?id=1716409363485&key=GRP"
                      target="_blank"
                      colour={"secondary"}
                      className={"text-white"}
                    >
                      Sheraton Hotel Newfoundland
                    </Link>{" "}
                    {`in downtown St. John's, Newfoundland and Labrador.`}
                  </p>
                  <p>
                    <strong>{`115 Cavendish Square, St. John's, Newfoundland and Labrador, Canada, A1C 3K2`}</strong>
                  </p>
                </div>

                <div className="object-cover mt-4">
                  <Image
                    unoptimized
                    width={600}
                    height={600}
                    className="aspect-[16/9] object-cover"
                    src="/assets/venue.webp"
                    alt="The Sheraton Hotel Newfoundland building in front of a night sky."
                  />
                </div>
              </div>
            </Section>
          </Container>
        </div>
      </main>
      {createJSON_LD({
        type: "Event",
        name: "ASSETS '24 Conference",
        alternateName:
          "The 26th International ACM SIGACCESS Conference on Computers and Accessibility",
        image: "https://assets24.sigaccess.org/ogp/opengraph2.jpg",
        url: "https://assets24.sigaccess.org/",
        typeSpecific: {
          startDate: "2024-10-27T16:00",
          endDate: "2024-10-30T17:45",
          eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            virtualLocationURL:
              "https://assets24.sigaccess.org/attending/registration/#virtual-attendance-option",
            name: "Sheraton Hotel Newfoundland",
            streetAddress: "115 Cavendish Square",
            locality: "St. John's",
            region: "Newfoundland and Labrador",
            country: "Canada",
            postalCode: "A1C 3K2",
          },
        },
      })}
    </>
  );
}
