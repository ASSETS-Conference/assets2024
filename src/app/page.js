import Image from "@/app/lib/components/primitives/Image";
import { DateList } from "./lib/components/DateList";
import Hero from "./lib/components/Hero";
import Container from "./lib/components/primitives/Container";
import Link from "./lib/components/primitives/Link";
import Section from "./lib/components/primitives/Section";
import {
    DOCTORAL_CONSORTIUM_DATES,
    EXPERIENCE_REPORTS_DATES,
    POSTER_DEMOS_DATES,
    STUDENT_RESEARCH_DATES,
    MAIN_DEADLINES,
    TECHNICAL_PAPERS_SUBPAGE_DEADLINES,
    WORKSHOP_PROPOSAL_DATES,
} from "./lib/config/importantdates.config";
import { createMetadata } from "./lib/utils/createMetadata";
import Alert from "./lib/components/Alert";
import { mergeDates } from "./lib/utils/mergeDates";

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
                    <Section title="Important Dates" spacing={"top-only"}>
                        {/* <Alert
              className={"mb-5"}
              raw={true}
              heading={"Technical Paper submissions now live"}
            >
              <p className="text-md text-white">
                The PCS portal to submit Technical Papers is now live! Please
                submit via the{" "}
                <Link className={"text-white"} href={"https://new.precisionconference.com/"}>
                  ASSETS 2024 submission site
                </Link>
                .
              </p>
            </Alert> */}
                        {/* <p>
                            <strong>All deadlines</strong> are 11:59 P.M.
                            Anywhere on Earth (UTC -12:00).
                        </p> */}
                        <DateList
                            dates={MAIN_DEADLINES}
                            notice={
                                "All deadlines are 11:59 P.M. Anywhere on Earth (UTC -12:00)."
                            }
                        />
                    </Section>
                    <Section title="ASSETS at a Glance" spacing={"bottom-only"}>
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
                    <Section title="Location & Venue" spacing={"bottom-only"}>
                        <p>
                            {`The ASSETS 2024 Conference will be held at `}{" "}
                            <Link
                                href="https://www.marriott.com/en-us/hotels/yytsi-sheraton-hotel-newfoundland/overview/"
                                target="_blank"
                                colour={"primary"}
                            >
                                Sheraton Hotel Newfoundland
                            </Link>{" "}
                            {`in downtown St. John's, Newfoundland and Labrador.`}
                        </p>
                        <p>
                            <strong>{`115 Cavendish Square, St. John's, Newfoundland and Labrador, Canada, A1C 3K2`}</strong>
                        </p>
                        <div className="object-cover mt-4">
                            <Image
                                unoptimized
                                width={1000}
                                height={1000}
                                className="aspect-[16/9] object-cover"
                                src="/assets/venue.webp"
                                alt="The Sheraton Hotel Newfoundland building in front of a night sky."
                            />
                        </div>
                    </Section>
                </Container>
            </main>
        </>
    );
}
