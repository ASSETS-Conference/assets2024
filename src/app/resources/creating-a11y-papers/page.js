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

export const metadata = createMetadata({ title: "Accessibility Guidelines" });

export default function CreatingA11y() {
  return (
    <Subpage
      title={"Accessibility Guidelines"}
      subheading={
        "Guidelines for ensuring accessible submissions for ASSETS '24"
      }
    >
      <Section title="Creating Accessible PDFs" spacing={"bottom-only"}>
        <p>
          {`ACM publications are read (and reviewed) by many people. Making your
          paper accessible will help to promote the equal participation of
          people with disabilities in science and engineering. This note
          describes how to check if your PDF is accessible, and how to fix the
          most common accessibility problems. For more information please refer
          to`}{" "}
          <Link href="http://www.adobe.com/accessibility/resources.html">
            Adobe's accessibility resource center
          </Link>
          .
        </p>
      </Section>
      <Section
        title="How do I test if my PDF is accessible?"
        spacing={"bottom-only"}
      >
        <ul>
          <li>
            {`The document should be tagged. In Adobe Acrobat Pro: Go to the
            'File' menu. 'Document properties'. 'Description' tab. Look for
            'Tagged PDF: Yes' among the set of advanced properties. If you do
            not have access to Adobe Acrobat, try selecting some text in the PDF
            and pasting it into a text editor. If you can't do this, or the text
            looks wrong, chances are your document is not readable with a screen
            reader.`}
          </li>
          <li>
            {`Check the accessibility. In Adobe Acrobat Pro: Go to the 'Advanced'
            menu. 'Accessibility'. 'Full Check'. The checker will report
            accessibility problems.`}
          </li>
          <li>
            {`Fonts should be embedded, or your PDF will need to be regenerated,
            and you may lose accessibility that you have added. In Adobe Acrobat
            Pro: Go to the 'File' menu. 'Document properties'. 'Fonts 'tab. All
            of the fonts should have the word 'embedded' in parentheses after
            the font name (unless they are not visible in the final document).`}
          </li>
        </ul>
      </Section>
      <Section
        title={"How do I fix accessibility problems?"}
        spacing={"bottom-only"}
      >
        <p>
          {`Word users should correct as many problems as possible in the Word
          source file rather than the pdf, as described in the next section. On
          a PC, the Adobe plugin for Word can export accessibility features from
          the Word document into the pdf.`}
        </p>
        <p>
          {`On a Mac, this is not the case. Those using Word on a Mac, and all
          LaTeX users will need to edit the PDF directly using Adobe Acrobat. A
          better basic PDF may be produced by using latex2pdf as opposed to
          ps2pdf. See also the`}{" "}
          <Link href="http://webaim.org/techniques/acrobat/converting">
            WebAim PDF Accessibility primer
          </Link>
          {` which provides
          information for OpenOffice users.`}
        </p>
        <p>
          {`The accessibility checker in Adobe Acrobat Pro provides help with
          fixing many accessibility problems. The following steps are for Adobe
          Acrobat Pro 9.`}{" "}
          <Link href="http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-pdf-author-guide/">
            More detailed instructions for Adobe Acrobat Pro XI
          </Link>
          {` and a`}
          <Link href="https://www.youtube.com/watch?v=fO4udYorD6g">
            {" "}
            video for Adobe Acrobat Pro XI,
          </Link>
          {` are also available. Please see `}
          <Link href="http://www.adobe.com/accessibility/resources.html">{`Adobe's best practices`}</Link>
          {` for instructions covering more versions of Adobe Acrobat.`}
        </p>
        <ul>
          <li>
            {`Add tags. Go to the 'Advanced' menu. Select 'Accessibility', then
            'Add tags to document'.`}
          </li>
          <li>
            {`Add alternative text for figures. Context-click the Figure, select
            'Properties', and fill in 'Alternate Text'. If no 'Properties'
            option appears, go to the 'Advanced' menu, select 'Touch Up Reading
            Order', and then try context-clicking on the figures again, looking
            for an 'Edit alternate text' option.`}
          </li>
          <li>
            {`Specify the document language. Go to the 'File' menu. Select
            'Properties', then the 'Advanced' tab, 'Language' field. In some
            versions of Acrobat, the 'Properties' option is called 'Document
            Properties'. In some versions the 'Language' field is in a 'Reading
            Options' tab.`}
          </li>
          <li>
            {`Define tab order.`}
            <ul>
              <li>{`Go to the 'View' menu. Select 'Navigation tabs', then 'Pages'.`}</li>
              <li>{`Click on any page, then type Ctrl-A (or Command-A on a Mac) to select all the pages.`}</li>
              <li>{`Go to the 'Options' menu in the top right of the dialog box (icon showing two cogs), and select 'Page Properties'.`}</li>
              <li>{`In the 'Tab Order' tab, select 'Use document structure'.`}</li>
            </ul>
          </li>
          <li>
            {`Make sure tables have headings.`}
            <ul>
              <li>{`Go to the 'View' menu. Select 'Navigation tabs', then 'Tags'.`}</li>
              <li>{`Select the 'Tags' tab. This panel shows the document structure as a tree.`}</li>
              <li>{`Navigate to the table cells that should be headers.`}</li>
              <li>{`Check they have the type <TH>. If not, then right click on the header cell, select 'properties', select the 'Tag' tab, and change the value for 'Type' to 'Table Header Cell'.`}</li>
            </ul>
          </li>
        </ul>
      </Section>
      <Section
        title="Creating an accessible PDF directly from Word"
        spacing={"bottom-only"}
      >
        <p>
          {`The following link provides step-by-step instructions for adding basic
          accessibility information to a Word document on a PC, then exporting
          it to a PDF document intended for ACM: `}
          <Link href="http://www.sigaccess.org/welcome-to-sigaccess/resources/acm-submission-with-ms-word/">{`Create an accessible ACM submission using Microsoft Word.`}</Link>
        </p>
      </Section>
      <Section
        title="Making Accessible Figures and Tables"
        spacing={"bottom-only"}
      >
        <ul>
          <li>
            {`Do not add your figures as a pdf. The tagging of figures that are in
            pdf can sometimes lead to undesired effects on the visual
            presentation. Instead, insert the image, for example, as png or svg.`}
          </li>
          <li>{`Do not add your tables as images.`}</li>
          <li>
            {`Give your tables lines/borders.This can facilitate the tagging of the document.`}
          </li>
        </ul>
      </Section>
      <Section
        title="Video Presentation Creation Guidelines"
        spacing={"bottom-only"}
      >
        <p>
          {`Video presentations, like papers, must be accessible. For videos to be
          accessible, they require an audio narration (so that a person with a
          visual impairment can understand the contents of the video) and text
          captions (so that a person who is deaf or hard of hearing can
          understand the video’s contents). Since accessibility is a top
          priority in our community, we may ask you to fix your video if it is
          not fully accessible. So, please follow these guidelines carefully,
          ask questions if you have them, and make accessibility a priority.`}
        </p>
        <p>
          {`To assist you with creating an accessible video presentation, we have
          developed the following guidelines:`}
        </p>
        <h2 id="steps-for-creating-video-presentation-and-closed-captioning">{`Steps for creating video presentation and closed-captioning:`}</h2>
        <ul>
          <li>
            {`Please DO NOT burn the captioning text directly into your video presentation. You will upload the video and closed-captioning files separately.`}
          </li>
          <li>{`Make sure to describe important visuals.`}</li>
          <li>{`Manually modify closed-captioning content to match video and audio and to verify correct transcription.`}</li>
          <li>
            {`Try to keep your reading speed under 180 words per minute.`}
          </li>
        </ul>
        <h2 id="guidelines-for-creating-your-presentation-video">{`Guidelines for creating your presentation video:`}</h2>
        <ul>
          <li>
            {`Create your presentation video with audio using your favorite program (Adobe Premiere Pro, Zoom, PowerPoint, etc.).`}
          </li>
          <li>
            {`Video length:`}
            <ul>
              <li>{`Poster/Demonstration: Three (3) minutes or less`}</li>
              <li>{`All other papers: Six (6) minutes or less`}</li>
            </ul>
          </li>
          <li>{`Video resolution: 1920 x 1080px`}</li>
          <li>{`Video format: MP4`}</li>
        </ul>
        <h2 id="guidelines-for-accessible-narrations">{`Guidelines for accessible narrations:`}</h2>
        <ul>
          <li>
            {`Your narrations should be able to stand on their own. Try listening to your video without looking at it. If everything makes sense, you are on the right track.`}
          </li>
          <li>
            {`Narrations should describe visuals including pictures, visualizations (graphs, etc), tables, and diagrams. Describe the important trends or most salient features of these visuals.`}
          </li>
          <li>{`Avoid statements like, “As you can see here…” instead say, “This slide shows [described visual].”`}</li>
          <li>
            {`Make sure you read or closely paraphrase any text that appears in the video.`}
          </li>
        </ul>
        <h2 id="guidelines-for-closed-captioning">{`Guidelines for closed-captioning:`}</h2>
        <ul>
          <li>{`Font: A san serif font (e.g., Arial, Helvetica, Verdana)`}</li>
          <li>{`Font Color: White`}</li>
          <li>{`Font Background: Black background box`}</li>
          <li>{`Line Length: No more than ~40 characters`}</li>
          <li>{`Number of Lines: No more than two (2) lines`}</li>
          <li>{`Line Alignment: Centre`}</li>
          <li>
            {`Positioning: Lower center of the video presentation screen`}
          </li>
          <li>{`Export captions format: SRT`}</li>
          <li>
            {`Try to keep your subtitles on the screen for at least two (2) seconds.`}
          </li>
          <li>
            {`Keep the bottom ~1/5 of the video screen free of important visuals. This keeps images from being covered over by the subtitles.`}
          </li>
          <li>
            {`Captions should coincide with your audio soundtrack. If you have significant pauses, please add in ellipses (…).`}
          </li>
          <li>
            {`If splitting your subtitles into two (2) lines, keep the lines at an equal or similar length.`}
          </li>
        </ul>
        <h3 id="for-authors-using-Adobe-Premiere">For authors using Adobe Premiere Pro:</h3>
        <ul>
          <li>
            {`To create or generate your captions, please follow the instructions
            on “Captions workflow in Premier Pro | Adobe” at:`}{" "}
            <Link
              href={`https://helpx.adobe.com/premiere-pro/using/working-with-captions.html`}
            >{`https://helpx.adobe.com/premiere-pro/using/working-with-captions.html`}</Link>
          </li>
          <li>
            {`To export the created captions as an SRT, please follow the instructions on “Export text from Premiere Pro” at:`}{" "}
            <Link
              href={`https://helpx.adobe.com/premiere-pro/using/export-text-captions.html`}
            >{`https://helpx.adobe.com/premiere-pro/using/export-text-captions.html`}</Link>
          </li>
        </ul>
        <h3 id="for-authors-using-Flixier">For authors using Flixier:</h3>
        <ul>
          <li>
            {`To create, generate, and download your captions as a SRT file, please follow the instructions on “Add or Generate Subtitles” at:`}{" "}
            <Link
              href={`https://flixier.com/help/219-adding-subtitles`}
            >{`https://flixier.com/help/219-adding-subtitles`}</Link>
          </li>
        </ul>
        <h3 id="additional-resources">Additional resources:</h3>
        <ul>
          <li>
            {`Guide on language mechanics for captioning`}{" "}
            <Link
              href={`https://flixier.com/help/219-adding-subtitles`}
            >{`https://flixier.com/help/219-adding-subtitles`}</Link>
            {` from the Described and Captioned Media Program.`}
          </li>
          <li>
            {`Information on good and bad subtitles/captioning and video descriptions by The National Association of the Deaf:`}{" "}
            <Link
              href={`https://www.youtube.com/watch?v=VyA5mkhCzRA`}
            >{`https://www.youtube.com/watch?v=VyA5mkhCzRA`}</Link>
          </li>
        </ul>
        <p>
          {`All accessible video presentation submissions (.mp4 and .srt) are due
          no later than`} <b>(DATE TBA)</b>. {`Instructions for submitting the video
          presentation files will be announced shortly.`}
        </p>
        <p>
          {`If you have any questions about the accessible video presentation
          guidelines, please contact the Accessibility Chairs at `}
          <Link href={"mailto:access-assets24@acm.org"}>
            access-assets24@acm.org.
          </Link>
        </p>
        <h2 id="making-accessible-presentations">Making Accessible Presentations</h2>
        <p>
          {`Presenters are responsible for making their presentations accessible
          to the diverse attendees at the conference. For instance, there will
          be ASL interpreters during the conference for people who use sign
          language, and there will be attendees in the audience who are blind or
          who have low vision.`}
        </p>
        <p>
          {`As a resource to our community, Kyle Rector has prepared a wonderful
          and concise guide about how to make your presentation accessible,
          along with a video `}
          <Link
            href={`http://www.sigaccess.org/welcome-to-sigaccess/resources/accessible-presentation-guide/`}
          >
            {`Accessible Presentation Guide`}
          </Link>
          {` Please ensure that your presentation incorporates the recommendations from this guide.`}
        </p>
      </Section>
      <Section title="Other Useful Links" spacing={"bottom-only"}>
        <ul>
          <li><Link href={"http://interactions.acm.org/archive/view/november-december-2015/writing-about-accessibility"}>Writing Guidelines</Link></li>
          <li><Link href={"https://www.acm.org/publications/policies"}>ACM Policies</Link></li>
          <li><Link href={"https://www.sigaccess.org/welcome-to-sigaccess/resources/conflict-of-interest/"}>Conflict of Interest</Link></li>
        </ul>
      </Section>
    </Subpage>
  );
}
