/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if(!isServer) {
            config.optimization.innerGraph = false;
        }
        return config;
    },
    // output: 'export'
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
