import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import Alert from "@/app/lib/components/Alert";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Registration" });

export default function Registration() {
  return (
    <Subpage
      noTOC={false}
      title={"Registration"}
      overrideTOC={
        <>
          <Alert
            className={"mb-5"}
            type={"changes"}
            heading="Workshops Registration Now Open"
            raw
          >
            <p>
              {`Workshop registration is now open, please take a look at the
                registration instructions under `}
              <Link href={"#workshop-registration"}>
                {`Workshop Registration`}
              </Link>
              {` below.`}
            </p>
          </Alert>
          <Alert
            className={"mb-5"}
            raw={true}
            type={"info"}
            heading={"General Registration Open"}
          >
            <p>
              {`We have opened registration on the `}
              <Link href={`https://cvent.me/45nlmw`}>
                CVENT Registration Site
              </Link>
              {` to support attendees who may need additional time to make plans (e.g., travel, visa). Full details of our in-person and virtual conference experiences will be published as they continue to become available.`}
            </p>
          </Alert>
        </>
      }
      // subheading={"Behind the Scenes"}
    >
      <Section title={"Registration Overview"} spacing={"bottom-only"}>
        <p>
          {`Registrations for conferences can be complicated, reflecting an array of options and time-contingent fee structures. ASSETS is no different. Allow us to help make sense of things. We have:`}
        </p>
        <ul>
          <li>
            {`Four registration types: (1) ACM member, (2) non-member, (3) student ACM member, and (4) student non-member. If you are not yet an ACM member, it often makes financial sense to become one. See `}
            <Link
              href={`https://www.acm.org/membership/membership-options`}
            >{`ACM's membership options here`}</Link>
            {`.`}
          </li>
          <li>{`Three registration deadlines that affect pricing: (1) early, (2) regular, (3) late. Generally, it's best to register early to save costs and to help us plan events.`}</li>
          <li>{`Two conference experiences: (1) the in-person conference in St. John’s, Newfoundland and Labrador or (2) a virtual attendance option. Full details of both experiences will be published as they become available.`}</li>
        </ul>
        <p>{`Below, we expand on each option and provide pricing.  There is also information about guest reception tickets, registration for personal assistants, and accessibility support.`}</p>
      </Section>
      <Section title={"In-Person Conference"} spacing={"bottom-only"}>
        <p>{`ASSETS'24 is planned primarily as an in-person event with a virtual attendance option for which we are still working out the details.`}</p>
        <p>{`We are planning a vibrant in-person conference experience with an exciting technical program, ample opportunities for networking, hands-on demos, and evening social events.`}</p>
        <p>
          {`Sessions in the main conference hall will be interpreted into ASL and captioned by CART providers. If you are bringing a personal assistant with you for accessibility support, please email the treasurer at `}
          <Link
            href={`mailto:treasurer-assets24@acm.org`}
          >{`treasurer-assets24@acm.org`}</Link>
          {` to learn how to register them.`}
        </p>
        <p>{`At least one author of each accepted submission is expected to register for the full in-person conference by the early registration deadline.`}</p>
        <p>{`The registration form will offer the opportunity for you to purchase extra reception tickets for guests. If they would like to attend any additional conference activities, they must complete their own conference registration form.`}</p>
        <p>
          <strong>{`Registration Prices`}</strong>
        </p>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th>{`Delegate Type`}</th>
                <th>{`Early Registration (Aug 28, 2024)`}</th>
                <th>{`Regular Registration (Oct 09, 2024)`}</th>
                <th>{`Late Registration`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`ACM/SIG Member`}</td>
                <td>{`USD $710.00`}</td>
                <td>{`USD $900.00`}</td>
                <td>{`USD $1,070.00`}</td>
              </tr>
              <tr>
                <td>{`Non-Member`}</td>
                <td>{`USD $865.00`}</td>
                <td>{`USD $1,070.00`}</td>
                <td>{`USD $1,185.00`}</td>
              </tr>
              <tr>
                <td>{`Student Member`}</td>
                <td>{`USD $570.00`}</td>
                <td>{`USD $635.00`}</td>
                <td>{`USD $690.00`}</td>
              </tr>
              <tr>
                <td>{`Student Non-Member`}</td>
                <td>{`USD $695.00`}</td>
                <td>{`USD $750.00`}</td>
                <td>{`USD $810.00`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{`Cancellation policy: If you cancel your in-person conference registration by Sept. 11, 2024, you will be refunded 50% of the registration amount and you will continue to have access to the virtual content. Cancellations after Sept. 11, 2024 will not be refunded, unless it is for visa reasons. If your visa is denied (you may be asked to provide evidence), you will be refunded the in-person registration amount less a USD $50 processing fee.`}</p>
      </Section>
      <Section title={"Virtual Attendance Option"} spacing={"bottom-only"}>
        <p>{`ASSETS'24 will offer a virtual attendance option for which we are still working out the details. Full details will be published as they become available.`}</p>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th>{`Delegate Type`}</th>
                <th>{`Early Registration (Aug 28, 2024)`}</th>
                <th>{`Regular Registration (Oct 09, 2024)`}</th>
                <th>{`Late Registration`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{`ACM/SIG Member`}</td>
                <td>{`USD $125.00`}</td>
                <td>{`USD $165.00`}</td>
                <td>{`USD $195.00`}</td>
              </tr>
              <tr>
                <td>{`Non-Member`}</td>
                <td>{`USD $165.00`}</td>
                <td>{`USD $195.00`}</td>
                <td>{`USD $220.00`}</td>
              </tr>
              <tr>
                <td>{`Student Member`}</td>
                <td>{`USD $70.00`}</td>
                <td>{`USD $80.00`}</td>
                <td>{`USD $95.00`}</td>
              </tr>
              <tr>
                <td>{`Student Non-Member`}</td>
                <td>{`USD $95.00`}</td>
                <td>{`USD $125.00`}</td>
                <td>{`USD $150.00`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{`Cancellation policy: virtual conference registrations are non-refundable.`}</p>
      </Section>
      <Section title={"Virtual Workshop Attendance"} spacing={"bottom-only"}>
        <p>{`Workshop proposals still need to be reviewed and we will publish the list of accepted workshops when they become available.`}</p>
        <p>
          {`You must apply to participate in a workshop. Each workshop will be run independently by the respective co-organizers along with support from the ASSETS'24 Workshop Co-chairs, Saad Hassan and Jonggi Hong. You must register for each workshop that you are accepted for. Although not required, workshop attendees are strongly encouraged to register for the full conference in addition to their workshop(s). Please email `}
          <Link
            href={`mailto:workshops-assets24@acm.org`}
          >{`workshops-assets24@acm.org`}</Link>
          {` with any questions.`}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full mt-4">
            <thead>
              <tr>
                <td>{``}</td>
                <th>{`ACM/SIG Member`}</th>
                <th>{`Non-Member`}</th>
                <th>{`Student Member`}</th>
                <th>{`Student Non-Member`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-theme-dark text-theme-off-white font-bold">{`Workshop Fee`}</td>
                <td>{`USD $55.00`}</td>
                <td>{`USD $65.00`}</td>
                <td>{`USD $40.00`}</td>
                <td>{`USD $55.00`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>{`Cancellation policy: virtual workshop registrations are non-refundable.`}</p>
      </Section>
      <Section title={"Workshop Registration"}>
        <p>
          <strong>{`If you have already registered for the ASSETS conference:`}</strong>
        </p>
        <ol>
          <li>{`Find your original registration confirmation email.`}</li>
          <li>{`Click Modify Registration`}</li>
          <li>{`On the webpage with confirmation, click Modify Registration.`}</li>
          <li>{`Press "Next" on the registration pages until you reach "Optional Workshop Registration". (This page is right after the page where you are asked to select in-person or virtual conference and right before the final confirmation page.)`}</li>
          <li>{`Select the desired workshop(s). Each workshop title is associated with a quantity field where you can indicate that you need to purchase 1 workshop registration for each respective workshop you intend to register for.`}</li>
          <li>{`Advance to the payment page and pay for the workshop registration.`}</li>
        </ol>
        <p>
          <strong>{`If you have not registered for the ASSETS conference (and do not intend to):`}</strong>
        </p>
        <ol>
          <li>
            {`Open the `}{" "}
            <Link
              href={`https://cvent.me/45nlmw`}
            >{`Cvent Registration Site`}</Link>
            {` and follow the instructions to register.`}
          </li>
          <li>{`Select Workshop Only when prompted instead of In Person or Virtual.`}</li>
          <li>{`Select the desired workshop(s).  Each workshop title is associated with a quantity field where you can indicate that you need to purchase 1 workshop registration for each respective workshop you intend to register for.`}</li>
          <li>{`Advance to the payment page and pay for the workshop registration.`}</li>
        </ol>
        <p>
          {`If you have problems or need assistance, please reach out to the workshop chairs at `}
          <Link
            href={`workshops-assets24@acm.org`}
          >{`workshops-assets24@acm.org`}</Link>
          {`.`}
        </p>
      </Section>
    </Subpage>
  );
}
