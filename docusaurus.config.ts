import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import dotenv from "dotenv";
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "o1Labs Documentation",
  tagline:
    "Enabling more powerful applications through programmable cryptography",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://documentation.o1labs.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/o1js/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Mermaid configuration
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          editUrl: ({ versionDocsDirPath, docPath }) => {
            // Disable edit links for entire directories
            const noEditDirs = ["api-reference"];

            // Disable edit links on previous versions
            if (versionDocsDirPath !== "docs") {
              return undefined;
            }

            if (noEditDirs.some((dir) => docPath.startsWith(`${dir}/`))) {
              return undefined;
            }

            return `https://github.com/o1-labs/o1js-documentation-site/edit/main/docs/${docPath}`;
          },
          lastVersion: "current",
          remarkPlugins: [
            require("remark-code-snippets"),
            require("remark-math"),
          ],
          rehypePlugins: [require("rehype-katex")],
          versions: {
            current: {
              label: "Current",
              badge: false,
              banner: "none",
            },
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    mermaid: {
      theme: {
        light: "base",
      },
      options: {
        themeVariables: {
          primaryColor: "#ffffff",
          primaryBorderColor: "#000000",
          secondaryColor: "#CDD8D0",
          secondaryTextColor: "#171717",
          tertiaryColor: "#CDD8D0",
          tertiaryTextColor: "#171717",
          textColor: "#000000",
          fontFamily: '"DM Mono", monospace',
          fontSize: "14px",
        },
      },
    },
    algolia: {
      // The application ID provided by Algolia
      appId: process.env.ALGOLIA_APP_ID,

      // Public API key: it is safe to commit it
      apiKey: process.env.ALGOLIA_API_KEY,

      indexName: process.env.ALGOLIA_INDEX_NAME,

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    footer: {
      style: "light",
      links: [
        {
          label: "Twitter",
          href: "https://x.com/o1_labs",
        },
        {
          label: "Discord",
          href: "https://discord.gg/minaprotocol",
        },
        {
          label: "GitHub",
          href: "https://github.com/o1-labs/o1js",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} o1Labs`,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "o1js",
        src: "img/o1js.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
