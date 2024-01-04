import Container from "@/app/lib/components/primitives/Container";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import { createMetadata } from "../lib/utils/createMetadata";
import Link from "../lib/components/primitives/Link";

export const metadata = createMetadata({ title: "Code of Conduct" });

export default function CodeOfConduct() {
  return (
    <Subpage
      title={"Code of Conduct"}
      subheading={"Policy Against Harassment at ACM Activities"}
    >
      <Section
        title={"Policy Against Harassment at ACM Activities"}
        spacing={"bottom-only"}
      >
        <p>
          The open exchange of ideas is central to the Association for Computing
          Machinery's mission. This requires an environment that embraces
          diversity and provides a safe, welcoming environment for all.
        </p>
        <p>This policy applies to all ACM activities, including:</p>
        <ul>
          <li>
            Conferences, symposia, workshops, and events sponsored,
            co-sponsored, or in cooperation with ACM any ACM SIG or Chapter or
            any other ACM subunit;
          </li>
          <li>ACM member meetings;</li>
          <li>
            Exchanges among committees or other bodies associated with ACM
            activities publications and communications sent through
            communication channels associated with ACM, including social media.
          </li>
        </ul>
      </Section>
      <Section title={"Expected Behavior"} spacing={"bottom-only"}>
        <p>
          We expect all participants in ACM activities to abide by this policy
          in all venues, including ancillary events and unofficial social
          gatherings:
        </p>
        <ul>
          <li>
            Exercise consideration and respect in your speech and actions;
          </li>
          <li>
            Refrain from demeaning, discriminatory, or harassing behavior and
            speech;
          </li>
          <li>
            Be mindful of your surroundings and of your fellow participants;
          </li>
          <li>
            Alert community leaders if you notice a dangerous situation, someone
            in distress, or violations of this policy, even if they seem
            inconsequential.
          </li>
        </ul>
      </Section>
      <Section title={"Unacceptable Behavior"} spacing={"bottom-only"}>
        <p>Unacceptable at any ACM activity is:</p>
        <ul>
          <li>
            {`Abuse: Any action directed at an individual that (a) interferes
            substantially with that person's participation; or (b) causes that
            person to fear for his/her personal safety. This includes threats,
            intimidation, bullying, stalking, or other types of abuse.`}
          </li>
          <li>
            Discriminatory Harassment: Any conduct that discriminates or
            denigrates an individual on the basis of race, ethnicity, religion,
            citizenship, nationality, age, sexual or gender identity,
            disability, or any other characteristic protected by law in the
            location where the ACM activity takes place.
          </li>
          <li>
            Sexual Harassment: Unwelcome sexual advances, requests for sexual
            favors, or other verbal/physical conduct of a sexual nature.
            Examples include (but are not limited to):
            <ul>
              <li>
                Unwelcome advances or propositions, particularly when one
                individual has authority over the other;
              </li>
              <li>Inappropriate touching of an individual's body;</li>
              <li>
                Degrading or humiliating comments about an individual's
                appearance;
              </li>
              <li>
                Using an activity-related communication channel to display or
                distribute sexually explicit images or messages;
              </li>
            </ul>
          </li>
          <li>
            Alert community leaders if you notice a dangerous situation, someone
            in distress, or violations of this policy, even if they seem
            inconsequential.
          </li>
        </ul>
        <p>Unacceptable behaviors include, but are not limited to:</p>
        <ul>
          <li>
            Intimidating, harassing, abusive discriminatory, derogatory, or
            demeaning speech or actions by any participant in ACM activities, at
            all related events and in one-on-one communications carried out in
            the context of ACM activities;
          </li>
          <li>
            Offensive, degrading, humiliating, harmful, or prejudicial verbal or
            written comments or visual images related to gender, sexual
            orientation, race, religion, disability, age, appearance, or other
            personal characteristics;
          </li>
          <li>
            Unwelcome sexual advances, requests for sexual favors. or other
            verbal/physical conduct of a sexual nature;
          </li>
          <li>
            Inappropriate or gratuitous use of nudity, sexual images, or
            stereotyped images including using an activity related channel to
            display or distribute sexually explicit or otherwise offensive or
            discriminatory images or messages;
          </li>
          <li>Deliberate intimidation, stalking, or following;</li>
          <li>Harassing photography or recording;</li>
          <li>Sustained disruption of talks or other events;</li>
          <li>Unwelcome and uninvited attention or contact;</li>
          <li>Physical assault (including unwelcome touch or groping);</li>
          <li>Real or implied threat of physical harm;</li>
          <li>
            Real or implied threat of professional or financial damage or harm.
          </li>
        </ul>
        <p>
          Harassment can occur when there is no deliberate intention to offend.
          Be careful in the words that you choose. Harassment committed in a
          joking manner or disguised as a compliment still constitutes
          unacceptable behavior. Remember that sexist, racist, and other
          exclusionary jokes can be offensive to those around you.
        </p>
      </Section>
      <Section
        title={"Consequences of Unacceptable Behavior"}
        spacing={"bottom-only"}
      >
        <p>
          If a participant in an ACM activity engages in prohibited behavior,
          ACM reserves the right to take any action ACM deems appropriate. ACM
          reserves the right to:
        </p>
        <ul>
          <li>
            Remove an individual from any ACM activity without warning or
            refund;
          </li>
          <li>
            Prohibit an individual from participating in future ACM activities;
          </li>
          <li>Exclude an individual from ACM leadership positions;</li>
          <li>
            Exclude any individual from deriving other benefits from ACM
            activities;
          </li>
          <li>Suspend or terminate membership in ACM.</li>
        </ul>
        <p>
          Such sanctions may be applied regardless of whether or not the
          offender is a member of ACM.
        </p>
        <p>
          Appropriate sanctions also will be taken toward any individual who
          knowingly makes a false allegation of harassment.
        </p>
      </Section>
      <Section
        title={"How to Report Unacceptable Behavior"}
        spacing={"bottom-only"}
      >
        <p>
          Any individual who experiences harassment (as described above) at any
          ACM activity should follow the{" "}
          <Link
            href={
              "https://www.acm.org/about-acm/reporting-unacceptable-behavior"
            }
          >
            Procedures for Reporting Unacceptable Behavior.
          </Link>
        </p>
        <p>
          This policy applies only to unacceptable behavior at ACM activities.
          Complaints regarding other issues should be addressed as described
          under the applicable ACM policy. For example, complaints about papers
          and publications should be made under either{" "}
          <Link
            href={
              "https://www.acm.org/about-acm/acm-code-of-ethics-and-professional-conduct"
            }
          >
            ACM's Code of Ethics and Professional Conduct
          </Link>{" "}
          or{" "}
          <Link href={"https://www.acm.org/publications/policies/plagiarism"}>
            its Plagiarism Policy.
          </Link>
        </p>
        <h2 id="addressing-grievances">Addressing Grievances</h2>
        <p>
          If you feel you have been falsely or unfairly accused of violating
          this Policy Against Harassment at ACM Activities you should notify{" "}
          <Link href={"mailto:advocate@acm.org"}>advocate@acm.org</Link> with a
          concise description of your grievance. Your grievance will be
          thoroughly investigated. Your grievance will be handled in accordance
          with our existing procedures.
        </p>
      </Section>
      <Section title={"Warnings and Disclaimers"} spacing={"bottom-only"}>
        <p>
          This Policy Against Harassment at ACM Activities is not intended to
          limit open discussion of the merits of particular work or issues
          presented at ACM events. It applies only to behavior at ACM events and
          activities.
        </p>
        <p>
          ACM assumes no liability or responsibility for the actions of any
          member or other activity participant.
        </p>
        <p>
          ACM is not responsible for protecting the safety of members or
          participants in ACM activities. Any individual who feels his/her
          safety is at risk due to harassment or for any other reason is
          encouraged to take appropriate steps to ensure personal safety.
        </p>
        <p>
          This Policy supersedes any policy or guidelines concerning harassment
          issued by ACM, or one of its Special Interest Groups, or any other ACM
          sub-unit.
        </p>
        <p>
          There may be situations (such as those involving Title IX issues in
          the United States and venue- or employer-specific policies) where an
          on-site person who is informed of harassment will be under an
          obligation to file a report with an individual or organization outside
          of ACM.
        </p>
      </Section>
      <Section
        title={"Reporting Unacceptable Behavior at ACM Activities"}
        spacing={"bottom-only"}
      >
        <p>
          The first priority should always be personal safety. An individual who
          experiences harassment should take immediate action if needed to
          remain safe.
        </p>
        <p>
          The procedures here describe how to report unacceptable behavior at
          ACM activities.{" "}
          <Link
            href={"https://www.acm.org/about-acm/policy-against-harassment"}
          >
            The Policy Against Harassment at ACM Activities
          </Link>{" "}
          describes actions that constitute harassment.
        </p>
      </Section>
      <Section
        title={
          "What Should I Do If I Experience or Witness Unacceptable Behavior?"
        }
        spacing={"bottom-only"}
      >
        <p>
          In the event of unacceptable behavior, you may wish to inform a person
          in authority. Those in authority to act in these cases include the
          event chair, a SIG leader, an onsite ACM staff member, and other event
          organizers who have been designated to handle such complaints at this
          activity. These individuals can provide information about the process
          for handling complaints or handling immediate onsite needs.
        </p>
        <p>
          <i>
            Note that there may be cases (such as those involving Title IX
            issues in the United States and venue- or employer-specific
            policies) where an on-site person who is informed of harassment will
            be required to file a complaint.
          </i>
        </p>
        <p>
          Any investigation or further action requires that a written
          communication be made to ACM. Report the incident using the{" "}
          <Link href={"https://services.acm.org/harass/harass.cfm"}>
            form for Reporting Violations of the ACM Policy Against Harassment.
          </Link>{" "}
          Prompt reporting is critical so that ACM can take action to stop the
          conduct before it is repeated. All reports will be followed up
          promptly, with further investigation conducted where needed to confirm
          facts or resolve disputed facts. In conducting its investigations, ACM
          will strive to keep the identity of the individual making the report
          as confidential as possible beyond the investigation.
        </p>
        <p>
          ACM prohibits any threats or acts of retaliation against individuals
          who report unacceptable behavior or provide information in connection
          with a report by another individual. ACM considers a threat or act of
          retaliation to be as serious an offense as harassment itself and will
          handle reports of retaliation accordingly.
        </p>
      </Section>
      <Section
        title={"Reporting Unacceptable Behavior at ACM Activities"}
        spacing={"bottom-only"}
      >
        <p>
          The first priority should always be personal safety. An individual who
          experiences harassment should take immediate action if needed to
          remain safe.
        </p>
        <p>
          The procedures here describe how to report unacceptable behavior at
          ACM activities.{" "}
          <Link
            href={"https://www.acm.org/about-acm/policy-against-harassment"}
          >
            The Policy Against Harassment at ACM Activities
          </Link>{" "}
          describes actions that constitute harassment.
        </p>
      </Section>
      <Section
        title={"What Should I Do as a Person in Authority?"}
        spacing={"bottom-only"}
      >
        <p>
          As a person in authority at an ACM event, you need to understand how
          to handle possible incidents. Those in authority include the event
          chair, a SIG leader, an onsite ACM staff member, and other event
          organizers who have been designated to handle such complaints at this
          activity.
        </p>

        <p>
          Your primary role as a person in authority is to (a) lend a
          sympathetic ear and (b) explain procedures for reporting unacceptable
          behavior if a person wishes to pursue further action. In general, you
          should not attempt to mediate or resolve complaints informally.
        </p>
        <p>
          If the situation appears to be an emergency (e.g., requiring medical
          assistance or if there has been an overt threat of violence), you
          should use judgment and common sense. Never presume, however, that an
          individual would welcome your involvement. Instead, tell the person to
          take any step he/she feels is needed to ensure personal safety.
        </p>
        <p>
          If the immediate emergency extends to more than one individual, event
          organizers may need to take stronger actions, such as addressing the
          event attendees as a whole, barring further event attendance and
          participation by specific attendees, or imposing requirements on an
          attendee's further participation. Such decisions should be kept as
          minimally intrusive as possible, and must be made with the awareness
          that an allegation is not the same as a determination of guilt. Any
          post-event investigations, sanctions, or other actions should be
          handled by using the{" "}
          <Link href={"https://services.acm.org/harass/harass.cfm"}>
            form for Reporting Violations of the ACM Policy Against Harassment.
          </Link>{" "}
        </p>
        <p>
          If an event uses contractors, the event organizers should make sure
          the contractors are told to report any incident to a person in
          authority rather than dealing with it themselves.
        </p>
      </Section>
      <Section
        title={"What Enforcement Procedures Will be Followed?"}
        spacing={"bottom-only"}
      >
        <p>
          When receiving a report of unacceptable behavior, ACM's President,
          CEO, or COO will review and direct appropriate follow up. In
          consultation with the Chair of ACM's Committee on Professional Ethics
          (COPE), the executive will also make a recommendation to COPE
          regarding resolution. COPE will make a final, binding decision
          regarding whether ACM's policy has been violated and the consequences
          of any such violation.
        </p>
        <p>
          The Committee may take actions including, but not limited to,
          suspension or termination of membership in ACM, exclusion from ACM
          leadership positions, exclusion from participating in future ACM
          events, and/or exclusion from deriving other benefits from ACM
          activities. Such actions may be applied regardless of whether or not
          the offender is a member of ACM.
        </p>
        <p>
          The same actions may be taken toward any individual who engages in
          retaliation or who knowingly makes a false allegation of harassment.
        </p>
      </Section>
    </Subpage>
  );
}
