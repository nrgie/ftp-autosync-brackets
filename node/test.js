/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true, white: true, evil: true */
/*globals HOST:true,PORT:true,USER:true,PWD:true,LOCALROOT:true,REMOTEROOT:true,ftp:true,emit:true,connect*/


var fs = require("fs"),
domain = require("domain").create(),
 JSFtp = require("jsftp");

eval(fs.readFileSync('core.js').toString());


HOST = "192.168.0.99";
PORT = 21;
USER = "xxx";
PWD = "xxx";
LOCALROOT = "/Users/tim/work/test";
REMOTEROOT = "public_html";

ftp = new JSFtp({
    host: HOST
});

emit = false; // emit events to Brackets

connect();
domain.exit();
