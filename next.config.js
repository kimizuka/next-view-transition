/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true
    }
  },
  output: 'export'
};

module.exports = nextConfig;