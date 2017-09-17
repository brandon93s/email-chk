# email-chk [![Build Status](https://travis-ci.org/brandon93s/email-chk.svg?branch=master)](https://travis-ci.org/brandon93s/email-chk)

> Checks if a given email is valid and whether or not it actually exists by contacting the remote mail server  :email:


## Install

```
$ npm install --save email-chk

```


## Usage

```js
const emailChk = require('email-chk')

try {
  const exists = emailChk('test@example.com')
} 
catch (e) {
  // connection refused or server error occurred
}
```


## API

### emailChk(email [,options])

#### email

Type: `string`

The email to verify and check existence for


#### options

##### timeout

Type: `number`<br>
Default: `5000`

The [idle timeout](https://nodejs.org/api/net.html#net_socket_settimeout_timeout_callback) in ms for the socket performing requests 

##### host

Type: `string` <br>
Default: domain of `email`

The domain of the originating SMTP server for the request

##### from

Type: `string` <br>
Default: `email`

The originating email for the request


## License

MIT © [Brandon Smith](https://github.com/brandon93s)
