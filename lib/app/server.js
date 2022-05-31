const express = require("express");
const constvariable = require('../../const/const');
const fs = require("fs");
const app = express();

let port = JSON.parse(fs.readFileSync(constvariable.packagejson_path, 'utf8'))['port'];

module.exports = {
    
    RunServer: function (content) {
        app.get("/*", (req, res) => {
            res.send(content);
        })

        app.listen(process.env.PORT || port, () => console.log(`App is running on the follow address: http://localhost:${port}/`) );
    },
};
  


