# NGINX Ingress External Auth with NodeJS


You will need:

* kubectl
* skaffold
* minikube


## Try it out


### Start a minikube cluster

```
minikube start
minikube addons enable ingress
```


### Set up DNS to point all example.com addresses to `minikube ip`.

TODO -> dnsmasq is a good tool for this.


### Deploy the app into minikube

```
skaffold run
```

### Try it out

This request returns a 401

```
curl http://hello-world.example.com
```

This request gets past the auth server!

```
curl -H 'Authorization: Bearer sometoken' http://hello-world.example.com
```

The `/public` resource does not need authentication however:

```
curl http://hello-world.example.com/public
```
