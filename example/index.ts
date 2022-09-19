import HBIT = require('../hbit-api');

// start your NRS client first

var API = new HBIT.API('http://127.0.0.1:11120');

API.getNextBlockGenerators().then((answer: Object) => {
    console.log(answer);
});

API.rsConvert({account: 'x'}).then((answer: Object) => {
    // should error
}, (error: HBIT.IError) => {
    console.log(error);
});
