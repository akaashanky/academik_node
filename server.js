var connect = require('connect');
connect.createServer(
    connect.static(__dirname+'/static')
).listen(process.env.PORT || 5000);
