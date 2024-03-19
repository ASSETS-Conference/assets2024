import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Become a Sponsor" });

export default function TechnicalPapers() {
    return (
        <Subpage
            title="Sponsor ASSETS 2024"
            subheading={
                "Sponsor the ACM SIGACCESS conference on computing and accessibility (ASSETS 2024)"
            }
        >
            <Section title={"About Sponsorship"} spacing={"bottom-only"}>
                <p>{`ASSETS 2024 is the leading conference in the research and design of accessible technology for people with disabilities and older adults. It will be held Oct 27 - 30, 2024 in St. John’s, Newfoundland and Labrador, Canada. There will also be a virtual component for people who cannot physically attend. The organizing committee is led this year by Dr. David Flatla from the University of Guelph, Canada and Prof. Faustina Hwang from the University of Reading, UK, and includes top international scholars in the field.`}</p>
                <p>{`Our conference community is composed of scholars, educators, and students in computing technology and accessibility. Roughly half of our attendees are undergraduate, MS, or PhD students. The conference will include research talks, poster and demo presentations, a doctoral consortium, and community-building events such as accessible cultural activities and a reception. Based on attendance in prior years, we anticipate 200-250 attendees.`}</p>
            </Section>
            <Section title={"Sponsorship Tiers"} spacing={"bottom-only"}>
                <h2 id="champion-level">Champion Level: $20,000 USD</h2>
                <ul>
                    <li>Largest, most prominent logo on conference website</li>
                    <li>{`Naming rights for a conference activity of comparable value (for example, “The <Company Name> Reception”)`}</li>
                    <li>{`5-min presentation slot`}</li>
                    <li>{`A booth at all poster and demo sessions`}</li>
                    <li>{`Acknowledgement during opening and closing ceremonies`}</li>
                    <li>{`Acknowledgement on social media`}</li>
                    <li>{`Logo and company name presented on the conference website`}</li>
                </ul>
                <h2 id="gold-level">Gold Level: $10,000 USD</h2>
                <ul>
                    <li>{`A booth at all poster and demo sessions`}</li>
                    <li>{`Acknowledgement during opening and closing ceremonies`}</li>
                    <li>{`Acknowledgement on social media`}</li>
                    <li>{`Logo and company name presented on the conference website`}</li>
                </ul>
                <h2 id="silver-level">Silver Level: $5,000 USD</h2>
                <ul>
                    <li>{`Acknowledgement during opening and closing ceremonies`}</li>
                    <li>{`Acknowledgement on social media`}</li>
                    <li>{`Logo and company name presented on the conference website`}</li>
                </ul>
                <h2 id="bronze-level">Bronze Level: $3,000 USD</h2>
                <ul>
                    <li>{`Acknowledgement during opening and closing ceremonies`}</li>
                    <li>{`Company name (without logo) presented on the website`}</li>
                </ul>
            </Section>
            <Section
                title={"How the Money will be Spent"}
                spacing={"bottom-only"}
            >
                <p>
                    {`We are excited to host the conference in St. John’s, Newfoundland and
          Labrador, a city known for its friendliness and cultural and
          historical significance. Sponsorship funds will help support
          accessibility services such as sign language interpreters, provide
          travel scholarships to students with disabilities, and support
          conference activities such as the doctoral consortium for PhD students
          and an accessible reception. Sponsorship will also help support the
          virtual component of the conference, which is important for those
          whose accessibility needs prevent them from attending the conference
          in person.`}
                </p>
                <p>
                    {`Any leftover funds will be used to support activities in support of
          SIGACCESS’s mission of promoting the professional interests of
          students and computing personnel with disabilities, educating the
          public to support careers for people with disabilities, and supporting
          the international community of researchers and professionals applying
          computing and information technologies to empower individuals with
          disabilities and older adults.`}
                </p>
            </Section>
        </Subpage>
    );
}
