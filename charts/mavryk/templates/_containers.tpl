{{- define "mavryk.localvars.pod_envvars" }}
- name: MY_POD_IP
  valueFrom:
    fieldRef:
      fieldPath: status.podIP
- name: MY_POD_NAME
  valueFrom:
    fieldRef:
      fieldPath: metadata.name
- name: MY_POD_TYPE
  value: node
  {{- if hasKey . "node_class" }}
- name: MY_NODE_CLASS
  value: {{ .node_class }}
  {{- end }}
{{- end }}

{{- /*
     * Now, we define a generic container template.  We pass in a dictionary
     * of named arguments.  Because helm templates overrides both . and $
     * with this, we have to pass in $ via the "root" argument so that
     * we can access externally defined variables.
     *
     * The arguments are as follows:
     *
     *    root           this is required to be $
     *    type           the container type, e.g.: baker, wait-for-dns
     *    name           the name of the container, defaults to type, this
     *                   is used for containers like baker which can have
     *                   multiple instances of the same type
     *    image          one of: mavkit, utils
     *    command        the command
     *    args           the list of arguments to the command, will default
     *                   to the type if using a "utils" image
     *    run_script     define the command as a script from the scripts
     *                   directory corresponding to the container type,
     *                   so a type of wait-for-dns will include the script
     *                   scripts/wait-for-dns.sh and pass it as a single
     *                   argument to /bin/sh -c.  For image == mavkit, this
     *                   is the default.
     *    script_command override the name of the script.  We still look
     *                   in the scripts directory and postpend ".sh"
     *    with_config    bring in the configMap defaults true only on utils.
     *    with_secret    bring in the secrets map including the identities.
     *    localvars      set env vars MY_* Defaults to true only on utils.
     *    resources      set container resources management, i.e. request
     *                   and limit, default value is an empty dict.
     */ -}}

{{- define "mavryk.generic_container" }}
{{- $ := .root }}
{{- if not (hasKey $ "Values") }}
  {{- fail "must pass root -> $ to generic_container" }}
{{- end }}

{{- /*
     * First, we set up all of the default values:
     */ -}}

{{- if not (hasKey . "name") }}
  {{- $_ := set . "name" .type }}
{{- end }}
{{- if not (hasKey . "with_config") }}
  {{- $_ := set . "with_config" (eq .image "utils") }}
{{- end }}
{{- if not (hasKey . "localvars") }}
  {{- $_ := set . "localvars" (eq .image "utils") }}
{{- end }}
{{- if not (hasKey . "run_script") }}
  {{- $_ := set . "run_script" (eq .image "mavkit") }}
{{- end }}
{{- if not (hasKey . "script_command") }}
  {{- $_ := set . "script_command" .type }}
{{- end }}
{{- if not (hasKey . "args") }}
  {{- if eq .image "utils" }}
    {{- $_ := set . "args" (list .type) }}
  {{- end }}
{{- end }}
{{- if not (hasKey . "resources") }}
    {{- $_ := set . "resources" dict }}
{{- end }}

{{- /*
     * And, now, we generate the YAML:
     */ -}}
