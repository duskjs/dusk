var http = require('http');
var fs = require('fs');

http = require('http');
hostname = '127.0.0.1';
port = 2342;

module.exports = {
    
    RunServer: function () {

        fs.readFile('./index.html', function (err, html) {

            if (err) throw err;    
        
            const server = http.createServer(function(request, response) {  
                response.writeHeader(200, {"Content-Type": "text/html"});  
                response.write(html);  
                response.end();  
            });

            server.listen(port, hostname, () => {
                console.log(`App is running on the follow adress: http://${hostname}:${port}/`);
            });
        });
    },
};
  


