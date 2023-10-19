/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
        Needed for static builds on gh-pages and the eventual public server.
    */
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
