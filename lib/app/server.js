var http = require('http');
var fs = require('fs');

hostname = '127.0.0.1';
port = 2342;

module.exports = {
    
    RunServer: function () {

        fs.readFile('./index.html', function (err, html) {

            if (err) throw err;    
            
            JSON.parse(fs.readFileSync('metadep.json', 'utf8'))['component'].forEach(component => html += fs.readFileSync('./src/component/'+component+'/'+component+'.html'));
        
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
  


