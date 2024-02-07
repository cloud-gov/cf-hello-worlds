#!/bin/bash

echo "about to compile requirements.in"
pip3 install pip-tools
python3 -m piptools compile \
--quiet \
--output-file=cf-hello-worlds/python-flask/requirements.txt \
cf-hello-worlds/python-flask/requirements.in
echo "done compiling requirements"
