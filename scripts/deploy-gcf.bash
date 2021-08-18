#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SOURCE_DIR="${DIR}/.."

gcloud functions deploy \
  helloWorld \
  --runtime nodejs14 \
  --entry-point helloWorld \
  --source=${SOURCE_DIR} \
  --trigger-http \
  --memory=8192MB

