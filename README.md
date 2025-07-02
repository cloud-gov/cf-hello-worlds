# Hello World apps for cloud.gov

This repository contains minimal "Hello World" applications for a handful of different languages/frameworks for testing deployment to [cloud.gov](https://www.cloud.gov/), in particular, and other instances of [Cloud Foundry](https://www.cloudfoundry.org) ("CF") in general.

For [cloud.gov](https://cloud.gov), follow the [quickstart guide](https://cloud.gov/docs/getting-started/your-first-deploy/) for a guided tour, or follow the USAGE below.

## Usage

All of these examples, except Java, have the same usage. For Java, see its [INSTRUCTIONS.md](./java-hello-instructions/INSTRUCTIONS.md).

1. Follow the [Cloud Foundry command-line (CLI) setup instructions](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html).
1. Log into your Cloud Foundry account. (For example, if you use cloud.gov, follow [the "Set up the command line" instructions](https://cloud.gov/docs/getting-started/setup/#set-up-the-command-line) to log in.)
1. Clone or download this repository, and `cd` into the directory `cf-hello-worlds`.
1. `cd` into the subdirectory for whatever language/framework you feel most comfortable with.
1. Deploy the application with `cf push`. Look for `urls` value when the push completes.

    ```bash{9}
    cf push --random-route
    ...
    Creating app APP in org / space
    OK
    ...[snip]...
    requested state: started
    instances: 1/1
    usage: 512M x 1 instances
    urls: php-random-words.app.cloud.gov
    last uploaded: Fri Nov 3 17:50:30 UTC 2017
    stack: cflinuxfs2
    ```

1. Visit your app with your browser at the URL assigned to your app. In the example above, that would be: e.g. <https://php-random-words.app.cloud.gov>

All of examples produce web applications that respond "Hello World from &lt;framework&gt;" on their index page.

## See also

* [Cloud Foundry community collection of sample applications](https://github.com/cloudfoundry-samples)
* [cloud.gov Java Spring Boot example](https://github.com/18F/cf-sample-app-spring): This doesn't require `gradle` or any other dependencies.
* [cloud.gov Drupal 8 example](https://github.com/18F/cf-ex-drupal8)
* [cloud.gov Drupal 7 example](https://github.com/18F/cf-ex-drupal)
* [cloud.gov Wordpress example](https://github.com/18F/cf-ex-wordpress)

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

>This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
>All contributions to this project will be released under the CC0
>dedication. By submitting a pull request, you are agreeing to comply
>with this waiver of copyright interest.
