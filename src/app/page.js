import Container  from './lib/primitives/Container'
import Footer from './lib/primitives/Footer';
import Section from "./lib/primitives/Section";
import HeadingOne from './lib/primitives/headings/HeadingOne';
import HeadingThree from './lib/primitives/headings/HeadingThree';
import HeadingTwo from './lib/primitives/headings/HeadingTwo';

export default function Home() {
  return (
    <>
    <main id="content">
      <Container>
        <Section title="ASSETS at a Glance">
          <p>hello primitives</p>
        </Section>
        <Section title="Important Dates">
          <HeadingOne>h1</HeadingOne>
          <HeadingTwo>h2</HeadingTwo>
          <HeadingThree>h3</HeadingThree>
          <p>hello primitives</p>
        </Section>
      </Container>
    </main>
    </>
  );
}
