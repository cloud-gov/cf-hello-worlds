// Require cron module.
const CronJob = require('cron').CronJob;

// Set timing parameters.
const schedule = '*/30 * * * * *';
const timezone = 'America/New_York';

// Declare a function with a job to be run.
let runJob = () => console.log('*** Hello world every 30 seconds ***');

// Set up the job and run it.   
console.log("Starting one-off task");
let job = new CronJob(schedule, () => runJob(), null, true, timezone);
job.start()