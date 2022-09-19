HBIT API
============

API request wrapper for [HBIT crypto]for Node.js and the browser.
It just has all the currently public API methods for HBIT along side with a dual API Promise/Callback based interface.

Plus it's created using Typescript, which should ensure the proper parameters for each API call.

## Install

For node.js

```
npm install hbit-api
```

For the browser

```
bower install hbit-api
```

## Usage

In Node.js:

```javascript
var HBIT = require('hbit-api');

// start your HBIT client first
var API = new HBIT.API('http://127.0.0.1:11120');

API.getNextBlockGenerators().then(function (answer) {
    console.log(answer);
});

API.rsConvert({ account: 'x' }).then(function (answer) {
    // should error
}, function (error) {
    console.log(error);
});
```

In the browser (needs to have `hbit.apiServerCORS=true` in your HBIT config file, otherwise you need to access it from same port and hostname):

```html
<script src="hbit-api.js"></script>
<script>
    var instance = new HBIT.API('http://127.0.0.1:11120');

    instance.getNextBlockGenerators().then(function(answer){
        console.log(answer);
    });
</script>
```