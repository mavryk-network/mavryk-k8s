# Overview

![Mavryk](./static/img/mavryk-purple.svg)![Kubernetes](./static/img/kubernetes.svg)

Mavryk-k8s is a collection of Helm charts and container images that can be used to deploy [Mavryk](https://mavryk.org) blockchain infrastructure on a Kubernetes cluster.

Use it to deploy:

* a Mavryk node
* a Mavryk RPC service
* a Mavryk baker (coming soon)
* a Mavryk private chain

on your laptop or in a cloud platform such as AWS, Digitalocean or GCP.

Mavryk-k8s is actively maintained by the team at [Mavryk Dynamics](https://mavrykdynamics.com), a Mavryk core development company.

## Quick start

We assume you have access to a Kubernetes cluster and helm installed (see [Prerequisites](Prerequisites)).

To deploy a Mavryk mainnet node:

1. Add the Mavryk Dynamics Helm chart repository to your local Helm installation:

```
helm repo add mavryk-network https://charts.mavryk.org/
```

2. Install a Mavryk node:

```
helm install mavryk-mainnet mavryk-network/mavryk-chain \
--namespace mavryk-network --create-namespace
```

k8s will spin up an [Mavkit](https://protocol.mavryk.org/) node which will download and import a Mavryk [mainnet tarball](https://protocol.mavryk.org/). This will take a few minutes.
