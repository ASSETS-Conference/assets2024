import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Link from "@/app/lib/components/primitives/Link";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { WORKSHOP_PROPOSAL_DATES } from "@/app/lib/config/importantdates.config";
import { DateList } from "@/app/lib/components/DateList";
import Alert from "@/app/lib/components/Alert";

export const metadata = createMetadata({ title: "Workshop Proposals" });
export default function WorkshopProposals() {
  return (
    <Subpage
      title={"Workshop Proposals"}
      subheading={"Due Date: July 3rd, 2024"}
      overrideTOC={
        <Alert
          type="changes"
          heading="Correction: Workshop Format Updated"
          raw
          className={"lg:mb-4 md:-mt-8 sm:-mt-4 sm:mb-8"}
        >
          <p>
            {`Workshops will be an online-only event and take place the week of
          October 21. `}{`Please note that workshops `}

            <strong className="underline">{`will not`}</strong>
            {` have a physical space
          at the conference. `}
            {`Please see `}
            <Link href={"#workshop-format"}>Workshop Format</Link>{" "}
            {` for more information.`}
          </p>
        </Alert>
      }
    >
      <p>
        {`We invite you to submit a proposal for workshops at ASSETS 2024.
        Workshops will bring together attendees with shared interests to meet in
        the context of a focused and interactive discussion. ASSETS workshops
        should include topics relevant to the ASSETS community, including
        design, systems, tools, scientific understanding, methodology, or social
        issues relevant to and including people with disabilities or older
        adults. It may also focus on enabling technologies, technology use by
        people with disabilities, disability justice, legal and policy issues,
        or accessibility in computing education. Each workshop should generate
        ideas that will suggest promising directions for future work for the
        ASSETS community. If you are working in an emerging area of
        accessibility, please consider organizing a workshop.`}
      </p>
      <Section title={"Important Dates"} spacing={"bottom-only"}>
        <DateList
          dates={WORKSHOP_PROPOSAL_DATES}
          notice={
            "All deadlines are 11:59 P.M. Anywhere on Earth (UTC -12:00)."
          }
        />
        <p>
          {`Following the camera-ready deadline, workshop organizers will receive
          instructions for completing their eRights forms, validating and
          submitting their final workshop proposal to TAPS, and submitting their
          final accessible PDF.`}
        </p>
      </Section>
      <Section title={"Workshop Format"} spacing={"none"}>
        <p>
          {`Workshops will be an online-only event and take place the week of
          October 21. Please note that workshops `}
          <strong className="underline">{`will not`}</strong>
          {` have a physical space
          at the conference.`}
        </p>
        <p>
          {`Please see the Suggestions sections for more details on how you might
          plan your workshop.`}
        </p>
      </Section>
      <Section title={"Preparing and Submitting Your Workshop Proposal"}>
        <p>
          {`  A workshop proposal must be prepared according to the ACM Master
          Article Submission Templates (single column). It must be submitted via
          the PCS Submission System as a single PDF file. The proposal must be
          no more than 6,000 words (excluding references) and have the following
          structure:`}
        </p>
        <ul>
          <li>
            <strong>Background:</strong>
            {` Provide a strong rationale for the
            workshop, describe the issues to be addressed, and state concrete
            goals for the workshop.`}
          </li>
          <li>
            <strong>Workshop Plans:</strong>
            {` Explain the workshop structure,
            including activities, timing, resources, and any follow-up
            activities or tangible outcomes. Please provide details regarding
            what specific technical capacity will be necessary to support the
            online workshop day.`}
          </li>
          <li>
            <strong>Diversity and inclusion considerations:</strong>
            {` Please
            elaborate on how you plan to promote diversity and how you would
            create an inclusive environment at the workshop.`}
          </li>
          <li>
            <strong>Organizers:</strong>
            {` Present the organizers’ backgrounds,
            including the main contact person. Website: Provide details of the
            planned website, including the URL. (This may be TBD until after
            acceptance).`}
          </li>
          <li>
            <strong>Pre-Workshop Plans:</strong>
            {` Please provide plans for how
            participants will be made aware of the workshop and how you will
            encourage community-building (e.g., through a website or other
            communication with participants).`}
          </li>
          <li>
            <strong>Call for Participation:</strong>
            {` Provide a 250-word Call for
            Participation that will be posted on the conference site to recruit
            participants for your workshop. This should appear at the end of
            your workshop proposal, and should include the following:`}
            <ul>
              <li>{`The goals of the workshop`}</li>
              <li>{`The participant selection criteria`}</li>
              <li>
                {`Requirements for position papers (e.g., topics to address, page
              length, format) or workshop artifact`}
              </li>
              <li>
                {` Where these position papers or workshop artifacts should be
                submitted`}
              </li>
              <li>
                {`The requirement that at least one author of each accepted
                position paper or workshop artifact must attend the workshop and
                that all participants must register for the workshop`}
              </li>
              <li>
                {`A link to the workshop website. (This may be TBD until after
                acceptance)`}
              </li>
            </ul>
          </li>
          <li>
            <strong>References:</strong>
            {` References are not included within the
            word limit. This proposal is the only document from the workshop
            which will be included in the ASSETS Extended Abstracts proceedings.
            Any position paper or other material submitted by workshop
            participants is not included but may be distributed through avenues
            like the workshop website. The workshop organizers may also consider
            submitting an actionable summary or ‘lessons learned’-style report
            after the workshop to SIGACCESS newsletter.`}
          </li>
        </ul>
      </Section>
      <Section
        title={"Suggestions for planning your inclusive online workshop"}
        spacing={"bottom-only"}
      >
        <p>
          {`To help reduce videoconferencing exhaustion and to broaden
          participation, we encourage organizers to think creatively and
          inclusively to make the workshops interactive. Workshop organizers may
          consider supporting offline activities ahead of/during the workshop
          (such as sending design kits to participants). Organizers may also
          want to consider tasks and activity design where attendees might be
          co-located (e.g., a workshop that connects multiple research groups)
          and could physically work together prior to joining the online
          workshop event.`}
        </p>
        <p>
          {`While traditionally at in-person workshops we would often work for up
          to 8 hours at a time, in online workshops we recommend that you reduce
          the length of time that your participants will be on the video call
          and opt for shorter, more interactive activities.`}
        </p>
        <p>
          {`We expect to have participants from all around the world, as such it
          is vital that you plan your workshop to accommodate participants
          joining from a number of timezones. Consider more asynchronous
          breakout activities that participants can do on their own,
          complemented with shorter synchronous interactions where participants
          get together and discuss.`}
        </p>
      </Section>
      <Section title={`Workshop Selection Process`} spacing={"bottom-only"}>
        <p>
          {`We would like the ASSETS community to guide and shape the workshops
          that will be included in the conference. As such, ASSETS Workshop
          track will follow an open review and then a Juried review process.`}
        </p>
        <p>
          {`During the period between submissions and notifications researchers
          and practitioners who work in the areas of accessibility, disability,
          and computing will be invited to comment and discuss the workshop
          proposal submissions within a reviewer forum via PCS in a
          non-anonymous format`}
          <strong>*</strong>
          {`.`}
          {` Authors will also be encouraged to invite
          relevant members (such as potential attendees) to review the proposal
          and provide feedback. Such discussion and feedback we hope will give
          the authors an opportunity to refine and adapt their workshop plans
          (if they choose) to ultimately create a successful workshop.`}
        </p>
        <p>
          {`After the discussion period, the final selection will be curated by
          the workshop chairs based on the following assessment criteria:`}
        </p>
        <ul>
          <li>
            {`Does the workshop foster community-building and look to broaden
            diversity in the ASSETS community?`}
          </li>
          <li>
            {`Alignment of the workshop topic with the interests of the ASSETS
            community.`}
          </li>
          <li>
            {`The workshops’ potential to generate discussion on new directions of
            future work by the ASSETS community.`}
          </li>
          <li>
            {`Level of engagement and proposed interactivity in the workshop. For
            workshop proposals of comparable quality, preference will be given
            to workshops containing discussion, interactive sessions, and a
            diverse organization team.`}
          </li>
        </ul>
        <p className="italic font-semibold">
          {`* All reviewers will be required to consent to a review agreement
          prior to participating in the selection process.`}
        </p>
      </Section>
      <Section title={"Reviewing for Workshops"} spacing={"bottom-only"}>
        <ol type="1" className="!list-decimal">
          <li>
            {`Interested reviewers must volunteer to review for the ASSETS 2024
            Workshops Track via PCS. Visit the PCS volunteer page.`}
          </li>
          <li>
            {`You will then have access to the bidding page and see a list of all
            available titles and abstracts. For any you wish to review, please
            select “want” or “willing”. You can bid on more workshop proposals
            at any time during the review period and can deselect reviews if you
            change your mind.`}
          </li>
          <li>
            {`You will have access to the submissions, discussions, and reviews
            through your reviewing page.`}
          </li>
          <li>
            {`Reviewers and authors are encouraged to actively engage in
            discussions about their workshop proposals throughout the reviewing
            process.`}
          </li>
        </ol>
      </Section>
      <Section
        title={
          "Responsibility of Workshop Organizers: Upon Acceptance of Workshop Proposals and Before the Workshop Day"
        }
        spacing={"bottom-only"}
      >
        <p>
          {`Workshop organizers upon receiving notification of acceptance, must
          prepare to fulfil the following responsibilities prior to the
          workshop day:`}
        </p>
        <ul>
          <li>
            <strong>Set up a website:</strong>
            {` Organizers of an accepted workshop must set up and
            maintain a website with information about their workshop (deadlines,
            CfP, program, templates, accepted papers/participants, organizers,
            etc.). We will include the link to the workshop’s page on the
            official ASSETS workshop site.`}
          </li>
          <li>
            <strong>Advertise your workshop:</strong>
            {` Share your call for participants within
            your professional network. Accepted workshops will also be listed on
            the ASSETS’24 web page.`}
          </li>
          <li>
            <strong>Collect position papers or workshop artifacts:</strong>
            {` From potential
            participants (depending on how the organizers run the workshop). A
            position paper can be a 2-4 pages document. An artifact can be a
            video or images of physical objects that outlines the submitter’s
            view on the workshop theme and the reasons for the submitter’s
            interest in the topic.`}
          </li>
          <li>
            <strong>Set up a review process:</strong>
            {` Select participants accordingly. We expect
            workshops to target a minimum number of 10 participants.`}
          </li>
          <li>
            <strong>Plan for pre-workshop activities:</strong>
            {` If applicable, share and
            distribute any pre-workshop materials (e.g., design kits) to
            participants in advance of the workshop.`}
          </li>
          <li>
            <strong>Distribute:</strong>
            {` Share accepted position papers or workshop artifacts.
            This will help participants to familiarize themselves with workshop
            content and encourage more in-depth discussions.`}
          </li>
          <li>
            {`Ensure the workshop organizers and participants are aware of the ACM
            Code of Ethics and Professional Conduct.`}
          </li>
        </ul>
      </Section>
      <Section title={"Registration for Workshops"} spacing={"bottom-only"}>
        <p>
          <strong>Workshop Organizers:</strong>
          {` All organizers who plan to
          attend the workshop must register for the workshop and at least one
          organizer must register for the entire conference.`}
        </p>
        <p>
          <strong>Workshop Attendees:</strong>
          {` Must register for the workshop
          they are attending.`}
        </p>
        <p>
          <strong>Registration fee:</strong>
          {`Workshop registration fees will be found on the conference
          registration page. Although not required, workshop attendees are
          strongly encouraged to register for the full conference in addition to
          their workshop.`}
        </p>
      </Section>
      <Section title={"Further Information"}>
        <p>
          {`By submitting your article to an ACM Publication, you are hereby
          acknowledging that you and your co-authors are subject to all ACM
          Publications Policies, including ACM's new Publications Policy on
          Research Involving Human Participants and Subjects. Alleged violations
          of this policy or any ACM Publications Policy will be investigated by
          ACM and may result in a full retraction of your paper, in addition to
          other potential penalties, as per ACM Publications Policy.`}
        </p>
        <p>
          {`Please ensure that you and your co-authors obtain an ORCID ID, so you
          can complete the publishing process for your accepted paper. ACM has
          been involved in ORCID from the start and we have recently made a
          commitment to collect ORCID IDs from all of our published authors. The
          collection process has started and will roll out as a requirement
          throughout 2022. We are committed to improving author discoverability,
          ensuring proper attribution and contributing to ongoing community
          efforts around name normalization; your ORCID ID will help in these
          efforts.`}
        </p>
        <p>
          {`For further information or any questions regarding workshop
          submissions, please contact the Workshop Chairs - Saad Hassan and Jonggi Hong at `}
          <Link href="mailto:workshops-assets24@acm.org">
            workshops-assets24@acm.org
          </Link>
          .
        </p>
      </Section>
    </Subpage>
  );
}
