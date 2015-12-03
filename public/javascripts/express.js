/**
 * Created by rexzhou on 15/11/29.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.end('hello');
});

app.listen(18001, function afterListen(){
    console.log('express start')
});








