import React from "react";

export default function Details({
  summary,
  children,
  open = true,
  detailsParentClass="",
  className = "",
  id = null,
}) {
  return (
    <details open={open} className={detailsParentClass}>
      <summary
        className={`bg-theme-dark p-4 text-white list-item md:text-base text-sm font-bold cursor-pointer ${className}`}
        id={`title-region${id ? "-" + id : ""}`}
      >
        {summary}
      </summary>
      {children}
    </details>
  );
}
