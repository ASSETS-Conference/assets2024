import React from "react";
import Section from "@/app/lib/components/primitives/Section";
import Subpage from "@/app/lib/components/templates/Subpage";
import Link from "@/app/lib/components/primitives/Link";
import Alert from "@/app/lib/components/Alert";
import { createMetadata } from "@/app/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Hybrid Participation" });

export default function HybridParticipation() {
    return (
        <Subpage
            noTOC={false}
            title={"Hybrid Participation"}
            // subheading={"Behind the Scenes"}
        >
            <p>
                {`This year ASSETS will be fully hybrid. There are two key components to this year's set up: a `}
                <strong>Zoom</strong>
                {` livestream for synchronous interaction during the technical program and the `}
                <strong>ASSETS 2024 Discord server</strong>{" "}
                {` for asynchronous interaction.`}
            </p>
            <br />
            <p>
                {`All podium presentations (e.g., paper talks, keynote, business meeting) will be livestreamed on Zoom. For posters and demos, online interaction will be asynchronous – mediated via Discord – with designated times during the conference where in person attendees and authors are encouraged to interact with online attendees. All conference artifacts are linked in Discord channels according to their session (e.g., more information about a poster being presented on Monday can be found in ⁠monday-posters, the video for a paper being presented in Session 1B is linked in the channel ⁠1b-movement). We will also have channels on Discord that keep track of which sessions are happening live in St. John's as well as places for online attendees to ask questions and connect. `}
            </p>
            <br />
            <p>
                {`Since this is the first time we are running a live hybrid ASSETS, we have guidelines for both in-person and remote participants to ensure a smooth and accessible hybrid experience.`}
            </p>
            <Section title={"In-Person Participants"} spacing={"standard"}>
                <h2 id="in-person-asking-questions">Asking Questions</h2>
                <ul>
                    <li>
                        {`To ask a question, if you are able, please line up at the designated Q&A spot`}
                        <ul>
                            <li>{`There will be accessible seating near the Q&A spot if that's useful, and we have the ability to bring the camera and microphone to you if needed`}</li>
                        </ul>
                    </li>
                </ul>
                <h2 id="in-person-addressing-room">When Addressing the Room</h2>
                <ul>
                    <li>{`State your name any time you address the room`}</li>
                    <li>
                        {`Please make sure you are on camera so that your video goes through Zoom`}
                        <ul>
                            <li>{`There will be a camera at the podium and one at the designated Q&A spot`}</li>
                        </ul>
                    </li>
                    <li>
                        {`If you are speaking, please `}
                        <strong>{`do not do so without a microphone`}</strong>
                        {` so that your voice goes through Zoom`}
                    </li>
                </ul>
                <h2 id="in-person-zoom-discord">Zoom and Discord</h2>
                <ul>
                    <li>
                        {`If you join Zoom from the room, `}
                        <strong>{`please make sure your device makes no noise`}</strong>
                        {` and `}
                        <strong>{`do not unmute your microphones`}</strong>
                    </li>
                    <li>
                        {`Make sure to participate on Discord, too, to engage with remote participants`}
                    </li>
                </ul>
            </Section>
            <Section title={"Remote Participants"} spacing={"bottom-only"}>
                <h2 id="remote-asking-questions">Asking Questions</h2>
                <ul>
                    <li>
                        {`To ask a question on Zoom, use Zoom's "raise a hand" feature`}
                        <ul>
                            <li>{`Alternatively, you may also post questions to the relevant Discord channel`}</li>
                        </ul>
                    </li>
                </ul>
                <h2 id="remote-addressing-room">When Addressing the Room</h2>
                <ul>
                    <li>{`State your name whenever you address the room`}</li>
                    <li>
                        {`To address the room through text, please use Discord in the corresponding channel`}
                        <ul>
                            <li>{`Only use the Zoom chat if needed for time-sensitive requests`}</li>
                        </ul>
                    </li>
                </ul>
                <h2 id="remote-zoom-discord">Zoom and Discord</h2>
                <ul>
                    <li>
                        {`On Zoom, `}
                        <strong>{`please keep your camera and microphone off unless you are actively communicating`}</strong>
                    </li>
                    <li>
                        {`If anything in the connection breaks, please reach out to the channel #hybrid-issues on Discord`}
                    </li>
                </ul>
            </Section>
        </Subpage>
    );
}
