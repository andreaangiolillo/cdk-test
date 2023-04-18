#!/usr/bin/env bash

# Copyright 2023 MongoDB Inc
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -Eeou pipefail


json_response=$(curl --request POST \
  --url 'https://jira.mongodb.org/rest/api/2/issue' \
  --header 'Authorization: Bearer '"${JIRA_API_TOKEN}" \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{
    "fields": {
        "project": {
            "id": "19383"
        },
        "summary": "HELP: '"${ISSUE_TITLE}"'",
        "issuetype": {
            "id": "3"
        },
        "description": "This ticket track the following GitHub issue: '"${ISSUE_URL}"'\n\n Description:\n'"${ISSUE_BODY}"'",
        "components": [
            {
                "id": "32225"
            }
        ]
    }
  }')

JIRA_TICKET_ID=$(echo $json_response | jq -r '.key')
JIRA_TICKET_LINK=$(echo $json_response | jq -r '.self')

echo "The following JIRA ticket has been created: ${JIRA_TICKET_ID}"

export JIRA_TICKET_ID
export JIRA_TICKET_LINK
