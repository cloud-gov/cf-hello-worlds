#!/bin/bash

set -ex

export TERM=${TERM:-dumb}

wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz
tar -xvf jdk-21_linux-x64_bin.tar.gz
VERSION=$(find . -maxdepth 1 -mindepth 1 -name  "jdk-21.*" | sed 's/^..//')
mv "$VERSION" /opt/

JAVA_HOME="/opt/${VERSION}"
export JAVA_HOME
PATH="JAVA_HOME/bin:$PATH"
export PATH

pushd cf-hello-worlds/java-hello
  ./mvnw compile
  ./mvnw package
popd

cp -r cf-hello-worlds/* cf-hello-worlds-build/
