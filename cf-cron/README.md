# Running Cron Jobs on Cloud Foundry

## Note: originally from https://github.com/meshcloud/cf-cron, 

## Notes

This repository demonstrates how to run scheduled tasks on Cloud Foundry with a very small footprint (8 to 16 MB RAM) using a traditional crontab. This means you can run it for a few cents of monthly cost 

Traditional cron daemons need to run as root and have opinionated defaults for logging and error notifications. This makes them unsuitable for running in a containerized environment like Cloud Foundry. Instead of a system cron daemon we're thus using [supercronic](https://github.com/aptible/supercronic) to run our cron tab. 

## How it works

This application is built using the binary buildpack and executes `supercronic` on the `crontab` file. The `crontab`file specifies all your cron jobs. To add additional jobs, simply add a new line  which specifies a schedule and command to the `crontab`. 

> Note: By default, `supercronic` will log [all output to stderr](https://github.com/aptible/supercronic/issues/16) so we redirect that to stdout in our cf manifest. 

You can also include additional scripts and binaries to execute more complex actions.

After `cf push`ing this sample app to Cloud Foundry, you can see that it happily executes the jobs from the `crontab` in the log output:

```text
Apr 18, 2025 @ 13:51:29.911 {"level":"info","msg":"read crontab: ./crontab","time":"2025-04-18T17:51:29Z"}
Apr 18, 2025 @ 14:00:00.099 {"iteration":0,"job.command":"curl -s https://logs-workshop.app.cloud.gov/ 1\u003e/dev/null 2\u003e/dev/null","job.position":0,"job.schedule":"*/10 00-19,30-49 * * * * *","level":"info","msg":"starting","time":"2025-04-18T18:00:00Z"}
Apr 18, 2025 @ 14:00:00.237 {"iteration":0,"job.command":"curl -s https://logs-workshop.app.cloud.gov/ 1\u003e/dev/null 2\u003e/dev/null","job.position":0,"job.schedule":"*/10 00-19,30-49 * * * * *","level":"info","msg":"job succeeded","time":"2025-04-18T18:00:00Z"}
```

## Maintaining Supercronic

The binary for Supercronic comes from  https://github.com/aptible/supercronic/releases, and you should check the periodically for updates.

## Running Scheduled Tasks on Cloud Foundry

While the cron container here is designed to be small and lightweight, you may want to use it to trigger more resource intensive tasks and processes. When a simple `curl` to an http endpoint is not enough to kick off such a task on your existing app, [Cloud Foundry Tasks](https://docs.cloudfoundry.org/devguide/using-tasks.html) are a great solution to run these processes. 

