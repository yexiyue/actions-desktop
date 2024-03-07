import type { LinguiConfig } from "@lingui/conf";

const config: LinguiConfig = {
  locales: ["zh", "en"],
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}",
      include: ["src"],
    },
  ],
};

export default config;
