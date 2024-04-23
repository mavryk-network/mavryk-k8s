#!/bin/sh

set -xe

# ensure we can run mavkit-client commands without specifying client dir
ln -s /var/mavryk/client /home/tezos/.mavryk-client
#
# Not every error is fatal on start.  In particular, with zerotier,
# the listen-addr may not yet be bound causing mavkit-node to fail.
# So, we try a few times with increasing delays:

for d in 1 1 5 10 20 60 120; do
	/usr/local/bin/mavkit-node run				\
			--bootstrap-threshold 0			\
			--config-file /etc/mavryk/config.json
	sleep $d
done

#
# Keep the container alive for troubleshooting on failures:

sleep 3600
