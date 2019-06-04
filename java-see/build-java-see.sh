#!/bin/bash

set -ex

export TERM=${TERM:-dumb}

pushd cf-hello-worlds/java-see
  ./mvnw compile
  ./mvnw package
popd

cp -r cf-hello-worlds/* cf-hello-worlds-build/
