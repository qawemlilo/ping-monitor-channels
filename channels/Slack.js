/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const SlackNotify = require('slack-notify');

class SlackChannel {
  constructor(options) {
    this.options = options;

    this.slack = SlackNotify(options.webhook_url);
  }

  notify = (res, msg) => {
    try {
      this.slack.alert({
        channel: this.options.slack_channel,
        icon_url: this.options.icon_url,
        text: `${res.website} ${msg || 'Downtime Incidence'}`,
        attachments: [
          {
            color: '#FF0000',
            blocks: [
              {
                type: 'header',
                text: {
                  type: 'plain_text',
                  text: msg || 'Downtime Incidence',
                  emoji: true,
                },
              },
              {
                type: 'divider',
              },
              {
                type: 'context',
                elements: [
                  {
                    type: 'mrkdwn',
                    text: `*URL: * ${res.website}`,
                  },
                  {
                    type: 'mrkdwn',
                    text: `*Status Code: * ${res.statusCode}`,
                  },
                ],
              },
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*Message: * ${msg || res.responseMessage}`,
                },
              },
            ],
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  name = 'slacker';

  async up(res, state) {
    console.log(`#${this.name}: ${res.website} is up`);
  }

  async down(res, state) {
    this.notify(res);

    console.log(`#${this.name}: ${res.website} is down`);
  }

  async stop(res, state) {
    this.notify(res, 'Monitoring Stopped');

    console.log(`#${this.name}: ${res.website} has stopped`);
  }

  async error(error, res) {
    this.notify(res);

    console.log(`#${this.name}:`, error);
  }

  async timeout(error, res) {
    this.notify(res, 'Timed Out');

    console.log(`#${this.name}:`, error);
  }
}

module.exports = SlackChannel;
