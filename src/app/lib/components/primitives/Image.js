import React from "react";
import NextImage from "next/image";
import adjustSrc from "../../utils/adjustSrc";

export default function Image(props) {
    return <NextImage {...props} src={adjustSrc(props?.src)} />;
}
