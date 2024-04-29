import React from "react";
import { MdInfo } from "react-icons/md";

export default function Alert({
  heading,
  body,
  raw = false,
  children,
  className,
  isNotice = false,
}) {
  return isNotice ? (
    <p className={`pl-4 flex items-center gap-3 font-bold ${className ? className : ''}`}>
      <p className=" bg-theme-blue text-white ml-[-1rem] p-2 font-bold">
        Notice:
      </p>
      {body}
    </p>
  ) : (
    <div
      role="alert"
      className={` bg-theme-blue text-white p-4 flex flex-row gap-2 ${
        heading ? "items-start" : "items-center"
      } ${className}`}
    >
      <MdInfo
        aria-hidden={true}
        className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
      />
      <div>
        {heading ? <p className="text-lg font-bold mb-1">{heading}</p> : null}
        {raw ? children : <p>{body}</p>}
      </div>
    </div>
  );
}
