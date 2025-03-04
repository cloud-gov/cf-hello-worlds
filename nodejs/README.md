
# Node.js Sample App using NPM

## Building

`pack build npm-sample --buildpack paketo-buildpacks/nodejs`

## Running

`docker run --interactive --tty --init --publish 8080:8080 npm-sample`

## Viewing

`curl http://localhost:8080`

## PeterB Notes:

* https://paketo.io/docs/
* https://paketo.io/docs/concepts/builders/
* https://buildpacks.io/docs/for-app-developers/concepts/
* https://github.com/buildpacks/lifecycle
* https://docs.cloudfoundry.org/buildpacks/cnb/index.html
* https://github.com/paketo-buildpacks/nodejs
* https://stackoverflow.com/questions/65325129/execute-spring-buildpacks-when-calling-docker-compose-build-command
    
