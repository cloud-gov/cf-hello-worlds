# How to deploy the Hello World Java app

## Build the application

First, use the following command to download all of the dependencies and create the application for deploying.

### Mac OS X, Unix, or Linux

    ./gradlew distZip

## Windows

    gradlew.bat distZip

## Deploy the application

Then follow the usual process for deploying

    cf push