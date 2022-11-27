// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sinane.dev",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://github.com/ssi-moha.png",
  organizationName: "ssi-moha", // Usually your GitHub org/user name.
  projectName: "sinane.dev", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ssi-moha/sinane.dev/tree/master",
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/ssi-moha/sinane.dev/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Sinane.dev",
        logo: {
          alt: "My Site Logo",
          src: "https://github.com/ssi-moha.png",
        },
        items: [
          {
            label: "Stack Overflow",
            href: "https://stackoverflow.com/users/10321267/sinane",
            position: "right",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/sinane_eth",
            position: "right",
          },
          {
            label: "GitHub",
            href: "https://github.com/ssi-moha",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "More",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/10321267/sinane",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/sinane_eth",
              },
              {
                label: "GitHub",
                href: "https://github.com/ssi-moha",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
