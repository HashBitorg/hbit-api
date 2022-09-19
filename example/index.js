var HBIT = require('../hbit-api');

// start your NRS client first
var API = new HBIT.API('http://127.0.0.1:11120');

API.getNextBlockGenerators().then(function (answer) {
    console.log(answer);
});

API.rsConvert({ account: 'x' }).then(function (answer) {
    // should error
}, function (error) {
    console.log(error);
});
