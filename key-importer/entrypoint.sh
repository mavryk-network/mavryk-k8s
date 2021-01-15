#!/bin/sh
mkdir -p /var/tezos/client
chmod -R 777 /var/tezos/client

echo $ACCOUNTS | jq -c --raw-output .[] | while read line; do
    key=$(echo $line | jq -r '.key')
    name=$(echo $line | jq -r '.name')
    keytype=$(echo $line | jq -r '.type')
    printf "\nImporting key ${name}\n"
    tezos-client -d /var/tezos/client --protocol PsDELPH1Kxsx import ${keytype} key ${name} unencrypted:${key} -f
done
