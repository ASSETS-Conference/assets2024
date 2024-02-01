import { DateList } from "./lib/components/DateList";
import Hero from "./lib/components/Hero";
import Container from "./lib/components/primitives/Container";
import Link from "./lib/components/primitives/Link";
import Section from "./lib/components/primitives/Section";
import { TECHNICAL_PAPERS_DATES } from "./lib/config/importantdates.config";
import { createMetadata } from "./lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Home" });
export default function Home() {
    return (
        <>
            <main id="">
                <Hero />
                <Container id="content">
                    <Section title="ASSETS at a Glance" spacing={"top-only"}>
                        {/* <div className="flex flex-row gap-x-12"> */}
                        {/* <div className="flex flex-col gap-y-4"> */}
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
                    <Section title="Call for Papers" spacing={"top-only"}>
                        <p>
                            The ASSETS conference is the premier forum for
                            presenting research on the design, evaluation, use,
                            and education related to computing for people with
                            disabilities and older adults. We invite
                            high-quality original submissions on topics relevant
                            to computing and accessibility. Authors who have
                            never published at ASSETS can request a mentor.
                            Mentors will be experienced ASSETS contributors, who
                            can help authors to improve their submissions. See
                            the Mentoring page for more information.
                        </p>
                        <p>
                            Submissions should present significant contributions
                            to design, systems, tools, scientific understanding,
                            methodology, or social issues. Relevant topics
                            include (but are not limited to) new enabling
                            technologies, studies of how technologies are used
                            by people with disabilities, explorations of
                            barriers to access, and evaluations of accessibility
                            education methods. It is expected that, in most
                            cases, a paper’s research contributions will be
                            validated through research activities conducted
                            within the target user groups. Papers that include a
                            technical contribution without being validated
                            through research activities with representative
                            users are unlikely to be accepted.
                        </p>
                        <p>
                            Accepted technical papers will be presented at the
                            conference and will appear in the conference
                            proceedings. For the accepted papers, at least one
                            author must register as the presenter by the early
                            registration deadline to be included in the
                            proceedings. All authors of accepted papers will be
                            invited to submit extended versions of their papers
                            to a special issue of the{" "}
                            <Link
                                href="https://dl.acm.org/journal/taccess"
                                target="_blank"
                            >
                                ACM Transactions on Accessible Computing
                                (TACCESS)
                            </Link>
                            .
                        </p>
                        {/* <p>
                            Authors who have never published at ASSETS can
                            request a mentor. Mentors will be experienced ASSETS
                            contributors, who can help authors to improve their
                            submissions. See the Mentoring page for more
                            information.
                        </p> */}
                    </Section>
                    <Section title="Important Dates" spacing={"top-only"}>
                        <p>
                            <strong>All deadlines</strong> are 11:59 P.M.
                            Anywhere on Earth (UTC -12:00).
                        </p>
                        <DateList dates={TECHNICAL_PAPERS_DATES} />
                    </Section>
                    <Section title="Location & Venue" spacing={"standard"}>
                        <div className="object-cover mt-4">
                            <img
                                className="aspect-[16/9] object-cover"
                                src="/assets/hero-background.jpg"
                            />
                        </div>
                    </Section>
                </Container>
            </main>
        </>
    );
}
