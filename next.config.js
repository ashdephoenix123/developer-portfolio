/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.djangoproject.com',
                pathname: '/img/logos/**',
            },
            {
                protocol: 'https',
                hostname: 'miro.medium.com',
                pathname: '/v2/**',
            },
            {
                protocol: 'https',
                hostname: 'northsoft.co',
                pathname: '/blog/wp-content/uploads/2022/11/**',
            },
            {
                protocol: 'https',
                hostname: 'www.akashsarki.me',
                pathname: '/_next/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            }
        ],
    }
}
