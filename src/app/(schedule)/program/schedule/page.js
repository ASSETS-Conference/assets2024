import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { Schedule } from "@/app/lib/components/schedule/Schedule";
import { SCHEDULE } from "@/app/lib/config/schedule.config";
import { ScheduleGlance } from "@/app/lib/components/schedule/ScheduleGlance";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

export const metadata = createMetadata({ title: "Program & Schedule" });

export default function SchedulePage() {
  return (
    <>
      <Subpage
        title={"Program & Schedule"}
        subheading={"Official Schedule for ASSETS '24"}
        altBg
        noTOC={true}
      >
        <Section spacing={"bottom-only"} title="ASSETS 2024 at a Glance">
          <div className="flex flex-col items-center overflow-y-auto">
            <ScheduleGlance />
          </div>
          <div
            id="scroll-hint"
            className="sm:hidden flex items-center justify-center align-middle gap-2 text-black/70"
          >
            <GoArrowLeft className="mt-4 text-lg" aria-hidden />
            <p className="text-base font-light">Scroll to view more</p>
            <GoArrowRight className="mt-4 text-lg" aria-hidden />
          </div>
        </Section>
        <Section spacing="bottom-only" title="Detailed Program" className={""}>
          <Schedule events={SCHEDULE} />
        </Section>
      </Subpage>
    </>
  );
}
