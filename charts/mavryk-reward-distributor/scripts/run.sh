#!/bin/sh

if [ "${DRY_RUN}" == "false" ]; then
  dry_run_arg=""
else
  dry_run_arg="--dry_run"
fi
python src/main.py \
  -M 2 \
  --reward_data_provider ${REWARD_DATA_PROVIDER} \
  --node_endpoint ${MAVRYK_NODE_ADDR} \
  --base_directory /mrd \
  --signer_endpoint ${SIGNER_ADDR} \
  --initial_cycle ${INITIAL_CYCLE} \
  -N ${NETWORK} \
  ${EXTRA_MRD_ARGS} \
  ${dry_run_arg}
