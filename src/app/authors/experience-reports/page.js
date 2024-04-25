import { DateList } from "@/app/lib/components/DateList";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { EXPERIENCE_REPORTS_DATES } from "@/app/lib/config/importantdates.config";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Experience Reports" });

export default function ExperienceReports() {
    return (
        <Subpage
            title={"Experience Reports"}
            subheading={"Deadline: Wednesday, July 3rd, 2024"}
        >
            <Section title="Experience Reports" spacing={"bottom-only"}>
                <p>
                    {`Research on accessible and assistive technologies is primarily motivated by the needs of people with disabilities and other stakeholders, like caregivers and educators. Understanding these needs is crucial but often requires first-hand experience that might be unavailable to all researchers in the community. ASSETS 2024 invites submissions that reflect people’s experiences with disabilities and the challenges and opportunities related to accessible and assistive technologies. These reports will be reflective in nature and will give authors an opportunity to share their experiences as people with disabilities, caregivers, rehabilitation professionals, educators, researchers, developers, entrepreneurs, or other stakeholders.`}
                </p>
                <p>
                    {`Experience reports should clearly explain how the research community will benefit from the reported experience. When applicable, the focus of the report should be described, including the citation of appropriate references. Potential topics include but are not limited to:`}
                </p>
                <ul>
                    <li>{`accessibility challenges or solutions in existing technology;`}</li>
                    <li>{`everyday problems for which effective assistive technologies do not yet exist;`}</li>
                    <li>{`challenges in accessing technologies due to costs, cultural aspects, etc.;`}</li>
                    <li>{`needs of specific communities, such as people with multiple disabilities;`}</li>
                    <li>{`age-specific needs, such as children with disabilities;`}</li>
                    <li>{`challenges or solutions in the development and distribution of accessible and assistive technologies;`}</li>
                    <li>{`challenges or solutions related to regulatory policies;`}</li>
                    <li>{`challenges or solutions arising in the field of accessibility and computing education;`}</li>
                    <li>{`good practices possibly not yet supported by appropriate technologies;`}</li>
                    <li>{`challenges or solutions during rehabilitation processes;`}</li>
                    <li>{`limitations or benefits of tools and methodologies in the field of education of people with disabilities or specific learning disorders;`}</li>
                    <li>{`new trends in practices and habits.`}</li>
                </ul>
                <p>
                    {`Please note, unless explicitly advised by the technical paper review panel, authors should not submit papers that were not accepted to the technical paper track for review within the experience report track.`}
                </p>
            </Section>
            <Section title="Important Dates" spacing={"bottom-only"}>
                <DateList dates={EXPERIENCE_REPORTS_DATES} />
            </Section>
            <Section title="Submission Guidelines" spacing={"bottom-only"}>
                <p>
                    {`Experience Reports proposals should be submitted using one of the templates found on the `}
                    <Link href="/resources/submission-templates/">
                        Submission Templates page
                    </Link>
                    {`. Submissions should consist of position papers (e.g., `}
                    <Link href="https://dl.acm.org/doi/abs/10.1145/1878803.1878807">{`https://dl.acm.org/doi/abs/10.1145/1878803.1878807`}</Link>
                    {`), case studies (e.g., `}
                    <Link href="https://dl.acm.org/doi/10.1145/3441852.3476468">{`https://dl.acm.org/doi/10.1145/3441852.3476468`}</Link>
                    {`), or similar content.`}
                </p>
                <p>
                    {`Experience Reports proposals are limited to 8 pages in the single-column submission format, and references do not count toward page limits. Submissions are NOT double-anonymized: the authors' names should be on the paper.`}
                </p>
                <p>
                    {`All submissions will be peer-reviewed by an international panel, per the ASSETS policy on Program Committees. `}
                    <Link href="https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/">
                        Writing Guidelines
                    </Link>
                    {` are available to help authors choose appropriate language for writing about technology and people with disabilities. Particularly for Experience Reports, when discussing their own experiences of disability, authors are encouraged to use their preferred language to describe their disability. Finally, please refer to the `}
                    <Link href="https://www.acm.org/publications/policies/plagiarism-overview">
                        ACM policy on plagiarism
                    </Link>
                    {` for guidance.`}
                </p>
                <p>
                    {`Accepted Experience Reports will be published in the conference proceedings. Your PDF file must be accessible. Please refer to the instructions on `}
                    <Link href="/resources/creating-a11y-papers/">
                        Creating an Accessible ACM Conference Paper
                    </Link>
                    {` for information on how to accomplish this.`}
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
                <h2 id="how-to-submit">{`How to Submit`}</h2>
                <p>
                    {`The submission deadline is `}
                    <strong>
                        {`Wednesday, July 3, 2024, 11:59 P.M. Anywhere on Earth (UTC - 12:00).`}
                    </strong>
                    {` Please submit your experience reports via `}

                    <Link href={"https://new.precisionconference.com/"}>
                        PCS
                    </Link>
                    {`.`}
                </p>
                <h3 id="author-pcs-account-details">
                    IMPORTANT - Author PCS Account Details
                </h3>
                <p>
                    {`ACM continues to update the publication process. Currently, paper metadata will be pulled directly from your personal PCS account. This means that it is crucial for you and all of your co-authors to update the contact information so that names, affiliations, AND primary email addresses are stylized precisely in the way that you all would want to see them in the ACM digital library and on your paper. For example, if you use a personal email address (xyz123@hotmail.com) as your primary contact email in PCS then this email will appear on your paper. Please `}
                    <Link href="https://new.precisionconference.com/user/login?next=https%3A//new.precisionconference.com/contact_info">
                        {`check your author information and make the necessary changes`}
                    </Link>
                    {`.`}
                </p>
            </Section>
            <Section title="Further Information" spacing={"bottom-only"}>
                <p>
                    {`By submitting your article to an ACM Publication, you are hereby acknowledging that you and your co-authors are subject to all ACM Publications Policies, including ACM's new Publications Policy on Research Involving Human Participants and Subjects. Alleged violations of this policy or any ACM Publications Policy will be investigated by ACM and may result in a full retraction of your paper, in addition to other potential penalties, as per ACM Publications Policy.`}
                </p>
                <p>
                    {`Please ensure that you and your co-authors obtain an ORCID ID, so you can complete the publishing process for your accepted paper. ACM has been involved in ORCID from the start and we have recently made a commitment to collect ORCID IDs from all of our published authors. The collection process has started and will roll out as a requirement throughout 2022. We are committed to improving author discoverability, ensuring proper attribution and contributing to ongoing community efforts around name normalization; your ORCID ID will help in these efforts.`}
                </p>
                <p>
                    {`For further information or any questions regarding the event or submissions, please contact the Experience Report Chairs at `}
                    <Link href={"mailto:experience-reports-assets24@acm.org"}>
                        {`experience-reports-assets24@acm.org`}
                    </Link>
                    {`.`}
                </p>
            </Section>
        </Subpage>
    );
}
