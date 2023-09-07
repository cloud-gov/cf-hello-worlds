# How to deploy the Java Spring Actuator example app

This example application demonstrates the ability to:

- [use a custom port for a CloudFoundry application](https://docs.cloudfoundry.org/devguide/custom-ports.html)
- [use multiple routes to connect to multiple ports opened by an application]

## Build the application

First, use the following command to download all of the dependencies and create the application for deploying.

### Mac OS X, Unix, or Linux

```bash
./mvnw compile
./mvnw package
```

## Windows

```powershell
.\mvnw.cmd compile
.\mvnw.cmd package
```

## Deploy the application and configure the routes

1. After building the application, follow the usual process for deploying:

    ```bash
    cf push --var app-domain=app.cloud.gov
    ```

2. Use the provided shell script to update the route for the Spring Boot application to listen on port `8081` (configured in [`manifest.yml`](./manifest.yml)):

    ```shell
    ./set-route-custom-port.sh <org> <space> test-java-spring-actuator test-java-spring 8081
    ```

3. Restart the app so the route is properly handled:

    ```shell
    cf restart test-java-spring-actuator
    ```

4. Add a network policy allowing a separate app to reach the internal route for the `actuator`:

    ```shell
    cf add-network-policy SOURCE_APP test-java-spring-actuator --protocol tcp --port 61443
    ```

5. Now, if you `cf ssh SOURCE_APP`, you should be able to successfully make a request to the health check endpoint for the `actuator` component:

    ```shell
    $ curl https://actuator.apps.internal:61443/actuator/health
    {"status":"UP"}
    ```

## Helpful resources

- [Configuring Cloud Foundry to route traffic to apps on custom ports](https://docs.cloudfoundry.org/devguide/custom-ports.html)
- [Building a RESTful Web Service with Spring Boot Actuator](https://spring.io/guides/gs/actuator-service/)
- [Container to container networking in CloudFoundry](https://docs.cloudfoundry.org/concepts/understand-cf-networking.html)
- [Securing Container-to-Container Networking with TLS](https://www.cloudfoundry.org/blog/secure-container-networking-with-tls/)
