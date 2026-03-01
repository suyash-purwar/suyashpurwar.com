import createMDX from '@next/mdx'

import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

/** @type {import('rehype-pretty-code').Options} */
const rehypeOptions = {
  theme: "gruvbox-light-soft"
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ['remark-frontmatter', 'remark-mdx-frontmatter'],
    rehypePlugins: [['rehype-pretty-code', rehypeOptions]]
  },
});

export default withMDX(nextConfig);
