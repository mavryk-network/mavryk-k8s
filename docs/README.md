# Mavryk-k8s documentation

Hosted at https://kubernetes.mavryk.org

The documentation is built from static markdown files in the `docs` directory as well as some generated documentation from `charts/mavryk/values.yaml`.

To generate the files:

```
cd docs/
./values_to_doc.sh
```

To render locally:

```
npm install
npm run build
npm start
```
