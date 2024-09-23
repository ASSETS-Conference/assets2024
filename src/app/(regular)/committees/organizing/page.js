import Persona from "@/app/lib/components/Persona";
import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { ORGANIZING_COMMITTEE } from "@/app/lib/config/committees.config";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Organizing Committee" });

export default function OrganizingCommittee() {
  return (
    <Subpage
      noTOC={true}
      title={"Organizing Committee"}
      subheading={"Behind the Scenes"}
    >
      {ORGANIZING_COMMITTEE.map((e) => (
        <Section key={`section-${e.heading}`} title={e.heading} spacing={"bottom-only"} >
          <div className=" min-w-max w-max mx-auto flex flex-col md:mx-0 md:flex-row gap-4">
            {e.members.map((member) => (
              <Persona key={`${member.name}-persona`} {...member} />
            ))}
          </div>
        </Section>
      ))}
    </Subpage>
  );
}
