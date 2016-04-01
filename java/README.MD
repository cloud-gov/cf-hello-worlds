#Deploying the hello world Java App

###Build the application on Mac OS X, Unix, or Linux
```bash
./gradlew distZip
```
This will download all of the dependencies and create the application for deploying

###Build the application on windows
```
gradlew.bat distZip
```
This will download all of the dependencies and create the application for deploying

###Deploy to cloud.gov
Follow the usual process for deploying except specify the zip when pushing
```bash
cf push -p build/distributions/java-hello-world-cf-example.zip <APPNAME>
```
