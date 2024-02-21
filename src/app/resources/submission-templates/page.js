import Container from "@/app/lib/components/primitives/Container";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import Link from "@/app/lib/components/primitives/Link";
import {
  TECHNICAL_PAPERS_DATES,
  TECHNICAL_PAPERS_SUBPAGE_DEADLINES,
} from "@/app/lib/config/importantdates.config";
import { DateList } from "@/app/lib/components/DateList";

export const metadata = createMetadata({ title: "Submission Templates" });

export default function SubmissionTemplates() {
  return (
    <Subpage
      title={"Submission Templates"}
      subheading={"Preparing to submit for ASSETS '24"}
    >
      <Section title="ASSETS Submission Template" spacing={"bottom-only"}>
        <p>
          {`Submissions should be prepared using a single-column submission format. The templates can be found at the`}{" "}
          <Link href="https://www.acm.org/publications/taps/word-template-workflow">
            {`ACM Primary Article Templates AND Publication Workflow`}
          </Link>
          {`. Please refer to the section titled “Preparing Your Material”.`}
        </p>
        <p>
          {`Templates are available for both Microsoft Word and LaTeX. LaTeX
          authors should use the manuscript option to create a single-column
          submission (for an example, see “sample-manuscript.tex” for an
          example, which is included within the template download).`}
        </p>
      </Section>
      <Section
        title="Technical Papers, Posters and Demos (Anonymized Submissions)"
        spacing={"bottom-only"}
      >
        <p>
          {`You will want to edit your document class style to include the
          following “manuscript,review,anonymous” so that your submission is
          anonymised. The document class should look like this:`}
        </p>
        <br />
        <code>{`\\documentclass[manuscript,review,anonymous]{acmart}`}</code>
      </Section>
      <Section
        title={
          "Experience Reports, Student Research Competition (Non-Anonymized Submissions)"
        }
        spacing={"bottom-only"}
      >
        <p>
          {`You will want to edit your document class style to include the following “manuscript,review”. The document class should look like this:`}
        </p>
        <br />
        <code>{`\\documentclass[manuscript,review]{acmart}`}</code>
        <p>
          <b>{`NOTE - `}</b>
          {`Because of the way TAPS processes the papers into different
          formats, the number of pages in your final PDF may differ from your
          submitted source file. Please check the page-length restrictions and
          guidance specifically related to each track on the individual track
          web pages, which can all be found from the`}{" "}
          <Link href="/authors/call-for-papers">{`Call for Papers page.`}</Link>
        </p>
      </Section>
    </Subpage>
  );
}
