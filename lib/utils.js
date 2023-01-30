const nodemailer = require('nodemailer');

module.exports.createTestAccount = async function (config) {
  let auth = await nodemailer.createTestAccount();
  config.auth.user = auth.user;
  config.auth.pass = auth.pass;
};
