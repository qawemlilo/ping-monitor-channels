module.exports = {
  nodemailer: {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: '',
    },
    mail: {
      from: '',
      to: ''
    }
  },
  slack: {
    webhook_url: '',
    icon_url: '',
    slack_channel: '',
  },
};
