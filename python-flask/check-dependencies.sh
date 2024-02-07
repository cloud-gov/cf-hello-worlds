#/bin/bash

echo "about to compile requirements.in"
pip3 install pip-tools
python3 -m piptools compile \
--quiet \
--output-file=requirements.txt \
requirements.in
echo "done compiling requirements"
