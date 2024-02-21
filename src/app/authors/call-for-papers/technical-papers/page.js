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

export const metadata = createMetadata({ title: "Technical Papers" });

export default function TechnicalPapers() {
  return (
    <Subpage
      title={"Technical Papers"}
      subheading={"Submission Guidelines for Technical Papers at ASSETS '24"}
    >
      <Section title="Important Dates" spacing={"bottom-only"}>
        <p>
          <strong>All deadlines</strong> are 11:59 P.M. Anywhere on Earth (UTC
          -12:00).
        </p>
        <DateList dates={TECHNICAL_PAPERS_SUBPAGE_DEADLINES} />
      </Section>
      <Section title={"Submission Guidelines"} spacing={"bottom-only"}>
        <h2 id="paper-format-and-length">Paper Format and Length</h2>
        <ul>
          <li>
            ASSETS uses{" "}
            <Link href="https://authors.acm.org/proceedings/production-information/taps-production-workflow">{`the ACM Publication System (TAPS) process `}</Link>
            to generate final multi-format representations of accepted papers.
          </li>
          <li>
            The correct template for submission is: single-column{" "}
            <Link
              href={`https://authors.acm.org/proceedings/production-information/preparing-your-article-with-microsoft-word`}
            >
              Word Submission Template{" "}
            </Link>{" "}
            and{" "}
            <Link href="https://authors.acm.org/proceedings/production-information/preparing-your-article-with-latex">
              single-column LaTeX
            </Link>{" "}
            (using “manuscript” style available in the template). You may also
            choose to use 
            <Link href="https://authors.acm.org/proceedings/production-information/overleaf">
              {` Overleaf`}
            </Link>
            .
          </li>
        </ul>
        <p>
          {`The length of most accepted technical papers will be 7,500 to 10,000 words (4,000 to 5,000 for short technical papers); note that references do not count towards these word counts. Papers with many figures and tables should err on the shorter side of the word count range. For either short or long papers, you are not obligated to fill the entire page quota; a good rule of thumb is that the length of your paper should be commensurate with its contribution.`}
        </p>
        <p>
          Submissions should use templates that can be found on the{" "}
          <Link href="/resources/submission-templates">
            Submission Templates page
          </Link>
          .
        </p>
        <h2 id="accessible-submissions">Accessible Submissions</h2>
        <p>
          {`Your PDF file must be accessible. It may take several hours to make your PDF file accessible (adding alt tags, etc.), so be sure to leave time before the submission deadline to do so. Please refer to the instructions on `}
          <Link href="/resources/creating-a11y-papers">
            Creating an Accessible ACM Conference Paper
          </Link>{" "}
          {`for information on how to accomplish this.`}
        </p>
        <p>
          It is expected that papers will be made accessible at the time of
          review and for the final submission.{" "}
          <b>
            Paper submissions that are not accessible will be desk rejected.
          </b>{" "}
          If you have questions about making your paper accessible, please
          contact{" "}
          <Link href="mailto:papers-assets24@acm.org">
            papers-assets24@acm.org
          </Link>
          .{" "}
        </p>
        <h3 id="optional-accessible-video-figures">Optional Accessible Video Figures as Supplementary Material</h3>
        <p>
          You may include optional video figures to accompany your paper
          submissions as supplementary material, which may be up to{" "}
          <b>five minutes</b> long. There is a separate upload field in the
          PrecisionConference website. Video figures are strongly encouraged for
          papers introducing a novel system or interaction technique. Video
          figures are not the same as video presentations of accepted papers
          that are shown during the conference.
        </p>
        <p>
          {`Video figures should be in .mp4 format and should be less than 50 MB.
          Like papers, video figures must be accessible. For videos to be
          accessible, include both audio narration (so that the contents of the
          video can be understood by someone with a visual impairment) as well
          as text captions (so that the video can be understood by someone who
          is deaf or hard of hearing). Text captions can be burned directly into
          the video as subtitles (preferred), or closed-captioning metadata
          files (*.srt, *.ttml, *.vtt) can be uploaded as additional
          supplementary material. Please also refer to the guidance on `}
          <Link href="/resources/creating-a11y-papers">
            Accessible Video Figures.
          </Link>
        </p>
        <h2 id="anonymous-submissions">Anonymous Submissions</h2>
        <p>
          {`ASSETS will utilize a fully anonymous review process for Technical
          Papers, in which the`}{" "}
          <b>
            authors must anonymize their paper submissions, all supplemental
            materials, and video figures.
          </b>{" "}
          {` We will follow the
          standard of SIGCHI, which requires that all author names,
          affiliations, and contact information be removed. You should not
          anonymize references to your prior work (these are needed as part of
          the review process). Instead, you should refer to all prior work in
          the third person. While it may not be possible to remove all clues to
          who the authors are, we expect authors to do their best. Authors with
          difficulty applying this anonymization policy to their research are
          encouraged to contact the program chairs for additional guidance.`}
        </p>
        <p>
          {`Supplemental video figures should be anonymized for review (i.e., do
          not include author or institution names in videos).`}
        </p>
        <p>
          {`Although submissions are anonymous, please ensure that you and your
          co-authors obtain an ORCID ID, so you can complete the publishing
          process for your accepted paper. ACM has been involved in ORCID from
          the start and we have recently made a commitment to collect ORCID IDs
          from all of our published authors. The collection process has started
          and will roll out as a requirement throughout 2022. We are committed
          to improve author discoverability, ensure proper attribution and
          contribute to ongoing community efforts around name normalization;
          your ORCID ID will help in these efforts.`}
        </p>
        <h2 id="review-process">Review Process</h2>
        <p>
          {`Submissions that do not meet formatting or accessibility guidelines,
          are not properly anonymized, are out of the topical scope of the
          conference, or are otherwise deemed non-competitive by the program
          chairs may be rejected without review. Otherwise, submissions will be
          peer-reviewed by an international panel (link coming soon).`}
        </p>
        <p>
          {`Authors with sufficiently high review scores will have an opportunity
          to submit a “Rebuttal” after viewing the reviews, prior to the final
          acceptance decisions. The window of time for this rebuttal period is
          about a week, so authors should plan to make time for this. See `}
          <Link href={"#important-dates"}>Important Dates</Link>, above.
        </p>
        <p>
          {`Submissions MUST contain substantial original, unpublished material.
          Please refer to the `}{" "}
          <Link href="https://www.acm.org/publications/policies/plagiarism-overview">
            ACM policy on plagiarism.
          </Link>{" "}
          <Link href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-writing-guide/">
            Writing Guidelines
          </Link>{" "}
          {`are
          available to help authors choose appropriate language for writing
          about technology and people with disabilities. Authors of accepted
          papers should note that papers may be made publically available in the
          ACM Digital Library as far as two weeks in advance of the conference
          date.`}
        </p>
        <h2 id="how-to-submit">How to submit</h2>
        <p>
          The submission deadline is{" "}
          <b>
            Wednesday, April 24th, 2024, 11:59 P.M. Anywhere on Earth{" "}
            {`(UTC -12:00).`}
          </b>{" "}
          {`Please submit via the ASSETS 2024
          technical papers submission site (link coming soon).`}
        </p>
        <h2 id="author-PCS-account-details">Author PCS Account Details</h2>
        <p>
          {`ACM continues to update the publication process. Currently, paper
          metadata will be pulled directly from your personal PCS account. This
          means that it is crucial for you and all of your co-authors to update
          the contact information so that names, affiliations, AND primary email
          addresses are stylized exactly in the way that you all would want to
          see them in the ACM digital library and on your paper. For example, if
          you use a personal email address (xyz123@hotmail.com) as your primary
          contact email in PCS then this email will appear on your paper. Please `}
          <Link href="https://new.precisionconference.com/user/login?next=https%3A//new.precisionconference.com/contact_info">
            check your author information and make the necessary changes.
          </Link>
        </p>
        <h2 id="publishing-with-ACM-Digital-Library">Publishing with ACM Digital Library</h2>
        <p>
          {`The official publication date is when the proceedings are made
          available in the ACM Digital Library. This date may be up to two weeks
          prior to the first day of your conference. The official publication
          date affects the deadline for any patent filings related to published
          work. (For those rare conferences whose proceedings are published in
          the ACM Digital Library after the conference is over, the official
          publication date remains the first day of the conference).`}
        </p>
      </Section>
      <Section title={"Further Information"} spacing={"bottom-only"}>
        <p>
          {`By submitting your article to an ACM Publication, you are hereby
          acknowledging that you and your co-authors are subject to all ACM
          Publications Policies, including ACM's new Publications Policy on
          Research Involving Human Participants and Subjects. Alleged violations
          of this policy or any ACM Publications Policy will be investigated by
          ACM and may result in a full retraction of your paper, in addition to
          other potential penalties, as per ACM Publications Policy.`}
        </p>
        <p>
          {`Please ensure that you and your co-authors obtain an ORCID ID, so you
          can complete the publishing process for your accepted paper. ACM has
          been involved in ORCID from the start and we have recently made a
          commitment to collect ORCID IDs from all of our published authors. The
          collection process has started and will roll out as a requirement
          throughout 2022. We are committed to improving author discoverability,
          ensuring proper attribution and contributing to ongoing community
          efforts around name normalization; your ORCID ID will help in these
          efforts.`}
        </p>
        <p>
          {`For further information or any questions regarding technical paper
          submissions, please contact the Program Chairs, Robin Brewer and Tiago
          Guerreiro, at `}<Link href={'mailto:papers-assets24@acm.org'}>papers-assets24@acm.org.</Link>
        </p>
      </Section>
    </Subpage>
  );
}
