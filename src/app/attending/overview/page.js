import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import Alert from "@/app/lib/components/Alert";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Registration" });

export default function Registration() {
    return (
        <Subpage title={"Attending Overview"}>
            <Section title={"Conference Location"} spacing={"bottom-only"}>
                <p>{`ASSETS 2024 will be a hybrid experience! The in-person event will take place at Sheraton Hotel Newfoundland in Downtown St. John's, Newfoundland and Labrador, Canada.`}</p>
                <p>
                    {`The Sheraton Hotel Newfoundland is located in St. John’s, Newfoundland and Labrador, the easternmost city in North America, known for its colourful row houses, rugged coastline, and cultural charm. The venue is located at the base of Signal Hill, offering views of both the vibrant city and the scenic entrance to the harbour, known as “the Narrows”. For more information on must-dos during your time in St. John’s, check out: `}
                    <Link
                        href={`https://www.newfoundlandlabrador.com/destinations/st-johns`}
                    >
                        {`https://www.newfoundlandlabrador.com/destinations/st-johns`}
                    </Link>
                    {` or `}
                    <Link href={`https://destinationstjohns.com/`}>
                        {`https://destinationstjohns.com/`}
                    </Link>
                    {`.`}
                </p>
                <p>
                    <strong>{`Important note:`}</strong>
                    {` The island of Newfoundland (where St. John’s is located) observes Newfoundland Time (NT), which is UTC-2h30; 2.5 hours behind GMT and 1.5 hours ahead of Eastern Time (ET). This was chosen to better align the geographic position and local solar time of St. John’s (the capital city). All conference events will follow Newfoundland Time. `}
                </p>
            </Section>
            <Section title={`Hotel Accommodations`} spacing={"bottom-only"}>
                <p>
                    {`The conference will be held at the `}
                    <Link
                        href={
                            "https://www.marriott.com/en-us/hotels/yytsi-sheraton-hotel-newfoundland/overview/"
                        }
                    >{`Sheraton Hotel Newfoundland`}</Link>
                </p>
                <p>
                    {` in downtown St. John's.  The hotel is offering ASSETS attendees a group rate of CAD$199 per night.  ASSETS attendees will also have complimentary use of the state-of-the art fitness centre, featuring indoor heated pool, sauna and hot tub.`}
                </p>
                <p>
                    {`We encourage attendees to stay at the conference hotel for greater networking opportunities, and it is also a big help to the conference to have our room block filled.`}
                </p>
                <p>
                    {`Last day to book:  Wednesday, September 25, 2024.`}
                    <br />
                    {`Booking link: `}
                    <Link
                        href={`https://www.marriott.com/events/start.mi?id=1716409363485&key=GRP`}
                    >{`https://www.marriott.com/events/start.mi?id=1716409363485&key=GRP`}</Link>
                </p>
                <p>
                    {`If you find that the booking link says there is no availability for your desired dates, it could be that our room block is full but the hotel may still have availability outside of our block.  We recommend emailing `}
                    <Link
                        href={`mailto:reservations@sheratonhotelnewfoundland.com`}
                    >{`reservations@sheratonhotelnewfoundland.com`}</Link>
                    {` to ask their help with checking availability and assisting with the booking.`}
                </p>
                <p>
                    {`The rate is available from October 25 to 31, 2024. Guests wishing to book dates outside of the dates associated with the booking link are to contact the reservations department directly via email at `}
                    <Link
                        href={`mailto:reservations@sheratonhotelnewfoundland.com`}
                    >{`reservations@sheratonhotelnewfoundland.com`}</Link>
                    {`. Dates pre and post are based on availability.`}
                </p>
                <p>
                    {`If you require a room with two beds, please contact the reservations department directly at `}
                    <Link
                        href={`mailto:reservations@sheratonhotelnewfoundland.com`}
                    >{`reservations@sheratonhotelnewfoundland.com`}</Link>
                    {`, indicating that you are booking for ASSETS ’24.`}
                </p>
                <h2>{`Accessible Rooms`}</h2>
                <p>
                    {`The group block at the conference hotel also has 7 accessible rooms, one per each floor conveniently located near the elevator. These rooms can be equipped with bed lifting assistance equipment if needed. Please contact the hotel registration to request an accessible room. An accessible room can be booked by calling the hotel (+1-709-726-4980) or contacting the reservations department directly at `}
                    <Link
                        href={`mailto:reservations@sheratonhotelnewfoundland.com`}
                    >{`reservations@sheratonhotelnewfoundland.com`}</Link>
                    {`. Please indicate that you are booking for ASSETS ’24.`}
                </p>
                <p>
                    {`Additionally, other rooms have standard safety supports in bath and shower, but the bathroom doorway is not wide enough for wheelchair access. Some accommodations other than accessible doorway can be made upon request by calling the hotel (+1-709-726-4980) or contacting the reservations department directly at `}
                    <Link
                        href={`mailto:reservations@sheratonhotelnewfoundland.com`}
                    >{`reservations@sheratonhotelnewfoundland.com`}</Link>
                    {`.`}
                </p>
            </Section>
            <Section title={`Visa Support Letter`} spacing={"bottom-only"}>
                <p>
                    {`ACM is able to provide `}
                    <Link
                        href={`https://www.acm.org/special-interest-groups/volunteer-resources/conference-planning/conference-registration#Visa`}
                    >{`visa support letters`}</Link>
                    {` to attendees as well as authors with accepted papers, posters, or members of the conference committee.`}
                </p>
                <p>
                    {`If you are a recipient of ACM, SIG, or Conference funded travel grant, please include this information in your request.`}
                </p>
                <p>
                    {`For visa support letters, please complete the following request online: `}
                    <Link
                        href={`https://supportletters.acm.org/`}
                    >{`https://supportletters.acm.org/`}</Link>
                    {`. Please allow up to 10 business days to receive a letter. All requests are handled in the order they are received. The information below should be included with the request:`}
                </p>
                <ul>
                    <li>{`Your name as it appears on your passport`}</li>
                    <li>{`Your current postal mailing address`}</li>
                    <li>{`The name of the conference you are registering for.  Only accepted authors may request a visa support letter prior to registering for the conference.`}</li>
                    <li>{`Your registration confirmation number`}</li>
                    <li>{`If you have any papers accepted for the conference, please provide the title and indicate whether you are the “sole author” or a “co-author”`}</li>
                    <li>{`Authors may indicate their paper title. If no paper, speakers can provide the title of their presentation`}</li>
                </ul>
                <p>{`ACM does not provide letters for transport of vendor or presenter equipment. ACM suggests shipping the materials insured to the conference facility.`}</p>
            </Section>
            <Section title={`Transportation Overview`} spacing={"bottom-only"}>
                <p>
                    {`From mainland North America, St. John’s, Newfoundland and Labrador, is typically accessed by air travel to St. John’s International Airport (YYT). `}
                    <strong>{`Note:`}</strong>
                    {` This should not be confused with Saint John Airport (YSJ), which is located in the province of New Brunswick NOT Newfoundland and Labrador.`}
                </p>
                <p>
                    {`The City of St. John’s public transit is operated by `}
                    <Link
                        href={`https://metrobus.com/home/`}
                    >{`Metrobus`}</Link>
                    {` Metrobus offers fixed-route transit services within St. John’s, Mount Pearl and Paradise. There are `}
                    <Link
                        href={`https://metrobus.com/ALF/prelaunch.asp`}
                    >{`5 accessible routes`}</Link>
                    {` (Routes 1, 2, 3, 14 and 23) that connect key education, health and shopping locations. Accessible Routes have accessible low floor (ALF) buses for wheelchair accessibility.`}
                </p>
                <p>
                    {`The closest bus stop to the conference venue (the Sheraton Hotel Newfoundland) is Kings Bridge Road, which services Routes 2, 3 and 15. Bus `}
                    <Link href={`https://metrobus.com/ALF/route14.asp`}>
                        Route 14
                    </Link>
                    {` services St. John’s International Airport (YYT). Bussing from the airport requires a transfer to `}
                    <Link href={`https://metrobus.com/ALF/route3.asp`}>
                        Route 3
                    </Link>
                    {` on Torbay Road.`}
                </p>
                <p>{`St. John’s also has a number of private transportation options participants can avail of:`}</p>
                <h2>{`Local Taxis:`}</h2>
                <p>
                    {`City Wide Taxi operates City Wide Taxi, Newfound Cabs, and Bugdens.All three companies have `}
                    <u>{`wheelchair accessible taxis`}</u>
                    {` with trained drivers in their fleets that operate up to 8:00 pm on demand. `}
                </p>
                <p>
                    {`Taxis waiting outside of the airport are operated by City Wide Taxi. These include a $5 surcharge for the service. Accessible taxis do not wait outside as flights come in. You will need to request an accessible taxi from the airport dispatcher (who will be wearing a high-visibility vest) or call ahead to make special arrangements for your arrival. If arriving after 8:00 pm and require an accessible taxi, you must book ahead of time. More information on accessible transit is in the `}
                    <Link
                        href={`https://assets24.sigaccess.org/attending/accessibility-faq/`}
                    >{`Accessibility FAQ`}</Link>
                    {`.`}
                </p>
                <p>
                    {`City Wide Taxi: +1 (709) 722-7777`}
                    <br />
                    {`Newfound Cabs: +1 (709) 744-4444`}
                    <br />
                    {`Bugdens: +1 (709) 722-4400`}
                    <br />
                    {`Jiffy Cabs: +1 (709) 722-2222 (does not have accessible taxis in their fleet)`}
                    <br />
                </p>
                <h2>{`Ride Apps:`}</h2>
                <p>
                    {`People can install a ride app of their choice to book their taxis. If you need an accessible ride it is best to call the dispatcher and only City Wide Taxi has accessible taxis in their fleet.`}
                </p>
                <ul>
                    <li>{`City Wide Taxi - available on Google Play and the Apple App Store.`}</li>
                    <li>{`Jiffy Cabs - available on Google Play and the Apple App Store.`}</li>
                    <li>{`Uber is also available in St. John’s, with a dedicated pick up area at St. John’s International Airport (YYT).`}</li>
                </ul>
            </Section>
            <Section
                title={`Nearby Restaurants, Pubs and Cafés for Networking`}
                spacing={"bottom-only"}
            >
                <p>
                    {`For those attending the conference and looking for the nearest restaurant, pub or cafe, you'll find options right on the doorstep of the Sheraton in Downtown St. John’s. To get to most options, simply exit the Sheraton and veer down the hill to the corner of Cavendish Square and Duckworth Street. If you continue along Duckworth Street or Water Street (a left turn at Cochrane Street gets you to Water Street along a gentle slope), there are many additional options for restaurants, cafés, pubs and bars for you to enjoy.`}
                </p>
                <h2>{`Wheelchair Accessible Locations`}</h2>
                <p>
                    <strong>{`Bannerman Brewing`}</strong>
                    {` located right across from the conference hotel at the corner of Cavendish Square and Duckworth Street. Bannerman Brewing is a hybrid café and brewery, serving fusion Thai fare after 12pm. Bannerman Brewing is equipped with accessible washrooms and a ramp outside.`}
                </p>
                <p>
                    <strong>{`Brew Dock`}</strong>
                    {`, a small bright pub that serves local beers and pub fare and is located directly across Duckworth Street. The main door on Duckworth is wheelchair accessible and there are accessible washrooms.`}
                </p>
                <p>
                    <strong>{`The Little Sparo`}</strong>
                    {` is an Italian restaurant 3 minutes walk from the Sheraton, located on the corner of Duckworth Street and Hill O’ Chips in the Hilton DoubleTree. While the location is equipped with a ramp and accessible washrooms, caution should be taken as Hill O’ Chips is very steep.`}
                </p>
                <p>
                    <strong>{`Terre Restaurant and Café`}</strong>
                    {` serves food inspired by the local landscape and nearby sea. Both the restaurant and café are located in the ALT hotel at 125 Water Street, a 10 minute walk down hill from the Sheraton - just take a left off Duckworth at Cochrane Street to get to Water Street. This location is equipped with a ramp and accessible washrooms. Note that the ALT Hotel has a public outdoor garden space that is also wheelchair accessible and provides a peaceful place to contemplate St. John’s Harbour and the Narrows.`}
                </p>
                <p>
                    <strong>{`Jumping Bean Café`}</strong>
                    {`, one of St. John’s first local coffee roasters has a large accessible space in Atlantic Place at 215 Water Street. The accessible entrance to Atlantic Place is to the side before the main stairs on Water Street. There is an indoor view of St. John’s Harbour from Atlantic Place in case the weather is not cooperating for a visit to the ALT Hotel’s public garden space.`}
                </p>
                <h2>{`Other Locations Nearby`}</h2>
                <p>
                    <strong>{`CM Café`}</strong>
                    {` is located at the intersection of Gower Street and Cavendish Square. This location is not wheelchair accessible.`}
                </p>
                <p>
                    <strong>{`The Battery Café`}</strong>
                    {`, located on the foot of Signal Hill and at the intersection where Duckworth Street becomes Signal Hill Road. This location is not wheelchair accessible.`}
                </p>
                <p>
                    <strong>{`Ethiopian Cuisine Plus`}</strong>
                    {`, located on the foot of Signal Hill and at the intersection where Duckworth Street becomes Signal Hill Road. This location is not wheelchair accessible, but has very nice injera!`}
                </p>
            </Section>
        </Subpage>
    );
}
