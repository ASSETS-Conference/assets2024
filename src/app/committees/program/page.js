import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { PROGRAM_COMMITTEE } from "@/app/lib/config/committees.config";
import React from "react";

export default function ProgramCommittee() {
    return (
        <Subpage
            noTOC={true}
            title={"Program Committee"}
            subheading={"Behind the Scenes"}
        >
            <Section
                title={"Program Committee Members"}
                spacing={"bottom-only"}
            >
                {PROGRAM_COMMITTEE.map((e, i) => (
                    <p className="mb-4 text-lg" key={i}>
                        <strong>{e.name + ", "}</strong>
                        <em>
                            {e.school + (e.location ? ", " + e.location : "")}
                        </em>
                    </p>
                ))}
            </Section>
        </Subpage>
    );
}
