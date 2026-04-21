const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "maxranktest";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
