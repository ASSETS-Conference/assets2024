import { DateList } from "@/app/lib/components/DateList";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { STUDENT_RESEARCH_DATES } from "@/app/lib/config/importantdates.config";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({
    title: "Student Research Competition",
});

export default function StudentResearchCompetition() {
    return (
        <Subpage
            title={"Student Research Competition"}
            subheading={"Deadline: Wednesday, July 3rd, 2024"}
        >
            <Section
                title="How the Student Research Competition Will Work"
                spacing={"bottom-only"}
            >
                <p>
                    {`The ACM Student Research Competition (SRC) is open to undergraduate and graduate students. At the conference, the authors will present their poster to a panel of experts and those who qualify for the next round will present their research to the conference audience. All accepted SRC submissions will be published in the conference proceedings, and the best presentations will receive a prize. The SRC is a fantastic opportunity to be introduced to the community and establish networks with fellow scientists.`}
                </p>
            </Section>
            <Section title="Testimonials" spacing={"bottom-only"}>
                <p>
                    <em>
                        {`“...What really caught my eye was how the community fosters growth and how the competition encourages us to learn the methodology behind other projects to improve our own.”`}
                    </em>
                </p>
                <p>
                    <em>
                        {`—Yash Naik, University of Mumbai, SRC undergraduate student participant in 2018`}
                    </em>
                </p>
            </Section>
            <Section title="Eligibility" spacing={"bottom-only"}>
                <ul>
                    <li>
                        {`Participants must be enrolled (at the time of submission) in a university or college and have an active ACM student membership. If you are not a member yet, you can `}
                        <Link href="https://services.acm.org/public/qj/quickjoin/qj_control.cfm?form_type=Student">
                            join the ACM
                        </Link>
                        {` by paying a US $19 fee per year.`}
                    </li>
                    <li>
                        <strong>
                            {`Only individual research is accepted from Graduate (MS or PhD program) students; group research projects will not be considered.`}
                        </strong>
                        {` If an individual is part of a group research project and wants to participate in an SRC, they can only present their part of the research.`}
                    </li>
                    <li>
                        <strong>
                            {`Team projects are acceptable at the undergraduate level.`}
                        </strong>
                        {` All team members should be undergraduate students. One team member should be designated by the team to attend the conference and make the oral presentation.`}
                    </li>
                    <li>
                        {`Students may only participate in one ACM SRC per program year (July 1-June 30). Students who have applied to an SRC, but have not been accepted, may respond to other SRC calls for participation during the program year.`}
                    </li>
                    <li>
                        {`Work accepted as a full paper for one of the technical sessions of the conference cannot also be considered for the Student Research Competition. Students having a technical paper, however, are encouraged to submit separate work to the Student Research Competition.`}
                    </li>
                    <li>
                        {`The same topic of work cannot be presented at more than one of the conference venues (SRC, DC, or as a regular technical paper).`}
                    </li>
                    <li>
                        {`SRC submissions should not be under review at other conferences or similar venues.`}
                    </li>
                </ul>
            </Section>
            <Section title="Submissions" spacing={"bottom-only"}>
                <h2 id="for-whom">{`For whom?`}</h2>
                <p>
                    {`The ACM Student Research Competition (SRC) is an event open to undergraduate and graduate students.`}
                </p>
                <h2 id="what-needs-to-be-submitted">{`What needs to be submitted?`}</h2>
                <p>
                    {`Students wishing to participate submit abstracts of their work. Qualifying research must deal with topics that are relevant to the mission of the ASSETS series, as described by the `}
                    <Link href={"/authors/call-for-papers/"}>
                        Call for Papers
                    </Link>
                    {`. Preference will be given to work that has been completed (or is close to completion).`}
                </p>
                <p>
                    {`Submissions have a 4,000 to 5,000-word limit using templates that can be found on the `}
                    <Link href={"/resources/submission-templates/"}>
                        Submission Templates page
                    </Link>
                    {`. Note that references `}
                    <u>do not</u>
                    {` count toward page limits.`}
                </p>
                <p>
                    {`Successful entries will be published in the ASSETS 2024 proceedings and the ACM Digital Library. `}
                    <strong>
                        {`Submissions (in PDF format) should be submitted by the
                        deadline: July 3, 2024, at 11:59 P.M. Anywhere on Earth
                        (UTC -12:00).`}
                    </strong>
                    {` It is important to note that these are NOT anonymous submissions; the authors' names should be on the paper.`}
                </p>
                <p>
                    {`In addition, `}
                    <strong>{`after acceptance,`}</strong>
                    {` authors will be required to prepare a short audio speech file describing the content of their posters. This feature makes posters more accessible to blind and low-vision attendees. More details on this will be available in due course.`}
                </p>
                <p>
                    {`Your PDF file must be accessible. Please refer to the instructions on `}
                    <Link href="/resources/creating-a11y-papers">{`Creating an Accessible ACM Conference Paper`}</Link>
                    {` for information on how to accomplish this. If you cannot create an accessible PDF at submission time then you will be given the option to upload either an accessible HTML or Microsoft Word version of your paper in addition to your PDF to facilitate review. If your paper is accepted, the final version will need to be transformed into an accessible PDF document.`}
                </p>
                <p>
                    {`Writing Guidelines are available to help authors choose appropriate language for `}
                    <Link
                        href={
                            "https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/"
                        }
                    >
                        {`writing about technology and people with disabilities`}
                    </Link>
                    {`. Finally, please refer to the `}
                    <Link
                        href={
                            "https://www.acm.org/publications/policies/plagiarism-overview"
                        }
                    >
                        {`ACM policy on plagiarism`}
                    </Link>
                    {` for guidance.`}
                </p>
            </Section>
            <Section title="Participating in the SRC" spacing={"bottom-only"}>
                <p>
                    {`Once SRC submissions are reviewed, accepted projects will be invited to present at ASSETS 2024.`}
                </p>
                <p>
                    {`At the conference, there will be two rounds of competition:`}
                </p>
                <h2 id="first-round-competition">{`First Round Competition`}</h2>
                <p>
                    {`Participants will present a poster to a panel of judges. After the judges have reviewed the posters and discussed the research with each participant, a group of semi-finalists for each category (undergraduate and graduate) will be selected to present at the second round of the competition.`}
                </p>
                <h2 id="second-round-competition">{`Second Round Competition`}</h2>
                <p>
                    {`Semi-finalists will then give an oral presentation on their work as part of a main conference session. A panel of judges will evaluate their knowledge of the research area, their contribution to the field, and the quality of the presentation.`}
                </p>
                <p>
                    {`Three winners will be chosen in each category, undergraduate and graduate, receiving their medals (gold, silver, and bronze) and a monetary prize of US$500, US$300, and US$200, respectively sponsored by ACM. First-place winners will be designated as finalists and advance to the SRC Grand Finals. Participants should plan to stay through the ASSETS conference as the awards ceremony will take place during the closing session.`}
                </p>
                <p>
                    <strong>{`Note:`}</strong>
                    {` Upon request, American Sign Language interpreters will be provided for participants in the SRC, both during the competition itself and for the remainder of the ASSETS conference. Requests for an interpreter must be indicated on the conference registration form when registering for ASSETS.`}
                </p>
                <h2 id="advancing-to-src-finals">{`Advancing to the SRC Grand Finals`}</h2>
                <p>
                    {`First-place undergraduate and graduate student winners from the ACM SRCs held throughout the year advance to the SRC Grand Finals. A panel of judges will evaluate the entries through an online competition. Three undergraduate and three graduate students from all ACM conferences will be designated the SRC Grand Finals winners from this competition.`}
                </p>
            </Section>
            <Section title="Important Dates" spacing={"bottom-only"}>
                <DateList dates={STUDENT_RESEARCH_DATES} />
            </Section>
            <Section title="How To Submit" spacing={"bottom-only"}>
                <p>
                    {`Please submit your application via `}
                    <Link href={"https://new.precisionconference.com/"}>
                        PCS
                    </Link>
                    {` to the Student Research Competition Chairs, Stephanie Valencia and Mauli Pandey, at `}
                    <Link href={"mailto:src-chairs-assets24@acm.org"}>
                        {`src-chairs-assets24@acm.org`}
                    </Link>
                    {`.`}
                </p>
            </Section>
            <Section title="Panel of Reviewers" spacing={"bottom-only"}>
                <p>
                    {`The reviewers will be announced soon. Please check back later.`}
                </p>
            </Section>
            <Section title="Panel of Judges" spacing={"bottom-only"}>
                <p>
                    {`The judges will be announced soon. Please check back later.`}
                </p>
            </Section>
            <Section title="Poster Presentation" spacing={"bottom-only"}>
                <p>
                    {`Poster presentation details are still TBD. Please direct any special requests to the Student Research Competition Chairs, Stephanie Valencia and Mauli Pandey, at `}
                    <Link href={"mailto:src-chairs-assets24@acm.org"}>
                        {`src-chairs-assets24@acm.org`}
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
                    {`For further information or questions regarding student research competition submissions, please contact the Student Research Competition Chairs, Stephanie Valencia and Mauli Pandey, at `}
                    <Link href={"mailto:src-chairs-assets24@acm.org"}>
                        {`src-chairs-assets24@acm.org`}
                    </Link>
                    {`.`}
                </p>
                <p>
                    {`Further details about ACM Student Research Competitions and the Grand Finals are available on the `}
                    <Link href={"https://src.acm.org/about"}>
                        {`ACM Student Research Competition Page`}
                    </Link>
                    {`.`}
                </p>
            </Section>
        </Subpage>
    );
}
