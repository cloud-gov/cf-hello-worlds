# Running one-off tasks on cloud.gov

This is an example of a one-off task that can be run on cloud.gov. More on how to do this can be [found in the docs](https://cloud.gov/docs/management/one-off-tasks/). Note, this example uses node.js, but you can use any language that has a cron-like library to do something similar.

## Usage

To run this app locally, use `npm start`. To deploy to cloud.gov, use the instructions below:

```bash
~$ cf push -f manifest.yml --health-check-type none --no-route
```

You can also add the `health-check-type` and `no-route` parameters to your manifest if it's easier:

```yaml
health-check-type: none
no-route: true
```

When done, wait a few minutes for some log messages to show up, then check the logs:

```bash
~$ cf logs --recent task-runner
```

You can also check the status of tasks that have run:

```bash
~$ cf tasks task-runner
```

## Clean up

Note, when done with the example, make sure you delete your app:

```bash
~$ cf delete task-runner
```

