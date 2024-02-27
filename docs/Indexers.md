# Indexers

You can optionally spin up a Mavryk blockchain indexer that makes querying for information very quick. An indexer puts the chain contents in a database for efficient indexing. Most dapps need it. You can read more about indexers [here](https://wiki.tezosagora.org/build/blockchain-indexers).

Current supported indexers:

- [MvKT](https://github.com/mavryk-network/mvkt)

The [Mavryk Helm chart's values.yaml](https://github.com/mavryk-network/mavryk-k8s/blob/master/charts/mavryk/values.yaml) has an `indexer` section for how to deploy an indexer.

You must spin up an archive node in your cluster if you want to your indexer to index it. You would do so by configuring a new node's `history_mode` to be `archive`.

You can also spin up a lone indexer without any Mavryk nodes in your cluster, but make sure to point the `rpc_url` field to an accessible Mavryk archive node's rpc endpoint.

