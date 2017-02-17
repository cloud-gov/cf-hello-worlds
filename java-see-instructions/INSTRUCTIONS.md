# How to deploy the Hello World Java app

## Build the application

First, use the following command to download all of the dependencies and create the application for deploying.

### Mac OS X, Unix, or Linux

    ./gradlew distZip

## Windows

    gradlew.bat distZip

## Deploy the application

Then follow the usual process for deploying, except specify the zip when pushing:

    cf push -p build/distributions/java-hello-world-cf-example.zip <APPNAME>