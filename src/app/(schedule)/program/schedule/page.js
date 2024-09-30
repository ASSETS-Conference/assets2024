import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { ScheduleSection } from "@/app/lib/components/schedule/ScheduleSection";
import { Schedule } from "@/app/lib/components/schedule/Schedule";
import { SCHEDULE } from "@/app/lib/config/schedule.config";
import Footer from "@/app/lib/components/primitives/Footer";
import { ScheduleGlance } from "@/app/lib/components/schedule/ScheduleGlance";

export const metadata = createMetadata({ title: "Program" });

export default function SchedulePage() {
    return (
        <>
            <Subpage
                title={"Program"}
                subheading={"Official Schedule for ASSETS '24"}
                altBg
                noTOC={true}
            >
                <Section
                    spacing={"bottom-only"}
                    title="ASSETS 2024 at a Glance"
                >
                    <ScheduleGlance />
                </Section>
                <Section
                    spacing="bottom-only"
                    title="Detailed Program"
                    className={""}
                >
                    <Schedule events={SCHEDULE} />
                </Section>
            </Subpage>
        </>
    );
}
