import React from "react";
import NextImage from "next/image";

export default function Image(props) {
    function adjustSrc(src) {
        const basePath = process.env.NEXT_PUBLIC_IN_GITHUB_ACTIONS
            ? "/assets2024"
            : "";
        const url = src.startsWith("/")
            ? `${basePath}${src}`
            : `${basePath}/${src}`;
        return `${url}`;
    }
    return <NextImage {...props} src={adjustSrc(props?.src)} />;
}
