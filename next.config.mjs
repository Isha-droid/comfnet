/** @type {import('next').NextConfig} */
const nextConfig={
        reactStrictMode: true,
        images: {
                domains: [ 'via.placeholder.com' ], // Add your allowed domains here
        }, experimental: {
                turbo: false, // Disable Turbopack
        },
}

export default nextConfig;
