import Image from "./primitives/Image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "./primitives/Link";

/**
 *
 * @param {Object} props
 * @param {String} props.name Name of the person
 * @param {String} props.role What role does the person serve on the organizing committee
 * @param {URL} props.picture Partial URL of the image, a head shot of the person.
 * @param {String} props.affiliation What institution is the person affiliated with?
 * @param {String} props.location The country in-which the persons affiliation is
 * @param {String} props.email The organizing (@acm.org) email address.
 * @param {String?} props.alt Alt-text for the image provided. If left undefined, the component will default to: `Headshot image of ${Name}`
 * @param {Boolean?} props.wide If in "wide"-mode, the persona will omit things such as role, affiliation and location for a bio.
 * @param {String?} props.bio REQUIRED if in `props.wide` mode.
 * @returns {import("react").ReactNode} An Persona element
 */
export default function Persona({
  name,
  role,
  picture,
  affiliation,
  location,
  email,
  alt,
  wide,
  bio,
}) {
  return !wide ? (
    <div
      id="persona"
      className="bg-theme-dark text-theme-off-white w-64  flex flex-col"
    >
      <div className={`min-w-fill ${!picture ? "h-0" : ""}`}>
        {picture ? (
          <Image
            src={`${picture}`}
            alt={alt ? alt : `Headshot image of ${name.split(" ")[0]}`}
            className="min-w-full min-h-64 h-64 max-h-64 object-cover object-top"
            width={200}
            height={200}
          />
        ) : null}
      </div>
      <div className={`p-4 flex flex-col ${picture ? "mt-auto mb-auto" : ""}`}>
        {/* <p className="font-light text-xs">{role}</p> */}
        <p className="font-bold text-2xl mb-1">{name}</p>
        {affiliation ? (
          <p className="text-xs mb-1 italic inline-block">{`${affiliation},`}</p>
        ) : null}
        {location ? (
          <p className="text-xs italic inline-block">{`${location}`}</p>
        ) : null}

        {email ? (
          <div className="mt-8 flex gap-2 text-sm items-center flex-grow justify-self-end">
            <FaArrowUpRightFromSquare aria-hidden={true} />
            <Link href={`mailto:${email}`} className={"text-theme-off-white"}>
              {email}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div
      id="persona"
      className={`bg-theme-dark text-theme-off-white w-full flex flex-col lg:flex-row min-w-full`}
    >
      <div className={`min-w-[30%] ${!picture ? "h-0" : ""}`}>
        {picture ? (
          <Image
            src={`${picture}`}
            alt={alt ? alt : `Headshot image of ${name.split(" ")[0]}`}
            className="min-w-full min-h-full object-center object-cover"
            width={250}
            height={250}
          />
        ) : null}
      </div>
      <div className="ml-4 mt-4 flex flex-col gap-2 mb-8 mr-4 md:mr-8">
        <p className="font-bold text-2xl mb-1">{name}</p>
        <p className="text-sm mb-1 max-w-3xl whitespace-pre-line">{`${bio}`}</p>
      </div>
    </div>
  );
}
