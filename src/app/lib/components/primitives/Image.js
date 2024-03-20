import React from "react";
import NextImage from "next/image";
import adjustSrc from "../../utils/adjustSrc";
/**
 * 
 * @param {import("next/image").ImageProps} props 
 * @returns 
 */
export default function Image(props) {
    return <NextImage {...props} src={adjustSrc(props?.src)} />;
}
