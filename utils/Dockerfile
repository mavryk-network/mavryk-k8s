FROM python:3.10-alpine
# TODO: update to 3.11 once the bug is fixed:
# https://github.com/baking-bad/pytezos/issues/336
ENV PYTHONUNBUFFERED=1

#
# Note: we install build deps for pip, then remove everything after
# pip install.  We also add `--no-cache` to pip and apk to reduce the
# size of the generated image.
#
# We re-install binutils at the end because Python execve(2)s ld(1) to
# load zeromq.

COPY requirements.txt /requirements.txt
RUN     PIP="pip --no-cache"					\
  APK_ADD="apk add --no-cache";					\
  $APK_ADD --virtual .build-deps gcc python3-dev			\
  libffi-dev musl-dev make		\
  && $APK_ADD libsodium-dev libsecp256k1-dev gmp-dev			\
  && $APK_ADD zeromq-dev findmnt						\
  && $PIP install -r requirements.txt				\
  && $APK_ADD jq netcat-openbsd curl binutils \
  && $APK_ADD lz4

COPY config-generator.py /
COPY config-generator.sh /
COPY entrypoint.sh /
COPY logger.sh /
COPY sidecar.py /
COPY snapshot-downloader.sh /
COPY wait-for-dns.sh /
ENTRYPOINT ["/entrypoint.sh"]
CMD []
