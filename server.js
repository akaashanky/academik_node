var connect = require('connect');
connect.createServer(
    connect.static(__dirname+'/static')
).listen(8080);