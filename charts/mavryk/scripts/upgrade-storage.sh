set -ex

if [ ! -e /var/mavryk/node/data/context/store.dict ]
then
  printf "No store in data dir found, probably initial start, doing nothing."
  exit 0
fi
mavkit-node upgrade storage --config /etc/mavryk/config.json
