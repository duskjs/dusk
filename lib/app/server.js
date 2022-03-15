const express = require("express");
const path = require('path');
const fs = require("fs");
const app = express();

let port = JSON.parse(fs.readFileSync('metadep.json', 'utf8'))['port'];

module.exports = {
    
    RunServer: function () {
        app.use(express.static(path.join(__dirname, '../../dist/')));
        
        app.get("/*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../../dist", "index.html"));
        })
        app.listen(process.env.PORT || port, () => console.log(`App is running on the follow address: http://localhost:${port}/`) );
    },
};
  


