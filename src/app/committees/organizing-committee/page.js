import Link from "@/app/lib/components/primitives/Link";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "@/app/lib/utils/createMetadata";
import { redirect } from "next/navigation";

export const metadata = createMetadata({ title: "Organizing Committee" });

export default function OrganizingCommittee() {
    return redirect("/not-found"); // remove this later.
    return (
        <Subpage
            noTOC={true}
            title={"Organizing Committee"}
            subheading={"Behind the Scenes"}
        >
            <Section
                title={"This Page Isn't Ready Yet."}
                spacing={"bottom-only"}
            >
                <div className="flex flex-col gap-4 sm:items-start items-center mb-12">
                    <p className="sm:text-left text-center">
                        {`Hey, this page isn't ready yet. Come back later!`}
                    </p>
                    <Link href="/">Back to Home.</Link>
                </div>
            </Section>
        </Subpage>
    );
}
