import React from "react";
import { MdInfo, MdNotificationsActive, MdWarning } from "react-icons/md";
import { makeAttributeSafe } from "../utils/basics";

/**
 * @param {Object} props
 *
 * @param {String} props.heading The title of the alert, usually a concise form of what the alert is about
 * @param {String | HTMLElement | import("react").ReactNode} props.body The text inside of the alert. NOTE that you may use HTML or React elements within the body but the `raw` prop MUST be set to `true`
 * @param {Boolean} [props.raw=false] When set to `true`, the body fo the alert may be a HTML or React element
 * @param {HTMLElement} props.className Standard Class property.
 * @param {Boolean} props.isNotice If set to true, a compact version of the alert is displayed, this alert lacks the icon, the heading or any ability to use `raw` mode.
 * @param {'warning'|'notice'| 'changes'} props.type The type of alert.
 * @param {'alert'|'region'} props.ariaRole The type of ARIA role the alert is playing. Often you should use type 'alert' sparingly, usually region is best unless there is something that you'd like the screen reader to read immediately on page load
 *
 * @returns {import("react").ReactNode} An Alert element
 */
export default function Alert({
  heading,
  airaRole,
  body,
  raw = false,
  children,
  className,
  isNotice = false,
  type,
  id,
}) {
  
  //Used to label the ARIA region if a heading is not supplied.
  const ariaIdentifier = heading ? makeAttributeSafe(heading) : 'assets-ds-'+makeAttributeSafe(Math.random().toString(32).slice(2)); 

  return isNotice ? (
    <p
      className={`pl-4 flex items-center gap-3 font-bold ${
        className ? className : ""
      }`}
    >
      <p className={`bg-theme-blue text-white ml-[-1rem] p-2 font-bold`}>
        Notice:
      </p>
      {body}
    </p>
  ) : (
    <div
      id={id ? id : ""}
      role={airaRole ? airaRole : 'region'}
      aria-labelledby={heading ? `${ariaIdentifier}-alert-heading` : `${ariaIdentifier}-alert-body`}
      className={`${
        type === "warning"
          ? "bg-theme-red"
          : type === "changes"
          ? "bg-theme-orange"
          : "bg-theme-blue"
      } bg-theme-blue text-white p-4 flex flex-row gap-2 ${
        heading ? "items-start" : "items-center"
      } max-w-[100%] ${className}`}
    >
      {switchAlertType(type, heading)}
      <div className="max-w-[85%] pb-2 md:pb-0 md:max-w-max">
        {heading ? (
          <p className="text-lg font-bold mb-1 max-w-max" id={`${ariaIdentifier}-alert-heading`}>{heading}</p>
        ) : null}
        <div>{raw ? <div id={`${ariaIdentifier}-alert-body`}>{children}</div> : <p id={`${ariaIdentifier}-alert-body`}>{body}</p>}</div>
      </div>
    </div>
  );
}

function switchAlertType(type, heading) {
  switch (type) {
    case "warning":
      return (
        <MdWarning
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      );
    case "notice":
      return (
        <MdInfo
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      );
    case "changes":
      return (
        <MdNotificationsActive
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      );
    default:
      return (
        <MdInfo
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      );
  }
}
