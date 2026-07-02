import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [ //Atributo para podermos liberar o acesso de images vindas de fora por uma URL
      {
        protocol: 'https',
        hostname: 'web.codans.com.br',
      }
    ]
  }
};

export default nextConfig;
