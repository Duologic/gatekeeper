FROM golang:1.21-bullseye@sha256:436969571fa091f02d34bf2b9bc8850af7de0527e5bc53c39eeda88bc01c38d3

RUN GO111MODULE=on go install sigs.k8s.io/controller-tools/cmd/controller-gen@v0.10.0
RUN GO111MODULE=on go install k8s.io/code-generator/cmd/conversion-gen@v0.25.4

RUN mkdir /gatekeeper
WORKDIR /gatekeeper
