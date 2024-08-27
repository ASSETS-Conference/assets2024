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
            title={"Accessibility FAQ"}
            // subheading={"Behind the Scenes"}
        >
            <Section title={"Conference Accessibility"} spacing={"bottom-only"}>
                <p>
                    {`ASSETS 2024 is committed to providing an inclusive environment and we will do our best to accommodate such requests. This page describes the accessibility features of ASSETS 2024, to help you make an informed decision about whether the conference will be accessible to you. Please contact us if your question is not answered here, or if the conference arrangements as described are not enough to enable you to attend. We will work with you to the best of our ability to make the conference accessible.`}
                </p>
            </Section>
            <Section
                title={
                    "How do I communicate accessibility needs to ASSETS 2024 organizers?"
                }
                spacing={"bottom-only"}
            >
                <p>
                    {`The Accessibility chairs for ASSETS 2024 are Maitraye Das, Christopher Power, and Abraham Glasser, whose goal is to ensure the conference is accessible to everyone. When you register for the conference, there will be a registration question labeled "Describe here any special accessibility or dietary needs." In your response, please indicate any accessibility needs such as wheelchair access, sign language interpretation, or a guide. The Accessibility chairs will follow up with you to clarify your needs. You can contact them directly at any time by emailing `}
                    <Link href={"mailto:access-assets24@acm.org"}>
                        access-assets24@acm.org
                    </Link>
                    {`.`}
                </p>
            </Section>
            <Section
                title={"Who do I ask if my question is not answered here?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`If there is specific accessibility information you would like to see here, or if you wish to discuss any accessibility requirements, please contact our Accessibility chairs, Abraham Glasser, Maitraye Das, and Christopher Power by email: `}
                    <Link href={"mailto:access-assets24@acm.org"}>
                        access-assets24@acm.org
                    </Link>
                    {`, and someone will respond to you shortly.`}
                </p>
                <p>{`Please check back later for more detailed information about accessibility at the venue.`}</p>
            </Section>
            <Section
                title={
                    "Will sign language interpretation or captioning be available?"
                }
                spacing={"bottom-only"}
            >
                <p>{`The conference will provide an in-person team of American Sign Language interpreters as well as live captioning via CART. Although we are still finalizing details for virtual attendees, we are striving to provide a similar level of service (e.g., ASL Interpreters and CART captioning for synchronous events, captions for asynchronous video), depending on budget.`}</p>
                <p>
                    {`If you require a sign language other than ASL, please make your request to the accessibility chairs (`}
                    <Link href={"mailto:access-assets24@acm.org"}>
                        access-assets24@acm.org
                    </Link>
                    {`) as early as possible. The accessibility chairs will follow up with you and we will do our utmost to meet requests that we receive, but we cannot guarantee that it will be possible.`}
                </p>
            </Section>
            <Section
                title={
                    "What are the taxi and public transport options for getting to the conference venue?"
                }
                spacing={"bottom-only"}
            >
                <h2 id="wheelchair-accessible-taxis">{`Wheelchair Accessible Taxis Available. Best to Book Ahead`}</h2>
                <ul>
                    <li>
                        {`During the day up to 8:00 pm, there are approximately 8 to 10 wheelchair accessible taxis with trained drivers available upon request via the dispatcher at the airport.`}
                    </li>
                    <li>
                        {`If arriving after 8:00 pm individuals need to call ahead and make special arrangements to have an accessible taxi available at the airport. Though special arrangements can be made for accessible taxis after 8:00 pm, it is advisable to arrive before 8:00 pm. To save time, individuals needing an accessible taxi before 8:00 pm are advised to call ahead to ensure an accessible taxi is dispatched for your arrival. In general, none of the taxis that wait at the airport during busy arrival times are accessible. Book ahead by calling City Wide Taxi +1(709) 722-7777, or see the airport dispatcher just outside the arrivals door if arriving between 8:00 am and 8:00 pm, and they will call for an accessible taxi.`}
                    </li>
                </ul>
                <h3 id="no-automatic-a11y-taxis">No Automatically Accessible Taxis Upon Arrival</h3>
                <ul>
                    <li>
                        {`Individuals must book ahead to make special arrangements if arriving after 8:00 pm (No extra fee to book ahead).`}
                    </li>
                    <li>
                        {`If arriving before 8:00 pm request an accessible taxi upon arrival from the airport dispatcher at the tax lineup just outside arrivals.`}
                    </li>
                    <li>
                        {`To avoid waiting, book ahead no matter when you are arriving by calling City Wide Taxi +1(709) 722-7777.`}
                    </li>
                    <li>
                        {`The City Wide Taxi booking app is available from the App Store and Google Play. Approximate travel time to conference hotel is 15-20 minutes.`}
                    </li>
                    <li>
                        {`Cost to the conference hotel is $35.00 plus a $5.00 surcharge. If not staying at the conference hotel, other downtown locations should be similar.`}
                    </li>
                    <li>
                        {`City Wide is one of 3 taxi services under one company.  Bugden's and Newfound Cabs, are the other two companies.`}
                    </li>
                </ul>
                <h2 id="public-transit">{`Public Transit Options`}</h2>
                <p>
                    <Link href={"https://metrobus.com/home/"}>Metrobus</Link>
                    {` is the local public city transit authority. They currently have `}
                    <Link
                        href={"https://metrobus.com/ALF/prelaunch.asp"}
                    >{`5 accessible bus routes`}</Link>
                    {`. There is no direct route to the conference hotel. You would need to take `}
                    <Link
                        href={"https://metrobus.com/ALF/route14.asp"}
                    >{`Route 14`}</Link>
                    {` plus `}
                    <Link
                        href={"https://metrobus.com/ALF/route3.asp"}
                    >{`Route 3`}</Link>
                    {` to get to the Sheraton. Route 14 buses depart hourly between 6:50 am and 10:20 pm. You could also possibly wait up to 30 minutes for a Route 3 connection. While public transit is an option, it is advisable to take a taxi and to book ahead if you require an accessible taxi.`}
                </p>
            </Section>
            <Section
                title={
                    "Can a student volunteer assist me during the conference?"
                }
                spacing={"bottom-only"}
            >
                <p>
                    {`Student volunteers will be available to assist attendees with disabilities with navigation, meal service, or other accessibility needs. If you will need volunteer assistance at the conference, please indicate this on your conference registration form.`}
                </p>
                <p>
                    {`Attendees who require personal care assistance should bring their own assistant. If you are bringing a personal assistant with you for accessibility support, please email the treasurer at `}
                    <Link
                        href={"mailto:treasurer-assets24@acm.org"}
                    >{`treasurer-assets24@acm.org`}</Link>
                    {` to learn how to register them.`}
                </p>
            </Section>
            <Section
                title={"What is the conference space like?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`The conference space is in a grand hotel at the east end of the old city of St. John’s. It is located near the foot of Signal Hill, where Guglielmo Marconi received the first transatlantic wireless communication in 1901.`}
                </p>
            </Section>
            <Section
                title={"How much walking or standing will be needed?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`The conference will require minimal walking as all presentation sessions are in a single room with breaks and poster sessions next-door. The conference rooms are the main/ground floor.`}
                </p>
                <p>
                    {`On Tuesday evening the conference reception will take place at the `}
                    <Link href={"https://www.therooms.ca/"}>The Rooms</Link>
                    {`, the home of the Provincial Art Gallery, Museum and Public Archives. The route is relatively walkable (1.2 kilometers or ¾ of a mile). From the Sheraton to The Rooms, the walk is a steady upward incline with a somewhat steep incline near the end. We are planning on chartering an accessible bus to shuttle attendees to and from the Gala. In addition, there are several taxi companies in the city and their fleets have accessible vehicles upon request.`}
                </p>
            </Section>
            <Section
                title={
                    "Will the conference be accessible by wheelchair or power scooter?"
                }
                spacing={"bottom-only"}
            >
                <p>
                    {`Yes, the conference is accessible to wheelchair users.`}
                </p>
            </Section>
            <Section
                title={"What are the restroom facilities like?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`The restrooms just outside the ballroom, in the ballroom’s main spillover area, are large and accessible with an automatic door and wide stalls. The ballroom’s spillover area will have water and places to sit. Attendees who are not staying at the hotel and who will require use of a guest room restroom are asked to let the Accessibility Chair know as soon as possible, and no later than one week before the start of the conference.`}
                </p>
            </Section>
            <Section
                title={
                    "What are the arrangements for presenters with accessibility needs?"
                }
                spacing={"bottom-only"}
            >
                <p>
                    {`Presenters who need any accommodations should contact the Accessibility Chairs: Abraham Glasser, Maitraye Das, and Christopher Power by email: `}
                    <Link
                        href={"mailto:access-assets24@acm.org"}
                    >{`access-assets24@acm.org`}</Link>
                    {`.`}
                </p>
                <p>
                    {`If you would like a student volunteer to operate slides or guide you onto and off the stage or have other accessibility requests, please contact Accessibility Chairs at `}
                    <Link
                        href={"mailto:access-assets24@acm.org"}
                    >{`access-assets24@acm.org`}</Link>
                    {` by late August.`}
                </p>
            </Section>
            <Section
                title={"Can I bring my guide dog?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`Yes! Guide dogs and other service animals are welcome at ASSETS 2024. There are grassy areas in the parking lot just outside the main entrance of the conference hotel where one needs to stoop and scoop, and there will be a pet relief area (please check back later for exact location or contact Accessibility Chairs). Please indicate on your registration form if you anticipate bringing a service animal to the conference.`}
                </p>
                <p>
                    {`There are also large green spaces nearby. `}
                    <Link
                        href={
                            "https://www.stjohns.ca/en/recreation-culture/bannerman-park.aspx"
                        }
                    >{`Bannerman Park`}</Link>
                    {` is 550 meters away, about an 8 minute wheelchair accessible walk from the conference hotel. The pathways through Bannerman Park are hard crushed gravel. There are accessible entrances into the park from several sides. About halfway between the Sheraton Hotel and Bannerman Park is the `}
                    <Link
                        href={"https://www.govhouse.nl.ca/"}
                    >{`Government House`}</Link>
                    {` which is also surrounded by green space and accessible garden walkways.`}
                </p>
            </Section>
            <Section
                title={"Can I attend the conference by robot?"}
                spacing={"bottom-only"}
            >
                <p>{`We are sorry, but ASSETS 2024 will not be able to provide remote attendance by robot.`}</p>
            </Section>
            <Section
                title={"Will there be an induction loop in the venue?"}
                spacing={"bottom-only"}
            >
                <p>{`The hotel does not have an induction loop. If you need this, please talk to the Accessibility Chairs so that we may look for alternative accommodations.`}</p>
            </Section>
            <Section
                title={
                    "Will speakers and audience members asking questions be using a microphone?"
                }
                spacing={"bottom-only"}
            >
                <p>{`Yes, microphones will be used for all speakers. Attendees with questions will be requested to use a microphone so that their question is more easily heard.`}</p>
            </Section>
            <Section
                title={
                    "How do I prepare for the presentation with a screen reader?"
                }
                spacing={"bottom-only"}
            >
                <p>{`Presenters who have accessibility needs should work with their session chair and the accessibility chairs to ensure their presenting experience is accessible. Every presenter should do a tech check during the break before their session. People with accessibility needs can also familiarize themselves with the presenter set-up and test accessibility provisions. For example, screen reader users can connect their computer to the projector, and adjust their computer's sound settings if they do not want their screen reader to play through the room speakers. Plugging an external sound card into a computer running a screen reader is also a good option as it allows the user to proactively divert screen reader audio to their headphones before connecting to a projector.`}</p>
            </Section>
            <Section
                title={"What food service will be provided?"}
                spacing={"bottom-only"}
            >
                <p>{`The conference will provide buffet lunches and refreshments at breaks. Dishes will be labeled. If you have special dietary needs, please indicate these clearly on your registration form.`}</p>
            </Section>
            <Section
                title={"Can the conference accommodate special dietary needs?"}
                spacing={"bottom-only"}
            >
                <p>
                    {`Yes. Attendees who indicate special dietary requirements on their registration form will be provided with special meals when the conference catering does not accommodate them. If you have a severe allergy please indicate this on your registration form and also feel free to contact the Accessibility Chairs (`}
                    <Link
                        href={"mailto:access-assets24@acm.org"}
                    >{`access-assets24@acm.org`}</Link>
                    {`).`}
                </p>
            </Section>
            <Section
                title={"Will the conference be a smoke-free environment?"}
                spacing={"bottom-only"}
            >
                <p>{`There is no smoking inside the hotel. We are still gathering information on where there are smoking areas around the venue.`}</p>
            </Section>
            {/* Pending 2024 update
                <Section
                    title={
                        "Will there be a designated quiet space at the conference?"
                    }
                    spacing={"bottom-only"}
                ></Section> 
            */}
            {/* 2 versions of this in doc */}
            <Section
                title={
                    "Will there be loud music, strobe lighting, spotlights, or other strong sensory experiences?"
                }
                spacing={"bottom-only"}
            >
                <p>{`We are still gathering information on sensory aspects of the conference. Participants will be requested not to use flash photography or to wear strong scents. Please indicate on your registration form if there are specific items you would like to know about in advance.`}</p>
                <p>
                    {`We are still gathering information on sensory demands of the offsite events and availability of quiet places. Please contact the Accessibility Chairs `}
                    <Link
                        href={"mailto:access-assets24@acm.org"}
                    >{`access-assets24@acm.org`}</Link>
                    {` as early as possible if you have further questions or special requests.`}
                </p>
            </Section>
            <Section
                title={
                    "What if I have a medical emergency or health problem during the conference?"
                }
                spacing={"bottom-only"}
            >
                <p>{`In case of emergency, call 911 for an ambulance. If you require non-urgent medical care, please contact Accessibility chairs or ask any student volunteer. They will work with you to provide information about local doctors, specialists, chiropractors, etc. For non-resident attendees, buying travel insurance that covers medical expenses is strongly recommended as fees for emergency treatment can be very high. `}</p>
                <p>{`Please check back later for the location of the nearest hospital.`}</p>
            </Section>
            {/* Pending 2024 update
                <Section
                    title={
                        "Who can I ask about accessibility in St. John’s, Newfoundland and Labrador, Canada?"
                    }
                    spacing={"bottom-only"}
                ></Section>
            */}
        </Subpage>
    );
}
