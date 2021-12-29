# IMesh [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![GPL-3.0 Licensed](https://img.shields.io/badge/license-GPL3.0-blue.svg)](https://github.com/icyxp/imesh/blob/main/LICENSE)

  * [Features](#features)
  * [Docker images](#docker-images)
  * [Deploy Imesh](#deploy-imesh)
    + [Deploy IMesh in k8s](#deploy-imesh-in-k8s)
    + [Deploy IMesh with Istio Ingress Gateway](#deploy-iemsh-with-ingress)
    + [Deploy IMesh with pvc](#deploy-imesh-with-pvc)
  * [Configuration](#configuration)
  * [Troubleshooting](#troubleshooting)
  * [Releases](#releases)
  * [Contributing](#contributing)
  * [LICENSE](#license)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

* Forked from - https://github.com/nghialv/promviz and https://github.com/nmnellis/vistio

IMesh is an application that helps you visualize the traffic of your cluster from Prometheus data.

It has 2 components:

- IMesh-API: retrieves data from Prometheus servers, aggregates them and provides an API to get the graph data.

- Imesh-Web: render traffic graph.

## Dependency
* Prometheus 
* Istio 1.10+

## Features:
- Generates and renders traffic graph in realtime
- Able to replay from any time in the past
- Able to generate notices on node and connection from prom query
- Provides a sidecar application for k8s that watches config changes and reload Vistio server in runtime
- Fits with [Istio](https://istio.io)'s metrics 

## Docker images

Docker images of both `imesh-api` and `imesh-web` are available on Docker Hub.

- [icyboy/imesh-api](https://quay.io/icyboy/imesh-api)
- [icyboy/imesh-web](https://quay.io/icyboy/imesh-web)

## Deploy IMesh
* prometheusURL - the default prometheus url is assumed to be <http://prometheus.istio-system:9090> based on the Istio deployment. If your Prometheus server has an internet domain, you will need to edit the yaml files and update prometheusURL value.
* UPDATE_URL - setting your imesh-api server internet domain.
### Deploy IMesh In K8s
1. Deploy
```sh
kubectl apply -f deploy/deploy.yaml
```

2. Expose imesh-web
```sh
kubectl -n default port-forward $(kubectl -n default get pod -l app=imesh-web -o jsonpath='{.items[0].metadata.name}') 8080:8080 &
```

3. Open IMesh <localhost:8080>

4. Expose imesh-api
```sh
kubectl -n default port-forward $(kubectl -n default get pod -l app=imesh-api -o jsonpath='{.items[0].metadata.name}') 9091:9091 &
```

5. Test endpoint <localhost:9091/api/graph>

6. Add traffic to the mesh by following bookinfo demo here [Istio Bookinfo Demo](https://istio.io/docs/guides/bookinfo/) and to get the `GATEWAY_URL` and calling
```sh
curl -o /dev/null -s -w "%{http_code}\n" http://${GATEWAY_URL}/productpage
```

### Deploy IMesh with Istio Ingress Gateway

```sh
kubectl apply -f deploy/deploy-ingress.yaml
```

### Deploy IMesh with pvc

```sh
kubectl apply -f deploy/deploy-pvc.yaml
```

## Configuration

See [configuration.md](https://github.com/icyxp/imesh/blob/main/documentation/configuration.md) in documentation directory.

## Troubleshooting

1. Blank Vistio home page - this typically means that the Prometheus query at the `global` level is not returning any data or the data is not matching the labels in the source or target configuration. Grab the globalLevel query and test it against Prometheus directly to verify the data is correct. Example global level query `sum(rate(istio_requests_total[1m])) by (response_code)`

2. Cannot `Zoom` into clusters - If you are having trouble connecting your clusters to the global view, make sure the `target` values in the global configuration matches the cluster level name.

* Example global level target - in this example I rename all target values to cluster1-mesh
```yaml
    globalLevel:
      ...
        target:
          replacement: cluster1-mesh
```

* Example clusterLevel configuration - the cluster name `cluster1-mesh` matches the target value at the global level
```yaml
    clusterLevel:
    - cluster: cluster1-mesh
```

## Releases

https://github.com/icyboy/imesh/releases

* 1.0.0 - Initial Release

## Contributing

Please feel free to create an issue or pull request.

## LICENSE

IMesh is released under the GPL-3.0 license. See LICENSE file for details.