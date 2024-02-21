import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Mentoring" });

export default function TechnicalPapers() {
    return (
        <Subpage
            title={"Mentoring Information"}
            subheading={
                "Information on mentorship applications and volunteering at ASSETS '24"
            }
        >
            <Section title="Mentoring" spacing={"bottom-only"}>
                <p>
                    {`Mentoring is an important process that helps bring new
                    researchers into the ASSETS community and to ensure that
                    papers are accessible to everyone. Mentors can assist in
                    paper writing and accessible submission information. This
                    page provides information for Mentors and Mentees for ASSETS
                    2024 including expectations and applications.`}
                </p>
                <p>
                    <strong>Mentorship:</strong>
                    {` Help from seasoned researchers
                    is available through the ASSETS Mentoring Program. You may
                    receive advice on a submission in any of the submission
                    categories provided by ASSETS. If you would benefit from
                    mentoring because you are new to presenting your research,
                    new to the category you would like to submit to, or seek
                    assistance in preparing an accessible paper, please consider
                    applying for mentoring help. The deadline to request a
                    mentor is `}
                    <strong>Wednesday, March 20, 2024.</strong>
                </p>
                <ul>
                    <li>
                        <Link href="#what-is-mentoring?">
                            Information for Mentees (What is Mentoring?)
                        </Link>
                    </li>
                    <li>
                        <Link href="#volunteer-to-be-an-assets-2024-mentor">
                            Information for Mentors (Volunteer to be an ASSETS
                            2024 Mentor)
                        </Link>
                    </li>
                    <li>
                        <Link href="#further-information-on-assets-mentoring">
                            Further Information on ASSETS Mentoring
                        </Link>
                    </li>
                </ul>
            </Section>
            <Section title="What Is Mentoring?" spacing={"bottom-only"}>
                <p>
                    {`Help from seasoned researchers is available through the ASSETS Mentoring Program. You may receive advice on a submission in any of the submission categories provided by ASSETS. If you think you would benefit from mentoring because you are new to presenting your research, new to the type of category you would like to submit to, or simply find preparing an English-language or accessible paper to be difficult, please consider applying for mentoring help.`}
                </p>
                <p>
                    {`Mentoring typically pertains to the process of composing the submission, with one to two communication sessions. After reviews are received, mentees are encouraged to contact their mentor again and seek advice on interpreting the reviewers' comments. Even if the submission is accepted, this final session may help the mentee produce an even better camera-ready version.`}
                </p>
                <p>
                    {`Mentors provide feedback to authors on a draft of their paper and particularly highlight how an ASSETS paper could differ from other conferences in expectations. Mentors are not co-authors on the paper, their role is to provide advice during the writing process. Mentoring is not a pre-requisite for submitting a paper to ASSETS. It is meant to help bring in researchers to our community.`}
                </p>
            </Section>
            <Section
                title={"Mentoring for Accessible Submission"}
                spacing={"bottom-only"}
            >
                <p>
                    {`Mentors can also provide advice on creating more accessible
                    papers for submission. It is important to the ASSETS
                    community that the research we produce is accessible to
                    everyone and at every stage of the publication process.
                    However, producing accessible research articles, especially
                    in PDF format, can be challenging. If you are new to this
                    process, refer to the `}
                    <Link href={"/resources/creating-a11y-papers/"}>
                        instructions on Creating Accessible PDFs
                    </Link>
                    {`. If you are new to producing accessible documents or are
                    looking for advice on how to make your research more
                    accessible, please join our mentoring program. This is not a
                    service to make your paper accessible for you, but
                    accessibility mentors will help all authors get the advice
                    and resources they need for the process.`}
                </p>
            </Section>
            <Section
                title={"Apply to have an ASSETS 2024 Mentor"}
                spacing={"bottom-only"}
            >
                <p>
                    {`To apply, please use the `}
                    <Link
                        href={
                            "https://forms.office.com/pages/responsepage.aspx?id=FM9wg_MWFky4PHJAcWVDVnx_YLvfigBHtt9JTYTo67lUQVc3WTBKMUZNSTVJVk04T0JBVEVaT0FISS4u"
                        }
                    >
                        mentoring request form
                    </Link>
                    {` to enter the following details so we can match you to a
                    suitable mentor. You will need to submit a one-page extended
                    abstract.`}
                </p>
                <p>
                    {`The deadline to request a mentor is `}
                    <strong>Wednesday, 20th of March.</strong>
                </p>
                <p>
                    {`After we introduce you and your mentor via email, you will
                    need to send your submission to that person and discuss it
                    together, for example, by email or video call.`}
                </p>
            </Section>
            <Section
                title={"Volunteer to be an ASSETS 2024 Mentor"}
                spacing={"bottom-only"}
            >
                <p>
                    {`Mentoring is an important process that helps bring new researchers into the ASSETS community. Potential mentors should have had at least one accepted paper at past ASSETS and be willing to spend the time as indicated above. If you are interested in being a mentor, please email the mentoring chairs `}{" "}
                    <Link href={"mailto:mentoring-assets24@acm.org"}>
                        (mentoring-assets24@acm.org)
                    </Link>{" "}
                    {` by `}
                    <strong>April 3, 2024,</strong>{" "}
                    {` to indicate your area of expertise.`}
                </p>

                <h2 id="suggested-communication-process">{`Suggested Communication Process`}</h2>
                <p>{`Once we have put the mentor and mentee in touch, they are free to choose whatever communication method they prefer. One possibility might look like this:`}</p>
                <ol type="1" className="!list-decimal">
                    <li>
                        {`The mentee sends the submission by email to the
                            mentor to give her/him/them a chance to read it in
                            advance, either via a ‘shared’ document platform
                            (e.g. Google Docs, Overleaf) or as a file;`}
                    </li>
                    <li>
                        {`The mentor and mentee set up an appointment for a
                            video call by email,`}
                    </li>
                    <li>
                        {`The pair discuss the document (e.g. Google Docs,
                            Overleaf);`}
                    </li>
                    <li>
                        {`At the scheduled time, the mentor and mentee
                            establish the video call, and open the shared file
                            in a web browser`}
                    </li>
                </ol>

                <p>{`That way they can talk about the submission and simultaneously edit it, instantly seeing what the counterpart does – almost as good as meeting face-to-face!`}</p>
            </Section>
            <Section
                title={"Further Information on ASSETS Mentoring"}
                spacing={"bottom-only"}
            >
                <p>{`Participating in the ASSETS Mentoring Program does not guarantee that ASSETS will accept your submission. However, most individuals who have used the mentoring service at ASSETS or at the CHI conference where it began have reported positive experiences and an improved understanding of what reviewers require in general.`}</p>
                <p>
                    {`Authors should also refer to the `}{" "}
                    <Link
                        href={
                            "http://interactions.acm.org/archive/view/november-december-2015/writing-about-accessibility"
                        }
                    >
                        General Writing Guidelines for Technology and People
                        with Disabilities
                    </Link>{" "}
                    {` when preparing submissions.`}
                </p>
                <p>
                    {`For further information or any questions regarding the mentor program, please contact the Mentoring Chair Timothy Neate at `}{" "}
                    <Link href={"mailto:mentoring-assets24@acm.org"}>
                        mentoring-assets24@acm.org
                    </Link>
                    {`.`}
                </p>
            </Section>
        </Subpage>
    );
}
