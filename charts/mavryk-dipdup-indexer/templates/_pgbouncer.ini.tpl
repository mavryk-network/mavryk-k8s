{{/*

PgBouncer.ini is a configuration file used to specify PgBouncer parameters and identify user-specific parameters.
It can contain include directives to split the file into separate parts.

For further information, refer to https://www.pgbouncer.org/config.html

*/}}

{{ define "pgbouncer.ini" }}

{{/* [databases] section */}}
{{- if $.Values.pgBouncer.databases }}
  {{ printf "[databases]" }}
  {{- range $key, $value := .Values.pgBouncer.databases }}
    {{ $key }} ={{ range $k, $v := $value }} {{ $k }}={{ $v }}{{ end }}
  {{- end }}
{{- end }}

{{/* [pgbouncer] section */}}
{{- if $.Values.pgBouncer.pgbouncer }}
  {{ printf "[pgbouncer]" }}
  {{- range $k, $v := $.Values.pgBouncer.pgbouncer }}
    {{ $k }} = {{ $v }}
  {{- end }}
{{- end }}

{{/* [users] section */}}
{{- if $.Values.pgBouncer.users }}
  {{ printf "[users]" }}
  {{- range $k, $v := $.Values.pgBouncer.users }}
    {{ $k }} = {{ $v }}
  {{- end }}
{{- end }}

{{/* include is a special configuration within [pgbouncer] section */}}
{{- if $.Values.pgBouncer.include }}
  {{ printf "%s %s" "%include" $.Values.pgBouncer.include }}
{{- end }}

{{ end }}