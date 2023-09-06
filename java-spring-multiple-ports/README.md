# How to deploy the Java Spring - Multiple ports example app

## Build the application

First, use the following command to download all of the dependencies and create the application for deploying.

### Mac OS X, Unix, or Linux

```bash
./mvnw compile
./mvnw package
```

## Windows

```powershell
.\mvnw.bat compile
.\mvnw.bat package
```

## Deploy the application

Then follow the usual process for deploying:

```bash
cf push
```

## Adding a route for the `actuator`

First, create a new route to handle requests to the `actuator` component:

```shell
cf create-route app.cloud.gov --hostname test-java-spring-actuator
```

Then, use the provided shell script to update the new route to listen on port `9001` (configured in `src/main/resources/application.properties`) for `actuator`:

```shell
./add-route-custom-port.sh <org> <space> test-java-spring-multiple-ports test-java-spring-actuator 9001
```
