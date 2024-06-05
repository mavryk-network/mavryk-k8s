set -e

echo "Writing custom configuration for public node"
mkdir -p /etc/mavryk/data

# if config already exists (container is rebooting), dump and delete it.
if [ -e /etc/mavryk/data/config.json ]; then
  printf "Found pre-existing config.json:\n"
  cat /etc/mavryk/data/config.json
  printf "Deleting\n"
  rm -rvf /etc/mavryk/data/config.json
fi

/usr/local/bin/mavkit-node config init		\
    --config-file /etc/mavryk/data/config.json	\
    --data-dir /etc/mavryk/data			\
    --network $CHAIN_NAME

cat /etc/mavryk/data/config.json

printf "\n\n\n\n\n\n\n"
