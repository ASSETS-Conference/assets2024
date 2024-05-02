import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Link from "@/app/lib/components/primitives/Link";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import {
  DOCTORAL_CONSORTIUM_DATES,
  WORKSHOP_PROPOSAL_DATES,
} from "@/app/lib/config/importantdates.config";
import { DateList } from "@/app/lib/components/DateList";
import Alert from "@/app/lib/components/Alert";

export const metadata = createMetadata({ title: "Doctoral Consortium" });
export default function WorkshopProposals() {
  return (
    <Subpage
      title={"Doctoral Consortium"}
      subheading={
        "The ASSETS 2024 Doctoral Consortium (DC) is expected to be held on Sunday, October 27, 2024, as an in-person event."
      }
    >
      <p>
        {`The ASSETS 2024 Doctoral Consortium (DC) is expected to be held on Sunday, October 27, 2024, as an in-person event.`}
      </p>
      <p>
        {`The overarching goal of the consortium is to encourage and prepare a
        group of promising young researchers dedicated to accessibility and
        assistive technology by:`}
      </p>
      <ul className="ml-8 list-disc">
        <li className="mt-4 mb-2">
          {`Providing PhD students with a supportive forum to submit and receive
          high-quality feedback about their accessibility-related dissertation
          work from researchers outside their own institution, including student
          peers, faculty, and industry professionals.`}
        </li>
        <li className="mb-2">
          {`Providing opportunities for participants to network with one another
          and senior members of the ASSETS community.`}
        </li>
        <li className="mb-2">
          {`Enabling the student participants to attend the ASSETS 2024
          conference, to contribute to the conference goals through interaction
          with other researchers and conference events, and to learn of
          potential career paths within academia and industry.`}
        </li>
      </ul>
      <Section title={"Who Should Apply"} spacing={"bottom-only"}>
        <p>
          {`We encourage doctoral candidates at an early-to-mid stage of their
          research to apply rather than students who have already made
          substantial progress toward their dissertations. The DC focuses on
          earlier-stage students because the goal is to provide feedback that
          can help guide and shape dissertation research agendas.`}
        </p>
        <p>
          {`Applicants may also submit to the Student Research Competition, but
          the work described must be different.`}
        </p>
        <h2 id="relevant-topics">Relevant Topics</h2>
        <p>
          Relevant topics for the Consortium are the same as for the conference.
          See the{" "}
          <Link href={"/authors/call-for-papers"}>Call for Papers.</Link>
        </p>
      </Section>
      <Section
        title={"Important Dates and How to Apply"}
        spacing={"bottom-only"}
      >
        {/* <Alert
          className={"mb-2"}
          isNotice
          body={`All deadlines are 11:59 P.M. Anywhere on Earth (UTC -12:00).`}
        /> */}
        <DateList dates={DOCTORAL_CONSORTIUM_DATES} notice={'All deadlines are 11:59 P.M. Anywhere on Earth (UTC -12:00).'} />
        <p>
          Each Doctoral Consortium applicant must submit a package of
          application materials and also request a letter of recommendation from
          their advisor.
        </p>
        <ul>
          <li>
            {`The student’s Cover Letter, the Research Project Summary, and CV
          should be submitted to `}
            <Link href={"https://new.precisionconference.com/assets24f"}>
              PCS
            </Link>
            {` as a combined PDF document by`}{" "}
            <strong>{`Wednesday,
          July 3, 2024.`}</strong>
          </li>
          <li>
            {`The Advisor’s Letter of Recommendation should be received by `}
            <strong>Wednesday, July 10, 2024</strong>
            {`, and sent directly from the
          advisor to `}
            <Link href={"mailto:dc-chairs-assets24@acm.org"}>
              dc-chairs-assets24@acm.org
            </Link>
            {`.`}
          </li>
          <li>
            Notification of Acceptance:{" "}
            <strong>Wednesday, August 7, 2024</strong>
          </li>
          <li>
            Video presentation deadline:{" "}
            <strong>Wednesday, August 28, 2024</strong>
          </li>
        </ul>
      </Section>
      <Section title={"Applicant's Materials"} spacing={"bottom-only"}>
        <p>
          {`Submissions are not anonymous; the applicant's name must appear on the
          documents.`}
        </p>
        <ul>
          <li>
            {`Cover Letter - The cover letter should contain the following
            information:`}
            <ul>
              <li>
                {`A statement of interest in participating in the Doctoral
                Consortium`}
              </li>
              <li>
                {`The full name of the University and Department in which the
                candidate is earning their doctorate degree`}
              </li>
              <li>{`The name of the primary supervisor`}</li>
              <li>
                {` Full contact information, including address, telephone number,
                and email address`}
              </li>
              <li>
                {` The title of the research and keywords pertinent to the research`}
              </li>
              <li>{`The URL of the candidate's web page (if any)`}</li>
              <li>
                {`What the candidate hopes and expects to experience at the
                Doctoral Consortium`}
              </li>
            </ul>
          </li>
          <li>
            {`Research Project Summary - The Research Project Summary should be
            4,000 to 5,000 words. The Summary should include: title, author
            information, abstract, keywords, thesis research summary, and
            references. Document format should be: single column, 1.5 spaced,
            12pt sans serif font. References do not count toward word count.
            This extended abstract must clearly address:`}
            <ul>
              <li>{`The problem that the proposed research is addressing`}</li>
              <li>
                {`The motivation behind this research, including a broad
                comparison with the related literature`}
              </li>
              <li>
                {`The proposed solution, including a brief description of the
                proposed methodology to the solution`}
              </li>
              <li>
                {`The stage of the candidate's program of study, including the
                status of the research (i.e., what has been done to date, and
                what still needs to be done)`}
              </li>
              <li>{`The envisioned contributions to the accessibility field`}</li>
              <li>{`Bibliographical references`}</li>
            </ul>
          </li>
          <li>
            {`The Candidate's CV - The candidate is required to submit a CV
            (maximum of 2 pages) that relates to their background, relevant
            experience, and research accomplishments.`}
          </li>
          <li>
            {`Supervisor’s Letter of Recommendation - A letter on official
            letterhead from the primary thesis advisor/supervisor that briefly
            states what the advisor/supervisor expects the student to gain from
            and contribute to the consortium. The letter should be sent directly
            from the advisor to `}
            <Link href={"mailto:dc-chairs-assets24@acm.org"}>
              dc-chairs-assets24@acm.org
            </Link>
            .
          </li>
        </ul>
      </Section>
      <Section
        title={"Student Participant Selection Process"}
        spacing={"bottom-only"}
      >
        <p>{`The Doctoral Consortium applications will be evaluated based on the following criteria:`}</p>
        <ul>
          <li>{`The originality of the work`}</li>
          <li>
            {`The importance of the work and potential impacts on the
            accessibility field`}
          </li>
          <li>
            {`The soundness and correctness of the proposed approach to address
            the problem`}
          </li>
          <li>
            {`Balance overall in terms of geographic areas and topics covered`}
          </li>
        </ul>
      </Section>
      <Section title={"Publication"} spacing={"bottom-only"}>
        <p>
          {`Following the Doctoral Consortium, participants may be invited to
          submit revised and updated papers for publication in a 2025 issue of
          the SIGACCESS Newsletter.`}
        </p>
      </Section>
      <Section title={"Posters"} spacing={"bottom-only"}>
        <p>
          {`Doctoral Consortium participants are invited to share their work as a
          poster, to be presented during the poster sessions at the conference.
          Presenters should follow the poster presentation accessibility
          guidelines outlined in the `}
          <Link href={"/authors/posters-and-demos/"}>Posters and Demos</Link>{" "}
          category.
        </p>
      </Section>
      <Section
        title={"Sign Language Interpreting or Captioning"}
        spacing={"bottom-only"}
      >
        <p>
          {`Upon request, sign language interpreting or captioning will be
          provided for the Doctoral Consortium and all other ASSETS events.
          Requests for an interpreter or captioner must be indicated on the
          conference registration form when registering for ASSETS 2024.`}
        </p>
      </Section>
      <Section title={"Schedule"} spacing={"bottom-only"}>
        <p>
          {`The main event is expected to start on Sunday, October 27, 2024. The
          specifics of the schedule will be announced closer to the event.`}
        </p>
      </Section>
      <Section title={"Further Information"} spacing={"bottom-only"}>
        <p>
          {`For further information or questions regarding the event or
          submissions, please contact the Doctoral Consortium Chairs, Kristen
          Shinohara and Shari Trewin, at`}{" "}
          <Link href={"mailto:dc-chairs-assets24@acm.org"}>
            dc-chairs-assets24@acm.org
          </Link>
          .
        </p>
      </Section>
      <Section title={"Mentors"} spacing={"bottom-only"}>
        <p>{`Please check back for information about the mentors.`}</p>
      </Section>
    </Subpage>
  );
}
