import Letter from "@/app/lib/components/lists/Letter";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import React from "react";

export const metadata = createMetadata({ title: "Policy On Program Committees" });

export default function PolicyOnProgramCommittees() {
  return (
    <Subpage
      noTOC={false}
      title={"Policy on Program Committees"}
      subheading={"ASSETS Polices"}
    >
      <Section spacing={'bottom-only'} title={"Program Committee Members"}>
        <p>
          {`The Program Committee is responsible for objectively and thoroughly
          reviewing all submissions, and for submitting timely, informative
          reviews that provide authors with feedback about their submissions.`}
        </p>
        <p>
          {`The Program Committee members should be recognized experts in the
          subject area of the event. As an objective criterion, all Program
          Committee members should possess a Ph.D. For recurring events, the
          committee should not have a fixed membership, but rather be
          constituted each year to fit the changing needs of the conference.`}
        </p>
      </Section>
      <Section spacing={"bottom-only"} title={"Reviewing Submissions"}>
        <p>
          {`Submissions should be reviewed by the Program Committee members
          themselves, rather than by their chosen delegates. Program Committee
          members are encouraged to seek advice from external reviewers if
          needed, but they are still responsible for having reviewed the
          submission themselves. Each submission should be reviewed by at least
          three Program Committee members.`}
        </p>
      </Section>
      <Section
        spacing={"bottom-only"}
        title={"Submissions from Organizing Committee Members"}
      >
        <p>
          {`Please consult the `}
          <Link
            href={
              "http://www.sigaccess.org/welcome-to-sigaccess/resources/conflict-of-interest/"
            }
          >{`ACM SIGACCESS Conflict of Interest Policy`}</Link>
          {` for how`}
          {`conflicts of interest will be managed across activities related to the
          SIG. For the ASSETS conference, the following protocol has been
          established to comply with this policy: If the General Chair or
          Program Chair wishes to submit a Technical Paper (as either a sole or
          co-author) to the conference, then a Deputy Program Chair must be
          appointed. The Deputy Chair’s role is to appoint reviewers to these
          submissions using the regular conference mechanism, and appoint a
          third party, whose identity is unknown to the submitting author, to
          oversee the decision for that submission. This anonymity will enable
          an independent decision to be made about the paper.`}
        </p>
        <p>
          {`This anonymous third party will determine an overall score or ranking
          for the submission. To preserve the anonymity of the third party and
          reviewers, the decision process for such submissions will be conducted
          “offline” from the regular website if necessary. After the Program
          Chair has made initial accept/reject determinations for the other
          papers, if the Deputy Chair determines that the submitted paper from
          the General Chair or Program Chair is not a clear accept or reject,
          then the third party will also be responsible for the final
          accept/reject decision on this paper.`}
        </p>
        <p>
          {`A similar process can be employed by the chair of other conference
          activities (such as Posters and Demonstrations), if they wish to
          submit a paper to that activity. All other members of conference
          committees may submit to all activities. Care must be taken that these
          submissions are reviewed at least as stringently as other submissions,
          in keeping with the `}
          <Link
            href={
              "http://www.sigaccess.org/welcome-to-sigaccess/resources/conflict-of-interest/"
            }
          >{`ACM SIGACCESS Conflict of Interest Policy`}</Link>
          {"."}
        </p>
      </Section>
      <Section
        spacing={"bottom-only"}
        title={"Conflicts of Interest and Confidentiality of Submissions"}
      >
        <p>
          {`ASSETS requires members of the Program Committee to adhere to the
          highest of ethical standards. These standards are outlined in the`}{" "}
          <Link
            href={
              "http://www.sigaccess.org/welcome-to-sigaccess/resources/conflict-of-interest/"
            }
          >
            {`ACM SIGACCESS Conflict of Interest Policy`}
          </Link>
          {`. Program Committee chairs must ensure that these standards are not
          only met to the letter of the policy but also to the spirit of its
          intent. This means that even the appearance of a conflict of interest
          or breach of confidentiality in the selection process should be
          avoided.`}
        </p>
        <p>
          {`A Program Committee member (including the chair of the committee) is
          considered to have a conflict of interest on a submission on which
          they are an author or that has an author in any of the categories
          identified by the `}
          <Link
            href={
              "http://www.sigaccess.org/welcome-to-sigaccess/resources/conflict-of-interest/"
            }
          >{`ACM SIGACCESS Conflict of Interest Policy`}</Link>
          {"."}
        </p>
        <p>
          {`Committee members must declare their conflicts to the program chair
          before any reviews of the submissions begin.`}
        </p>
        <p>
          {`Committee members in conflict with an author will not be allowed to
          see the reviews of the submission, nor will the names of the reviewers
          be divulged. During any and all discussions of the submission (written
          or verbal), the member in conflict will be barred from participating
          in any way either actively or passively (e.g., by absenting themselves
          from the room in which the discussion is being held, not being a
          recipient of email, etc.).`}
        </p>
        <p>
          {`In case the program chair is in conflict, the chair will assign an
          alternate chair for any submissions for which they have a conflict.
          This alternate chair should be a member of the Program Committee who
          does not have a conflict. For those submissions, the alternate chair
          will select the reviewers and will conduct the reviews and any
          discussion without revealing the identities of the reviewers to the
          Program Committee Chair.`}
        </p>
        <p>
          {`Submissions themselves and discussions conducted by a Program
          Committee during the selection process are considered to be
          confidential.`}
        </p>
        <p>
          {`This conflict of interest and confidentiality policy extends to any
          supplemental reviewers outside of the immediate Program Committee, if
          such reviewers are permitted by the procedures of the committee. The
          committee member seeking the supplemental review is responsible for
          ensuring the enforcement of the policy.`}
        </p>
        <p>
          {`The Program Chair will make reasonable efforts to ensure that the
          manuscripts submitted are made available to and reviewed only by the
          Program Committee and supplemental reviewers acting on behalf of the
          Program Committee. Neither ASSETS nor ACM guarantee the
          confidentiality of the submitted manuscripts, and accept no liability
          in the event that the manuscripts are distributed beyond the
          reviewers.`}
        </p>
      </Section>
      <Section
        spacing={"bottom-only"}
        title={"Awards and Special Issues of Journals"}
      >
        <p>
          {`By default, the PC Chair is the selection committee chair for awards
          and special issues of journals. The Chair, however, may transfer the
          job of selection committee chair over to someone selected by the
          SIGACCESS EC if they so choose. If the PC Chair is in conflict with
          papers under consideration, the PC Chair cannot act as the selection
          committee chair and must request the SIGACCESS EC to appoint an
          alternate. The selection committee chairs may appoint additional
          committee members if they so choose.`}
        </p>
        <p>{`Exclusions to avoid conflict of interest:`}</p>
        <ul>
          <li>{`Papers co-authored by members of the selection committee are not eligible.`}</li>
          <li>{`Papers in conflict with the selection committee chair(s) are not eligible.`}</li>
        </ul>
      </Section>
      <Section
        spacing={"bottom-only"}
        title={"Calls for Submissions/Participation"}
      >
        <p>
          {`Conferences should require full-length, original papers for review.
          The conference website for the Calls for papers should reference the
          ASSETS Program Committee Conflict of Interest Policy. It should also
          include explicit prohibitions against the submission of papers that
          have been previously published or are being submitted elsewhere.`}
        </p>
        <p>
          {`All Calls should make authors aware of the `}
          <Link
            href={"http://www.acm.org/publications/policies/plagiarism_policy"}
          >{`ACM Policy and Procedures
          on Plagiarism`}</Link>
          {`. Authors must be asked to indicate their understanding
          and acceptance of the policy and procedures at the time of submission.
          This can normally be done as part of the electronic submission
          process, such as through a checkbox that must be checked in order for
          the submission to be recorded.`}
        </p>
      </Section>
    </Subpage>
  );
}
