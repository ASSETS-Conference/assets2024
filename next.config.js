/** @type {import('next').NextConfig} */
const nextConfig = {
    //Needed for static builds on gh-pages and the eventual public server.
    output: 'export',
    trailingSlash: true,
}

module.exports = nextConfig
