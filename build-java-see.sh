#!/bin/bash

set -ex

export TERM=${TERM:-dumb}

pushd cf-hello-worlds/java-see
  ./gradlew distZip
popd

cp -r cf-hello-worlds/* cf-hello-worlds-build
