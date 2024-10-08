import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { ACCEPTED_PAPERS } from "@/app/lib/config/acceptedpapers.config";
import Letter from "@/app/lib/components/lists/Letter";

export const metadata = createMetadata({ title: "Accepted Papers" });
const excludeSpecialChars = new RegExp('[^"“]');

function AcceptedPaper({ title, authors }) {
  return (
    <div className="mb-8">
      <p>
        <strong>{title}</strong>
        <br />
        {authors.map((author, idx) => {
          return idx < authors.length - 1 ? (
            <span key={idx}>{`${author}, `}</span>
          ) : (
            <span key={idx}>{`${author}`}</span>
          );
        })}
      </p>
    </div>
  );
}

export default function AcceptedPapers() {
  return (
    <Subpage title={"Accepted Papers"} noTOC={true} altBg={true}>
      <Section title={"Accepted Papers"} spacing={"bottom-only"}>
        <p className="mb-6">
          {`We are pleased to share the titles and authors of accepted technical papers (in alphabetical order). More information regarding the program will be made available in September.`}
        </p>
        {displayList()}
      </Section>
    </Subpage>
  );
}

function displayList() {
  let letter;
  let letterObj = undefined;
  let letterChanged = false;
  return ACCEPTED_PAPERS.map((paper, idx) => {
    if (letter !== paper.title.match(excludeSpecialChars)[0]) {
      letter = paper.title.match(excludeSpecialChars)[0];
      letterObj = <Letter letter={letter} className={"mb-2"} />;
      letterChanged = true;
    } else {
      letterChanged = false;
    }
    return (
      <>
        {letterObj && letterChanged ? letterObj : null}
        <AcceptedPaper key={`paper-${idx}`} title={paper.title} authors={paper.authors} />
      </>
    );
  });
}
