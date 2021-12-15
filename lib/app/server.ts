var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = '127.0.0.1';
var port = 2342;

module.exports = {
    
    RunServer: function () {
        var file = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf-8');

        JSON.parse(fs.readFileSync('metadep.json', 'utf8'))['component'].forEach((component:String) => file += fs.readFileSync(path.join(__dirname, '../../src/component/'+component+'/'+component+'.html'), 'utf-8'));
        
        const server = http.createServer(function(request:any, response:any) {  
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(file);  
            response.end();  
        });

        server.listen(port, hostname, () => {
            console.log(`App is running on the follow adress: http://${hostname}:${port}/`);
        });
    },
};
  


