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

## Adding an internal route for the `actuator`

First, map a new internal route to handle requests to the `actuator` component:

```shell
cf map-route test-java-spring-multiple-ports apps.internal --hostname test-java-spring-actuator
```

Then, use the provided shell script to update the new route to listen on port `9001` (configured in `src/main/resources/application.properties`) for `actuator`:

```shell
./add-route-custom-port.sh <org> <space> test-java-spring-multiple-ports test-java-spring-actuator 9001
```

Restart the app so the route is properly handled:

```shell
cf restart test-java-spring-multiple-ports
```

Add a network policy allowing a separate app to reach the internal route for the `actuator`:

```shell
cf add-network-policy SOURCE_APP test-java-spring-multiple-ports --protocol tcp --port 9001
```

**Note: Unfortunately, you cannot use secure container-to-container networking with a port other than `8080`, [because the port for secure container traffic, `61443`, is specifically proxied to port `8080`](https://www.cloudfoundry.org/blog/secure-container-networking-with-tls/)**. So requests to this internal route for `actuator` will have to be made over HTTP.

Now, if you `cf ssh SOURCE_APP`, you should be able to successfully make a request to the health check endpoint for the `actuator` component:

```shell
$ curl http://test-java-spring-actuator.apps.internal:9001/actuator/health
{"status":"UP"}
```
