/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local banners in /public are swapped often; skip the optimizer cache so
    // filename stays the same but the file on disk updates show up immediately.
    unoptimized: true,
  },
};

export default nextConfig;
