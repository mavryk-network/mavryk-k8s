// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mavryk K8s',
  tagline: 'Deploy a Mavryk Blockchain on Kubernetes',
  url: 'https://kubernetes.mavryk.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mavryk-network', // Usually your GitHub org/user name.
  projectName: 'mavryk-k8s', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          path: '.',
          include: ['*.md']
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mavryk-k8s',
        logo: {
          alt: 'Mavryk Dynamics Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mavryk-network/mavryk-k8s',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Slack',
              //   href: 'https://join.slack.com/t/tezos-dev/shared_invite/zt-t1agqhz5-WZfjNoQBg8hcPQSLQn1E2g',
              // },
              {
                label: 'X',
                href: 'https://x.com/mavrykdynamics',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mavryk-network/mavryk-k8s',
              },
              // {
              //   label: 'Medium',
              //   href: 'https://medium.com/mavrykdynamics'
              // }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mavryk Dynamics`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
