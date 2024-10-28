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
              type={"changes"}
              heading="Workshops Registration Now Open"
              raw
            >
              <p>
                {`Workshop registration is now open, please take a look at the
                registration instructions `}
                <Link
                  href={
                    "https://assets24.sigaccess.org/attending/registration/#workshop-registration"
                  }
                >
                  {`here on the Registration information page.`}
                </Link>
              </p>
            </Alert>
            <Alert
              className={"mb-5"}
              raw={true}
              heading={"General Registration Open"}
            >
              <p className="text-md text-white">
                {`Registration is open, please register on the `}
                <Link className={"text-white"} href={"https://cvent.me/45nlmw"}>
                  CVENT Registration Site
                </Link>
                {`.`}
              </p>
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
          startDate: "2024-10-27T16:00-02:30",
          endDate: "2024-10-30T17:45-02:30",
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
