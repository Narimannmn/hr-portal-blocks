import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ['encrypted-tbn0.gstatic.com', 'localhost', 'github.com'], // Corrected localhost domain
	},
}

export default nextConfig;
