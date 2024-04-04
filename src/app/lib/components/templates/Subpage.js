import React from "react";
import Banner from "../Banner";
import Container from "../primitives/Container";
import OnThisPage from "../OnThisPage";

function Subpage({
  title,
  subheading,
  children,
  noTOC,
  overrideTOC = undefined,
}) {
  return (
    <main id="content">
      <Banner heading={title} subheading={subheading} />
      <Container className={"pt-16 md:pt-20"}>
        {overrideTOC ? <div className="pb-6">{overrideTOC}</div> : null}
        {noTOC ? (
          <div>{children}</div>
        ) : (
          <div className="flex flex-col lg:flex-row-reverse gap-8 m-auto">
            <OnThisPage className="flex-1" />
            <article className="flex-2 mr-4 w-full">{children}</article>
          </div>
        )}
      </Container>
    </main>
  );
}

export default Subpage;
