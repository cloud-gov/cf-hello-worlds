#!/bin/bash

set -ex

export TERM=${TERM:-dumb}

wget https://download.oracle.com/java/22/latest/jdk-22_linux-x64_bin.tar.gz
tar -xvf jdk-22_linux-x64_bin.tar.gz
TEST=$(find . -maxdepth 1 -mindepth 1 -name  "jdk-22.*":2)
echo $TEST
mv jdk-22.0.2 /opt/

JAVA_HOME='/opt/jdk-22.0.2'
export JAVA_HOME
PATH="JAVA_HOME/bin:$PATH"
export PATH

pushd cf-hello-worlds/java-see
  ./mvnw compile
  ./mvnw package
popd

cp -r cf-hello-worlds/* cf-hello-worlds-build/
