import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { ACCEPTED_PAPERS } from "@/app/lib/config/acceptedpapers.config";
import Letter from "@/app/lib/components/lists/Letter";
import { makeAttributeSafe } from "@/app/lib/utils/basics";
import { ACCEPTED_WORKSHOPS } from "@/app/lib/config/acceptedworkshops.config";
import Alert from "@/app/lib/components/Alert";

export const metadata = createMetadata({ title: "Accepted Workshops" });

/**
 *
 * @param {Object} props
 * @param {String} props.title Title of workshop
 * @param {String[]} props.organizers
 * @param {String} props.website
 * @param {String} props.deadline
 * @param {String} props.placeDetails
 * @param {String} props.abstract
 * @returns
 */
function WorkshopSection({
  title,
  organizers,
  website,
  deadline,
  placeDetails,
  abstract,
}) {
  return (
    <div className="mb-8">
      <h2 id={makeAttributeSafe(title)}>{title}</h2>
      <div>
        <p>
          <strong>{`Organizers: `}</strong>
          {organizers.map((n, i) =>
            i !== organizers.length - 1 ? `${n}, ` : `${n}`
          )}
        </p>
        <p>
          <strong>{`Workshop Website: `}</strong>
          <Link href={website}>{website}</Link>
        </p>
        <p>
          <strong>{`Submission Deadline: `}</strong>
          {deadline}
        </p>
        <p>
          <strong>{`Virtual Workshop Date & Time: `}</strong>
          {placeDetails}
        </p>
        <p>
          <strong>{`Abstract: `}</strong>
        </p>
        <blockquote className="pl-4 mt-4 border-l-4 border-theme-dark">
          <p>{abstract}</p>
        </blockquote>
      </div>
    </div>
  );
}
export default function AcceptedWorkshops() {
  return (
    <Subpage
      title={"Accepted Workshops"}
      altBg={true}
      overrideTOC={
        <Alert
          className={"mb-5"}
          type={"changes"}
          heading="Workshops Registration Now Open"
          raw
        >
          <p>
            {`Workshop registration is now open, please take a look at the
        registration instructions here: `}
            <Link
              href={
                "https://assets24.sigaccess.org/attending/registration/#workshop-registration"
              }
            >
              {`https://assets24.sigaccess.org/attending/registration/#workshop-registration`}
            </Link>
          </p>
        </Alert>
      }
    >
      <p className="mb-4">
        {`To host a workshop at ASSETS, workshop organizers submitted a proposal
          following the Workshop Proposal CFP in July, 2024. These proposals
          were then peer reviewed by at least three expert reviewers and
          selected by the Workshop Track Co-chairs, Saad Hassan and Jonggi Hong (`}
        <Link
          colour={"primary"}
          href={`mailto:workshops-assets24@acm.org`}
        >{`workshops-assets24@acm.org`}</Link>
        {""}
        {`).`}
      </p>
      <p className="mb-12">
        {`Ultimately, four workshops were selected (listed below). To attend a
          workshop, please see the individual workshop webpages—each have their
          own CFPs and participation criteria.`}
      </p>
      <Section title={"Accepted Workshops"} spacing={"bottom-only"}>
        <h2 id="list-of-workshops">List of Workshops</h2>
        <ul className="mb-8">
          {ACCEPTED_WORKSHOPS.map((w, i) => (
            <li key={`workshop-li-${i}`}>
              <Link href={`#${makeAttributeSafe(w.title)}`}>{w.title}</Link>
            </li>
          ))}
        </ul>
        {ACCEPTED_WORKSHOPS.map((w, i) => (
          <WorkshopSection
            key={`workshop-${i}`}
            title={w.title}
            organizers={w.organizers}
            website={w.website}
            deadline={w.deadline}
            placeDetails={w.placeDetails}
            abstract={w.abstract}
          />
        ))}
      </Section>
    </Subpage>
  );
}
