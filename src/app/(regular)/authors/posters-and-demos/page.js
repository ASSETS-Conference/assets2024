import { DateList } from "@/app/lib/components/DateList";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { POSTER_DEMOS_DATES } from "@/app/lib/config/importantdates.config";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Posters and Demos" });

export default function PostersAndDemos() {
    return (
        <Subpage
            title={"Posters and Demos"}
            subheading={"Deadline: Wednesday, July 3rd, 2024"}
        >
            <Section title="Posters and Demos" spacing={"bottom-only"}>
                <p>
                    {`The Poster and Demonstration Session is an opportunity to present late-breaking results, ongoing research projects, and speculative or innovative work in progress. This session is an ideal platform for researchers and practitioners to present their work, engage in discussion regarding their work, and receive valuable feedback. Participants are invited to submit high-quality posters and demonstrations presenting novel ideas, designs, techniques, systems, tools, evaluations, scientific investigations, methodologies, social issues or policy issues relating to any topics that may interest the accessibility community. A poster is a great way to test new ideas, generate interest in a research area, or describe useful or interesting work that is not substantial enough for a full paper presentation. A demonstration is a great way to communicate inventive accessible computing and IT technologies in action.`}
                </p>
                <p>
                    {`The submission must clearly demonstrate relevance to accessibility research. Decisions about acceptance will be based on relevance to accessibility, originality, potential significance, topicality, and clarity. A detailed list of suggested topics can be found in the `}
                    <Link href={"/authors/call-for-papers/"}>
                        Call for Papers
                    </Link>
                    {`.`}
                </p>
            </Section>
            <Section title="Important Dates" spacing={"bottom-only"}>
                <DateList dates={POSTER_DEMOS_DATES} />
            </Section>
            <Section title="Submission Guidelines" spacing={"bottom-only"}>
                <p>
                    {`Poster and demonstration submissions should be no longer than 5 pages (excluding references) using the single-column template on the Submission Templates page. Submissions should be in PDF format. References do not count toward page limits.`}
                </p>
                <p>
                    {`We will use a fully anonymous review process for Posters and Demos, in which the authors must anonymize their paper submissions and all supplemental materials. All submissions will be peer-reviewed by an `}
                    <Link href={"/committees/program/"}>
                        international panel
                    </Link>
                    {`, per the ASSETS policy on Program Committees.`}
                </p>
                <p>
                    {`The submission deadline is `}
                    <strong>
                        {`Wednesday, July 3, 2024, 11:59 P.M. Anywhere on Earth (UTC - 12:00).`}
                    </strong>
                    {` Please submit your posters and demonstrations via the `}

                    <Link href={"https://new.precisionconference.com/"}>
                        Posters and Demonstrations submission site
                    </Link>
                    {`.`}
                </p>
                <p>
                    {`Accepted submissions will be included in the conference proceedings. For accepted posters and demonstrations, at least one author must register as the presenter by the early registration deadline to be included in the proceedings.`}
                </p>
                <h2 id="accessible-submissions">Accessible Submissions</h2>
                <p>
                    {`Your PDF file must be accessible. Please refer to the instructions on `}
                    <Link href="/resources/creating-a11y-papers">
                        Creating an Accessible ACM Conference Paper
                    </Link>{" "}
                    {` for information on how to accomplish this. If you cannot create an accessible PDF at submission time then you will be given the option to upload either an accessible HTML or Microsoft Word version of your paper in addition to your PDF to facilitate review. If your paper is accepted, the final version will need to be transformed into an accessible PDF document.`}
                </p>
                <h2 id="writing-guidelines">Writing Guidelines</h2>
                <p>
                    {`Writing Guidelines are available to help authors choose appropriate language for `}
                    <Link href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/">
                        writing about technology and people with disabilities
                    </Link>
                    {`. Finally, please refer to the `}
                    <Link href="https://www.acm.org/publications/policies/plagiarism-overview">
                        ACM policy on plagiarism
                    </Link>
                    {` for guidance.`}
                </p>
                <h2 id="authorship-guidelines">Authorship Guidelines</h2>
                <p>
                    {`The ACM Publications Board has recently updated the ACM Authorship Policy in several ways:`}
                </p>
                <ul>
                    <li>{`Addressing the use of generative AI systems in the publications process`}</li>
                    <li>{`Clarifying criteria for authorship and the responsibilities of authors`}</li>
                    <li>{`Defining prohibited behavior, such as gift, ghost, or purchased authorship`}</li>
                    <li>{`Providing a linked FAQ explaining the rationale for the policy and providing additional details`}</li>
                </ul>
                <p>
                    {`Please read the `}
                    <Link
                        href={
                            "https://www.acm.org/publications/policies/new-acm-policy-on-authorship"
                        }
                    >
                        {`updated policy on authorship`}
                    </Link>{" "}
                    {` and ensure your submission adheres to it.`}
                </p>
            </Section>
            <Section title={"Further Information"} spacing={"bottom-only"}>
                <p>
                    {`By submitting your article to an ACM Publication, you are hereby acknowledging that you and your co-authors are subject to all ACM Publications Policies, including ACM's new Publications Policy on Research Involving Human Participants and Subjects. Alleged violations of this policy or any ACM Publications Policy will be investigated by ACM and may result in a full retraction of your paper, in addition to other potential penalties, as per ACM Publications Policy.`}
                </p>
                <p>
                    {`Please ensure that you and your co-authors obtain an ORCID ID, so you can complete the publishing process for your accepted paper. ACM has been involved in ORCID from the start and we have recently made a commitment to collect ORCID IDs from all of our published authors. The collection process has started and will roll out as a requirement throughout 2022. We are committed to improving author discoverability, ensuring proper attribution and contributing to ongoing community efforts around name normalization; your ORCID ID will help in these efforts.`}
                </p>
                <p>
                    {`For further information or any questions regarding the event or submissions, please contact the Posters and Demos Chairs Anne Ross and Garreth Tigwell at `}{" "}
                    <Link href={"mailto:poster-demo-assets24@acm.org"}>
                        {`poster-demo-assets24@acm.org`}
                    </Link>
                    {`.`}
                </p>
            </Section>
        </Subpage>
    );
}
