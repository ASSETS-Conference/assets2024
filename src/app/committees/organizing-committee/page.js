import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({title: 'Organizing Committee'});

export default function OrganizingCommittee() {
  return (
    <Subpage noTOC={true} title={'Organizing Committee'} subheading={'Behind the Scenes'}>
     <Section title={'General Chair'}>
     </Section>
    </Subpage>
  );
}
