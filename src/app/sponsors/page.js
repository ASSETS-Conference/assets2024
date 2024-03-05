import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import Link from "../lib/components/primitives/Link";
import Image from "next/image";

export const metadata = createMetadata({ title: "Sponsors" });

export default function TechnicalPapers() {
  return (
    <Subpage
      title="Sponsors of ASSETS 2024"
      subheading={"Current Sponsors of ASSETS 2024"}
    >
      <Section title={"Current Sponsors"} spacing={"bottom-only"}>
        <h2>Champion Level Sponsors</h2>
        <Image src={"/sponsors/google.png"} alt="Logo of Google Inc." height={400} width={500} />
        {/* <h2>Gold Level Sponsors</h2>
        <h2>Silver Level Sponsors</h2>
        <h2>Bronze Level Sponsors</h2> */}
      </Section>
      <Section title={"About Sponsorship"} spacing={"bottom-only"}>
        <p>{`ASSETS 2024 is the leading conference in the research and design of accessible technology for people with disabilities and older adults. It will be held Oct 27 - 30, 2024 in St. John’s, Newfoundland and Labrador, Canada. There will also be a virtual component for people who cannot physically attend. The organizing committee is led this year by Dr. David Flatla from the University of Guelph, Canada and Prof. Faustina Hwang from the University of Reading, UK, and includes top international scholars in the field.`}</p>
        <p>{`Our conference community is composed of scholars, educators, and students in computing technology and accessibility. Roughly half of our attendees are undergraduate, MS, or PhD students. The conference will include research talks, poster and demo presentations, a doctoral consortium, and community-building events such as accessible cultural activities and a reception. Based on attendance in prior years, we anticipate 200-250 attendees.`}</p>
        <p>
          {`Interested in becoming a sponsor? Please take a look at our`}{" "}
          <Link href={"/become-a-sponsor/"}>Become a Sponsor</Link> page.
        </p>
      </Section>
    </Subpage>
  );
}
