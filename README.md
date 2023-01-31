# [ping-monitor](https://github.com/qawemlilo/ping-monitor) Channels

Notification channels for ping [ping-monitor](https://github.com/qawemlilo/ping-monitor).

```javascript
const Monitor = require('ping-monitor');



// channel example
class Channel {

  constructor(config) {
    /*** 
    
      do something with the config
      e.g.
      
      const transporter = require("nodemailer").createTransport(config);
      
      this.transporter = transporter;
      
      this.transporter then becomes accessible within your methods
      
     ***/
  }
  
  up(res, state) {
    // send up notification
  }
  
  down(res, state) {
    // send down notification
  }
  
  stop(res, state) {
    // send stopped notification
  }
  
  error(error, res) {
    // send error notification
  }
  
  timeout(error, res) {
    // send timeout notification
  }
}




const myMonitor = new Monitor({
  website: 'https://ragingflame.co.za',
  title: 'Raging Flame',
  interval: 10 
});

const channel =  new Channel({...config})


myMonitor.addNotificationChannel(channel)

```
