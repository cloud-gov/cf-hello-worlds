# Hello World apps for Cloud Foundry

This repository contains minimal "hello world" applications for a handful of different languages/frameworks for testing deployment to [Cloud Foundry](http://www.cloudfoundry.org/) ("CF"), though they may be useful for other things. Think of it like [TodoMVC](http://todomvc.com/), but server-side.

## Usage

First, follow the [Cloud Foundry command-line (CLI) setup instructions](https://docs.cloud.gov/getting-started/setup/) and log into your account on the Cloud Foundry instance you use. (For example, if you use cloud.gov, follow [the "Setting up the command line" instructions](https://docs.cloud.gov/getting-started/setup/#setting-up-the-command-line) to get an account and log in.)

Then, to deploy one of these "hello world" applications:

1. Clone or download this repository.
1. `cd` into the subdirectory for whatever language/framework you feel most comfortable with.
1. Target one of your spaces using `cf target`. (For new cloud.gov users, try targeting your sandbox space. See ["Play around in a “sandbox"](https://docs.cloud.gov/getting-started/setup/##play-around-in-a-sandbox) to figure out the exact `cf target -o <ORG> -s <SPACE>` command to use.)
1. Deploy the application, where `APPNAME` should be something unique like `FRAMEWORK-YOURNAME` (e.g. `nodejs-aidan`). By default on cloud.gov, `APPNAME` is used to construct a route to make your application reachable at https://APPNAME.apps.cloud.gov/. Route names must be unique across the platform.


    ```bash
    cf push <APPNAME>
    ```

## See also

* [The official collection of sample applications for Cloud Foundry.](https://github.com/cloudfoundry-samples)
* [Drupal example](https://github.com/18F/cf-ex-drupal)
* [SuiteCRM](https://github.com/18F/cf-example-suitecrm)
* [Wordpress example](https://github.com/18F/cf-ex-wordpress)

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
>All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
