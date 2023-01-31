/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer');

class EmailChannel {

  constructor(options) {
    this.transporter = nodemailer.createTransport(options);
  }

  name = 'mailer';

  async up(res, state) {
    console.log(`#${this.name}: ${res.website} is up`);
  }

  async down(res, state) {
    console.log(`#${this.name}: ${res.website} is down`);

    await this.sendEmail(
      `#ping-monitor: ${res.website} is down`,
      `<p style="margin:0">Website: ${res.website}</p>
       <p style="margin:0">Status Code: ${res.statusCode}</p>
       <p style="margin:0">Message: ${res.statusMessage}</p>
      `
    );
  }

  async stop(res, state) {
    console.log(`#${this.name}: ${res.website} has stopped`);

    await this.sendEmail(
      `#ping-monitor: ${res.website} monitor has stopped`,
      `<p style="margin:0">Website: ${res.website}</p>
       <p style="margin:0">Status Code: ${res.statusCode}</p>
       <p style="margin:0">Message: ${res.statusMessage}</p>
      `
    );
  }

  async error(error, res) {
    console.log(`#${this.name}: ${res.website} is down`, error);

    await this.sendEmail(
      `#ping-monitor: ${res.website} returned an error`,
      `<p style="margin:0">Website: ${res.website}</p>
       <p style="margin:0">Status Code: ${res.statusCode}</p>
       <p style="margin:0">Error Message: ${error.message}</p>
       <p style="margin:0">Message: ${res.statusMessage}</p>
      `
    );
  }

  async timeout(error, res) {
    console.log(`#${this.name}: ${res.website} has timed out`,  error);

    await this.sendEmail(
      `#ping-monitor: ${res.website} timed out`,
      `<p style="margin:0">Website: ${res.website}</p>
       <p style="margin:0">Status Code: ${res.statusCode}</p>
       <p style="margin:0">Message: ${res.statusMessage}</p>
      `
    );
  }

  async sendEmail(subject, body) {
    await this.transporter.sendMail({
      from: this.options.mail.from,
      to: this.options.mail.to,
      subject: subject,
      html: body
    });
  }
}


module.exports = EmailChannel;
