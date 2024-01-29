// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  mavrykK8sSidebar: [
    'index',
    'Prerequisites',
    {
      type: 'category',
      label: 'Common use cases',
      collapsed: false,
      items: [
        'Public-Node',
        'Private-Chain',
        'Indexers',
        'RPC-Auth']
    },
    {
      type: 'category',
      label: 'Mavryk-k8s helm chart',
      collapsed: false,
      items: ['helm-chart',
        'Mavryk-Accounts',
        'Mavryk-Nodes',
        'Mavryk-Signers',
      ],
    },
    'other-helm-charts'
  ],
};

module.exports = sidebars;