- name: {{ .name }}
{{- $node_vals_images := $.node_vals.images | default dict }}
{{- if eq .image "mavkit" }}
  image: "{{ or $node_vals_images.mavkit $.Values.images.mavkit }}"
{{- else }}
  image: "{{ $.Values.mavryk_k8s_images.utils }}"
{{- end }}
  imagePullPolicy: IfNotPresent
{{- if .run_script }}
  command:
    - /bin/sh
  args:
    - "-c"
    - |
{{ tpl ($.Files.Get (print "scripts/" .script_command ".sh")) $ | indent 6 }}
{{- else if .command }}
  command:
    - {{ .command }}
{{- end }}
{{- if .args }}
  args:
{{- range .args }}
    - {{ . }}
{{- end }}
{{- end }}
  envFrom:
    {{- if .with_secret }}
    {{- if len $.node_identities }}
    - secretRef:
        name: {{ $.node_class }}-identities-secret
    {{- end }}
    {{- end }}
    {{- if .with_config }}
    - configMapRef:
        name: mavryk-config
    {{- end }}
  env:
  {{- if .localvars }}
  {{- include "mavryk.localvars.pod_envvars" $ | indent 4 }}
  {{- end }}
    - name: DAEMON
      value: {{ .type }}
  {{- if .baker_index }}
    - name: BAKER_INDEX
      value: "{{ .baker_index }}"
  {{- end }}
{{- $envdict := dict }}
{{- $lenv := $.node_vals.env           | default dict }}
{{- $genv := $.Values.node_globals.env | default dict }}
{{- range $curdict := concat
          (pick $lenv .type | values)
          (pick $lenv "all"           | values)
          (pick $genv .type | values)
          (pick $genv "all"           | values)
}}
{{- $envdict := merge $envdict ($curdict | default dict) }}
{{- end }}
{{- range $key, $val := $envdict }}
    - name:  {{ $key  }}
      value: {{ $val | quote }}
{{- end }}
  volumeMounts:
    - mountPath: /etc/mavryk
      name: config-volume
    - mountPath: /var/mavryk
      name: var-volume
    {{- if .local_storage }}
    - mountPath: /var/persistent
      name: persistent-volume
    {{- end }}
    {{- if .with_secret }}
    - mountPath: /etc/secret-volume
      name: mavryk-accounts
    {{- end }}
  {{- if eq .type "baker" }}
    - mountPath: /etc/mavryk/baker-config
      name: baker-config
  {{- end }}
  {{- if (eq .type "mavkit-node") }}
  ports:
    - containerPort: 8732
      name: mavryk-rpc
    - containerPort: 9732
      name: mavryk-net
    - containerPort: 9932
      name: metrics
    {{- if or (not (hasKey $.node_vals "readiness_probe")) $.node_vals.readiness_probe }}
  readinessProbe:
    httpGet:
      path: /is_synced
      port: 31732
    {{- end }}
  {{- end }}
{{- if .resources }}
  resources:
{{ toYaml .resources | indent 4 }}
{{- end }}
{{- end }}


{{- /*
     * We are finished defining mavryk.generic_container, and are now
     * on to defining the actual containers.
     */ -}}

