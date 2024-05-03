import React from "react";
import { MdInfo, MdWarning } from "react-icons/md";

/**
 * @param {Object} props
 *
 * @param {String} props.heading The title of the alert, usually a concise form of what the alert is about
 * @param {String | HTMLElement | import("react").ReactNode} props.body The text inside of the alert. NOTE that you may use HTML or React elements within the body but the `raw` prop MUST be set to `true`
 * @param {Boolean} [props.raw=false] When set to `true`, the body fo the alert may be a HTML or React element
 * @param {HTMLElement} props.className Standard Class property.
 * @param {Boolean} props.isNotice If set to true, a compact version of the alert is displayed, this alert lacks the icon, the heading or any ability to use `raw` mode.
 * @param {'warning', 'notice'} props.type The type of alert.
 *
 * @returns {import("react").ReactNode} An Alert element
 */
export default function Alert({
  heading,
  body,
  raw = false,
  children,
  className,
  isNotice = false,
  type,
}) {
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
      role="alert"
      className={`${
        type === "warning" ? "bg-theme-red" : "bg-theme-blue"
      } bg-theme-blue text-white p-4 flex flex-row gap-2 ${
        heading ? "items-start" : "items-center"
      } ${className}`}
    >
      {type && type === "warning" ? (
        <MdWarning
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      ) : (
        <MdInfo
          aria-hidden={true}
          className={`text-xl flex-shrink-0 ${heading ? "mt-1" : ""}`}
        />
      )}
      <div>
        {heading ? <p className="text-lg font-bold mb-1">{heading}</p> : null}
        {raw ? children : <p>{body}</p>}
      </div>
    </div>
  );
}
