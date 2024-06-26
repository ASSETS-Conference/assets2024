/**
 * Adapting this from:
 *  https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
 * 
 * We need to ensure that our static assets understand they're being 
 * served from a folder when we're hosting on github, this however
 * is not the case when we host on PROD, so we're going to have to 
 * check for that.
 */

const _IN_GH_ACTIONS = process.env.NEXT_PUBLIC_IN_GITHUB_ACTIONS || false;
console.log('GITHUB ACTION DETECTED?: ', _IN_GH_ACTIONS);
const _REPO = 'assets2024';


/** @type {import('next').NextConfig} */
const nextConfig = { 
    /*
        Needed for static builds on gh-pages and the eventual public server.
    */    

    assetPrefix: _IN_GH_ACTIONS !== false ? `/${_REPO}` : '',
    basePath: _IN_GH_ACTIONS !== false ? `/${_REPO}` : '',
    
    output: 'export',
    trailingSlash: true,

    images: {
        loader: 'custom',
        loaderFile: './src/app/lib/utils/customImageLoader.js',
    }
}

console.log(nextConfig);

module.exports = nextConfig