{{- define "mavryk.init_container.config_init" }}
  {{- if include "mavryk.shouldConfigInit" . }}
    {{- include "mavryk.generic_container" (dict "root"        $
                                                "type"        "config-init"
                                                "image"       "mavkit"
                                                "with_config" 1
                                                "localvars"   1
    ) | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.init_container.config_generator" }}
  {{- include "mavryk.generic_container" (dict "root"        $
                                              "type"        "config-generator"
                                              "image"       "utils"
                                              "with_secret" 1
  ) | nindent 0 }}
{{- end }}

{{- define "mavryk.init_container.chain_initiator" }}
  {{- include "mavryk.generic_container" (dict "root"        $
                                              "type"        "chain-initiator"
                                              "image"       "mavkit"
  ) | nindent 0 }}
{{- end }}

{{- define "mavryk.init_container.wait_for_dns" }}
  {{- if include "mavryk.shouldWaitForDNSNode" . }}
    {{- include "mavryk.generic_container" (dict "root"      $
                                                "type"      "wait-for-dns"
                                                "image"     "utils"
                                                "localvars" 0
    ) | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.init_container.snapshot_downloader" }}
  {{- if include "mavryk.shouldDownloadSnapshot" . }}
    {{- include "mavryk.generic_container" (dict "root"  $
                                                "type"  "snapshot-downloader"
                                                "image" "utils"
    ) | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.init_container.snapshot_importer" }}
  {{- if include "mavryk.shouldDownloadSnapshot" . }}
    {{- include "mavryk.generic_container" (dict "root"   $
                                           "type"        "snapshot-importer"
                                           "image"       "mavkit"
                                           "with_config" 1
                                           "localvars"   1
    )  | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.init_container.upgrade_storage" }}
    {{- include "mavryk.generic_container" (dict "root"   $
                                           "type"        "upgrade-storage"
                                           "image"       "mavkit"
    )  | nindent 0 }}
{{- end }}

{{- define "mavryk.container.sidecar" }}
  {{- if or (not (hasKey $.node_vals "readiness_probe")) $.node_vals.readiness_probe }}
    {{- $sidecarResources := dict "requests" (dict "memory" "80Mi") "limits" (dict "memory" "100Mi") -}}
    {{- include "mavryk.generic_container" (dict "root"      $
                                                "type"      "sidecar"
                                                "image"     "utils"
                                                "resources" $sidecarResources
    ) | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.container.node" }}
    {{- include "mavryk.generic_container" (dict "root"        $
                                                "type"        "mavkit-node"
                                                "image"       "mavkit"
                                                "with_config" 0
                                                "local_storage" $.node_vals.local_storage
                                                "resources"   $.node_vals.resources
    ) | nindent 0 }}
{{- end }}

{{- define "mavryk.container.bakers" }}
  {{- if has "baker" $.node_vals.runs }}
    {{- $node_vals_images := $.node_vals.images | default dict }}
    {{/* calculate the max number of bakers accross instances */}}
    {{- $max_baker_num := 0 }}
    {{- range $i := $.node_vals.instances }}
      {{- if hasKey $i "bake_using_account" }}
        {{- $max_baker_num = max 1 $max_baker_num }}
      {{- else }}
        {{- $max_baker_num = max (len (get $i "bake_using_accounts")) $max_baker_num }}
      {{- end }}
    {{- end }}
    {{- range $n := until (int $max_baker_num) }}
      {{- range $.Values.protocols }}
        {{- if (not .vote) }}
          {{ fail (print "You did not specify the liquidity baking toggle vote in 'protocols' for protocol " .command ".") }}
        {{- end -}}
        {{- $_ := set $ "command_in_tpl" .command }}
        {{- include "mavryk.generic_container" (dict "root" $
                                                    "name" (print "baker-"
                                                            print $n
                                                            print "-"
                                                            (lower .command))
                                                    "type"        "baker"
                                                    "image"       "mavkit"
                                                    "baker_index"   (print $n)
        ) | nindent 0 }}
      {{- end }}
    {{- end }}
  {{- end }}
{{- end }}


{{- define "mavryk.container.accusers" }}
  {{- if has "accuser" $.node_vals.runs }}
  {{ $node_vals_images := $.node_vals.images | default dict }}
    {{- range .Values.protocols }}
- name: accuser-{{ lower .command }}
  image: "{{ or $node_vals_images.mavkit $.Values.images.mavkit }}"
  imagePullPolicy: IfNotPresent
  command:
    - /usr/local/bin/mavryk-accuser-{{ .command }}
  args:
    - run
    {{- end }}
  {{- end }}
{{- end }}

{{- define "mavryk.container.vdf" }}
  {{- if has "vdf" $.node_vals.runs }}
  {{ $node_vals_images := $.node_vals.images | default dict }}
    {{- range .Values.protocols }}
- name: vdf-{{ lower .command }}
  image: "{{ or $node_vals_images.mavkit $.Values.images.mavkit }}"
  imagePullPolicy: IfNotPresent
  command:
    - /usr/local/bin/mavkit-baker-{{ .command }}
  args:
    - run
    - vdf
    {{- end }}
  {{- end }}
{{- end }}


{{- define "mavryk.container.logger" }}
  {{- if has "logger" $.node_vals.runs }}
    {{- include "mavryk.generic_container" (dict "root"        $
                                                "type"        "logger"
                                                "image"       "utils"
    ) | nindent 0 }}
  {{- end }}
{{- end }}

{{- define "mavryk.container.photographer" }}
  {{- if has "photographer" $.node_vals.runs }}
  {{ $node_vals_images := $.node_vals.images | default dict }}
    {{- range .Values.photographer.networks }}
- name: photographer-{{ lower . }}
  image: "{{ or $node_vals_images.photographer $.Values.images.photographer }}"
  imagePullPolicy: IfNotPresent
  volumeMounts:
    - mountPath: /etc/mavryk
      name: config-volume
    - mountPath: /var/mavryk
      name: var-volume
    - mountPath: /etc/photographer
      name: gcp-credentials
      readOnly: true
  env:
    - name: BUCKET_NAME
      value: {{ $.Values.photographer.bucketName }}
    - name: MAX_DAYS
      value: "{{ $.Values.photographer.retention.maxDays }}"
    - name: MAX_MONTHS
      value: "{{ $.Values.photographer.retention.maxMonths }}"
    - name: NETWORK
      value: {{ upper . }}
    - name: SNAPSHOTS_PATH
      value: "/var/mavryk/snapshots"
    - name: MAVKIT_NODE_PATH
      value: "/usr/local/bin/mavkit-node"
    - name: MAVRYK_PATH
      value: "/var/mavryk/node"
    - name: MAVKIT_CONFIG
      value: "/etc/mavryk/config.json"
    - name: GOOGLE_APPLICATION_CREDENTIALS
      value: "/etc/photographer/client_secret.json"
    {{- end }}
  {{- end }}
{{- end }}
{{/*
// * The zerotier containers:
*/}}

{{- define "mavryk.init_container.zerotier" }}
{{- if (include "mavryk.doesZerotierConfigExist" .) }}
- envFrom:
    - configMapRef:
        name: mavryk-config
    - configMapRef:
        name: zerotier-config
  image: "{{ .Values.mavryk_k8s_images.zerotier }}"
  imagePullPolicy: IfNotPresent
  name: get-zerotier-ip
  securityContext:
    capabilities:
      add:
        - NET_ADMIN
        - NET_RAW
        - SYS_ADMIN
    privileged: true
  volumeMounts:
    - mountPath: /etc/mavryk
      name: config-volume
    - mountPath: /var/mavryk
      name: var-volume
    - mountPath: /dev/net/tun
      name: dev-net-tun
  env:
{{- include "mavryk.localvars.pod_envvars" . | indent 4 }}
{{- end }}
{{- end }}

{{- define "mavryk.container.zerotier" }}
{{- if (include "mavryk.doesZerotierConfigExist" .) }}
- args:
    - "-c"
    - "echo 'starting zerotier' && zerotier-one /var/mavryk/zerotier"
  command:
    - sh
  image: "{{ .Values.mavryk_k8s_images.zerotier }}"
  imagePullPolicy: IfNotPresent
  name: zerotier
  securityContext:
    capabilities:
      add:
        - NET_ADMIN
        - NET_RAW
        - SYS_ADMIN
    privileged: true
  volumeMounts:
    - mountPath: /var/mavryk
      name: var-volume
{{- end }}
{{- end }}

{{/*
  Node selector config section
*/}}
{{- define "mavryk.nodeSelectorConfig" -}}
{{- if hasKey $.node_vals "node_selector" }}
nodeSelector:
{{ toYaml $.node_vals.node_selector | indent 2 }}
{{- else }}
{{- "" }}
{{- end }}
{{- end }}

{{/*
  Tolerations config section
*/}}
{{- define "mavryk.tolerationsConfig" -}}
{{- if hasKey $.node_vals "tolerations" }}
tolerations:
{{ toYaml $.node_vals.tolerations | indent 2 }}
{{- else }}
{{- "" }}
{{- end }}
{{- end }}
