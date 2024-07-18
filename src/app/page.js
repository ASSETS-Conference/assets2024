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
                        <Alert
                            className={"mb-5"}
                            raw={true}
                            heading={"Registration is open"}
                        >
                            <p className="text-md text-white">
                                {`Full details of our in-person and virtual conference experiences will be published as they become available. In the meantime, we have opened registration on the `}
                                <Link
                                    className={"text-white"}
                                    href={"https://cvent.me/45nlmw"}
                                >
                                    CVENT Registration Site
                                </Link>

                                {` to support attendees who may need additional time to make plans (e.g., travel, visa).`}
                            </p>
                        </Alert>
                        <Alert
                            className={"mb-5"}
                            raw={true}
                            heading={"Hotel booking is live"}
                        >
                            <p className="text-md text-white">
                                {`The hotel is offering ASSETS attendees a group rate of CAD$199 per night.  Please use the `}
                                <Link
                                    href="https://www.marriott.com/events/start.mi?id=1716409363485&key=GRP"
                                    target="_blank"
                                    colour={"secondary"}
                                    className={"text-white"}
                                >
                                    {`ASSETS’24 Sheraton Hotel Newfoundland booking link`}
                                </Link>
                                {` to make your reservation.`}
                            </p>
                        </Alert>
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
                            <div
                                className={
                                    "flex md:flex-row flex-col gap-12 items-center"
                                }
                            >
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
        </>
    );
}
