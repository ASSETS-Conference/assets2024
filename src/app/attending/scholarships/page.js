import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({
    title: "Scholarship",
});

export default function Scholarships() {
    return (
        <Subpage
            noTOC={false}
            title={"Scholarship"}
            subheading={"Deadline: July 20, 2024"}
        >
            <Section
                title={"ACM SIGACCESS Travel Scholarship Award"}
                spacing={"bottom-only"}
            >
                <p>
                    {`The ACM SIGACCESS Travel Scholarship Award aims to provide support for practitioners, researchers, members of advocacy groups, and individuals with disabilities who are interested in the field of computers and accessibility to attend in person and actively participate in the 2024 ASSETS conference.  Further details about eligibility and how to apply can be found on the `}
                    <Link
                        href={`https://www.sigaccess.org/awards/sigaccess-scholarship/`}
                    >{`ACM SIGACCESS Travel Scholarship Award`}</Link>
                    {` webpage. Please contact `}
                    <Link
                        href={`mailto:treasurer_sigaccess@acm.org`}
                    >{`treasurer_sigaccess@acm.org`}</Link>
                    {` with any queries.`}
                </p>
            </Section>
        </Subpage>
    );
}
