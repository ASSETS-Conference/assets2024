import Image from "./primitives/Image";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "./primitives/Link";

export default function Persona({
  name,
  role,
  picture,
  affiliation,
  location,
  email,
}) {
  return (
    <div
      id="persona"
      className="bg-theme-dark text-theme-off-white w-64  flex flex-col"
    >
      <div className={`min-w-fill ${!picture ? 'h-0' : ""}`}>
        {picture ? 
        <Image
          src={`${picture}`}
          alt={`Headshot image of ${name.split(" ")[0]}`}
          className="min-w-full min-h-64 h-64 max-h-64 object-cover object-top"
          width={200}
          height={200}
        /> : null}
      </div>
      <div className={`p-4 flex flex-col ${picture ? 'mt-auto mb-auto' : ''}`}>
        {/* <p className="font-light text-xs">{role}</p> */}
        <p className="font-bold text-2xl mb-1">{name}</p>
        <p className="text-xs italic mb-1">{`${affiliation}, ${location}`}</p>

        <div className=" mt-8 flex gap-2 text-sm items-center">
          <FaArrowUpRightFromSquare aria-hidden={true}/>
          <Link href={`mailto:${email}`} className={"text-theme-off-white"}>{email}</Link>
        </div>
      </div>
    </div>
  );
}
