// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sardis Network',
  tagline: 'Sardis blockchain ecosystem facilitates under 3 second payments on a global scale, finally enabling crypto usage in daily life.',
  favicon: 'img/favicon.ico',
  plugins: ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://sardisdoc.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WidgetVRP', // Usually your GitHub org/user name.
  projectName: 'sardisdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sardis Network',
        logo: {
          alt: 'My Site Logo',
          src: 'img/sardislogo.svg',
        },
        items: [
          {
            to: '/docs/About%20Sardis',
            position: 'left',
            label: 'Learn',
          },
          {
            to: 'https://medium.com/@mysardis',
            position: 'left',
            label: 'Medium',
          },
          {
            to: 'https://twitter.com/Sardis_Network',
            position: 'left',
            label: 'Twitter',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/sardisnetwork/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/About%20Sardis',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'SARDIS Network',
                href: 'https://mysardis.com/',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/sardisnetwork',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Sardis_Network',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sardisnetwork/',
              },
            ],
          },
        ],
        copyright: `Copyright © SARDIS Network Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','rust','sql','java','go'],
      },
    }),
};

module.exports = config;