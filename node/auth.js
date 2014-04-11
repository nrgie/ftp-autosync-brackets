/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true, white: true */
/* global */


// node code
var fs = require('fs'),
domain = require('domain').create(),
 JSFtp = require('jsftp');

var HOST = '192.168.0.99';
var PORT;
var USER = 'tim';
var PWD = 'blah';



// ENOTFOUND and ETIMEDOUT
// create a domain
domain.on('error', function(err) {
    if (err.code === 'ETIMEDOUT') {
        console.log('timed out');
    } else if (err.code === 'ENOTFOUND') {
        console.log('unable to find host');
    } else {
        console.log(err);
    }
});

domain.enter();
var ftp = new JSFtp({
    host: HOST
});


// connect to remote
//domain.run(function() {
//    process.nextTick(function() {
        ftp.auth(USER, PWD, function (err, data) {
            if (err) { 
                console.log('Failed to connect to remote: ' + err);
                return;
            }

            // emit connect
            console.log('Connected ' + data.text);

            // check REMOTEROOT is a valid directory
            ftp.raw.quit(function (err, data) {
                console.log('quit:' + data);
            });
        });
//    });
//});
domain.exit();



