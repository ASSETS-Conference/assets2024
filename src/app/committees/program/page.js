import Letter from "@/app/lib/components/lists/Letter";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import {
  EXPERIENCE_REPORTS_PROGRAM_COMMITTEE,
  PROGRAM_COMMITTEE,
} from "@/app/lib/config/committees.config";
import { SortNameAlphabetically } from "@/app/lib/utils/basics";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import React from "react";

export const metadata = createMetadata({ title: "Program Committee" });

export default function ProgramCommittee() {
  return (
    <Subpage
      noTOC={true}
      title={"Program Committee"}
      subheading={"Behind the Scenes"}
    >
      <Section title={"Program Committee Members"} spacing={"bottom-only"}>
        {displayNames("pc",PROGRAM_COMMITTEE)}
      </Section>
      <Section
        title={"Experience Reports Program Committee"}
        spacing={"bottom-only"}
      >
        {displayNames("exr-pc",EXPERIENCE_REPORTS_PROGRAM_COMMITTEE)}
      </Section>
    </Subpage>
  );
}

function displayNames(hashID, names) {
  let firstLetterOfName;
  let letterComp;
  let letterChanged = false;

  return names
    .sort((a, b) => SortNameAlphabetically(a, b))
    .map((e, i) => {
      if (firstLetterOfName !== e.name[0]) {
        firstLetterOfName = e.name[0];
        letterComp = <Letter letter={firstLetterOfName} hashID={`${hashID}-names`} className={"mb-4 mt-8"} />;
        letterChanged = true;
      } else {
        letterChanged = false;
      }
      return (
        <>
          {letterComp && letterChanged ? letterComp : null}
          <p className="mb-4 text-lg" key={i}>
            <strong>{e.name + ", "}</strong>
            <em>{e.school + (e.location ? ", " + e.location : "")}</em>
          </p>
        </>
      );
    });
}
