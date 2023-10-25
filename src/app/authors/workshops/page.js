import React from "react";
import Banner from "@/app/lib/components/Banner";
import Container from "@/app/lib/components/primitives/Container";
import Section from "@/app/lib/components/primitives/Section";
import Link from "@/app/lib/components/primitives/Link";
import OnThisPage from "@/app/lib/components/OnThisPage";
import Subpage from "@/app/lib/components/templates/Subpage";


export default function WorkshopProposals() {
  return (
    <Subpage>
      <div className="">
        <p>
          We invite you to submit a proposal for workshops at ASSETS 2023.
          Workshops will bring together attendees with shared interests to meet
          in the context of a focused and interactive discussion. ASSETS
          workshops should include topics relevant to the ASSETS community,
          including design, systems, tools, scientific understanding,
          methodology, or social issues relevant to and including people with
          disabilities or older adults. It may also focus on enabling
          technologies, technology use by people with disabilities, disability
          justice, legal and policy issues, or accessibility in computing
          education. Each workshop should generate ideas that will suggest
          promising directions for future work for the ASSETS community. If you
          are working in an emerging area in accessibility, please consider
          organizing a workshop.
        </p>
      </div>
      <Section title="Workshop Format" spacing="standard">
        <div className="flex flex-col gap-y-4 ">
          <p>
            Workshops will be an online only event and take place the week of
            October 22. Please note that workshops will not have a physical
            space at the conference.
          </p>
          <h2>test</h2>
          <h3>test h3</h3>
          <p>
            Please see the{" "}
            <Link
              href="https://assets-conference.github.io/assets2023/workshops.html#suggestions"
              target="_blank"
              colour={"primary"}
            >
              Suggestions
            </Link>{" "}
            section for more details on how you might plan your workshop.
          </p>
        </div>
      </Section>
      <Section
        title="Preparing and Submitting your Workshop Proposal"
        spacing="bottom-only"
      >
        <div className="flex flex-col gap-y-4 ">
          <p>
            A workshop proposal must be prepared according to the{" "}
            <Link
              href="https://assets-conference.github.io/assets2023/submission-templates.html"
              target="_blank"
              colour={"primary"}
            >
              ACM Master Article Submission Templates (single column).
            </Link>{" "}
            It must be submitted via the{" "}
            <Link
              // this href does not need to be updated
              href="https://new.precisionconference.com/user/login?society=assets"
              target="_blank"
              colour={"primary"}
            >
              PCS Submission System as a single PDF file.
            </Link>{" "}
            The proposal must be no more than 6,000 words (excluding references)
            and have the following structure:
          </p>
          <p>
            <strong>Background:</strong> Provide a strong rationale for the
            workshop, describe the issues to be addressed, and state concrete
            goals for the workshop.
          </p>
          <p>
            <strong>Workshop Plans:</strong> Explain in detail the workshop
            structure, including activities, timing, resources, and any
            follow-up activities or tangible outcomes. Please note that there is
            no on-site space provided. Please provide details regarding what
            specific technical capacity will be necessary to support the online
            workshop day.
          </p>
          <p>
            <strong>Diversity and inclusion considerations:</strong> Please
            elaborate on how you plan to promote diversity and how you would
            create an inclusive environment at the workshop.
          </p>
          <p>
            <strong>Organizers:</strong> Present the organizers’ backgrounds,
            including the main contact person.
          </p>
          <p>
            <strong>Website:</strong> Provide details of the planned website,
            including the URL. (This may be TBD until after acceptance).
          </p>
          <p>
            <strong>Pre-Workshop Plans:</strong> Please provide plans for how
            participants will be made aware of the workshop and how you will
            encourage community-building (e.g., through a website or other
            communication with participants).
          </p>
          <div className="flex flex-col gap-4">
            <p>
              <strong>Call for Participation:</strong> Provide a 250-word Call
              for Participation that will be posted on the conference site to
              recruit participants for your workshop. This should appear at the
              end of your workshop proposal, and should include the following:
            </p>
            <ul className="list-disc list-inside">
              <li>The goals of the workshop</li>
              <li>The participant selection criteria</li>
              <li>
                Requirements for position papers (e.g., topics to address, page
                length, format) or workshop artifact
              </li>
              <li>
                Where these position papers or workshop artifacts should be
                submitted
              </li>
              <li>
                The requirement that at least one author of each accepted
                position paper or workshop artifact must attend the workshop and
                that all participants must register for workshop
              </li>
              <li>
                A link to the workshop website. (This may be TBD until after
                acceptance)
              </li>
            </ul>
          </div>
          <p>
            <strong>References:</strong> References are not included within the
            word limit.
          </p>
          <p>
            This proposal is the only document from the workshop which will be
            included in the ASSETS Extended Abstracts proceedings. Any position
            paper or other material submitted by workshop participants are not
            included but may be distributed through avenues like the workshop
            website. The workshop organizers may also consider submitting an
            actionable summary or lessons learned-type of report after the
            workshop to{" "}
            <Link
              href="https://assets-conference.github.io/assets2023/workshops.html#suggestions"
              target="_blank"
              colour={"primary"}
            >
              SIGACCESS newsletter.
            </Link>
          </p>
        </div>
      </Section>
    </Subpage>
  );
}
