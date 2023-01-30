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
    /***
    await this.transporter.sendMail({
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
    });
    ***/

    console.log(`#${this.name}: ${res.website} is down`);
  }

  async stop(res, state) {
    /***
    await this.transporter.sendMail({
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
    });
    ***/

    console.log(`#${this.name}: ${res.website} has stopped`);
  }

  async error(error, res) {
    /***
    await this.transporter.sendMail({
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
    });
    ***/

    console.log(`#${this.name}: ${res.website} is down`, error);
  }

  async timeout(error, res) {
    /***
    await this.transporter.sendMail({
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
    });
    ***/

    console.log(`#${this.name}: ${res.website} has timed out`,  error);
  }
}


module.exports = EmailChannel;
