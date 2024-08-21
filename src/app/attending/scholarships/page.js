import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({
    title: "Scholarships",
});

export default function Scholarships() {
    return (
        <Subpage
            noTOC={false}
            title={"Scholarships"}
            // subheading={"Deadline: July 20, 2024"}
        >
            <Section
                title={"ASSETS’24 Scholarships for Virtual Attendance"}
                spacing={"bottom-only"}
            >
                <p>{`ASSETS’24 is pleased to offer scholarships to support virtual conference attendance. Awardees will receive a code that will enable them to register for virtual registration for free (all categories).`}</p>
                <h2>{`Eligibility Criteria`}</h2>
                <p>{`Applicants must be involved in or interested in accessibility research, and they must explain this in their application.`}</p>
                <p>{`We particularly encourage applications from people who are attending ASSETS for the first time, who are from backgrounds that are underrepresented in the computing field, who are based in countries that are traditionally underrepresented at ASSETS, or who would otherwise find it difficult to participate in the conference (for financial or other reasons).`}</p>
                <h2>{`Application Requirements`}</h2>
                <p>
                    {`To apply, please complete the `}
                    <Link
                        href={`https://forms.gle/A4PAEJdXoTFS3Uy67`}
                    >{`online application form`}</Link>
                    {`.`}
                </p>
                <p>
                    {`All applications received by Friday, August 23rd, 2024 will be notified of the outcome of their application by Tuesday, August 27th.  After August 23rd, applications will be reviewed on a rolling basis until Friday October 18th or until the designated fund runs out, whichever comes first. `}
                </p>
                <p>
                    {`After your application is approved, you will receive a code that will allow you to register for ASSETS 2024 without the registration fee.`}
                </p>
                <p>
                    {`Please contact `}
                    <Link
                        href={`mailto:scholarships-assets24@acm.org`}
                    >{`scholarships-assets24@acm.org`}</Link>
                    {` with any questions.`}
                </p>
            </Section>
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
