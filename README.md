# Hello World apps for Cloud Foundry

This repository contains minimal "hello world" applications for a handful of different languages/frameworks for testing deployment to [Cloud Foundry](http://www.cloudfoundry.org/) ("CF"), though they may be useful for other things. Think of it like [TodoMVC](http://todomvc.com/), but server-side.

## Usage

1. Follow the general CF command-line (CLI) [setup instructions](https://docs.cloud.gov/getting-started/setup/).
1. Download/clone this repository.
1. `cd` into the subdirectory for whatever language/framework you feel most comfortable with.
1. Target your space in the `sandbox`.

    ```bash
    cf target -o sandbox -s <USER>
    ```
    
    Where <USER> is the user portion (firstname.lastname) of your email address.

1. Deploy the application, where `APPNAME` should be something unique like `FRAMEWORK-YOURNAME` (e.g. `nodejs-aidan`). By default, `APPNAME` is used to contstruct a route to make your application reachable at https://APPNAME.apps.cloud.gov/. Route names must be unique across the platform.


    ```bash
    cf push <APPNAME>
    ```

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
>All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
