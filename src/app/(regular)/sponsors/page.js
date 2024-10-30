import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import Link from "@/app/lib/components/primitives/Link";
import Image from "@/app/lib/components/primitives/Image";

export const metadata = createMetadata({ title: "Sponsors" });

export default function TechnicalPapers() {
  return (
    <Subpage
      title="Sponsors of ASSETS 2024"
      subheading={"Current Sponsors of ASSETS 2024"}
      noTOC={true}
    >
      <div className="mb-12">
        {/* <Section title={"Current Sponsors"} spacing={"bottom-only"}> */}
        <h2>Champion Level Sponsors</h2>
        <div className="flex flex-col gap-8 mb-8 md:flex-row">
          <Image
            src={"/sponsors/google.png"}
            className="my-12"
            alt="Logo of Google Inc."
            height={400}
            width={500}
          />
        </div>
        <h2>Gold Level Sponsors</h2>
        <div className="flex flex-col gap-8 mt-8 mb-8">
          <Image
            src={"/sponsors/apple.png"}
            alt="Logo of Apple Inc."
            height={150}
            width={150}
            style={{
              padding: "48px 56px 56px 0px",
            }}
          />
          <Image
            src={"/sponsors/meta_lockup_primary.svg"}
            alt="Logo of Meta Platforms, Inc."
            height={150}
            width={300}
            className="py-6 pl-0 -ml-10"
          />
        </div>
        {/* <h2>Silver Level Sponsors</h2>*/}
        <h2>Bronze Level Sponsors</h2>
        <div className="my-8">
          <p className="md:text-xl text-lg">{`Intuit`}</p>
        </div>
        <h2>Doctoral Consortium</h2>
        <div className="flex flex-col gap-8 mt-8 mb-8 md:flex-row">
          <Image
            src={"/sponsors/nsf_logo.png"}
            alt="Logo of the National Science Foundation."
            height={100}
            width={200}
          />
        </div>
        {/* </Section> */}
      </div>
        <h2>Sponsoring Organizations</h2>
        <div className="flex flex-col gap-8 mt-8 mb-8 md:flex-row">
          <Image
            src={"/sponsors/acm-logo.svg"}
            alt="Logo of the Association for Computing Machinery."
            height={100}
            width={200}
          />
          <Image
            className="ml-[-1]"
            src={"/sponsors/sigaccess.png"}
            alt="SIGACCESS logo"
            height={100}
            width={200}
          />
        </div>
        {/* </Section> */}
      </div>
      <Section title={"About Sponsorship"} spacing={"bottom-only"}>
        <p>{`ASSETS 2024 is the leading conference in the research and design of accessible technology for people with disabilities and older adults. It will be held Oct 27 - 30, 2024 in St. John’s, Newfoundland and Labrador, Canada. There will also be a virtual component for people who cannot physically attend. The organizing committee is led this year by Dr. David Flatla from the University of Guelph, Canada and Prof. Faustina Hwang from the University of Reading, UK, and includes top international scholars in the field.`}</p>
        <p>{`Our conference community is composed of scholars, educators, and students in computing technology and accessibility. Roughly half of our attendees are undergraduate, MS, or PhD students. The conference will include research talks, poster and demo presentations, a doctoral consortium, and community-building events such as accessible cultural activities and a reception. Based on attendance in prior years, we anticipate 200-250 attendees.`}</p>
        <p>
          {`Interested in becoming a sponsor? Please take a look at our`}{" "}
          <Link href={"/sponsors/become-a-sponsor/"}>Become a Sponsor</Link>{" "}
          page.
        </p>
      </Section>
    </Subpage>
  );
}
