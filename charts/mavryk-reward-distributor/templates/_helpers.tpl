{{/*
Expand the name of the chart.
*/}}
{{- define "mavryk-reward-distributor.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "mavryk-reward-distributor.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "mavryk-reward-distributor.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "mavryk-reward-distributor.labels" -}}
helm.sh/chart: {{ include "mavryk-reward-distributor.chart" . }}
{{ include "mavryk-reward-distributor.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "mavryk-reward-distributor.selectorLabels" -}}
app.kubernetes.io/name: {{ include "mavryk-reward-distributor.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "mavryk-reward-distributor.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "mavryk-reward-distributor.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
The container that runs the MRD payout (src/main.py via scripts/run.sh).
Rendered either as the trailing init container (when the report uploader needs to
run after it) or as the pod's main container (when bucket upload is disabled).
*/}}
{{- define "mavryk-reward-distributor.runContainer" -}}
- name: mavryk-reward-distributor-cron-job
  image: {{ .Values.images.mavryk_reward_distributor }}
  imagePullPolicy: IfNotPresent
  volumeMounts:
    - mountPath: /mrd
      name: storage
    - mountPath: /mrd/cfg/config.yaml
      name: config-volume
      subPath: config.yaml
  command:
    - /bin/sh
  args:
    - "-c"
    - |
{{ tpl (.Files.Get "scripts/run.sh") . | indent 6 }}
  env:
    - name: REWARD_DATA_PROVIDER
      value: "{{ .Values.reward_data_provider }}"
    - name: MAVRYK_NODE_ADDR
      value: "{{ .Values.mavryk_node_addr }}"
    - name: SIGNER_ADDR
      value: "{{ .Values.signer_addr }}"
    - name: EXTRA_MRD_ARGS
      value: "{{ .Values.extra_mrd_args }}"
    - name: NETWORK
      value: "{{ .Values.network }}"
    - name: INITIAL_CYCLE
      value: "{{ .Values.initial_cycle }}"
    - name: DRY_RUN
      value: "{{ .Values.dry_run }}"
{{- end }}
