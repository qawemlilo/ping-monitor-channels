/* eslint-disable no-unused-vars */


class ChannelTemplate {

  constructor(config) {
    // do something with the config
  }

  // channel name
  name = '';

  async up(res, state) {
    // send or log notification
  }

  async down(res, state) {
    // send or log notification
  }

  async stop(res, state) {
    // send or log notification
  }

  async error(error, res) {
    // send or log notification
  }

  async timeout(error, res) {
    // send or log notification
  }
}


module.exports = ChannelTemplate;
