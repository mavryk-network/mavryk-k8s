CLIENT="/usr/local/bin/mavkit-client --endpoint http://mavryk-node-rpc:8732"

OUTPUT=""
until OUTPUT=$($CLIENT rpc get /chains/main/blocks/head/header) && echo "$OUTPUT" | grep '"level":'; do
    sleep 2
done

set -x
set -o pipefail
if ! echo "$OUTPUT" | grep '"level": 0,'; then
    echo "Chain already activated, considering activation successful and exiting"
    exit 0
fi

echo Activating chain:
$CLIENT -d /var/mavryk/client --block                                    \
        genesis activate protocol                                       \
        {{ .Values.activation.protocol_hash }}                          \
        with fitness 1 and key                                          \
        $( cat /etc/mavryk/activation_account_name )                     \
        and parameters /etc/mavryk/parameters.json 2>&1 | head -200
