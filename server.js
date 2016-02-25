var express = require('express');
var app = express();
var mysql = require("mysql");
var fs = require("fs");
// Config importieren
var config = require("./config.js");
//MySQL Verbindung initieren
var sqlconnection = mysql.createConnection({ //SQL initieren
    host: config.sysconf.sqldata.host,
    user: config.sysconf.sqldata.username,
    password: config.sysconf.sqldata.pass,
    database: config.sysconf.sqldata.database
});

sqlconnection.connect(function (err) { // SQL Verbindung Initieren
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + sqlconnection.threadId); // SUCCESS
});
function parsetemplate(title, quickdesc, content, templatename, type) {

}
// Routing start!
app.get('*', function (req, res) {
    console.log(req.url);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});