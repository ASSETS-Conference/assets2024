import react from "react";
/**
 * Displays a box with a letter in it, acts as a list heading for alphabetic lists.
 * @param {object} props The props of the component
 * @param {String} props.letter The letter of the alphabet you would like displayed as the header in the listing
 * @param {HTMLElement?} props.className Standard Class property.
 * @param {String} props.hashID The words that will appear in the anchor link
 * @returns {import("react").ReactNode}
 */
export default function Letter({ letter, hashID, className }) {
  return (
    <>
      <a
        key={`letter-${letter}`}
        className={`border-2 w-12 border-theme-dark text-theme-dark flex items-center px-2 pt-4 hover:text-white hover:bg-theme-dark transition-colors ${className}`}
        href={
          letter
            ? `${
                hashID ? `#${hashID}-` : "#beginning-with-"
              }${letter.toLowerCase()}`
            : "#?"
        }
      >
        <h2 className={"text-xl font-light m-0"}>{letter ? letter : "?"}</h2>
      </a>
      {/* this is a way to push the scrollbar so it offsets the header */}
      <div
        aria-hidden
        className="h-0 scroll-m-36"
        id={
          letter
            ? `${
                hashID ? `${hashID}-` : "beginning-with-"
              }${letter.toLowerCase()}`
            : "#?"
        }
      ></div>
    </>
  );
}
