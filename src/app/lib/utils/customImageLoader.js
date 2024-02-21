/**
 * Used to provide custom image resolution when deploying onto GitHub and eventually onto prod.
 * @see https://nextjs.org/docs/pages/api-reference/next-config-js/images
 * @param {} 
 * @returns 
 */
export default function customImageLoader({ src, width, quality }) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
    const url = src?.startsWith('/') ? `${basePath || ''}${src}` : src;
    return `${url}`
  }