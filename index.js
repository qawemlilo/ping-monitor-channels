'use strict';

const EmailChannel = require('./channels/Email');
const SlackChannel = require('./channels/Slack');
const Monitor = require('ping-monitor');
const config = require('./config');
const websites = require('./sites.json');


websites.forEach((website) => {
  const myMonitor = new Monitor({
    website: website.url,
    title: website.name,
    config: {
      intervalUnits: website.intervalUnits
    },
    interval: website.interval
  });

  // notification channels
  const emailChannel =  new EmailChannel(config.nodemailer);
  const slackChannel =  new SlackChannel(config.slack);

  myMonitor.addNotificationChannel(emailChannel);
  myMonitor.addNotificationChannel(slackChannel);
});





