import Container from "@/app/lib/components/primitives/Container";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "../lib/utils/createMetadata";

export const metadata = createMetadata({title: 'Code of Conduct'});

export default function CodeOfConduct() {
  return (
    <Subpage title={'Code of Conduct'} subheading={'Policy Against Harassment at ACM Activities'}>
      <Section title={'Test'} spacing={'bottom-only'}>
     
      </Section>
    </Subpage>
  );
}
