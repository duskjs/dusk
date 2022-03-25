const fs = require('fs-extra')
const path = require('path');
const srcpath = path.join(__dirname, '../src/');
const distpath = path.join(__dirname, '../dist/');

DistFiles();

async function DistFiles(){
    if (!fs.existsSync('dist')) 
        fs.mkdirSync('dist')

    await fs.copy(srcpath, distpath, function (err) { if (!err) console.log("Disting completed."); });
}
