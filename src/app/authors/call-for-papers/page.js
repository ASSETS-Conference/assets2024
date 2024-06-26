import { DateList } from "@/app/lib/components/DateList";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { TECHNICAL_PAPERS_SUBPAGE_DEADLINES } from "@/app/lib/config/importantdates.config";
import Alert from "@/app/lib/components/Alert";
import { MENU_DATA } from "@/app/lib/config/navigation.config";

export const metadata = createMetadata({ title: "Call for Papers" });

export default function TechnicalPapers() {
  return (
    <Subpage
      title="Call for Papers"
      subheading={"October 28th - 30th, 2024"}
      overrideTOC={
        <Alert
          className={"mb-5"}
          raw={true}
          heading={"All CFPs are now Live on PCS for Submission"}
        >
          <p className="text-md text-white">
            All submission tracks are now live and available for submission on
            the{" "}
            <Link
              className={"text-white"}
              href={"https://new.precisionconference.com/"}
            >
              {" "}
              PCS system
            </Link>
            . <br className="block lg:hidden" />
            <br className="block lg:hidden" />
            For more information, please take a look at the individual{" "}
            <Link className={"text-white"} href={"/authors/call-for-papers/"}>
              Call for Papers
            </Link>{" "}
            pages.
          </p>
        </Alert>
      }
    >
      <Section title={"Call for Papers"} spacing={"bottom-only"}>
        <p>{`The ASSETS conference is the premier forum for presenting research on the design, evaluation, use, and education related to computing for people with disabilities and older adults. We invite high-quality original submissions on topics relevant to computing and accessibility.`}</p>
        <p>{`Submissions should present significant contributions to design, systems, tools, scientific understanding, methodology, or social issues. Relevant topics include (but are not limited to) new enabling technologies, studies of how technologies are used by people with disabilities, explorations of barriers to access, and evaluations of accessibility education methods. We recommend that papers with a technical contribution be validated through research activities with representative users when possible. However, we acknowledge that many accessibility-focused projects may begin with deep formative work with representative users, or may be based on prior research with representative users, and as such key contributions of a single paper may be primarily technical.`}</p>
        <p>
          {`Authors should refer to the `}{" "}
          <Link
            href={
              "https://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/"
            }
          >
            General Writing Guidelines for Technology and People with
            Disabilities
          </Link>{" "}
          {` when preparing submissions.`}
        </p>
        <p>
          {`All submissions are subject to ACM policies for papers published: As a published ACM author, you and your co-authors are subject to all `}
          <Link href={"https://www.acm.org/publications/policies/toc"}>
            ACM Publications Policies
          </Link>
          {`, including ACM's new `}
          <Link
            href={
              "https://www.acm.org/publications/policies/research-involving-human-participants-and-subjects"
            }
          >
            Publications Policy on Research Involving Human Participants and
            Subjects
          </Link>
          {`.`}
        </p>
        {/* <p>
                    {`Given the hybrid format of the conference, the current
                    expectation is that at least one author from all categories
                    physically present their artifacts in Athens at the
                    conference. In addition, we will ask all authors to prepare
                    prerecorded and captioned videos that will be made available
                    to all attendees (both virtual-only attendees and on-site
                    attendees).`}
                </p> */}
      </Section>
      <Section title={"Submission Procedures"} spacing={"bottom-only"}>
        <p>{`ASSETS accepts submissions in the following categories:`}</p>
        <ul>
          {MENU_DATA.filter((a) => a.title === "Authors")[0].children.map(
            (accepts, i) => {
              return accepts.title === "Call for Papers" ||
                accepts.title === "Mentoring" ? null : (
                <li key={i}>
                  <Link href={accepts.href}>{accepts.title}</Link>
                </li>
              );
            }
          )}
        </ul>
        <p>
          {`Technical papers are expected to present significant and original contributions. For early work and work-in-progress, authors may consider submitting a poster or demo. Papers may expand upon previously published posters or demos, but must present novel and significantly extended content, and should cite any previous abstracts for posters or demos. Please refer to the `}{" "}
          <Link
            href={
              "https://www.acm.org/publications/policies/plagiarism-overview"
            }
          >
            ACM policy on plagiarism
          </Link>{" "}
          {` for guidance.`}
        </p>
        <p>
          {`All Technical Papers and Posters and Demonstrations submissions are peer-reviewed by an international Program Committee`}
          {`. Accepted papers and the abstracts for posters and demonstrations, experience reports, and the student research competition will be archived in the ACM Digital Library. At least one author of accepted submissions must register as the presenter by the early registration deadline.`}
        </p>
      </Section>
      {/* <Section title={"Important Dates"} spacing={"bottom-only"}>
        <DateList dates={TECHNICAL_PAPERS_SUBPAGE_DEADLINES} />
      </Section> */}
    </Subpage>
  );
}
