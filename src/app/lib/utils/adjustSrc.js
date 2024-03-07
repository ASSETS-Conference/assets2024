/**
 * Configures base path based on environment
 * @param {string} src
 * @returns {string} the configured url
 */

export default function adjustSrc(src) {
    const basePath = process.env.NEXT_PUBLIC_IN_GITHUB_ACTIONS
        ? "/assets2024"
        : "";
    const url = src.startsWith("/")
        ? `${basePath}${src}`
        : `${basePath}/${src}`;
    return `${url}`;
}
