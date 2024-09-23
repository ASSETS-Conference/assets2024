import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import Persona from "@/app/lib/components/Persona";
import { KEYNOTE_SPEAKERS } from "@/app/lib/config/keynote.config";
import { makeAttributeSafe } from "@/app/lib/utils/basics";
import Image from "@/app/lib/components/primitives/Image";

export const metadata = createMetadata({ title: "Keynote Speaker - Dr. Chieko Asakawa" });
const excludeSpecialChars = new RegExp('[^"“]');

export default function AcceptedPapers() {
  return (
    <Subpage title={"Keynote Speaker"} altBg={true} noTOC={false}>
      <p className="-mb-12">
        {`We are delighted to announce that this year's keynote address will be
      given by Dr. Chieko Asakawa, recipient of the `}
        <Link
          href={
            "https://www.sigaccess.org/2024/08/chieko-asakawa-outstanding-contribution-2024/"
          }
        >
          {`2024 SIGACCESS Award for Outstanding Contributions to Computing and
          Accessibility`}
        </Link>
        {`. This award
      recognizes individuals who have made significant and lasting
      contributions to the development of computing technologies that improve
      the accessibility of media and services to people with disabilities.`}
      </p>
      <Section title={"Dr. Chieko Asakawa"}>
        <div className="mb-8 flex lg:flex-row flex-col ">
          <div className="mt-0">
            <Persona {...KEYNOTE_SPEAKERS[0]} />
          </div>
          <div className="lg:ml-8 lg:mt-0 ml-0 mt-4">
            <h2 className="mt-0" id="biography">Biography</h2>
            <p className="whitespace-pre-line">{KEYNOTE_SPEAKERS[0].bio}</p>
          </div>
        </div>
        <h2
          id={makeAttributeSafe(
            "A Journey in Accessibility: Digital-World to Real-World"
          )}
        >{`A Journey in Accessibility: Digital-World to Real-World`}</h2>
        <p>
          {`Progress in accessibility technology has dramatically improved the
          quality of life for people with disabilities. The SIGACCESS community
          has played a crucial role in this progress since its establishment in
          the late 1990s. This community connect researchers and share, with the
          world, innovative ideas based on the latest science and technology.`}
        </p>
        <p>
          {`My journey with SIGACCESS began in 1998, inspired by the technical
          challenges encountered during the development of the world's first
          practical voice web browser, the "IBM Home Page Reader." This work
          later received the SIGACCESS ASSETS Paper Impact Award in 2013. After
          more than a decade of research in digital accessibility, I shifted my
          focus to a daunting, unsolved challenge: enabling independent movement
          in urban environments for people with visual impairments—the challenge
          of real-world accessibility.`}
        </p>
        <p>
          {` In this address, I will give a brief overview of my research in
          digital accessibility, look at my work on an autonomous navigation
          robot, the "AI suitcase”, and note the importance of social acceptance
          to successfully implement such new technology.`}
        </p>
        <p>
          {`I will then address the tremendous potential we SIGACCESS members
          possess, to practically apply the latest science and technology
          research, thereby steadily improving the quality of life for all
          people.`}
        </p>
      </Section>
      <Section
        title={"SIGACCESS Outstanding Contribution Award"}
        spacing={"bottom-only"}
      >
        <p>{`To read more about Chieko’s SIGACCESS Outstanding Contribution Award, please see: `}</p>
        <Link
          href={
            "https://www.sigaccess.org/2024/08/chieko-asakawa-outstanding-contribution-2024/"
          }
        >{`https://www.sigaccess.org/2024/08/chieko-asakawa-outstanding-contribution-2024/.`}</Link>
      </Section>
    </Subpage>
  );
}
