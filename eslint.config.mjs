import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import * as mdx from "eslint-plugin-mdx";


const eslintConfig = defineConfig([
  // Next.js core + TypeScript rules
  ...nextVitals,
  ...nextTs,

  // MDX linting (for blog files)
  {
    files: ["**/*.mdx"],
    plugins: {
      mdx,
    },
    rules: {
      ...mdx.configs.recommended.rules,
    },
  },

  // Global ignores (keep build clean)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;


// Now ESLint checks:

// Invalid JSX inside MDX
// Wrong React components usage
// Broken imports in MDX