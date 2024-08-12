// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL || 'https://alienback.onrender.com',
    },
};

export default nextConfig;
