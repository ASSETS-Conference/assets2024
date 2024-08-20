import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { ACCEPTED_PAPERS } from "@/app/lib/config/acceptedpapers.config";

export const metadata = createMetadata({ title: "Accepted Papers" });

function AcceptedPaper({ title, authors }) {
    return (
        <div className="mb-8">
            <p>
                <strong>{title}</strong>
                <br />
                {authors.map((author, idx) => {
                    return idx < authors.length - 1
                        ? `${author}, `
                        : `${author}`;
                })}
            </p>
        </div>
    );
}

export default function AcceptedPapers() {
    return (
        <Subpage title={"Accepted Papers"} noTOC={true}>
            <Section title={"Accepted Papers"} spacing={"bottom-only"}>
                <p className="mb-6">
                    {`We are pleased to share the titles and authors of accepted technical papers (in alphabetical order). More information regarding the program will be made available in September.`}
                </p>
                {ACCEPTED_PAPERS.map((paper) => (
                    <AcceptedPaper
                        title={paper.title}
                        authors={paper.authors}
                    />
                ))}
            </Section>
        </Subpage>
    );
}
