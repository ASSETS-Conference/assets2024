import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import Alert from "@/app/lib/components/Alert";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Student Volunteers" });

export default function StudentVolunteers() {
    return (
        <Subpage
            noTOC={false}
            title={"Student Volunteers"}
            // subheading={"Behind the Scenes"}
        >
            <Section
                title={
                    "Come Support the ASSETS 2024 Conference as a Student Volunteer!"
                }
                spacing={"bottom-only"}
            >
                <p>{`The wait is over… applications are now finally open to be a student volunteer! Each year, we have an amazing group of student volunteers (SVs) who assist the ASSETS community with creating the amazing conference we all know and love.`}</p>
                <p>{`Student volunteers are expected to collaborate in the conference organisation and assist with many operational tasks. In addition, being a student volunteer provides opportunities to interact with people in the community as part of these duties.`}</p>
                <p>{`The broad duties of the student volunteers include:`}</p>
                <ul>
                    <li>{`Checking all materials, including papers and videos, to ensure that they are accessible`}</li>
                    <li>{`Answering questions for community members during the conference`}</li>
                    <li>{`Helping with registration and general conference logistics`}</li>
                    <li>{`Interacting with the community either online or in-person during ASSETS ’24`}</li>
                    <li>{`Supporting the Organizing Committee in smooth delivery of ASSETS ’24`}</li>
                </ul>
                <p>{`We are looking for online and in-person student volunteers. Students selected for in-person tasks will receive a registration discount equivalent to the in-person early student member fee. Students selected for online tasks will receive a registration discount equivalent to the virtual early student member fee.`}</p>
                <p>{`This is a great opportunity to get involved in a scientific conference and learn something new! Typically, each student volunteer is asked to contribute up to 20 hours in the weeks preceding the conference and during the conference itself (ASSETS ’24 will be October 28 - 30, 2024).`}</p>
                <p>{`Due to the volume of applicants – SV selection is unfortunately not guaranteed. Candidates will be selected based on some of the following criteria: quality of your responses, skills, inclusion/diversity and degree status.`}</p>
                <p>
                    {`Humphrey Curtis (he/him) is the student volunteer coordinator and will manage logistics across the group. Please feel free to contact him if you have any questions at `}
                    <Link
                        href={"mailto:sv-chairs-assets24@acm.org"}
                    >{`sv-chairs-assets24@acm.org`}</Link>
                    {`!`}
                </p>
            </Section>
            <Section title={"How to Apply"} spacing={"bottom-only"}>
                <p>
                    <strong>{`The deadline to apply is the 31st July 2024.`}</strong>
                </p>
                <p>{`Candidates will be contacted by email – please double check your email address!`}</p>
                <p>
                    <strong>{`Registration form link: `}</strong>
                    <Link
                        href={"https://forms.gle/9dR54rPfKB1oaVYC8"}
                    >{`https://forms.gle/9dR54rPfKB1oaVYC8`}</Link>
                </p>
                <p>{`If for any reason you cannot access the registration form, please contact the SV chairs.`}</p>
            </Section>
        </Subpage>
    );
}
