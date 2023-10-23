import Hero from "./lib/components/Hero";
import Container from "./lib/primitives/Container";
import Section from "./lib/primitives/Section";
import HeadingOne from "./lib/primitives/headings/HeadingOne";
import HeadingThree from "./lib/primitives/headings/HeadingThree";
import HeadingTwo from "./lib/primitives/headings/HeadingTwo";

export default function Home() {
  return (
    <>
    <main id="content">
      <Hero/>
      <Container>
      <Section title="ASSETS at a Glance">
        <div class="flex flex-col gap-y-5">
            <p>The 25th International ACM SIGACCESS Conference on Computers and Accessibility.</p>
            <p>The ASSETS conference is the premier forum for presenting research on the design, evaluation, use, and education related to computing for people with disabilities and older adults. For those in Europe and Oceania, ASSETS is rated as Core A —a designation for the top academic conferences that are "highly respected in a discipline area" (Core A; Top 16%).</p>
            <p>We invite high-quality original submissions on topics relevant to computing and accessibility. All contributions are peer-reviewed by an international Program Committee. Accepted papers and the abstracts for posters and demonstrations, experience reports, and the student research competition will be archived in the ACM Digital Library. Authors of selected papers will be invited to submit extended versions of their papers to a special issue of the <a href='https://dl.acm.org/journal/taccess' target = '_blank' className='underline text-link-underline-red'>ACM Transactions on Accessible Computing (TACCESS)</a>.</p>
            <p>*The in-person full conference events will take place from October 23 to October 25. However, invitation-only events (i.e. the Doctoral Consortium) will take place on October 22.</p>
        </div>
      </Section>
        <Section title="Important Dates">
          <HeadingOne>h1</HeadingOne>
          <HeadingTwo>h2</HeadingTwo>
          <HeadingThree>h3</HeadingThree>
          <p>hello primitives</p>
        </Section>
      </Container>
    </main>
    <Footer/>
    </>
  );
}
