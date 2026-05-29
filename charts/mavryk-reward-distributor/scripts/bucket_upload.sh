#!/bin/sh

echo "Uploading MRD data to bucket"

source /mrd/cfg/bucket_upload_secrets
if [ ! -z ${BUCKET_NAME} ];then
    aws s3  cp --recursive  /mrd/ s3://${BUCKET_NAME}/${BAKER_NAME} --endpoint $BUCKET_ENDPOINT_URL
fi
sleep 10
