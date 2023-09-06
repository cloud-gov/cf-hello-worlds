#!/bin/bash

ORG="$1"
SPACE="$2"
APP_NAME="$3"
HOSTNAME="$4"
PORT=$5

ORG_GUID=$(cf org "$ORG" --guid)
SPACE_GUID=$(cf space "$SPACE" --guid)
APP_GUID=$(cf app "$APP_NAME" --guid)

ROUTE_GUID=$(cf curl "/v3/routes?organization_guids=$ORG_GUID&space_guids=$SPACE_GUID" \
  | jq -r --arg host "$HOSTNAME" '.resources[] | select(.host==$host) | .guid')

cf curl -X PATCH "/v3/routes/$ROUTE_GUID/destinations" \
  -d "{
    \"destinations\": [
      {
        \"app\": {
          \"guid\": \"$APP_GUID\",
          \"process\": {
            \"type\": \"web\"
          }
        },
        \"port\": $PORT,
        \"protocol\": \"http1\"
      }
    ]
  }"
