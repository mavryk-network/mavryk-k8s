{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "indexer.fullname" -}}
{{- $name := .Values.nameOverride }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "indexer.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Get the pgbouncer config file name.
*/}}
{{- define "indexer.configFile" -}}
{{- printf "%s-config-file" (include "indexer.fullname" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Get the indexer pgbouncer userlist file name.
*/}}
{{- define "indexer.userlistFile" -}}
{{- printf "%s-userlist" (include "indexer.fullname" .) | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Convert a list to CSV.
*/}}
{{- define "listToCSV" -}}
{{- join ", " . -}}
{{- end -}}

{{/*
Builds the full Postgres connection string for HASURA_GRAPHQL_DATABASE_URL
*/}}
{{- define "indexer.hasuraGraphqlDatabaseUrl" -}}
{{- $user := .Values.postgres.user -}}
{{- $password := .Values.postgres.password -}}
{{- $db := .Values.postgres.db -}}

{{- if .Values.pgBouncer.enabled }}
{{- $port := .Values.pgBouncer.internalPort -}}
{{- else }}
{{- $port := .Values.postgres.port -}}
{{- end }}

{{- $host := "localhost" -}}

postgresql://{{ $user }}:{{ $password }}@{{ $host }}:{{ if .Values.pgBouncer.enabled }}{{ .Values.pgBouncer.internalPort }}{{ else }}{{ .Values.postgres.port }}{{ end }}/{{ $db }}
{{- end }}
