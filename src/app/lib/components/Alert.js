import React from "react";
import { MdInfo } from "react-icons/md";

export default function Alert({ heading, body, raw = false, children, className}) {
  return (
    <div
      role="alert"
      className={` bg-theme-blue text-white p-4 flex flex-row gap-2 ${
        heading ? "items-start" : "items-center"
      } ${className}`}
    >
      <MdInfo aria-hidden={true} className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`} />
      <div>
        {heading ? <p className="text-lg font-bold mb-1">{heading}</p> : null}
        {raw ? children : <p>{body}</p>}
      </div>
    </div>
  );
}
