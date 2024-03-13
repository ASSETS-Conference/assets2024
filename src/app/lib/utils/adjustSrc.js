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
    : !src.startsWith("https:") && !src.match('^\w*.') // ensure we aren't modifying links that go to external resources.
    ? `${basePath}/${src}`
    : src;
  return `${url}`;
}
