/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if(!isServer) {
            config.optimization.innerGraph = false;
        }
        return config;
    },
}

module.exports = nextConfig
