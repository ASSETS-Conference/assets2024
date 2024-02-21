"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { MENU_DATA } from "../../config/navigation.config";
import NavDropdown from "./NavDropdown";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [mobileViewVisible, setMobileViewVisible] = useState(false);
  const [dropdownsVisible, setDropdownsVisible] = useState(
    Array(MENU_DATA.length).fill(false)
  );

  useEffect(() => {
    // adds background to navbar when user scrolls
    const toggleBackground = () => {
      if (window.scrollY > 100) {
        setBackgroundVisible(true);
      } else {
        setBackgroundVisible(false);
      }
    };

    window.addEventListener("scroll", toggleBackground);
  }, []);

  /**
   * @param {Number} i The current nav item's number
   */
  const handleNavMouseEnter = (i) => {
    // hover events only applicable for desktop menu (window width is >= 768px)
    if (window.innerWidth < 768) return;

    setDropdownsVisible(
      dropdownsVisible.map((_, idx) => (idx === i ? true : false))
    );
  };

  const handleNavMouseLeave = () => {
    // hover events only applicable for desktop menu (window width is >= 768px)
    if (window.innerWidth < 768) return;
    setDropdownsVisible(Array(MENU_DATA.length).fill(false));
  };

  /**
   * @param {Number} i The current nav item's number
   */
  const handleNavClick = (i) => {
    // click events only applicable for mobile menu (window width is < 768px)
    if (window.innerWidth >= 768) return;

    if (dropdownsVisible[i] === true) {
      setDropdownsVisible(Array(MENU_DATA.length).fill(false));
    } else {
      setDropdownsVisible(
        dropdownsVisible.map((_, idx) => (idx === i ? true : false))
      );
    }
  };

  /**
   * Handles key input within the Menu, used for keyboard navigation.
   *
   * @param {KeyboardEvent} e The event propagating from the DOM
   * @param {Number} i The current nav item's number
   */
  const handleKeyEvents = (e, i) => {
    switch (e.key) {
      case "Enter":
        setDropdownsVisible(
          dropdownsVisible.map((_, idx) => (idx === i ? true : false))
        );
        break;
      case " ":
        e.preventDefault();
        setDropdownsVisible(
          dropdownsVisible.map((_, idx) => (idx === i ? true : false))
        );
        break;
      case "Escape":
        e.preventDefault();
        setDropdownsVisible(
          dropdownsVisible.map((_, idx) => (idx === i ? false : false))
        );
      default:
        break;
    }
  };

  /**
   * Handles dropdown menu state based on focused item.
   *
   * @param {KeyboardEvent} e The event propagating from the DOM
   */
  const handleFocus = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDropdownsVisible(Array(MENU_DATA.length).fill(false));
    }
  };

  return (
    <nav
      aria-description="Menu"
      className={`min-w-full md:px-6 md:py-2 p-6 fixed top-0 z-[998] text-theme-off-white transition-all ease-in-out duration-300 ${
        backgroundVisible || mobileViewVisible ? "bg-theme-dark" : ""
      } ${mobileViewVisible ? "h-screen" : ""}`}
    >
      <div
        onClick={() => setMobileViewVisible(!mobileViewVisible)}
        className="md:hidden w-full flex justify-between items-center"
      >
        <Image
          unoptimized
          width={50}
          height={100}
          aria-hidden="true"
          className={`self-start w-5 ${
            backgroundVisible || mobileViewVisible ? "visible" : "invisible"
          }`}
          src="/assets/logos/a24-lighthouse-grey.svg"
          alt="An image of a lighthouse used as the ASSETS 2024 Logo"
        />
        {mobileViewVisible ? (
          <MdOutlineClose className="text-2xl cursor-pointer" />
        ) : (
          <AiOutlineMenu className="text-xl cursor-pointer" />
        )}
      </div>
      <ul
        className={`min-h-full min-w-full md:flex md:flex-row flex-col md:justify-center md:items-center lg:gap-16 md:gap-6 lg:text-md md:text-sm sm:text-xl text-lg md:opacity-100 md:mt-0 mt-6 md:[&>*]:border-none [&>*]:border-b-[1px] [&>*]:border-white/25 ${
          mobileViewVisible ? "opacity-100 flex" : "opacity-0 hidden"
        }`}
      >
        {MENU_DATA.map((data, i) => {
          if (data.children) {
            return (
              <ul
                key={`nav-top-${i}`}
                className="relative md:py-6 py-6"
                role="button"
                onMouseEnter={() => handleNavMouseEnter(i)}
                onMouseLeave={handleNavMouseLeave}
                onClick={() => handleNavClick(i)}
                onKeyDown={(e) => handleKeyEvents(e, i)}
                onBlur={(e) => handleFocus(e)}
                aria-expanded={dropdownsVisible[i]} //ARIA expanded property. This is required to make this work with SRs.
              >
                <li
                  tabIndex="0"
                  className={`flex gap-2 items-center underline hoctive:decoration-4 cursor-pointer ${
                    pathname.includes(data.title.toLowerCase())
                      ? "decoration-4"
                      : ""
                  }`}
                >
                  <a>{data.title}</a>

                  <FaAngleDown />
                </li>
                <NavDropdown
                  tabIndex="0"
                  items={data.children}
                  visible={dropdownsVisible[i]}
                />
              </ul>
            );
          } else {
            return (
              <li key={`menu_item-${i}`} className="md:py-6 py-6">
                <a
                  className={`underline hoctive:decoration-4 ${
                    pathname === data.href ? "decoration-4" : ""
                  }`}
                  href={data.href}
                >
                  {data.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
