# How to push the example Python Flask app to your space

Assuming you are in the correct cf org and space, make sure execute permissions are set and run the push-python-flask.sh script:
```shell
chmod +x push-python-flask.sh
./push-python-flask.sh
```

The script will pull in all of the dependencies and create the requirements.txt file based on the requirements.in file. If you need to update any dependencies, modify the requirements.in file only.

Then the script will run cf push to push the example flask app

### Note: In order to pin a package version you'll need to add the version to the dependency in requirements.in
