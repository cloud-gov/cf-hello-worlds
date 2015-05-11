# Hello World apps for Cloud Foundry

This repository contains minimal "hello world" applications for a handful of different languages/frameworks for testing deployment to [Cloud Foundry](http://www.cloudfoundry.org/) ("CF"), though they may be useful for other things. Think of it like [TodoMVC](http://todomvc.com/), but server-side.

## Usage

1. Follow the general CF command-line (CLI) [setup instructions](https://docs.18f.gov/getting-started/setup/).
1. Download/clone this repository.
1. `cd` into the subdirectory for whatever language/framework you feel most comfortable with.
1. Target your space in the `sandbox`.

    ```bash
    cf target -o sandbox -s <USER>
    ```
    
    Where <USER> is the user portion (firstname.lastname) of your email address.

1. Deploy the application, where `APPNAME` should be something unique like `FRAMEWORK-YOURNAME` (e.g. `nodejs-aidan`). By default, `APPNAME` is used to contstruct a route to make your application reachable at https://APPNAME.cf.18f.us. Route names must be unique across the platform.


    ```bash
    cf push <APPNAME>
    ```
